import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='bg-[#18191C] pt-[100px]'>
        <div className='container'>
          <div className='flex mb-[80px] '>
            <div className='mr-[90px] max-w-[312px]'>
              <Link to='/'>
                <div className='flex items-center gap-2'>
                  <div>
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
                  <div className='text-[24px] leading-10 text-white font-semibold'>Workdev</div>
                </div>
              </Link>
              <div className='mt-[24px] text-[18px] text-[#5E6670] leading-7'>
                Call now: <span className='text-white'>(+84-3-8700-6700)</span>
              </div>
              <div className='mt-3 text-[14px] leading-5 text-[#767F8C]'>
                Cầu Giấy, Hà Nội, Việt Nam
              </div>
            </div>
            <div className='grid grid-cols-4 gap-10 flex-grow'>
              <div>
                <div className='text-white text-[20px] leading-8 font-medium'>Quick Links</div>
                <ul>
                  <li className='mt-[16px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/'
                    >
                      About
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/'
                    >
                      Contact
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/'
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-white text-[20px] leading-8 font-medium'>Candidate</div>
                <ul>
                  <li className='mt-[16px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Browse Jobs
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Browse Employers
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Candidate Dashboard
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Saved Jobs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-white text-[20px] leading-8 font-medium'>Employers</div>
                <ul>
                  <li className='mt-[16px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Post a Job
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Browse Candidates
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Employers Dashboard
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Applications
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-white text-[20px] leading-8 font-medium'>Support</div>
                <ul>
                  <li className='mt-[16px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Faqs
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className='mt-[10px]'>
                    <Link
                      className='text-[16px] text-[#9199A3] leading-6 hover:text-white hover:underline'
                      to='/register'
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='border-gray-100 opacity-10 solid border'></div>
        <div className='container'>
          <div className='py-6 text-center'>
            <div className='text-[14px] leading-5 text-[#767F8C]'>
              @ 2024 Workdev - Job Portal. All rights Rserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
