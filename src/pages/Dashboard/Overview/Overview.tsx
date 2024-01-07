import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className='mt-[54px]'>
      <h1 className='text-[18px] font-medium leading-7 text-[#18191c]'>Hello, Frankie Nguyen</h1>
      <div className='mt-[8px] text-[14px] leading-5 text-[#767f8c]'>
        Here is your daily activities and job alerts
      </div>
      <div className='grid grid-cols-3 gap-[24px] mt-[24px]'>
        <div className='col-span-1'>
          <div
            className='py-[20px] pl-[24px] pr-[20px] bg-[#e7f0fa] rounded-[8px] flex
                  items-center gap-[24px] hover:cursor-pointer
                  hover:shadow-2xl hover:transition hover:ease-linear hover:duration-[0.25s]  '
          >
            <div className='min-w-[180px]'>
              <h1 className='font-semibold text-[24px] leading-8 text-[#28292c]'>589</h1>
              <div className='mt-[4px] text-[14px] text-[#414448]'>Applied Jobs</div>
            </div>
            <div className='w-[64px] h-[64px] rounded-[5px] bg-white flex items-center justify-center'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_1647_30666)'>
                    <path
                      opacity='0.2'
                      d='M16 19.0004C11.7872 19.007 7.64764 17.8995 4.00098 15.7902V26.0004C4.00098 26.1317 4.02684 26.2618 4.0771 26.3831C4.12735 26.5044 4.20101 26.6147 4.29387 26.7075C4.38673 26.8004 4.49697 26.8741 4.61829 26.9243C4.73962 26.9746 4.86965 27.0004 5.00098 27.0004H27.001C27.1323 27.0004 27.2623 26.9746 27.3837 26.9243C27.505 26.8741 27.6152 26.8004 27.7081 26.7075C27.8009 26.6147 27.8746 26.5044 27.9249 26.3831C27.9751 26.2618 28.001 26.1317 28.001 26.0004V15.7891C24.3539 17.8991 20.2135 19.0071 16 19.0004Z'
                      fill='#0A65CC'
                    />
                    <path
                      d='M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z'
                      stroke='#0A65CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9'
                      stroke='#0A65CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M28.001 15.7891C24.3538 17.8991 20.2135 19.007 16 19.0004C11.7872 19.007 7.64749 17.8995 4.00079 15.7901'
                      stroke='#0A65CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.5 15H17.5'
                      stroke='#0A65CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1647_30666'>
                      <rect width='32' height='32' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div
            className='py-[20px] pl-[24px] pr-[20px] bg-[#fff7e6] rounded-[8px] flex
                  items-center gap-[24px] hover:cursor-pointer
                  hover:shadow-2xl hover:transition hover:ease-linear hover:duration-[0.25s] '
          >
            <div className='min-w-[180px]'>
              <h1 className='font-semibold text-[24px] leading-8 text-[#28292c]'>238</h1>
              <div className='mt-[4px] text-[14px] text-[#414448]'>Favorite Jobs</div>
            </div>
            <div className='w-[64px] h-[64px] rounded-[5px] bg-white flex items-center justify-center'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24 28L15.9991 23L8 28V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H23C23.2652 5 23.5196 5.10536 23.7071 5.29289C23.8946 5.48043 24 5.73478 24 6V28Z'
                    fill='#FFF6E6'
                    stroke='#FFA500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div
            className='py-[20px] pl-[24px] pr-[20px] bg-[#e7f6ea] rounded-[8px] flex
                  items-center gap-[24px] hover:cursor-pointer
                  hover:shadow-2xl hover:transition hover:ease-linear hover:duration-[0.25s] '
          >
            <div className='min-w-[180px]'>
              <h1 className='font-semibold text-[24px] leading-8 text-[#28292c]'>574</h1>
              <div className='mt-[4px] text-[14px] text-[#414448]'>Job Alerts</div>
            </div>
            <div className='w-[64px] h-[64px] rounded-[5px] bg-white flex items-center justify-center'>
              <div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.02535 14.0002C7.02205 12.8195 7.25176 11.6497 7.70133 10.5579C8.15089 9.46608 8.81147 8.47371 9.64522 7.63763C10.479 6.80155 11.4695 6.1382 12.56 5.68559C13.6506 5.23298 14.8197 5 16.0005 5C17.1812 5 18.3503 5.23298 19.4409 5.68559C20.5314 6.1382 21.522 6.80155 22.3557 7.63763C23.1895 8.47371 23.85 9.46608 24.2996 10.5579C24.7492 11.6497 24.9789 12.8195 24.9756 14.0002C24.9756 18.4772 25.9122 21.0751 26.7372 22.495C26.8261 22.6467 26.8734 22.8192 26.8743 22.995C26.8752 23.1708 26.8298 23.3438 26.7426 23.4965C26.6553 23.6491 26.5294 23.7761 26.3774 23.8645C26.2254 23.953 26.0528 23.9998 25.877 24.0002H6.12292C5.94707 23.9998 5.77445 23.9529 5.62248 23.8645C5.4705 23.776 5.34454 23.649 5.25731 23.4963C5.17008 23.3437 5.12465 23.1707 5.12563 22.9948C5.1266 22.819 5.17393 22.6465 5.26284 22.4948C6.08825 21.0748 7.02534 18.4769 7.02534 14.0002H7.02535Z'
                    fill='#E7F6EA'
                    stroke='#0BA02C'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 24V25C12 26.0609 12.4214 27.0783 13.1716 27.8284C13.9217 28.5786 14.9391 29 16 29C17.0609 29 18.0783 28.5786 18.8284 27.8284C19.5786 27.0783 20 26.0609 20 25V24'
                    stroke='#0BA02C'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M22.9291 2.99902C24.9639 4.2836 26.6042 6.10545 27.6689 8.26347'
                    stroke='#0BA02C'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4.33118 8.26348C5.39587 6.10545 7.03617 4.2836 9.07099 2.99902'
                    stroke='#0BA02C'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[24px]'>
        <div
          className='flex items-center justify-between bg-[#e05150] p-[32px] rounded-[8px]
         hover:cursor-pointer
           hover:shadow-2xl hover:transition hover:ease-linear hover:duration-[0.25s] '
        >
          <div>
            <div className='flex items-center gap-[24px]'>
              <div>
                <img
                  src='src/assets/images/tiktok.png'
                  alt=''
                  className='w-[48px] h-[48px]
             object-cover rounded-full flex items-center'
                />
              </div>
              <div className='min-w-[384px]'>
                <h1 className='text-[18px] font-medium text-white'>
                  Your profile editing is not completed.
                </h1>
                <div className='mt-[8px] text-[14px] text-white'>
                  Complete your profile editing & build your custom Resume
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to='/profile'
              className='bg-white flex items-center py-[12px] px-[24px] justify-center
                min-w-[168px] gap-[12px] rounded-[3px] text-[16px] font-semibold text-[#e05150]'
            >
              Edit Profile
              <div>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 12H19'
                    stroke='#E05151'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 5L19 12L12 19'
                    stroke='#E05151'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-[24px] mb-[52px]'>
        <div className='pt-[8px] flex items-center justify-between'>
          <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Recently Applied</div>
          <Link
            to='/'
            className='flex items-center justify-center gap-[8px] text-[#767f8c]
           text-[16px] font-medium leading-6 hover:text-[#0b65cc] group'
          >
            View All
            <div>
              <svg
                className='group-hover:stroke-[#0b65cc]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 12H19'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 5L19 12L12 19'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className='mt-[24px]'>
        <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
          <div className='col-span-5 text-center text-[12px] text-[#535860]'>Job</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>Date Applied</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>Status</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>Action</div>
        </div>
      </div>
      <div className='mt-[8px]'>
        <div
          className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
        >
          <div className='col-span-5'>
            <div className='flex gap-[16px] items-center'>
              <img
                src='src/assets/images/tiktok.png'
                alt=''
                className='w-[56px] h-[56px] object-cover rounded-[4px]'
              />
              <div>
                <h3 className='text-[16px] text-[#18191c] font-medium leading-6'>
                  Junior Graphic Designer
                </h3>
                <div className='flex items-center gap-[16px] mt-[10px]'>
                  <div className='flex items-center gap-[6px]'>
                    <div>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.5 8.33398C17.5 14.1673 10 19.1673 10 19.1673C10 19.1673 2.5 14.1673 2.5 8.33398C2.5 6.34486 3.29018 4.43721 4.6967 3.03068C6.10322 1.62416 8.01088 0.833984 10 0.833984C11.9891 0.833984 13.8968 1.62416 15.3033 3.03068C16.7098 4.43721 17.5 6.34486 17.5 8.33398Z'
                          stroke='#C8CCD1'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z'
                          stroke='#C8CCD1'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[14px] leading-5 text-[#5e6670]'>London</div>
                  </div>
                  <div className='flex items-center gap-[6px]'>
                    <div>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_144_11271)'>
                          <path
                            d='M10 1.875V18.125'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_144_11271'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='text-[14px] leading-5 text-[#5e6670]'>$50k-80k/month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='text-center text-[14px] text-[#5e6670]'>Jan 2, 2024 19:28</div>
          </div>
          <div className='col-span-2'>
            <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
          </div>
          <div className='col-span-2'>
            <Link
              className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                 text-[16px] font-semibold text-[#0b65cc] leading-6 hover:bg-[#0b65cc]
                 hover:text-white'
              to='/'
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
