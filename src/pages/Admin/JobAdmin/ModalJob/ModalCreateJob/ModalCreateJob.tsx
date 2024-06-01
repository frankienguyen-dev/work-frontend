import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import TextArea from '../../../../../components/TextArea';
import ModalExpiredToken from '../../../../../components/ModalExpiredToken';

import { useRef, useState } from 'react';

import { jobSchema, postJobSchema } from '../../../../../utils/rules.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../../utils/auth.ts';
import { useForm } from 'react-hook-form';
import TagInputComponent from '../../../../../components/TagInputComponent';
import AutoCompleteSearchInput from '../../../../../components/AutocompleteSearchInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jobApi from '../../../../../apis/job.api.ts';
import { PostJob } from '../../../../../types/job.type.ts';
import useQueryConfig from '../../../../../hooks/useQueryConfig.tsx';
import { isAxiosConflictError, isAxiosUnauthorizedError } from '../../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../../types/utils.type.ts';
import moment from 'moment';
import CalendarJobAdmin from '../../CalendarJobAdmin/CalendarJobAdmin.tsx';
import categoryApi from '../../../../../apis/category.api.ts';

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

interface Props {
  closeModal: () => void;
}

type UnauthorizedError = {
  message: string;
};

type FormError = {
  message: string;
};

type FormData = postJobSchema;
const formJobSchema = jobSchema;
export default function ModalCreateJob({ closeModal }: Props) {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState({ name: '' });
  const submitFormRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError
  } = useForm<FormData>({ resolver: yupResolver(formJobSchema) });
  const queryConfig = useQueryConfig();
  const queryConfigJobAdmin = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '10'
  };

  const queryCategoryConfig = {
    ...queryConfig,
    pageSize: '100'
  };

  const queryClient = useQueryClient();
  const createNewJobAdminMutation = useMutation({
    mutationFn: (body: PostJob) => jobApi.postJob(body)
  });

  const { data: categoryListData } = useQuery({
    queryKey: ['categoryList', queryCategoryConfig],
    queryFn: () => categoryApi.getAllCategory(queryCategoryConfig)
  });

  const onSubmit = handleSubmit((data) => {
    const createNewJobData = {
      ...data,
      startDate: moment.utc(data.startDate).local().format('YYYY-MM-DDTHH:mm:ss'),
      endDate: moment.utc(data.endDate).local().format('YYYY-MM-DDTHH:mm:ss'),
      company: {
        name: companyName.name
      },
      category: {
        id: data.category
      }
    };
    console.log('check data submit 2: ', createNewJobData);
    createNewJobAdminMutation.mutate(createNewJobData, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['listJobs', queryConfigJobAdmin]
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
        }
        if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
          clearAccessTokenFromLocalStorage();
          setIsOpenModalUnauthorized(true);
        }
      }
    });
  });

  return (
    <>
      <Flowbite theme={{ theme: custom }}>
        <Modal size='7xl' show={true} position='center' onClose={closeModal}>
          <Modal.Header>Create New Job</Modal.Header>
          <Modal.Body>
            <form noValidate onSubmit={onSubmit}>
              <div className=' mt-[24px]'>
                <div className='text-[14px] leading-5 text-[#18191c]'>Job Name</div>
                <input
                  type='text'
                  autoComplete='off'
                  placeholder='Job Name'
                  className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
                  {...register('name')}
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                  <span className='font-medium'>{errors.name?.message}</span>
                </div>
              </div>
              <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Location</div>
                  <input
                    type='text'
                    autoComplete='off'
                    placeholder='Location'
                    className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
                    {...register('location')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.location?.message}</span>
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Quantity</div>
                  <input
                    type='text'
                    autoComplete='off'
                    placeholder='Quantity'
                    className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
                    {...register('quantity')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.quantity?.message}</span>
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Job Level</div>
                  <select
                    id='level'
                    className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2 hover:cursor-pointer'
                    {...register('level')}
                    defaultValue='Select...'
                  >
                    <option disabled value='Select...'>
                      Select...
                    </option>
                    <option value='Intern'>Intern</option>
                    <option value='Fresher'>Fresher</option>
                    <option value='Junior'>Junior</option>
                    <option value='Middle'>Middle</option>
                    <option value='Senior'>Senior</option>
                  </select>
                  <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.level?.message}</span>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Salary</div>
                  <input
                    type='text'
                    autoComplete='off'
                    placeholder='Salary'
                    className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                    {...register('salary')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.salary?.message}</span>
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Start Date</div>
                  <div>
                    <CalendarJobAdmin
                      name='startDate'
                      setValue={setValue}
                      register={register}
                      errorMessage={errors.startDate?.message}
                    />
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Job Category</div>
                  <select
                    id='category'
                    className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2 hover:cursor-pointer'
                    {...register('category')}
                    defaultValue='Select...'
                  >
                    <option disabled value='Select...'>
                      Select...
                    </option>
                    {categoryListData &&
                      categoryListData.data.data.data.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                  <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.category?.message}</span>
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191c] mb-2'>End Date</div>
                  <div>
                    <CalendarJobAdmin
                      name='endDate'
                      setValue={setValue}
                      register={register}
                      errorMessage={errors.endDate?.message}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-[32px]'>
                <div className='text-[18px] leading-7 font-medium text-[#18191C]'>Advance Information</div>
                <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
                  <div className='col-span-3'>
                    <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Education</div>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='Education'
                      className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                      {...register('education')}
                    />
                    <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                      <span className='font-medium'>{errors.education?.message}</span>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Experience</div>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='Experience'
                      className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                      {...register('experience')}
                    />
                    <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                      <span className='font-medium'>{errors.experience?.message}</span>
                    </div>
                  </div>

                  <div className='col-span-3'>
                    <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Job Type</div>
                    <input
                      type='text'
                      placeholder='Job Type'
                      autoComplete='off'
                      className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                      {...register('jobType')}
                    />
                    <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                      <span className='font-medium'>{errors.jobType?.message}</span>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='text-[14px] leading-5 text-[#18191c]'>Company</div>
                    <AutoCompleteSearchInput
                      errorMessage={errors.company?.message}
                      name='company'
                      register={register}
                      setCompany={setCompanyName}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
                  <div className='col-span-12'>
                    <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Skills</div>
                    <TagInputComponent register={register} name='skills' setValue={setValue} />
                    <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                      <span className='font-medium'>{errors.skills?.message}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-[32px]'>
                <div className='text-[18px] leading-7 text-[#18191c] font-medium'>Description & Responsibility</div>
                <div className='mt-[18px] text-[14px] leading-5 text-[#18191C]'>Description</div>
                <div className='mt-[8px]'>
                  <TextArea
                    errorMessage={errors.description?.message}
                    name='description'
                    setValue={setValue}
                    register={register}
                    placeholder='Add your description'
                  />
                </div>

                <div className='mt-[18px] text-[14px] leading-5 text-[#18191C]'>Responsibility</div>
                <div className='mt-[8px]'>
                  <TextArea
                    errorMessage={errors.responsibility?.message}
                    name='responsibility'
                    setValue={setValue}
                    register={register}
                    placeholder='Add your responsibility'
                  />
                </div>
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
              Save
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
