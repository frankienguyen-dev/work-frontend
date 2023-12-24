import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from 'src/apis/auth.api';
import Input from 'src/components/Input';
import { ResponseApi } from 'src/types/utils.type';
import { Schema, schema } from 'src/utils/rules';
import { isAxiosUnauthorizedError } from 'src/utils/utils';

type FormData = Pick<Schema, 'email' | 'password'>;

const loginSchema = schema.pick(['email', 'password']);
type FormError = {
  message: string;
};

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  });

  const navigate = useNavigate();

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  });

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        navigate('/');
      },
      onError: (error) => {
        if (isAxiosUnauthorizedError<ResponseApi<FormError>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            setError('email', {
              message: formError.message
            });
            setError('password', {
              message: formError.message
            });
          }
          console.log('check error: ', error);
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
          <div className='xl:mt-[206px] md:mt-[100px] mt-[50%]'>
            <form
              className=' max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[536px]
              xl:mr-[86px]'
              noValidate
              onSubmit={onSubmit}
            >
              <div className='2xl:flex 2xl:items-center 2xl:justify-between'>
                <div>
                  <h1 className='text-3xl'>Sign in.</h1>
                  <h3 className='text-gray-600 mt-[16px]'>
                    Don&apos;t have account?{' '}
                    <Link className='text-blue-600' to={'/register'}>
                      Create account
                    </Link>{' '}
                  </h3>
                </div>
              </div>

              <Input
                className='mt-5 2xl:mt-8'
                type='email'
                placeholder='Email address'
                register={register}
                name='email'
                errorMessage={errors.email?.message}
              />

              <Input
                className='mt-5'
                type='password'
                placeholder='Password'
                register={register}
                autoComplete='on'
                name='password'
                errorMessage={errors?.password?.message}
              />

              <button
                type='submit'
                className='text-white mt-8 bg-[#0b65cc] hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-md 
                w-full md:w-[100%] h-[56px] xs:w-auto sm:w-full px-5 py-2.5 text-center 
                flex justify-center items-center mb-10 xl:mb-0'
              >
                Sign in
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
