import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import ModalExpiredToken from '../ModalExpiredToken';
import { clearRoleToLocalStorage } from '../../utils/auth.ts';

const custom: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden'
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start'
      }
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]'
    },
    body: {
      base: 'p-0 flex-1 overflow-auto',
      popup: 'pt-0'
    },
    header: {
      base: 'flex items-start justify-between rounded-t p-1',
      popup: 'p-2 border-b-0',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5'
      }
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t'
    }
  }
};

interface Props {
  closeModal: () => void;
}

export default function ModalViewApplication({ closeModal }: Props) {
  return (
    <>
      <Flowbite theme={{ theme: custom }}>
        <Modal size='5xl' show={true} position='center' onClose={closeModal}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <div className='pt-[8px] px-[48px] pb-[48px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-x-[24px]'>
                  <img
                    src='https://as1.ftcdn.net/v2/jpg/05/99/32/28/1000_F_599322870_hufBazDahX69a57xhcprgfn4WSjAlXZj.webp'
                    alt=''
                    className='w-[80px] h-[80px] object-cover rounded-full'
                  />
                  <div className='flex flex-col gap-y-[8px]'>
                    <div className='text-[24px] leading-8 font-medium text-[#18191C]'>Frankie Nguyen</div>
                    <div className='text-[16px] leading-6 text-[#767F8C]'>Software Engineer</div>
                  </div>
                </div>
                <div className='flex items-center gap-x-[12px]'>
                  <div className='w-[48px] h-[48px] rounded-[5px] bg-[#E7F0FA] flex items-center justify-center'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.4135 17.8812L17.1419 20.8769C17.7463 21.2598 18.4967 20.6903 18.3173 19.9847L16.9512 14.6108C16.9127 14.4611 16.9173 14.3036 16.9643 14.1564C17.0114 14.0092 17.0991 13.8783 17.2172 13.7787L21.4573 10.2496C22.0144 9.78588 21.7269 8.86126 21.0111 8.81481L15.4738 8.45544C15.3247 8.44479 15.1816 8.39198 15.0613 8.30317C14.941 8.21437 14.8484 8.09321 14.7943 7.95382L12.7292 2.75323C12.673 2.60528 12.5732 2.4779 12.443 2.38802C12.3127 2.29814 12.1582 2.25 12 2.25C11.8418 2.25 11.6873 2.29814 11.557 2.38802C11.4268 2.4779 11.327 2.60528 11.2708 2.75323L9.20568 7.95382C9.15157 8.09321 9.05897 8.21437 8.93868 8.30317C8.81838 8.39198 8.67533 8.44479 8.52618 8.45544L2.98894 8.81481C2.27315 8.86126 1.9856 9.78588 2.54272 10.2496L6.78278 13.7787C6.90095 13.8783 6.9886 14.0092 7.03566 14.1564C7.08272 14.3036 7.08727 14.4611 7.0488 14.6108L5.78188 19.5945C5.56667 20.4412 6.46715 21.1246 7.19243 20.6651L11.5865 17.8812C11.71 17.8025 11.8535 17.7607 12 17.7607C12.1465 17.7607 12.29 17.8025 12.4135 17.8812V17.8812Z'
                        stroke='#0A65CC'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div
                    className='w-[160px] h-[48px] rounded-[3px] border-[2px] border-[#0A65CC]
                  flex items-center justify-center gap-x-[12px]'
                  >
                    <div>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M21 5.25L12 13.5L3 5.25'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M10.3628 12L3.23047 18.538'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M20.7692 18.5381L13.6367 12'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[16px] font-semibold leading-6 text-[#0A65CC]'>Send Mail</div>
                  </div>
                  <div
                    className='w-[209px] h-[48px] rounded-[3px] bg-[#0A65CC] flex items-center justify-center
                  gap-x-[12px]'
                  >
                    <div>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M12 16L16 12L12 8'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M8 12H16'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[16px] font-semibold leading-6 text-[#FFFFFF]'>Hire Candidates</div>
                  </div>
                </div>
              </div>
              <div className='mt-[40px]'>
                <div className='grid grid-cols-12 gap-x-[72px]'>
                  <div className='col-span-7'>
                    <div>BIOGRAPHY</div>
                    <div className='mt-[24px] text-[16px] leading-6 text-[#5E6670]'>
                      I have been passionate about graphic design and digital art from an early age with a keen interest
                      in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically
                      pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see
                      samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop,
                      Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds
                      of Professional and Personal websites. *Mobile Application User Experience and Interface Design -
                      for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.
                    </div>
                    <div className='h-[1px] bg-[#E4E5E8] my-[32px]'></div>
                    <div>COVER LETTER</div>
                    <div className='mt-[24px] text-[16px] leading-6 text-[#5E6670]'>
                      Dear Sir, I am writing to express my interest in the fourth grade instructional position that is
                      currently available in the Fort Wayne Community School System. I learned of the opening through a
                      notice posted on JobZone, IPFW’s job database. I am confident that my academic background and
                      curriculum development skills would be successfully utilized in this teaching position. I have
                      just completed my Bachelor of Science degree in Elementary Education and have successfully
                      completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated
                      a three-week curriculum sequence on animal species and earth resources. This collaborative unit
                      involved working with three other third grade teachers within my team, and culminated in a field
                      trip to the Indianapolis Zoo Animal Research Unit.
                    </div>
                  </div>
                  <div className='col-span-5'>
                    <div className='border-[2px] rounded-[8px] border-[#E7F0FA]'>
                      <div className='p-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[24px]'>
                        <div className='col-span-1'>
                          <div>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clipPath='url(#clip0_557_5810)'>
                                <path
                                  d='M12 8.25V6'
                                  stroke='#0A65CC'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M12 6C16.3312 4.5 12 0.75 12 0.75C12 0.75 7.5 4.5 12 6Z'
                                  stroke='#0A65CC'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M15.1875 11.8125C15.1875 12.6579 14.8517 13.4686 14.2539 14.0664C13.6561 14.6642 12.8454 15 12 15C11.1546 15 10.3439 14.6642 9.7461 14.0664C9.14832 13.4686 8.8125 12.6579 8.8125 11.8125'
                                  stroke='#0A65CC'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M8.81252 11.8125C8.8127 12.6466 8.4859 13.4476 7.90224 14.0435C7.31859 14.6395 6.5246 14.9828 5.69064 15C3.90002 15.0375 2.43752 13.5375 2.43752 11.7469V10.5C2.43628 10.2042 2.49363 9.91106 2.60626 9.63752C2.7189 9.36397 2.88458 9.11544 3.09376 8.90626C3.30294 8.69708 3.55147 8.5314 3.82502 8.41876C4.09856 8.30613 4.3917 8.24878 4.68752 8.25002H19.3125C19.6083 8.24878 19.9015 8.30613 20.175 8.41876C20.4486 8.5314 20.6971 8.69708 20.9063 8.90626C21.1155 9.11544 21.2811 9.36397 21.3938 9.63752C21.5064 9.91106 21.5638 10.2042 21.5625 10.5V11.7469C21.5625 13.5375 20.1 15.0375 18.3094 15C17.4754 14.9828 16.6814 14.6395 16.0978 14.0435C15.5141 13.4476 15.1873 12.6466 15.1875 11.8125'
                                  stroke='#0A65CC'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M20.25 14.3711V19.4992C20.25 19.6981 20.171 19.8889 20.0303 20.0295C19.8897 20.1702 19.6989 20.2492 19.5 20.2492H4.5C4.30109 20.2492 4.11032 20.1702 3.96967 20.0295C3.82902 19.8889 3.75 19.6981 3.75 19.4992V14.3711'
                                  stroke='#0A65CC'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_557_5810'>
                                  <rect width='24' height='24' fill='white' />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className='mt-[12px] text-[12px] leading-[18px] text-[#767F8C]'>AGE</div>
                          <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191C]'>23 Years Old</div>
                        </div>
                        <div className='col-span-1'>
                          <div>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeMiterlimit='10'
                              />
                              <path
                                d='M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeMiterlimit='10'
                              />
                              <path
                                d='M5.98047 18.6913C6.54542 17.5806 7.40671 16.6478 8.469 15.9963C9.53128 15.3448 10.7531 15 11.9993 15C13.2455 15 14.4673 15.3448 15.5296 15.9963C16.5919 16.6478 17.4532 17.5806 18.0181 18.6913'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='mt-[12px] text-[12px] leading-[18px] text-[#767F8C]'>GENDER</div>
                          <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191C]'>Male</div>
                        </div>
                        <div className='col-span-1'>
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
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M3 12L12 17.25L21 12'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='mt-[12px] text-[12px] leading-[18px] text-[#767F8C]'>EXPERIENCE</div>
                          <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191C]'>7 Years</div>
                        </div>
                        <div className='col-span-1'>
                          <div>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M0.75 9L12 3L23.25 9L12 15L0.75 9Z'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M17.625 22.5V12L12 9'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M20.625 10.4004V15.5117C20.6253 15.6735 20.573 15.831 20.476 15.9605C19.8444 16.8009 17.18 19.8754 12 19.8754C6.82004 19.8754 4.15558 16.8009 3.52402 15.9605C3.42699 15.831 3.37469 15.6735 3.375 15.5117V10.4004'
                                stroke='#0A65CC'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='mt-[12px] text-[12px] leading-[18px] text-[#767F8C]'>EDUCATION</div>
                          <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191C]'>Master Degree</div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-[24px] border-[2px] rounded-[8px] border-[#E7F0FA] p-[24px]'>
                      <div className='text-[16px] font-medium leading-6 text-[#18191C]'>Download My Resume</div>
                      <div className='mt-[16px] flex items-center justify-between gap-x-[72px]'>
                        <div className='flex gap-x-[12px] items-center'>
                          <div>
                            <svg
                              width='48'
                              height='48'
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16L28 4Z'
                                stroke='#E4E5E8'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M32 34H16'
                                stroke='#E4E5E8'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M32 26H16'
                                stroke='#E4E5E8'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M20 18.002H18H16'
                                stroke='#E4E5E8'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M28 4V16H40'
                                stroke='#E4E5E8'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='flex flex-col gap-y-[4px]'>
                            <div className='text-[12px] leading-[18px] text-[#767F8C]'>Frankie Nguyen</div>
                            <div className='text-[14px] font-medium leading-5 text-[#18191C]'>PDF</div>
                          </div>
                        </div>
                        <div
                          className='w-[48px] h-[48px] rounded-[5px] bg-[#E7F0FA] flex items-center 
                        justify-center'
                        >
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.71875 8.59375L10 11.8741L13.2812 8.59375'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M10 3.125V11.8727'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className='mt-[24px] border-[2px] rounded-[8px] border-[#E7F0FA] p-[24px]'>
                      <div className='text-[16px] font-medium leading-6 text-[#18191C]'>Contact Information</div>
                      <div className='mt-[24px] flex items-center gap-x-[16px]'>
                        <div>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clipPath='url(#clip0_557_5909)'>
                              <path
                                opacity='0.2'
                                d='M16 3C13.3478 3.00001 10.8043 4.05358 8.92894 5.92894C7.05358 7.8043 6.00001 10.3478 6 13C6 22 16 29 16 29C16 29 26 22 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92894C21.1957 4.05358 18.6522 3.00001 16 3ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17Z'
                                fill='#0A65CC'
                              />
                              <path
                                d='M7 29H25'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_557_5909'>
                                <rect width='32' height='32' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className='flex flex-col gap-y-[4px]'>
                          <div className='text-[12px] leading-[18px] text-[#767F8C]'>LOCATION</div>
                          <div className='text-[14px] font-medium leading-5 text-[#18191C]'>Hanoi</div>
                        </div>
                      </div>
                      <div className='h-[1px] bg-[#E4E5E8] my-[20px]'></div>
                      <div className='mt-[24px] flex items-center gap-x-[16px]'>
                        <div>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clipPath='url(#clip0_557_5921)'>
                              <path
                                opacity='0.2'
                                d='M11.5595 15.6025C12.5968 17.7232 14.3158 19.4344 16.4412 20.462C16.5967 20.5357 16.7687 20.5676 16.9403 20.5546C17.1119 20.5417 17.2771 20.4842 17.4198 20.388L20.5492 18.3012C20.6877 18.2089 20.8469 18.1526 21.0126 18.1374C21.1782 18.1221 21.3451 18.1485 21.498 18.214L27.3526 20.7231C27.5515 20.8076 27.7175 20.9545 27.8257 21.1415C27.9339 21.3286 27.9783 21.5457 27.9524 21.7602C27.7673 23.2082 27.0608 24.5392 25.9652 25.5038C24.8695 26.4684 23.4598 27.0005 22 27.0006C17.4913 27.0006 13.1673 25.2095 9.97919 22.0214C6.79107 18.8333 5 14.5093 5 10.0006C5.00008 8.54083 5.53224 7.13113 6.49685 6.03546C7.46146 4.93979 8.79237 4.23328 10.2404 4.04824C10.4549 4.02228 10.672 4.06673 10.8591 4.17491C11.0461 4.28309 11.193 4.44913 11.2775 4.64801L13.7888 10.5077C13.8537 10.6593 13.8802 10.8246 13.8658 10.9889C13.8514 11.1531 13.7967 11.3113 13.7064 11.4493L11.6268 14.6267C11.5322 14.7697 11.4762 14.9347 11.4644 15.1058C11.4526 15.2768 11.4854 15.4479 11.5595 15.6025Z'
                                fill='#0A65CC'
                              />
                              <path
                                d='M11.5595 15.6025C12.5968 17.7232 14.3158 19.4344 16.4412 20.462C16.5967 20.5357 16.7687 20.5676 16.9403 20.5546C17.1119 20.5417 17.2771 20.4842 17.4198 20.388L20.5492 18.3012C20.6877 18.2089 20.8469 18.1526 21.0126 18.1374C21.1782 18.1221 21.3451 18.1485 21.498 18.214L27.3526 20.7231C27.5515 20.8076 27.7175 20.9545 27.8257 21.1415C27.9339 21.3286 27.9783 21.5457 27.9524 21.7602C27.7673 23.2082 27.0608 24.5391 25.9652 25.5038C24.8695 26.4684 23.4598 27.0005 22 27.0006C17.4913 27.0006 13.1673 25.2095 9.97919 22.0214C6.79107 18.8333 5 14.5093 5 10.0006C5.00008 8.54083 5.53224 7.13113 6.49685 6.03546C7.46146 4.93979 8.79237 4.23328 10.2404 4.04824C10.4549 4.02228 10.672 4.06673 10.8591 4.17491C11.0461 4.28309 11.193 4.44913 11.2775 4.64801L13.7888 10.5077C13.8537 10.6593 13.8802 10.8246 13.8658 10.9889C13.8514 11.1531 13.7967 11.3113 13.7064 11.4493L11.6268 14.6267C11.5322 14.7697 11.4762 14.9347 11.4644 15.1058C11.4526 15.2768 11.4854 15.4479 11.5595 15.6025V15.6025Z'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M19.9277 5C21.623 5.45592 23.1687 6.34928 24.41 7.59059C25.6513 8.8319 26.5446 10.3776 27.0006 12.0728'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M18.8926 8.86523C19.9097 9.13879 20.8371 9.6748 21.5819 10.4196C22.3267 11.1644 22.8627 12.0918 23.1363 13.1089'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_557_5921'>
                                <rect width='32' height='32' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className='flex flex-col gap-y-[4px]'>
                            <div className='text-[12px] leading-[18px] text-[#767F8C]'>PHONE</div>
                            <div className='text-[14px] font-medium leading-5 text-[#18191C]'>123456789</div>
                          </div>
                        </div>
                      </div>
                      <div className='h-[1px] bg-[#E4E5E8] my-[20px]'></div>
                      <div className='mt-[24px] flex items-center gap-x-[16px]'>
                        <div>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M21 5.25L12 13.5L3 5.25'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M10.3628 12L3.23047 18.538'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M20.7692 18.5381L13.6367 12'
                              stroke='#0A65CC'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div>
                          <div className='flex flex-col gap-y-[4px]'>
                            <div className='text-[12px] leading-[18px] text-[#767F8C]'>EMAIL ADDRESS</div>
                            <div className='text-[14px] font-medium leading-5 text-[#18191C]'>email@example.com</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          {/*<Modal.Footer className='mt-3'>*/}
          {/*  <Button*/}
          {/*    className='rounded-[4px]'*/}
          {/*    type='submit'*/}
          {/*    onClick={() => {*/}
          {/*      submitFormRef.current?.click();*/}
          {/*      // closeModal();*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Create*/}
          {/*  </Button>*/}
          {/*  <Button className='rounded-[4px]' color='gray' onClick={closeModal}>*/}
          {/*    Cancel*/}
          {/*  </Button>*/}
          {/*</Modal.Footer>*/}
        </Modal>
      </Flowbite>
      {/*{isOpenModalUnauthorized && (*/}
      {/*  <ModalExpiredToken*/}
      {/*    closeModal={() => {*/}
      {/*      window.location.reload();*/}
      {/*      clearRoleToLocalStorage();*/}
      {/*      setIsOpenModalUnauthorized(false);*/}
      {/*    }}*/}
      {/*    heading='Credential session has expired, please sign in again.'*/}
      {/*    textButtonYes='OK'*/}
      {/*    icon={*/}
      {/*      <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
      {/*        <path*/}
      {/*          d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'*/}
      {/*          stroke='#0d7490'*/}
      {/*          strokeWidth='1.5'*/}
      {/*          strokeLinecap='round'*/}
      {/*          strokeLinejoin='round'*/}
      {/*        />*/}
      {/*        <path*/}
      {/*          d='M16.125 9.75L10.625 15L7.875 12.375'*/}
      {/*          stroke='#0d7490'*/}
      {/*          strokeWidth='1.5'*/}
      {/*          strokeLinecap='round'*/}
      {/*          strokeLinejoin='round'*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    }*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
}
