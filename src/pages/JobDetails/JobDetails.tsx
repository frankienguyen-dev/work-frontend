import { Link, useParams } from 'react-router-dom';
import logoJob from 'src/assets/images/insta.jpeg';
import { useQuery } from '@tanstack/react-query';
import jobApi from '../../apis/job.api.ts';
import moment from 'moment';
import { formatSalary, getLogoUrl } from '../../utils/utils.ts';

export default function JobDetails() {
  const { id } = useParams();
  const { data: jobDetailData } = useQuery({
    queryKey: ['jobDetail', id],
    queryFn: () => {
      return jobApi.getJobDetail(id as string);
    }
  });

  const job = jobDetailData?.data.data;
  console.log('check job: ', job);

  return (
    <div className='mt-[138px] min-h-[1900px]'>
      <div className='h-[76px] bg-[#f1f2f4]'>
        <div className='container'>
          <div className='py-[24px]'>
            <div className='text-[18px] font-medium leading-7 text-[#18191c]'>Job Details</div>
          </div>
        </div>
      </div>
      {job && (
        <div className='container'>
          <div className='my-[32px] flex items-center justify-between'>
            <div className='flex items-center gap-[24px]'>
              <div>
                <img
                  src={getLogoUrl(job.company.logo?.fileName)}
                  alt=''
                  className='w-[96px] h-[96px] object-cover rounded-[100px]'
                />
              </div>
              <div>
                <div className='text-[24px] leading-8 font-medium text-[#18191c]'>{job.name}</div>
                <div className='flex items-center gap-[20px] mt-[13px]'>
                  <div className='flex items-center gap-[8px]'>
                    <div>
                      <svg
                        width='20'
                        height='21'
                        viewBox='0 0 20 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.3335 11.333C8.69137 11.8114 9.14796 12.2073 9.67229 12.4938C10.1966 12.7802 10.7764 12.9506 11.3724 12.9933C11.9683 13.0359 12.5665 12.95 13.1263 12.7411C13.6861 12.5323 14.1944 12.2055 14.6168 11.783L17.1168 9.28298C17.8758 8.49714 18.2958 7.44463 18.2863 6.35214C18.2768 5.25965 17.8386 4.2146 17.0661 3.44207C16.2935 2.66953 15.2485 2.23133 14.156 2.22184C13.0635 2.21234 12.011 2.63232 11.2252 3.39131L9.79183 4.81631'
                          stroke='#0066FF'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M11.6668 9.66702C11.309 9.18858 10.8524 8.7927 10.328 8.50623C9.80371 8.21977 9.22391 8.04942 8.62796 8.00674C8.03201 7.96406 7.43384 8.05004 6.87405 8.25887C6.31425 8.46769 5.8059 8.79446 5.3835 9.21702L2.8835 11.717C2.12451 12.5029 1.70453 13.5554 1.71402 14.6479C1.72352 15.7403 2.16172 16.7854 2.93426 17.5579C3.70679 18.3305 4.75184 18.7687 5.84433 18.7782C6.93681 18.7877 7.98932 18.3677 8.77517 17.6087L10.2002 16.1837'
                          stroke='#0066FF'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[16px] leading-6 text-[#474c54]'>
                      {job.company.website}
                    </div>
                  </div>
                  <div className='flex items-center gap-[6px]'>
                    <div>
                      <svg
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_1647_30382)'>
                          <path
                            d='M8.66965 12.2014C9.44762 13.7919 10.7369 15.0753 12.3309 15.846C12.4475 15.9013 12.5765 15.9252 12.7052 15.9155C12.8339 15.9058 12.9579 15.8627 13.0648 15.7905L15.4119 14.2254C15.5157 14.1562 15.6352 14.1139 15.7594 14.1025C15.8837 14.0911 16.0088 14.1109 16.1235 14.16L20.5144 16.0419C20.6636 16.1052 20.7881 16.2154 20.8693 16.3556C20.9504 16.4959 20.9838 16.6588 20.9643 16.8197C20.8255 17.9057 20.2956 18.9039 19.4739 19.6273C18.6521 20.3508 17.5948 20.7499 16.5 20.75C13.1185 20.75 9.87548 19.4067 7.48439 17.0156C5.0933 14.6245 3.75 11.3815 3.75 7.99997C3.75006 6.90513 4.14918 5.84786 4.87264 5.0261C5.5961 4.20435 6.59428 3.67448 7.68028 3.53569C7.84117 3.51622 8.00403 3.54956 8.14432 3.6307C8.28461 3.71183 8.39473 3.83636 8.4581 3.98552L10.3416 8.38032C10.3903 8.494 10.4101 8.61796 10.3994 8.74116C10.3886 8.86436 10.3475 8.98299 10.2798 9.08647L8.72011 11.4696C8.64912 11.5768 8.60716 11.7006 8.59831 11.8288C8.58947 11.9571 8.61405 12.0855 8.66965 12.2014V12.2014Z'
                            stroke='#0066FF'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1647_30382'>
                            <rect
                              width='24'
                              height='24'
                              fill='white'
                              transform='translate(0 0.5)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='text-[16px] leading-6 text-[#474c54]'>
                      {job.company.phoneNumber}
                    </div>
                  </div>
                  <div className='flex items-center gap-[6px]'>
                    <div>
                      <svg
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M21 5.75L12 14L3 5.75'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3 5.75H21V18.5C21 18.6989 20.921 18.8897 20.7803 19.0303C20.6397 19.171 20.4489 19.25 20.25 19.25H3.75C3.55109 19.25 3.36032 19.171 3.21967 19.0303C3.07902 18.8897 3 18.6989 3 18.5V5.75Z'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M10.3638 12.5L3.23145 19.038'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M20.7687 19.0381L13.6362 12.5'
                          stroke='#0A65CC'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[16px] leading-6 text-[#474c54]'>{job.company.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='flex flex-col gap-[12px]'>
              <div className='flex items-center gap-[12px]'>
                <div className='p-[16px] bg-[#e7f0fa] w-[56px] h-[56px] rounded-[4px] hover:cursor-pointer'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z'
                      stroke='#0A65CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div>
                  <Link
                    to=''
                    className='flex items-center gap-[12px] bg-[#0b65cc] min-w-[248px] rounded-[4px] h-[56px]
                justify-center text-white py-[16px] px-[64px] text-[16px] font-semibold leading-6'
                  >
                    Apply Now
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
              <div className='flex justify-end gap-[8px]'>
                <div className='text-[14px] leading-5 text-[#767f8c]'> Job expire in:</div>
                <div className='text-[14px] leading-5 text-[#e05150] font-medium'>
                  {moment(job.endDate).format('MMM DD, YYYY')}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-[50px] mb-[28px]'>
            <div className='col-span-7'>
              <div className='text-[18px] font-medium leading-7 text-[#000000]'>
                Job Description
              </div>
              <div className='mt-[16px]'>
                <div className='text-[16px] leading-6 text-[#5e6670] w-[734px] break-all'>
                  {job.description}
                </div>
              </div>
              <div className='mt-[32px] text-[18px] font-medium leading-7 text-[#000000]'>
                Responsibilities
              </div>
              <div className='mt-[16px]'>{job.responsibility}</div>
            </div>
            <div className='col-span-5'>
              <div className='p-[32px] w-full h-[438px] border-[2px] solid border-[#e7f0fa] rounded-[8px]'>
                <div className='text-[20px] leading-8 font-medium text-[#191f33]'>Job Overview</div>
                <div className='grid grid-cols-3 gap-x-[20px] gap-y-[24px] mt-[24px]'>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>JOB POSTED:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {moment(job.startDate).format('MMM DD, YYYY')}
                      </div>
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
                          d='M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M16 15.9996L20.9497 11.0498'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M13 1H19'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>
                        JOB EXPIRE IN:
                      </div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {moment(job.endDate).format('MMM DD, YYYY')}
                      </div>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>EDUCATION:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {job.education}
                      </div>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>SALARY:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {'Up to ' + formatSalary(job.salary)}
                      </div>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>LOCATION:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {job.location}
                      </div>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>JOB TYPE:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {job.jobType}
                      </div>
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
                    <div className='mt-[16px]'>
                      <div className='text-[12px] leading-[18px] text-[#767f8c]'>EXPERIENCE:</div>
                      <div className='mt-[4px] text-[14px] leading-5 font-medium text-[#18191c]'>
                        {job.experience}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-[24px] p-[32px] w-full border-[2px] solid border-[#e7f0fa] rounded-[8px]'>
                <div className='flex items-center gap-[16px]'>
                  <div>
                    <img
                      src={getLogoUrl(job.company.logo?.fileName)}
                      alt=''
                      className='w-[64px] h-[64px] object-cover rounded-[6px]'
                    />
                  </div>
                  <div>
                    <div className='text-[20px] text-[#18191c] font-medium leading-8'>
                      {job.company.name}
                    </div>
                    <div className='mt-2 text-[14px] leading-5 text-[#767f8c]'>
                      {job.company.companyType}
                    </div>
                  </div>
                </div>
                <div className='mt-[32px]'>
                  <div className='flex items-center justify-between'>
                    <div className='text-[16px] leading-6 text-[#5e6670]'>Founded in:</div>
                    <div className='text-[16px] leading-6 text-[#18191c]'>
                      {moment(job.company.foundedDate).format('MMM DD, YYYY')}
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-[16px]'>
                    <div className='text-[16px] leading-6 text-[#5e6670]'>Company size:</div>
                    <div className='text-[16px] leading-6 text-[#18191c]'>
                      {job.company.teamSize} Employers
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-[16px]'>
                    <div className='text-[16px] leading-6 text-[#5e6670]'>Phone:</div>
                    <div className='text-[16px] leading-6 text-[#18191c]'>
                      {job.company.phoneNumber}
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-[16px]'>
                    <div className='text-[16px] leading-6 text-[#5e6670]'>Email:</div>
                    <div className='text-[16px] leading-6 text-[#18191c]'>{job.company.email}</div>
                  </div>
                  <div className='flex items-center justify-between mt-[16px]'>
                    <div className='text-[16px] leading-6 text-[#5e6670]'>Website:</div>
                    <div className='text-[16px] leading-6 text-[#18191c]'>
                      {job.company.website}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-[100px]'>
            <div className='text-[40px] leading-[48px] font-medium text-[#191f33]'>
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
