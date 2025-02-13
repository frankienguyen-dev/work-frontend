import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import Calendar from '../../../../../components/Calendar';
import { useForm } from 'react-hook-form';
import UploadFileInput from '../../../../../components/UploadFileInput';
import TextArea from '../../../../../components/TextArea';
import { companySchema, createCompanySchema } from '../../../../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import companyApi from '../../../../../apis/company.api.ts';
import { CreateCompany } from '../../../../../types/company.type.ts';
import { useRef, useState } from 'react';
import { isAxiosConflictError, isAxiosUnauthorizedError } from '../../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../../utils/auth.ts';
import ModalExpiredToken from '../../../../../components/ModalExpiredToken';
import moment from 'moment';
import useQueryParams from '../../../../../hooks/useQueryPrams.tsx';

const custom: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden'
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start'
      }
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]'
    },
    body: {
      base: 'p-6 flex-1 overflow-auto',
      popup: 'pt-0'
    },
    header: {
      base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
      popup: 'p-2 border-b-0',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5'
      }
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t'
    }
  }
};
type FormCompanyData = createCompanySchema;
const createCompanyAdminSchema = companySchema;
type UnauthorizedError = {
  message: string;
};

interface Props {
  closeModal: () => void;
}

type FormError = {
  message: string;
};

export default function ModalCreateCompany({ closeModal }: Props) {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const [imageLogoId, setImageLogoId] = useState<string>();
  const [imageBannerId, setImageBannerId] = useState<string>();
  console.log('check image logo id: ', imageLogoId);
  console.log('check image banner id: ', imageBannerId);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormCompanyData>({
    resolver: yupResolver(createCompanyAdminSchema)
  });
  const queryClient = useQueryClient();
  const queryParams = useQueryParams();
  const createCompanyMutation = useMutation({
    mutationFn: (body: CreateCompany) => {
      return companyApi.createCompany(body);
    }
  });
  const submitFormRef = useRef<HTMLButtonElement>(null);
  const onSubmit = handleSubmit((data) => {
    const createCompanyData = {
      ...data,
      foundedDate: moment.utc(data.foundedDate).local().format('YYYY-MM-DDTHH:mm:ss'),
      logo: {
        id: imageLogoId
      },
      banner: {
        id: imageBannerId
      }
    };
    console.log('check data create: ', createCompanyData);
    createCompanyMutation.mutate(createCompanyData, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['CompanyList', queryParams]
          })
          .then();
        closeModal();
        console.log('check success: ', data);
      },
      onError: (error) => {
        if (isAxiosConflictError<ErrorResponse<FormError>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            setError('name', {
              message: formError.message
            });
          }
          console.log('check error server: ', error);
        }
        if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
          clearAccessTokenFromLocalStorage();
          setIsOpenModalUnauthorized(true);
        }
      }
    });
  });

  const handleImageLogoUpload = (imageLogoId: string) => {
    setImageLogoId(imageLogoId);
  };
  const handleImageBannerUpload = (imageBannerId: string) => {
    setImageBannerId(imageBannerId);
  };
  return (
    <>
      <Flowbite theme={{ theme: custom }}>
        <Modal size='7xl' show={true} position='center' onClose={closeModal}>
          <Modal.Header>Create New Company</Modal.Header>
          <Modal.Body>
            <form noValidate onSubmit={onSubmit}>
              <div className='grid grid-cols-12 gap-x-[24px]'>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Logo</div>
                  <UploadFileInput
                    setError={setError}
                    errorMessage={errors.logo?.message}
                    register={register}
                    name='logo'
                    setValue={setValue}
                    onImageUpload={handleImageLogoUpload}
                    // setImageLogoId={setImageLogoId}
                  />
                </div>
                <div className='col-span-8'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Banner</div>
                  <UploadFileInput
                    setError={setError}
                    errorMessage={errors.banner?.message}
                    register={register}
                    name='banner'
                    setValue={setValue}
                    onImageUpload={handleImageBannerUpload}

                    // setImageBannerId={setImageBannerId}
                  />
                </div>
              </div>
              <div className='grid grid-cols-12 gap-x-[20px] mt-[30px]'>
                <div className='col-span-3 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Company Name</div>
                  <input
                    type='text'
                    {...register('name')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.name?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Industry Type</div>
                  <input
                    type='text'
                    {...register('companyType')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.companyType?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Team Size</div>
                  <input
                    type='text'
                    {...register('teamSize')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.teamSize?.message}</span>
                  </div>
                </div>

                <div className='col-span-3 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Email</div>
                  <input
                    type='text'
                    {...register('email')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.email?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 mt-[30px] h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Location</div>
                  <input
                    type='text'
                    {...register('address')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.address?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 mt-[30px] h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Phone Number</div>
                  <input
                    type='text'
                    {...register('phoneNumber')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.phoneNumber?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 mt-[30px] h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Company Website</div>
                  <input
                    type='text'
                    {...register('website')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.website?.message}</span>
                  </div>
                </div>
                <div className='col-span-3 mt-[30px] h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Year of Establishment</div>
                  <Calendar
                    register={register}
                    errorMessage={errors.foundedDate?.message}
                    name='foundedDate'
                    setValue={setValue}
                  />
                </div>
              </div>
              <div className='mt-[50px]'>
                <div className='text-[14px] leading-5 text-[#18191C]'>About Us</div>
                <div className='mt-2'>
                  <TextArea
                    placeholder='Write down about your company here. Let the candidate know who we are...'
                    register={register}
                    name='description'
                    setValue={setValue}
                    errorMessage={errors.description?.message}
                  />
                </div>
              </div>
              <div className='mt-[20px]'>
                <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Company Vision</div>
                <TextArea
                  placeholder='Tell us about your company vision...'
                  register={register}
                  name='companyVision'
                  setValue={setValue}
                  errorMessage={errors.companyVision?.message}
                />
              </div>
              <div>
                <div className='text-[14px] leading-5 text-[#18191C] mt-[20px] mb-2'>Company Benefit</div>
                <TextArea
                  placeholder='Tell us about your company benefit...'
                  register={register}
                  name='companyBenefit'
                  setValue={setValue}
                  errorMessage={errors.companyBenefit?.message}
                />
              </div>
              <div className=' mt-[20px] hidden'>
                <button
                  className='rounded-[4px]'
                  type='submit'
                  ref={submitFormRef}
                  // onClick={() => {
                  //   closeModal();
                  // }}
                >
                  Create
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className='rounded-[4px]'
              type='submit'
              onClick={() => {
                submitFormRef.current?.click();
                // closeModal();
              }}
            >
              Create
            </Button>
            <Button className='rounded-[4px]' color='gray' onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Flowbite>
      {isOpenModalUnauthorized && (
        <ModalExpiredToken
          closeModal={() => {
            window.location.reload();
            clearRoleToLocalStorage();
            setIsOpenModalUnauthorized(false);
          }}
          heading='Credential session has expired, please sign in again.'
          textButtonYes='OK'
          icon={
            <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M16.125 9.75L10.625 15L7.875 12.375'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
        />
      )}
    </>
  );
}
