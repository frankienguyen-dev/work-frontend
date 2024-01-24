import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function TopBarSetting() {
  const location = useLocation();
  console.log('check location top bar: ', location);
  return (
    <div className='mt-[16px] flex items-center gap-[12px]'>
      <div className='group'>
        <Link
          to=''
          className={classNames(
            'flex items-center gap-[8px] py-[12px] px-[20px] border-b-[3px]\n' +
              ' group-hover:border-b-[#0b65cc] border-b-transparent transition-transform transform\n' +
              ' hover:translate-y-0 group-hover:text-[#0A65CC] text-[#767F8C]',
            {
              'border-b-[#0b65cc]': location.pathname === '/dashboard/my-account-setting',
              '': location.pathname !== '/dashboard/my-account-setting'
            }
          )}
        >
          <div>
            <svg
              className={classNames('group-hover:stroke-[#0b65cc]', {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-account-setting',
                '': location.pathname !== '/dashboard/my-account-setting'
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
                'text-[#0b65cc]': location.pathname === '/dashboard/my-account-setting',
                'text-[currentColor]': location.pathname !== '/dashboard/my-account-setting'
              }
            )}
          >
            Personal
          </div>
        </Link>
      </div>
      <div className='group'>
        <Link
          to='profile'
          className={classNames(
            'flex items-center gap-[8px] py-[12px] px-[20px] border-b-[3px]\n' +
              ' group-hover:border-b-[#0b65cc] border-b-transparent transition-transform transform\n' +
              ' hover:translate-y-0 group-hover:text-[#0A65CC] text-[#767F8C]',
            {
              'border-b-[#0b65cc]': location.pathname === '/dashboard/my-account-setting/profile',
              '': location.pathname !== '/dashboard/my-account-setting/profile'
            }
          )}
        >
          <div>
            <svg
              className={classNames('group-hover:stroke-[#0b65cc]', {
                'text-[#0b65cc]': location.pathname === '/dashboard/my-account-setting/profile',
                '': location.pathname !== '/dashboard/my-account-setting/profile'
              })}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
              />
              <path
                d='M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
              />
              <path
                d='M5.98145 18.6913C6.54639 17.5806 7.40768 16.6478 8.46997 15.9963C9.53226 15.3448 10.7541 15 12.0003 15C13.2464 15 14.4683 15.3448 15.5306 15.9963C16.5929 16.6478 17.4542 17.5806 18.0191 18.6913'
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
                'text-[#0b65cc]': location.pathname === '/dashboard/my-account-setting/profile',
                'text-[currentColor]': location.pathname !== '/dashboard/my-account-setting/profile'
              }
            )}
          >
            Profile
          </div>
        </Link>
      </div>
      <div className='group'>
        <Link
          to='account-setting'
          className={classNames(
            'flex items-center gap-[8px] py-[12px] px-[20px] border-b-[3px]\n' +
              ' group-hover:border-b-[#0b65cc] border-b-transparent transition-transform transform\n' +
              ' hover:translate-y-0 group-hover:text-[#0A65CC] text-[#767F8C]',
            {
              'border-b-[#0b65cc]':
                location.pathname === '/dashboard/my-account-setting/account-setting',
              '': location.pathname !== '/dashboard/my-account-setting/account-setting'
            }
          )}
        >
          <div>
            <svg
              className={classNames('group-hover:stroke-[#0b65cc]', {
                'text-[#0b65cc]':
                  location.pathname === '/dashboard/my-account-setting/profile/account-setting',
                '': location.pathname !== '/dashboard/my-account-setting/profile/account-setting'
              })}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.90236 8.58739C5.07111 8.23114 5.26799 7.89364 5.49299 7.56551L5.45549 5.12801C5.45549 4.90301 5.54924 4.68739 5.72736 4.53739C6.59924 3.80614 7.59299 3.21551 8.68986 2.82176C8.90549 2.74676 9.13986 2.76551 9.32736 2.88739L11.418 4.14364C11.8117 4.11551 12.2055 4.11551 12.5992 4.14364L14.6899 2.88739C14.8867 2.77489 15.1211 2.74676 15.3367 2.82176C16.4055 3.20614 17.4086 3.77801 18.2992 4.52801C18.468 4.66864 18.5711 4.89364 18.5617 5.11864L18.5242 7.55614C18.7492 7.88426 18.9461 8.22176 19.1149 8.57801L21.243 9.75926C21.4399 9.87176 21.5805 10.0593 21.618 10.2843C21.8149 11.3999 21.8242 12.5624 21.618 13.6968C21.5805 13.9218 21.4399 14.1093 21.243 14.2218L19.1149 15.403C18.9461 15.7593 18.7492 16.0968 18.5242 16.4249L18.5617 18.8624C18.5617 19.0874 18.468 19.303 18.2899 19.453C17.418 20.1843 16.4242 20.7749 15.3274 21.1686C15.1117 21.2436 14.8774 21.2249 14.6899 21.103L12.5992 19.8468C12.2055 19.8749 11.8117 19.8749 11.418 19.8468L9.32736 21.103C9.13049 21.2155 8.89611 21.2436 8.68049 21.1686C7.61174 20.7843 6.60861 20.2124 5.71799 19.4624C5.54924 19.3218 5.44611 19.0968 5.45549 18.8718L5.49299 16.4343C5.26799 16.1061 5.07111 15.7686 4.90236 15.4124L2.77424 14.2311C2.57736 14.1186 2.43674 13.9311 2.39924 13.7061C2.20236 12.5905 2.19299 11.428 2.39924 10.2936C2.43674 10.0686 2.57736 9.88114 2.77424 9.76864L4.90236 8.58739Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className={classNames(
              'text-[14px] font-semibold leading-5 group-hover:text-[currentTextColor]',
              {
                'text-[#0b65cc]':
                  location.pathname === '/dashboard/my-account-setting/profile/account-setting',
                'text-[currentColor]':
                  location.pathname !== '/dashboard/my-account-setting/profile/account-setting'
              }
            )}
          >
            Account Setting
          </div>
        </Link>
      </div>
    </div>
  );
}
