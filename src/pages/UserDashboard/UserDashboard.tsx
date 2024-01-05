import Header from '../../components/Header';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <>
      <Header />
      <div className='border solid border-[#e4e5e8]'></div>
      <div className='container'>
        <div className='grid grid-cols-12 gap-[48px]'>
          <div className='col-span-3 flex flex-col justify-between border-r min-h-[80vh] border-r-[#e4e5e8] solid'>
            <div>
              <div className='pt-[24px] px-[20px]'>
                <h1 className='text-[14px] font-medium leading-5 text-[#9199a3]'>
                  CANDIDATE DASHBOARD
                </h1>
              </div>
              <div className='mt-[12px]'>
                <div className='flex items-center gap-[16px] pl-[20px] py-[16px]'>
                  <div>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3 16.5L12 21.75L21 16.5'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 12L12 17.25L21 12'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='text-[16px] font-medium text-[#9199a3]'>Overview</div>
                </div>
                <div className='flex items-center gap-[16px] pl-[20px] py-[16px]'>
                  <div>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.2507 6.75H3.75073C3.33652 6.75 3.00073 7.08579 3.00073 7.5V19.5C3.00073 19.9142 3.33652 20.25 3.75073 20.25H20.2507C20.6649 20.25 21.0007 19.9142 21.0007 19.5V7.5C21.0007 7.08579 20.6649 6.75 20.2507 6.75Z'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21.0008 11.8418C18.2654 13.4243 15.1602 14.2553 12 14.2503C8.84038 14.2553 5.73564 13.4246 3.00061 11.8426'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10.875 11.25H13.125'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='text-[16px] font-medium text-[#9199a3]'>Applied Jobs</div>
                </div>
                <div className='flex items-center gap-[16px] pl-[20px] py-[16px]'>
                  <div>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='text-[16px] font-medium text-[#9199a3]'>Favorite Jobs</div>
                </div>
                <div className='flex px-[20px] py-[10px] items-center justify-between'>
                  <div className='items-center flex justify-center gap-[16px]'>
                    <div>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.26904 10.5002C5.26657 9.61461 5.43885 8.73727 5.77603 7.91841C6.1132 7.09956 6.60864 6.35528 7.23394 5.72822C7.85925 5.10116 8.60214 4.60365 9.42006 4.26419C10.238 3.92474 11.1148 3.75 12.0004 3.75C12.8859 3.75 13.7628 3.92474 14.5807 4.26419C15.3986 4.60365 16.1415 5.10116 16.7668 5.72822C17.3921 6.35528 17.8876 7.09956 18.2247 7.91841C18.5619 8.73727 18.7342 9.61461 18.7317 10.5002V10.5002C18.7317 13.8579 19.4342 15.8063 20.0529 16.8712C20.1196 16.985 20.1551 17.1144 20.1558 17.2462C20.1565 17.3781 20.1224 17.5078 20.0569 17.6223C19.9915 17.7368 19.8971 17.832 19.7831 17.8984C19.6691 17.9647 19.5397 17.9998 19.4078 18.0002H4.59222C4.46034 17.9998 4.33087 17.9647 4.21689 17.8984C4.1029 17.832 4.00844 17.7368 3.94301 17.6223C3.87759 17.5077 3.84352 17.378 3.84425 17.2461C3.84498 17.1142 3.88048 16.9849 3.94716 16.8711C4.56622 15.8061 5.26904 13.8577 5.26904 10.5002H5.26904Z'
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18'
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M17.1968 2.24902C18.7229 3.21245 19.9531 4.57885 20.7516 6.19736'
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.24835 6.19736C4.04687 4.57885 5.27709 3.21245 6.80321 2.24902'
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[16px] font-medium text-[#9199a3]'>Job Alerts</div>
                  </div>
                  <div
                    className='py-[3px] px-[8px] rounded-[2px] bg-[#e7f0fa] w-[32px] h-[24px]
                flex items-center justify-center'
                  >
                    <div className='text-[#18191c] text-[12px] font-semibold'>9</div>
                  </div>
                </div>
                <div className='flex items-center gap-[16px] pl-[20px] py-[16px]'>
                  <div>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M11.5192 4.13952L9.7502 2.81315C9.65529 2.74175 9.54476 2.69393 9.42774 2.67363C9.31071 2.65332 9.19054 2.66112 9.07712 2.69638C8.52924 2.86794 7.99769 3.08787 7.48875 3.35355C7.3834 3.40881 7.2927 3.48834 7.22413 3.58556C7.15557 3.68278 7.11111 3.79492 7.09442 3.91271L6.7817 6.10186C6.6625 6.20753 6.5458 6.31742 6.4316 6.43156C6.31743 6.54573 6.20751 6.66246 6.10182 6.78176L6.10177 6.78179L3.91301 7.09479C3.79541 7.11142 3.68344 7.15576 3.58633 7.22415C3.48923 7.29254 3.40976 7.38303 3.35449 7.48816C3.0884 7.99689 2.86805 8.52826 2.69604 9.076C2.66062 9.18957 2.65272 9.30994 2.67298 9.42717C2.69325 9.5444 2.7411 9.65513 2.8126 9.75022L4.13943 11.5193C4.12985 11.6783 4.12504 11.8385 4.125 12C4.125 12.1615 4.12981 12.3217 4.13944 12.4808L4.13943 12.4809L2.81306 14.2499C2.74166 14.3448 2.69384 14.4553 2.67353 14.5724C2.65323 14.6894 2.66103 14.8095 2.69628 14.923C2.86785 15.4708 3.08777 16.0024 3.35346 16.5113C3.40872 16.6167 3.48824 16.7074 3.58547 16.776C3.68269 16.8445 3.79483 16.889 3.91262 16.9057L6.10177 17.2184C6.20743 17.3376 6.31733 17.4543 6.43146 17.5685C6.54563 17.6827 6.66236 17.7926 6.78166 17.8983L6.7817 17.8983L7.0947 20.0871C7.11133 20.2047 7.15566 20.3167 7.22405 20.4138C7.29245 20.5109 7.38294 20.5903 7.48807 20.6456C7.99679 20.9117 8.52816 21.132 9.0759 21.304C9.18948 21.3395 9.30984 21.3474 9.42707 21.3271C9.5443 21.3068 9.65503 21.259 9.75012 21.1875L11.5192 19.8607C11.6782 19.8702 11.8384 19.875 11.9999 19.8751C12.1614 19.8751 12.3216 19.8703 12.4807 19.8607L12.4808 19.8607L14.2498 21.187C14.3447 21.2584 14.4552 21.3063 14.5723 21.3266C14.6893 21.3469 14.8095 21.3391 14.9229 21.3038C15.4708 21.1322 16.0023 20.9123 16.5112 20.6466C16.6166 20.5914 16.7073 20.5118 16.7759 20.4146C16.8444 20.3174 16.8889 20.2053 16.9056 20.0875L17.2183 17.8983C17.3375 17.7927 17.4542 17.6828 17.5684 17.5686C17.6826 17.4545 17.7925 17.3377 17.8982 17.2184L17.8982 17.2184L20.087 16.9054C20.2046 16.8888 20.3166 16.8444 20.4137 16.776C20.5108 16.7076 20.5902 16.6172 20.6455 16.512C20.9116 16.0033 21.1319 15.4719 21.304 14.9242C21.3394 14.8106 21.3473 14.6902 21.327 14.573C21.3067 14.4558 21.2589 14.3451 21.1874 14.25L19.8606 12.4809C19.8701 12.3219 19.875 12.1616 19.875 12.0002C19.875 11.8387 19.8702 11.6785 19.8606 11.5194L19.8606 11.5193L21.1869 9.75029C21.2583 9.65538 21.3062 9.54485 21.3265 9.42783C21.3468 9.31081 21.339 9.19063 21.3037 9.07721C21.1321 8.52933 20.9122 7.99779 20.6465 7.48885C20.5913 7.38349 20.5118 7.29279 20.4145 7.22422C20.3173 7.15566 20.2052 7.1112 20.0874 7.09452L17.8982 6.78179C17.7926 6.66259 17.6827 6.54589 17.5685 6.43169C17.4544 6.31752 17.3376 6.2076 17.2183 6.10191L17.2183 6.10186L16.9053 3.9131C16.8887 3.7955 16.8443 3.68353 16.7759 3.58642C16.7076 3.48932 16.6171 3.40986 16.5119 3.35459C16.0032 3.08849 15.4718 2.86814 14.9241 2.69613C14.8105 2.66071 14.6902 2.65281 14.5729 2.67307C14.4557 2.69334 14.345 2.7412 14.2499 2.81269L12.4808 4.13952C12.3218 4.12995 12.1615 4.12514 12.0001 4.12509C11.8386 4.12509 11.6784 4.1299 11.5193 4.13953L11.5192 4.13952Z'
                        stroke='#767F8C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='text-[16px] font-medium text-[#9199a3]'>Setting</div>
                </div>
              </div>
            </div>
            <div className='mb-[24px]'>
              <div className='flex gap-[16px] items-center pl-[20px] py-[16px]'>
                <div>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.3135 8.0625L20.25 12L16.3135 15.9375'
                      stroke='#767F8C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.75 12H20.2472'
                      stroke='#767F8C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75'
                      stroke='#767F8C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='text-[16px] font-medium text-[#9199a3]'>Logout</div>
              </div>
            </div>
          </div>
          <div className='col-span-9'>
            <div className='mt-[54px]'>
              <h1 className='text-[18px] font-medium leading-7 text-[#18191c]'>
                Hello, Frankie Nguyen
              </h1>
              <div className='mt-[8px] text-[14px] leading-5 text-[#767f8c]'>
                Here is your daily activities and job alerts
              </div>
              <div className='grid grid-cols-3 gap-[24px] mt-[24px]'>
                <div className='col-span-1'>
                  <div
                    className='py-[20px] pl-[24px] pr-[20px] bg-[#e7f0fa] rounded-[8px] flex
                  items-center gap-[24px]'
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
                  items-center gap-[24px]'
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
                  items-center gap-[24px]'
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
                <div className='flex items-center justify-between bg-[#e05150] p-[32px] rounded-[8px]'>
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
                  <div className='text-[16px] font-medium leading-6 text-[#18191c]'>
                    Recently Applied
                  </div>
                  <Link
                    to='/'
                    className='flex items-center justify-center gap-[8px] text-[#767f8c]
                  text-[16px] font-medium leading-6'
                  >
                    View All
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
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M12 5L19 12L12 19'
                          stroke='#767F8C'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className='mt-[24px]'>
                  <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
                    <div className='col-span-5 text-center text-[12px] text-[#535860]'>Job</div>
                    <div className='col-span-3 text-center text-[12px] text-[#535860]'>
                      Date Applied
                    </div>
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
                              <div className='text-[14px] leading-5 text-[#5e6670]'>
                                $50k-80k/month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='text-center text-[14px] text-[#5e6670]'>
                        Jan 2, 2024 19:28
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
                    </div>
                    <div className='col-span-2'>
                      <Link
                        className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                        text-[16px] font-semibold text-[#0b65cc] leading-6'
                        to='/'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
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
                              <div className='text-[14px] leading-5 text-[#5e6670]'>
                                $50k-80k/month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='text-center text-[14px] text-[#5e6670]'>
                        Jan 2, 2024 19:28
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
                    </div>
                    <div className='col-span-2'>
                      <Link
                        className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                        text-[16px] font-semibold text-[#0b65cc] leading-6'
                        to='/'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
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
                              <div className='text-[14px] leading-5 text-[#5e6670]'>
                                $50k-80k/month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='text-center text-[14px] text-[#5e6670]'>
                        Jan 2, 2024 19:28
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
                    </div>
                    <div className='col-span-2'>
                      <Link
                        className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                        text-[16px] font-semibold text-[#0b65cc] leading-6'
                        to='/'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
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
                              <div className='text-[14px] leading-5 text-[#5e6670]'>
                                $50k-80k/month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='text-center text-[14px] text-[#5e6670]'>
                        Jan 2, 2024 19:28
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
                    </div>
                    <div className='col-span-2'>
                      <Link
                        className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                        text-[16px] font-semibold text-[#0b65cc] leading-6'
                        to='/'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
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
                              <div className='text-[14px] leading-5 text-[#5e6670]'>
                                $50k-80k/month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='text-center text-[14px] text-[#5e6670]'>
                        Jan 2, 2024 19:28
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
                    </div>
                    <div className='col-span-2'>
                      <Link
                        className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                        text-[16px] font-semibold text-[#0b65cc] leading-6'
                        to='/'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border solid border-[#e4e5e8]'></div>
      <div className='container'>
        <div className='text-[14px] leading-5 text-[#767f8c] text-center py-[24px]'>
          © 2024 Workdev - Job Board. All rights Reserved
        </div>
      </div>
    </>
  );
}
