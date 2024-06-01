import { Link } from 'react-router-dom';
import { changePassword, changePasswordSchema } from '../../../../utils/rules.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangePassword } from '../../../../types/auth.type.ts';
import authApi from '../../../../apis/auth.api.ts';
import { isAxiosBadRequestError, isAxiosConflictError, isAxiosUnauthorizedError } from '../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../utils/auth.ts';
import { useState } from 'react';
import ModalExpiredToken from '../../../../components/ModalExpiredToken';
import { toast } from 'react-toastify';

type FormData = changePasswordSchema;
const changePasswordForm = changePassword;

type FormError = {
  message: string;
};

type UnauthorizedError = {
  message: string;
};

export default function AccountSetting() {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue
  } = useForm<FormData>({ resolver: yupResolver(changePasswordForm) });

  const changePasswordMutation = useMutation({
    mutationFn: (body: ChangePassword) => authApi.changePassword(body)
  });

  const onSubmit = handleSubmit((data) => {
    changePasswordMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success("Success! You've changed your password successfully");
        setValue('currentPassword', '');
        setValue('newPassword', '');
        setValue('confirmPassword', '');
        console.log('check data success: ', data);
      },
      onError: (error) => {
        if (isAxiosBadRequestError<ErrorResponse<FormError>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            setError('currentPassword', {
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
    <div className='mt-8'>
      <div className='grid grid-cols-2 gap-[50px] mt-[30px]'>
        <div className='col-span-1'>
          <div className='text-[18px] leading-5 text-[#18191c] font-medium'>Change Password</div>
          <form className='mt-[18px]' noValidate onSubmit={onSubmit}>
            <div>
              <div className='text-[14px] leading-5 text-[#18191c]'>Current Password</div>
              <input
                type='password'
                placeholder='Current Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                {...register('currentPassword')}
              />
              <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.currentPassword?.message}</span>
              </div>
            </div>
            <div className='mt-8'>
              <div className='text-[14px] leading-5 text-[#18191c]'>New Password</div>
              <input
                type='password'
                placeholder='New Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
              leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                {...register('newPassword')}
              />
              <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.newPassword?.message}</span>
              </div>
            </div>
            <div className='mt-8'>
              <div className='text-[14px] leading-5 text-[#18191c]'>Confirm Password</div>
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
              leading-6 text-[#111827]   focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                {...register('confirmPassword')}
              />
              <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.confirmPassword?.message}</span>
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
        </div>
        <div className='col-span-1'>
          <div className='text-[18px] leading-5 text-[#18191c] font-medium'>Delete Your Account</div>
          <div className='mt-[18px] text-[18px] text-[#767f8c]'>
            After deleting the account, we will still retain your account. You can reactivate your account at any time
            by signing in.
          </div>
          <Link to='' className='mt-[18px] flex items-center gap-[8px]'>
            <div>
              <svg width='26' height='26' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                  stroke='#E05151'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                />
                <path d='M15 9L9 15' stroke='#E05151' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M15 15L9 9' stroke='#E05151' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>
            <div className='text-[18px] font-medium text-[#E05151]'>Delete Account</div>
          </Link>
        </div>
      </div>
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
