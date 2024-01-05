import NavHeader from '../NavHeader';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/app.context.tsx';
import { useMutation } from '@tanstack/react-query';
import { logoutAccount } from '../../apis/auth.api.ts';
import { isAccessTokenExpired, clearAccessTokenFromLocalStorage } from '../../utils/auth.ts';
import ModalRegister from '../../pages/Register/ModalRegister';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false);
    }
  });

  useEffect(() => {
    if (isAccessTokenExpired() && isAuthenticated) {
      setIsOpenModal(true);
      clearAccessTokenFromLocalStorage();
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, setIsOpenModal, isAuthenticated]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div>
      <NavHeader />
      <div className='bg-white h-[90px]'>
        <div className='container'>
          <div className='leading-[90px] flex justify-between items-center '>
            <Link to='/'>
              <div className='flex items-center'>
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
            <div className='flex gap-3 items-center'>
              {!isAuthenticated && (
                <Link
                  to='/signin'
                  className='w-[101px] border border-[#CEE0F5] flex items-center justify-center
                rounded-[3px] text-[16px] font-semibold text-[#0A65CC] h-[48px]'
                  color='light'
                >
                  Sign In
                </Link>
              )}

              <Link
                to='/'
                className='w-[140px] border bg-[#0A65CC] border-[#CEE0F5] flex items-center justify-center
                rounded-[3px] text-[16px] font-semibold text-white h-[48px] '
                color='blue'
              >
                Post A Job
              </Link>
              {isAuthenticated && (
                <div className='ml-[20px]'>
                  <Dropdown
                    className='w-[200px]'
                    arrowIcon={false}
                    inline
                    label={
                      <img
                        src='src/assets/images/tiktok.png'
                        alt=''
                        className='w-[48px] h-[48px]
                    object-cover rounded-full flex items-center'
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className='block text-sm font-medium'>Frankie Nguyen</span>
                      <span className='block truncate text-sm font-medium'>admin@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link to='/profile' className='font-medium py-[10px] block w-full text-left'>
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        to='/dashboard'
                        className='font-medium py-[10px] block w-full text-left'
                      >
                        Dashboard
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to='/profile' className='font-medium py-[10px] block w-full text-left'>
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider className='my-0' />
                    <Dropdown.Item>
                      <Link
                        to=''
                        onClick={handleLogout}
                        className='font-medium py-[10px] block w-full text-left'
                      >
                        Logout
                      </Link>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <ModalRegister
          closeModal={() => setIsOpenModal(false)}
          heading='The session has expired, please sign in again.'
          textButtonNo='Cancel'
          textButtonYes='Yes'
          redirectToYes='/signin'
          redirectToNo=''
          icon={
            <svg
              width='50'
              height='50'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'
                stroke='red'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 7.5V12.75'
                stroke='red'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 17.25C12.6213 17.25 13.125 16.7463 13.125 16.125C13.125 15.5037 12.6213 15 12 15C11.3787 15 10.875 15.5037 10.875 16.125C10.875 16.7463 11.3787 17.25 12 17.25Z'
                fill='red'
              />
            </svg>
          }
        />
      )}
    </div>
  );
}
