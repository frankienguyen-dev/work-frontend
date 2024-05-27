import NavHeader from '../NavHeader';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/app.context.tsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import authApi from '../../apis/auth.api.ts';
import { isAccessTokenExpired, clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../utils/auth.ts';
import userApi from '../../apis/user.api.ts';
import { getLogoUrl } from '../../utils/utils.ts';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated, isRole } = useContext(AppContext);

  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => (isAuthenticated ? userApi.getProfile() : null)
  });

  const profile = data?.data.data;

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logoutAccount(),
    onSuccess: () => {
      setIsAuthenticated(false);
      clearAccessTokenFromLocalStorage();
      clearRoleToLocalStorage();
    }
  });

  useEffect(() => {
    if (isAccessTokenExpired() && isAuthenticated) {
      clearAccessTokenFromLocalStorage();
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, isAuthenticated]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-40 border-b solid border-b-[#e4e5e8]'>
      <NavHeader />
      <div className='bg-white h-[90px]'>
        <div className='container'>
          <div className='leading-[90px] flex justify-between items-center '>
            <Link to='/'>
              <div className='flex items-center'>
                <div className='mr-2'>
                  <svg width='50' height='50' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
            {!isAuthenticated && (
              <div className='flex gap-3 items-center justify-end'>
                <Link
                  to='/signin'
                  onClick={() => scrollTo(0, 0)}
                  className='w-[101px] border border-[#CEE0F5] flex items-center justify-center
                  rounded-[3px] text-[16px] font-semibold text-[#0A65CC] h-[48px]'
                  color='light'
                >
                  Sign In
                </Link>
                <Link
                  to='/dashboard/post-job'
                  onClick={() => scrollTo(0, 0)}
                  className='w-[140px] border bg-[#0A65CC] border-[#CEE0F5] flex items-center justify-center
                  rounded-[3px] text-[16px] font-semibold text-white h-[48px] '
                  color='blue'
                >
                  Post A Job
                </Link>
              </div>
            )}

            {isAuthenticated && (
              <div className='flex gap-3 items-center'>
                {isRole !== 'ROLE_USER' && (
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to={'/dashboard/post-job'}
                    className='w-[140px] border bg-[#0A65CC] border-[#CEE0F5] flex items-center justify-center
                  rounded-[3px] text-[16px] font-semibold text-white h-[48px] '
                    color='blue'
                  >
                    Post A Job
                  </Link>
                )}

                <div className='ml-[20px]'>
                  <div
                    className='w-[48px] h-[48px]
                      object-cover rounded-full flex items-center bg-[#f7f7f8]'
                  >
                    {profile && (
                      <Dropdown
                        className='w-[200px]'
                        arrowIcon={false}
                        inline
                        label={
                          <img
                            // src='src/assets/images/tiktok.png'
                            src={getLogoUrl(profile.logo)}
                            alt=''
                            className='w-[48px] h-[48px]
                      object-cover rounded-full flex items-center'
                          />
                        }
                      >
                        <Dropdown.Header>
                          <span className='block text-sm font-medium'>{profile.fullName}</span>
                          <span className='block truncate text-sm font-medium'>{profile.email}</span>
                        </Dropdown.Header>
                        {isRole === 'ROLE_ADMIN' ? (
                          <Dropdown.Item>
                            <Link
                              onClick={() => scrollTo(0, 0)}
                              to='/admin'
                              className='font-medium py-[10px] block w-full text-left'
                            >
                              Admin Dashboard
                            </Link>
                          </Dropdown.Item>
                        ) : (
                          <Dropdown.Item>
                            <Link
                              onClick={() => scrollTo(0, 0)}
                              to='/dashboard'
                              className='font-medium py-[10px] block w-full text-left'
                            >
                              Dashboard
                            </Link>
                          </Dropdown.Item>
                        )}

                        <Dropdown.Divider className='my-0' />
                        <Dropdown.Item>
                          <Link to='' onClick={handleLogout} className='font-medium py-[10px] block w-full text-left'>
                            Logout
                          </Link>
                        </Dropdown.Item>
                      </Dropdown>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
