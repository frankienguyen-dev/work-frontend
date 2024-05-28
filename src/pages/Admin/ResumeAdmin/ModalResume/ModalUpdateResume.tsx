import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import ModalExpiredToken from '../../../../components/ModalExpiredToken';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../utils/auth.ts';
import { createResumeSchema, resumeSchema } from '../../../../utils/rules.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useQueryConfig from '../../../../hooks/useQueryConfig.tsx';
import resumeApi from '../../../../apis/resume.api.ts';
import { UpdateStatusResume } from '../../../../types/resumes.type.ts';
import { isAxiosUnauthorizedError } from '../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../types/utils.type.ts';

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
type UnauthorizedError = {
  message: string;
};

interface Props {
  closeModal: () => void;
  resumeId: string;
}

type FormData = createResumeSchema;
const updateStatusResumeSchema = resumeSchema;

export default function ModalUpdateResume({ closeModal, resumeId }: Props) {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const submitFormRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(updateStatusResumeSchema),
    defaultValues: {
      company: '',
      job: '',
      status: ''
    }
  });
  const queryClient = useQueryClient();
  const queryConfig = useQueryConfig();
  const queryResumeAdminConfig = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '10'
  };

  const { data } = useQuery({
    queryKey: ['resumeDataById', resumeId],
    queryFn: () => resumeApi.getResumeById(resumeId)
  });
  const resumeDataById = data?.data.data;
  const updateStatusResumeMutation = useMutation({
    mutationFn: (body: UpdateStatusResume) => resumeApi.updateResumeById(resumeId, body)
  });
  const onSubmit = handleSubmit((data) => {
    const updateResumeData = {
      status: data.status
    };
    updateStatusResumeMutation.mutate(updateResumeData, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['resumeList', queryResumeAdminConfig]
          })
          .then();
        queryClient
          .invalidateQueries({
            queryKey: ['resumeSearchList', queryResumeAdminConfig]
          })
          .then();
        console.log('check success data: ', data);
        closeModal();
      },
      onError: (error) => {
        if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
          clearAccessTokenFromLocalStorage();
          setIsOpenModalUnauthorized(true);
        }
      }
    });
  });

  useEffect(() => {
    if (resumeDataById) {
      setValue('company', resumeDataById.company.name);
      setValue('job', resumeDataById.job.name);
      setValue('status', resumeDataById.status);
    }
  }, [resumeDataById, setValue]);

  return (
    <>
      <Flowbite theme={{ theme: custom }}>
        <Modal size='7xl' show={true} position='center' onClose={closeModal}>
          <Modal.Header>Update Status Resume</Modal.Header>
          <Modal.Body>
            <form noValidate onSubmit={onSubmit}>
              <div className='grid grid-cols-12 gap-x-[20px] mt-[24px]'>
                <div className='col-span-4 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Company Name</div>
                  <input
                    disabled={true}
                    type='text'
                    autoComplete='off'
                    {...register('company')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px] bg-gray-200
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 cursor-not-allowed '
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.company?.message}</span>
                  </div>
                </div>
                <div className='col-span-4 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Job Name</div>
                  <input
                    disabled={true}
                    type='text'
                    autoComplete='off'
                    {...register('job')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px] bg-gray-200
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 cursor-not-allowed'
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.job?.message}</span>
                  </div>
                </div>
                <div className='col-span-4 h-[76px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Status</div>
                  <select
                    id='method'
                    {...register('status')}
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 hover:cursor-pointer'
                    defaultValue='Select...'
                  >
                    <option disabled value='Select...'>
                      Select...
                    </option>
                    <option value='PENDING'>PENDING</option>
                    <option value='REVIEWING'>REVIEWING</option>
                    <option value='ACCEPTED'>ACCEPTED</option>
                    <option value='REJECTED'>REJECTED</option>
                  </select>
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.status?.message}</span>
                  </div>
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
          <Modal.Footer className='mt-3'>
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
