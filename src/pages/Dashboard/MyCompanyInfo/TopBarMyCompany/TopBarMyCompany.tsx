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
                d='M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
              />
              <path
                d='M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className={classNames(
              'text-[14px] font-semibold leading-5 group-hover:text-[currentTextColor]',
              {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-company',
                'text-[currentColor]': location.pathname !== '/dashboard/my-company'
              }
            )}
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
                d='M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
              />
              <path
                d='M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className={classNames(
              'text-[14px] font-semibold leading-5 group-hover:text-[currentTextColor]',
              {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-company/founding-info',
                'text-[currentColor]': location.pathname !== '/dashboard/my-company/founding-info'
              }
            )}
          >
            Founding Information
          </div>
        </Link>
      </div>
    </div>
  );
}
