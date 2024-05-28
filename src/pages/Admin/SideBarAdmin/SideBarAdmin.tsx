import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function SideBarAdmin() {
  const location = useLocation();
  return (
    <div className='hidden 2xl:flex flex-col justify-between min-h-screen'>
      <div className='fixed lg:w-[294px] border-r min-h-screen solid border-r-[#e4e5e8] overflow-auto'>
        <div className='pt-[24px] px-[20px]'>
          <h1 className='text-[14px] font-medium leading-5 text-[#9199a3]'>ADMIN DASHBOARD</h1>
        </div>
        <div className='mt-[12px]'>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to=''
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin',
                  'border-l-transparent': location.pathname !== '/admin'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin',
                    '': location.pathname !== '/admin'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin',
                  'text-[currentColor]': location.pathname !== '/admin'
                })}
              >
                Overview
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='company'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/company',
                  'border-l-transparent': location.pathname !== '/admin/company'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/company',
                    '': location.pathname !== '/admin/company'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/company',
                  'text-[currentColor]': location.pathname !== '/admin/company'
                })}
              >
                Companies
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='user'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/user',
                  'border-l-transparent': location.pathname !== '/admin/user'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/user',
                    '': location.pathname !== '/admin/user'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/user',
                  'text-[currentColor]': location.pathname !== '/admin/user'
                })}
              >
                Users
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='job'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/job',
                  'border-l-transparent': location.pathname !== '/admin/job'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/job',
                    '': location.pathname !== '/admin/job'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/job',
                  'text-[currentColor]': location.pathname !== '/admin/job'
                })}
              >
                Jobs
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='permission'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/permission',
                  'border-l-transparent': location.pathname !== '/admin/permission'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/permission',
                    '': location.pathname !== '/admin/permission'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/permission',
                  'text-[currentColor]': location.pathname !== '/admin/permission'
                })}
              >
                Permissions
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='role'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/role',
                  'border-l-transparent': location.pathname !== '/admin/role'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/role',
                    '': location.pathname !== '/admin/role'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/role',
                  'text-[currentColor]': location.pathname !== '/admin/role'
                })}
              >
                Roles
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='subscriber'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/subscriber',
                  'border-l-transparent': location.pathname !== '/admin/subscriber'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/subscriber',
                    '': location.pathname !== '/admin/subscriber'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/subscriber',
                  'text-[currentColor]': location.pathname !== '/admin/subscriber'
                })}
              >
                Subscribers
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='category'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/category',
                  'border-l-transparent': location.pathname !== '/admin/category'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/category',
                    '': location.pathname !== '/admin/category'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/category',
                  'text-[currentColor]': location.pathname !== '/admin/category'
                })}
              >
                Categories
              </div>
            </Link>
          </div>
          <div className='group'>
            <Link
              onClick={() => scrollTo(0, 0)}
              to='resume'
              className={classNames(
                'flex items-center gap-[16px] pl-[20px] py-[16px] group-hover:bg-[#E7F0FA]\n' +
                  ' group-hover:cursor-pointer  group-hover:text-[#0b65cc] text-[#9199a3] border-l-[3px]\n' +
                  ' group-hover:border-l-[#0b65cc]  transition-transform transform\n' +
                  ' group-hover:translate-y-0',
                {
                  'border-l-[#0b65cc] bg-[#E7F0FA] ': location.pathname === '/admin/resume',
                  'border-l-transparent': location.pathname !== '/admin/resume'
                }
              )}
            >
              <div>
                <svg
                  className={classNames('group-hover:stroke-[#0b65cc]', {
                    'text-[#0b65cc]': location.pathname === '/admin/resume',
                    '': location.pathname !== '/admin/resume'
                  })}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16.5L12 21.75L21 16.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12L12 17.25L21 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div
                className={classNames('text-[16px] font-medium group-hover:text-[currentTextColor]', {
                  'text-[#0b65cc]': location.pathname === '/admin/resume',
                  'text-[currentColor]': location.pathname !== '/admin/resume'
                })}
              >
                Resumes
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
