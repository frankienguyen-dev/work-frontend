import Calendar from '../../../../components/Calendar';
import { useForm } from 'react-hook-form';
import TextArea from '../../../../components/TextArea';
import { companySchema, createCompanySchema } from '../../../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../contexts/app.context.tsx';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import companyApi from '../../../../apis/company.api.ts';
import { UpdateCompany } from '../../../../types/company.type.ts';
import { isAxiosConflictError, isAxiosUnauthorizedError } from '../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../utils/auth.ts';
import ModalExpiredToken from '../../../../components/ModalExpiredToken';
import { useNavigate } from 'react-router-dom';

type FormData = Pick<
  createCompanySchema,
  'companyType' | 'teamSize' | 'foundedDate' | 'email' | 'address' | 'phoneNumber' | 'companyVision' | 'companyBenefit'
>;

const updateFoundingInfoSchema = companySchema.pick([
  'companyType',
  'teamSize',
  'foundedDate',
  'email',
  'address',
  'phoneNumber',
  'companyVision',
  'companyBenefit'
]);

type UnauthorizedError = {
  message: string;
};
type FormError = {
  message: string;
};
export default function FoundingInformation() {
  const { foundingInfo, setFoundingInfo, companyInfo, setCompanyInfo } = useContext(AppContext);
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(updateFoundingInfoSchema),
    defaultValues: {
      companyType: '',
      teamSize: 0,
      email: '',
      address: '',
      phoneNumber: '',
      foundedDate: new Date(),
      companyVision: '',
      companyBenefit: ''
    }
  });
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['foundingInfo'],
    queryFn: () => companyApi.getMyCompany()
  });

  const companyId = data?.data.data.id;
  const updateMyCompanyMutation = useMutation({
    mutationFn: (body: UpdateCompany) => companyApi.updateCompany(body, companyId as string)
  });

  console.log('check dta: ', data);

  const companyInfoData = data?.data.data;
  const onSubmit = handleSubmit((data) => {
    const foundingInfoData = {
      ...data,
      foundedDate: moment.utc(data.foundedDate).local().format('YYYY-MM-DDTHH:mm:ss'),
      companyType: data.companyType as string,
      teamSize: data.teamSize,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      companyVision: data.companyVision,
      companyBenefit: data.companyBenefit
    };
    const finalForm = {
      ...foundingInfoData,
      ...companyInfo,
      name: companyInfo?.name ? companyInfo.name : companyInfoData?.name ? companyInfoData.name : '',
      website: companyInfo?.website ? companyInfo.website : companyInfoData?.website ? companyInfoData.website : '',
      description: companyInfo?.description
        ? companyInfo.description
        : companyInfoData?.description
          ? companyInfoData.description
          : ''
    };
    updateMyCompanyMutation.mutate(finalForm, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['myCompanyData']
          })
          .then();
        navigate('/dashboard/my-company');
        console.log('check data success: ', data);
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

    console.log('check final form: ', finalForm);
  });

  useEffect(() => {
    if (companyInfoData) {
      setValue('companyType', companyInfoData.companyType);
      setValue('teamSize', companyInfoData.teamSize);
      setValue('foundedDate', companyInfoData?.foundedDate ? new Date(companyInfoData.foundedDate) : new Date());
      setValue('email', companyInfoData.email);
      setValue('address', companyInfoData.address);
      setValue('phoneNumber', companyInfoData.phoneNumber);
      setValue('companyVision', companyInfoData.companyVision || '');
      setValue('companyBenefit', companyInfoData.companyBenefit || '');
    }
  }, [setValue, companyInfoData]);

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <div className='grid grid-cols-12 gap-x-[20px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Industry Type</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('companyType')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.companyType?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Team Size</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('teamSize')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.teamSize?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Year of Establishment</div>
            <Calendar
              register={register}
              name='foundedDate'
              setValue={setValue}
              errorMessage={errors.foundedDate?.message}
              foundedDate={companyInfoData?.foundedDate ? new Date(companyInfoData.foundedDate) : new Date()}
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Email</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('email')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.email?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Location</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('address')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.address?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Phone Number</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('phoneNumber')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.phoneNumber?.message}</span>
            </div>
          </div>
        </div>
        <div className='mt-[20px]'>
          <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Company Vision</div>
          <TextArea
            placeholder='Tell us about your company vision...'
            register={register}
            name='companyVision'
            setValue={setValue}
            valueFromServer={companyInfoData?.companyVision}
            errorMessage={errors.companyVision?.message}
          />
        </div>
        <div>
          <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Company Benefit</div>
          <TextArea
            placeholder='Tell us about your company benefit...'
            register={register}
            name='companyBenefit'
            setValue={setValue}
            valueFromServer={companyInfoData?.companyBenefit}
            errorMessage={errors.companyBenefit?.message}
          />
        </div>
        <div className='mt-[32px] mb-[100px]'>
          <button
            className='min-w-[193px] h-[56px] rounded-[4px] bg-[#0A65CC] text-white text-[16px]
          font-semibold leading-6 flex items-center justify-center gap-[12px]'
          >
            Save & Finish
          </button>
        </div>
      </form>
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
    </div>
  );
}
