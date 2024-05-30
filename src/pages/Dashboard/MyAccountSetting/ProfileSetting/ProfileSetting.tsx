import { userSchema, UserSchema } from '../../../../utils/rules.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userApi from '../../../../apis/user.api.ts';
import { useEffect, useState } from 'react';
import { UpdateUser } from '../../../../types/user.type.ts';
import { useNavigate } from 'react-router-dom';
import { isAxiosUnauthorizedError } from '../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../utils/auth.ts';
import ModalExpiredToken from '../../../../components/ModalExpiredToken';

type UnauthorizedError = {
  message: string;
};

type FormData = Pick<UserSchema, 'email' | 'address' | 'gender' | 'age' | 'phoneNumber' | 'company'>;
const profileSchema = userSchema.pick(['email', 'address', 'gender', 'address', 'age', 'phoneNumber']);
export default function ProfileSetting() {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      email: '',
      address: '',
      gender: '',
      age: '',
      phoneNumber: '',
      company: ''
    }
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['profileDataSetting'],
    queryFn: () => userApi.getProfile()
  });

  const profileData = data?.data.data;
  const userId = profileData?.id;
  const updatePersonalMutation = useMutation({
    mutationFn: (body: UpdateUser) => userApi.updateUser(userId as string, body)
  });
  const roleName =
    profileData &&
    profileData.roles.map((role) => ({
      name: role.name
    }));
  console.log('check data: ', profileData);
  const onSubmit = handleSubmit((data) => {
    const finalForm = {
      ...data,
      age: Number(data.age),
      fullName: profileData?.fullName as string,
      title: profileData?.title as string,
      experience: profileData?.experience as string,
      education: profileData?.education as string,
      avatar: {
        id: profileData?.avatar?.id
      },
      roles: roleName as { name: string }[],
      company: {
        name: profileData?.company?.name as string
      }
    };
    updatePersonalMutation.mutate(finalForm, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['profileDataSetting']
          })
          .then();
        console.log('check success: ', data);
        navigate('/dashboard/my-account-setting');
      },
      onError: (error) => {
        if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
          clearAccessTokenFromLocalStorage();
          setIsOpenModalUnauthorized(true);
        }
      }
    });
    console.log('check data submit: ', finalForm);
  });
  useEffect(() => {
    if (profileData) {
      setValue('email', profileData.email);
      setValue('address', profileData.address);
      setValue('gender', profileData.gender);
      setValue('age', profileData.age.toString());
      setValue('phoneNumber', profileData.phoneNumber);
      setValue('company', profileData?.company?.name || '');
    }
  }, [setValue, profileData]);
  return (
    <div className='mt-8'>
      <form noValidate onSubmit={onSubmit}>
        <div className='grid grid-cols-2 gap-[18px]'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Email</div>
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
          <div className='grid-cols-1'>
            <div className='text-[14px]  leading-5 text-[#18191c] mb-2'>Address</div>
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
        </div>
        <div className='grid grid-cols-2 gap-[18px] mt-1'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Gender</div>
            <select
              id='gender'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                       hover:cursor-pointer'
              {...register('gender')}
              defaultValue='Select...'
            >
              <option value='Select...' disabled>
                Select...
              </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.gender?.message}</span>
            </div>
          </div>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Age</div>
            <select
              id='age'
              defaultValue='Select...'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                       hover:cursor-pointer'
              {...register('age')}
            >
              <option value='Select...' disabled>
                Select...
              </option>
              {Array(100)
                .fill(0)
                .map((_, index) => (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                ))}
            </select>
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.age?.message}</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[18px] mt-1'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Phone Number</div>
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
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Companies</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              {...register('company')}
            />
            <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.company?.message}</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-[34px]'>
          <button
            className='w-[175px] h-[56px] bg-[#0b65cc] rounded-[4px] text-white text-[16px]
                    leading-6 font-semibold'
            type='submit'
          >
            Save Changes
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
