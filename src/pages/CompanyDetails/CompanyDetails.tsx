import logoJob from '../../assets/images/insta.jpeg';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import companyApi from '../../apis/company.api.ts';
import { getLogoUrl } from '../../utils/utils.ts';
import moment from 'moment';

export default function CompanyDetails() {
  const { id } = useParams();
  const { data: companyDetailData } = useQuery({
    queryKey: ['companyDetail', id],
    queryFn: () => {
      return companyApi.getCompanyDetail(id as string);
    }
  });
  const company = companyDetailData?.data.data;

  return (
    <div className='mt-[138px] min-h-[2200px]'>
      <div className='h-[76px] bg-[#f1f2f4]'>
        <div className='container'>
          <div className='py-[24px]'>
            <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Company Details</div>
          </div>
        </div>
      </div>

      {company && (
        <div>
          <div className='relative'>
            <div className='w-[1520px] max-w-[calc(100%-48px)] mx-auto'>
              <img
                src={getLogoUrl(company.banner?.fileName)}
                alt=''
                className='w-[1520px] h-[312px] object-cover rounded-b-[8px] border-b-[2px] solid border-[#e4e5e8]
          border-l-[2px] border-r-[2px]'
              />
            </div>
            <div className='container absolute top-[232px] right-0 left-0 '>
              <div className='bg-white rounded-[12px] h-[160px] p-[40px] border solid border-[#e4e5e8]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[24px]'>
                    <div>
                      <img
                        src={getLogoUrl(company.logo?.fileName)}
                        alt=''
                        className='w-[80px] h-[80px] rounded-[6px] object-cover'
                      />
                    </div>
                    <div>
                      <div className='text-[24px] leading-8 font-medium text-[#18191c]'>
                        {company.name}
                      </div>
                      <div className='mt-[10px] text-[16px] leading-6 text-[#5e6670]'>
                        {company.companyType}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to=''
                      className='min-w-[251px] h-[56px] py-[16px] px-[32px] rounded-[4px] bg-[#0b65cc]
                  text-white text-[16px] leading-6 font-semibold flex items-center gap-[12px]'
                    >
                      View Open Position{' '}
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
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M12 5L19 12L12 19'
                            stroke='white'
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
            </div>
          </div>
          <div className='container '>
            <div className='grid grid-cols-12 gap-[60px] mt-[128px] mb-[28pxpx]'>
              <div className='col-span-7'>
                <div>
                  <div className='text-[20px] text-[#18191c] leading-8 font-medium'>
                    Description
                  </div>
                  <div className='mt-[16px] text-[16px] leading-6 text-[#5e6670]'>
                    {company.description}
                  </div>
                </div>
                <div className='mt-[36px]'>
                  <div className='text-[20px] text-[#18191c] leading-8 font-medium'>
                    Company Benefits
                  </div>
                  <div className='mt-[16px]'>
                    <div className='mt-[16px] text-[16px] leading-6 text-[#5e6670]'>
                      {company.companyBenefit}
                    </div>
                  </div>
                </div>
                <div className='mt-[36px]'>
                  <div className='text-[20px] text-[#18191c] leading-8 font-medium'>
                    Company Vision
                  </div>
                  <div className='mt-[16px] text-[16px] leading-6 text-[#5e6670]'>
                    {company.companyVision}
                  </div>
                </div>
              </div>
              <div className='col-span-5'>
                <div className='p-[32px] h-[268px] border-[2px] solid border-[#e7f0fa] rounded-[12px]'>
                  <div className='grid grid-cols-2 gap-x-[20px] gap-y-[24px]'>
                    <div className='col-span-1'>
                      <div>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M22 3V7'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 3V7'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M5 11H27'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='mt-[16px] text-[12px] leading-[18px] text-[#767f8c]'>
                        FOUNDED IN
                      </div>
                      <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191c]'>
                        {moment(company.foundedDate).format('MMM DD, YYYY')}
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7 29H25'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='mt-[16px] text-[12px] leading-[18px] text-[#767f8c]'>
                        LOCATION
                      </div>
                      <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191c]'>
                        {company.address}
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5 8V24C5 24.5304 5.21071 25.0391 5.58579 25.4142C5.96086 25.7893 6.46957 26 7 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V11C28 10.7348 27.8946 10.4804 27.7071 10.2929C27.5196 10.1054 27.2652 10 27 10H7C6.46957 10 5.96086 9.78929 5.58579 9.41421C5.21071 9.03914 5 8.53043 5 8ZM5 8C5 7.46957 5.21071 6.96086 5.58579 6.58579C5.96086 6.21071 6.46957 6 7 6H24'
                            stroke='#0A65CC'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M23 18C23 18.2761 22.7761 18.5 22.5 18.5C22.2239 18.5 22 18.2761 22 18C22 17.7239 22.2239 17.5 22.5 17.5C22.7761 17.5 23 17.7239 23 18Z'
                            fill='#18191C'
                            stroke='#0A65CC'
                            strokeWidth='2'
                          />
                        </svg>
                      </div>
                      <div className='mt-[16px] text-[12px] leading-[18px] text-[#767f8c]'>
                        TEAM SIZE
                      </div>
                      <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191c]'>
                        {company.teamSize} Employers
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_1754_47842)'>
                            <path
                              d='M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M28.0012 15.7891C24.354 17.8991 20.2137 19.007 16.0002 19.0004C11.7873 19.007 7.64768 17.8995 4.00098 15.7901'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14.5 15H17.5'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1754_47842'>
                              <rect width='32' height='32' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className='mt-[16px] text-[12px] leading-[18px] text-[#767f8c]'>
                        INDUSTRY TYPES
                      </div>
                      <div className='mt-[4px] text-[14px] font-medium leading-5 text-[#18191c]'>
                        {company.companyType}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px] p-[32px] border-[2px] solid border-[#e7f0fa] rounded-[12px] h-[354px]'>
                  <div className='grid grid-cols-1 gap-y-[24px]'>
                    <div className='col-span-1'>
                      <div className='text-[20px] leading-8 font-medium text-[#18191C]'>
                        Contact Information
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div className='flex items-center gap-[16px]'>
                        <div>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z'
                              fill='#E7F0FA'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeMiterlimit='10'
                            />
                            <path
                              d='M4 16H28'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M16 27.678C18.7614 27.678 21 22.4496 21 16.0001C21 9.55062 18.7614 4.32227 16 4.32227C13.2386 4.32227 11 9.55062 11 16.0001C11 22.4496 13.2386 27.678 16 27.678Z'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeMiterlimit='10'
                            />
                          </svg>
                        </div>
                        <div>
                          <div className='text-[12px] leading-[18px] text-[#767F8C]'>WEBSITE</div>
                          <div className='mt-[4px] text-[16px] font-medium leading-6 text-[#18191C]'>
                            {company.website}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-1 w-full h-[1px] bg-[#E4E5E8]'></div>
                    <div className='col-span-1'>
                      <div className='flex items-center gap-[16px]'>
                        <div>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clipPath='url(#clip0_1754_50123)'>
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
                                d='M19.9268 5C21.622 5.45592 23.1677 6.34928 24.409 7.59059C25.6503 8.8319 26.5437 10.3776 26.9996 12.0728'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M18.8916 8.86523C19.9087 9.13879 20.8362 9.6748 21.5809 10.4196C22.3257 11.1644 22.8618 12.0918 23.1353 13.1089'
                                stroke='#0A65CC'
                                strokeWidth='1.8'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_1754_50123'>
                                <rect width='32' height='32' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className='text-[12px] leading-[18px] text-[#767F8C]'>PHONE</div>
                          <div className='mt-[4px] text-[16px] font-medium leading-6 text-[#18191C]'>
                            +{company.phoneNumber}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-1 w-full h-[1px] bg-[#E4E5E8]'></div>
                    <div className='col-span-1'>
                      <div className='flex items-center gap-[16px]'>
                        <div>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path opacity='0.2' d='M28 7L16 18L4 7H28Z' fill='#0A65CC' />
                            <path
                              d='M28 7L16 18L4 7'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M13.8125 16L4.3125 24.7125'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M27.6875 24.7125L18.1875 16'
                              stroke='#0A65CC'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div>
                          <div className='text-[12px] leading-[18px] text-[#767F8C]'>
                            EMAIL ADDRESS
                          </div>
                          <div className='mt-[4px] text-[16px] font-medium leading-6 text-[#18191C]'>
                            {company.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container py-[100px]'>
            <div className='text-[40px] leading-[48px] font-medium text-[#191F33]'>
              Related Jobs
            </div>
            <div className='grid grid-cols-3 gap-[24px] mt-[50px]'>
              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>

              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>

              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>

              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>

              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>

              <div
                className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
              >
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={logoJob}
                      alt=''
                      className='h-[56px] w-[56px] rounded-[4px] object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-[16px] font-medium leading-6 text-[#18191c]'>Freepik</div>
                    <div className='flex items-center gap-[6px] mt-[6px]'>
                      <div>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z'
                            stroke='#939AAD'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#949aae]'>China</div>
                    </div>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='text-[20px] font-medium leading-8 text-[#191f33]'>
                    Visual Designer
                  </div>
                  <div className='mt-[8px] flex items-center gap-[8px]'>
                    <div className='text-[14px] leading-5 text-[#646a80]'>Full Time</div>
                    <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                    <div className='text-[14px] leading-5 text-[#646a80]'>$10K-$15K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
