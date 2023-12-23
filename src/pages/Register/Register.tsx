import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerAccount } from 'src/apis/auth.api';
import Input from 'src/components/Input';
import { ResponseApi } from 'src/types/utils.type';
import { Schema, schema } from 'src/utils/rules';
import { isAxiosConflictError } from 'src/utils/utils';

type FormData = Schema;
type FormError = {
  message: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password' | 'read_agree'>) => registerAccount(body)
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password', 'read_agree']);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => console.log(data),
      onError: (error) => {
        if (isAxiosConflictError<ResponseApi<FormError>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            setError('email', {
              message: formError.message
            });
          }
          console.log('error:', error);
        }
      }
    });
  });

  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-2 w-full h-[100vh]'>
        <div className='col-span-1 xl:ml-[100px] 2xl:ml-[210px]'>
          <Link to={'/'}>
            <div
              className=' hidden xl:flex items-center sm:ml-[200px] my-[30px] xs:ml-[50px]
              ml-[30px] md:ml-[128px] xl:ml-0'
            >
              <div className='mr-2'>
                <svg
                  width='50'
                  height='50'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_100_11637)'>
                    <path
                      d='M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8097 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8097 34.4416 11.25 33.7512 11.25Z'
                      stroke='#0A65CC'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25'
                      stroke='#0A65CC'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M35.0013 19.7358C30.4424 22.3734 25.2669 23.7583 20 23.75C14.734 23.7583 9.55941 22.3739 5.00104 19.7371'
                      stroke='#0A65CC'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.125 18.75H21.875'
                      stroke='#0A65CC'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_100_11637'>
                      <rect width='40' height='40' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='font-bold text-[20px]'>Workdev</div>
            </div>
          </Link>
          <div className='xl:mt-[138px] mt-[50px] md:mt-[100px]'>
            <form
              onSubmit={onSubmit}
              className='max-w-xs md:max-w-lg lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[536px]
              xl:mr-[86px]'
              noValidate
            >
              <div className='2xl:flex 2xl:items-center 2xl:justify-between'>
                <div className='mr-[74px]'>
                  <h1 className='text-3xl'>Create account.</h1>
                  <h3 className='text-gray-600 mt-[16px]'>
                    Already have an account?{' '}
                    <Link className='text-blue-600' to={'/signin'}>
                      Sign in
                    </Link>{' '}
                  </h3>
                </div>
                <div>
                  <div>
                    <select
                      id='role'
                      className='border outline-none border-gray-300 text-gray-900 text-md
                      rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block 2xl:w-[150px] 
                      p-3.5 h-[48px] w-full mt-5 2xl:mt-0'
                      {...register('role')}
                    >
                      <option value='ROLE_USER'>USER</option>
                      <option value='ROLE_HR'>HR</option>
                    </select>
                  </div>
                </div>
              </div>

              <Input
                className='mt-5 2xl:mt-8'
                type='text'
                placeholder='Full Name'
                name='fullName'
                errorMessage={errors.fullName?.message}
                register={register}
              />

              <Input
                className='mt-2'
                type='email'
                placeholder='Email address'
                name='email'
                errorMessage={errors.email?.message}
                register={register}
              />

              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                name='password'
                errorMessage={errors.password?.message}
                register={register}
                autoComplete='on'
              />

              <Input
                className='mt-2'
                type='password'
                placeholder='Confirm Password'
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
                register={register}
                autoComplete='on'
              />

              <Input
                className='mt-5'
                type='checkbox'
                name='read_agree'
                errorMessage={errors.read_agree?.message}
                register={register}
                isCheckbox={true}
              />
              <button
                type='submit'
                className='text-white mt-8 bg-[#0b65cc] hover:bg-blue-800 focus:ring-4
                focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-md 
                w-full md:w-[100%] h-[56px] xs:w-auto sm:w-full px-5 py-2.5 text-center 
                flex justify-center items-center mb-10 xl:mb-0'
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
        <div className='col-span-1 hidden xl:block'>
          <img
            src='./src/assets/images/register-img.jpg'
            alt='register'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
