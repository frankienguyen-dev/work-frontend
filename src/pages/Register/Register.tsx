import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-2 w-full h-[100vh]'>
        <div className='col-span-1 xl:ml-[100px] 2xl:ml-[180px]'>
          <Link to={'/'}>
            <div
              className=' hidden xl:flex items-center sm:ml-[200px] my-[30px] xs:ml-[50px] 
              ml-[30px] md:ml-[128px] xl:ml-0'
            >
              <div className='mr-2'>
                <svg
                  width={50}
                  height={50}
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_17_505)'>
                    <path
                      d='M33.751 11.25H6.25098C5.56062 11.25 5.00098 11.8097 5.00098 12.5V32.5C5.00098 33.1904 5.56062 33.75 6.25098 33.75H33.751C34.4413 33.75 35.001 33.1904 35.001 32.5V12.5C35.001 11.8097 34.4413 11.25 33.751 11.25Z'
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
                      d='M35.0012 19.7358C30.4423 22.3734 25.2669 23.7583 20 23.75C14.7339 23.7583 9.55935 22.3739 5.00098 19.7371'
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
                    <clipPath id='clip0_17_505'>
                      <rect width={40} height={40} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='font-bold text-[20px]'>Workdev</div>
            </div>
          </Link>
          <div className='xl:mt-[138px] mt-[50px] md:mt-[100px]'>
            <form
              className='max-w-xs md:max-w-lg lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-none 
              xl:mr-[86px]'
              noValidate
            >
              <div className='2xl:flex 2xl:items-center 2xl:justify-between'>
                <div className='mr-[74px]'>
                  <h1 className='text-3xl'>Create account.</h1>
                  <h3 className='text-gray-600 mt-[16px]'>
                    Already have an account?{' '}
                    <Link className='text-blue-600' to={'/login'}>
                      Login
                    </Link>{' '}
                  </h3>
                </div>
                <div>
                  <div>
                    <select
                      id='role'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-md 
                      rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block 2xl:w-[200px] 
                      p-3.5 h-[48px] w-full mt-5 2xl:mt-0'
                    >
                      <option selected value='Candidate'>
                        Candidate
                      </option>
                      <option value='Human Resources'>Human Resources</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='mt-5 2xl:mt-8'>
                <input
                  type='text'
                  id='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-[5px]
                   focus:ring-blue-500 focus:border-blue-500 block w-full h-[48px] p-3.5 '
                  placeholder='Full Name'
                />
              </div>
              <div className='mt-5'>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-[5px]
                   focus:ring-blue-500 focus:border-blue-500 block h-[48px] w-full p-3.5 '
                  placeholder='Email address'
                />
              </div>

              <div className='mt-5'>
                <input
                  type='password'
                  id='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-[5px]
                   focus:ring-blue-500 focus:border-blue-500 block h-[48px] w-full p-3.5 '
                  placeholder='Password'
                />
              </div>
              <div className='mt-5'>
                <input
                  type='password'
                  id='confirm_password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-[5px]
                   focus:ring-blue-500 focus:border-blue-500 block h-[48px] w-full p-3.5 '
                  placeholder='Confirm Password'
                />
              </div>
              <div className='flex items-start mt-5'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3
                     focus:ring-blue-300 '
                  />
                </div>
                <span className='text-gray-500 ml-[10px]'>
                  I have read and agree with your{' '}
                  <Link className='text-blue-500' to={'/'}>
                    Terms of Services
                  </Link>
                </span>
              </div>
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
