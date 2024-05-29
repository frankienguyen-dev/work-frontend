import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function TopBarMyCompany() {
  return (
    <div className='flex items-center gap-[8px]'>
      <div className='group'>
        <Link
          to=''
          className={classNames(
            'flex items-center gap-[8px] py-[12px] px-[20px] border-b-[3px]\n' +
              ' group-hover:border-b-[#0b65cc]  transition-transform transform\n' +
              ' hover:translate-y-0 group-hover:text-[#0A65CC] text-[#767F8C]',
            {
              'border-b-[#0b65cc]': location.pathname === '/dashboard/my-company',
              'border-b-transparent': location.pathname !== '/dashboard/my-company'
            }
          )}
        >
          <div>
            <svg
              className={classNames('group-hover:stroke-[#0b65cc]', {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-company',
                '': location.pathname !== '/dashboard/my-company'
              })}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 20.25V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V20.25L18 18.75L15 20.25L12 18.75L9 20.25L6 18.75L3 20.25Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.5 10.5H18'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.5 13.5H18'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.5 9H6V15H10.5V9Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className={classNames('text-[14px] font-semibold leading-5 group-hover:text-[currentTextColor]', {
              'text-[#0b65cc]': location.pathname === '/dashboard/my-company',
              'text-[currentColor]': location.pathname !== '/dashboard/my-company'
            })}
          >
            Company Information
          </div>
        </Link>
      </div>
      <div className='group'>
        <Link
          to='founding-info'
          className={classNames(
            'flex items-center gap-[8px] py-[12px] px-[20px] border-b-[3px]\n' +
              ' group-hover:border-b-[#0b65cc]  transition-transform transform\n' +
              ' hover:translate-y-0 group-hover:text-[#0A65CC] text-[#767F8C]',
            {
              'border-b-[#0b65cc]': location.pathname === '/dashboard/my-company/founding-info',
              'border-b-transparent': location.pathname !== '/dashboard/my-company/founding-info'
            }
          )}
        >
          <div>
            <svg
              className={classNames('group-hover:stroke-[#0b65cc]', {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-company/founding-info',
                '': location.pathname !== '/dashboard/my-company/founding-info'
              })}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 18.75V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V18.75'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.5 18.75H22.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M11.25 18.75V15.75H18V18.75'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6 18.75V7.5H18V12.75'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className={classNames('text-[14px] font-semibold leading-5 group-hover:text-[currentTextColor]', {
              'text-[#0b65cc]': location.pathname === '/dashboard/my-company/founding-info',
              'text-[currentColor]': location.pathname !== '/dashboard/my-company/founding-info'
            })}
          >
            Founding Information
          </div>
        </Link>
      </div>
    </div>
  );
}
