import { Link } from 'react-router-dom';
import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import userApi from '../../../apis/user.api.ts';
import { calcDayRemaining } from '../../../utils/utils.ts';

const custom: CustomFlowbiteTheme['dropdown'] = {
  content: 'w-[220px]',
  floating: {
    item: {
      base:
        'flex items-center justify-start py-4 px-4 text-[#5E6670] cursor-pointer ' +
        ' w-full hover:bg-gray-100 hover:text-[#0b65cc] focus:bg-gray-100 ' +
        ' focus:outline-none'
    }
  }
};
export default function MyJobs() {
  const { data: profileData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return userApi.getProfile();
    }
  });

  console.log('check: ', profileData);

  return (
    <div className='mt-[40px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <div className='text-[20px] font-medium leading-8 text-[#18191c]'>My Jobs</div>
          {profileData && (
            <div className='text-[20px] font-medium leading-8 text-[#9199a3]'>
              {/*({profileData.data.data.jobs.length})*/}3
            </div>
          )}
        </div>
        <div>
          <select
            className='border-[2px] solid border-[#e4e5e8] rounded-[4px] text-[#5e6670] text-[16px]
            leading-6 hover:cursor-pointer focus:ring-0 focus:outline-none focus:border-[#9099a3]'
            name='fill_job'
            id='fill_job'
          >
            <option value='all_jobs'>All Jobs</option>
            <option value='expired_jobs'>Expired Jobs</option>
            <option value='active_jobs'>Active Jobs</option>
          </select>
        </div>
      </div>
      <div className='mt-[24px]'>
        <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
          <div className='col-span-4 text-center text-[12px] text-[#535860]'>JOBS</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>STATUS</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>APPLICATIONS</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>ACTIONS</div>
        </div>
        <div className='mt-2'>
          {/* Item 1 */}
          {profileData &&
            profileData.data.data.jobs.map((job) => (
              <div
                key={job.id}
                className='grid grid-cols-12 p-[20px] group items-center h-[92px] hover:cursor-pointer
          hover:outline hover:outline-[#0b65cc] hover:rounded-[8px] border-b border-b-[#e4e5e8] solid'
              >
                <div className='col-span-4'>
                  <div className='text-[16px] font-medium leading-6 text-[#18191c]'>{job.name}</div>
                  <div className='relative flex gap-[10px] items-center mt-2'>
                    <div className='text-[14px] leading-5 text-[#767f8c]'>{job.jobType}</div>
                    <div className='w-[4px] h-[4px] bg-red-700 rounded-[4px]'></div>
                    <div className='text-[14px] leading-5 text-[#767f8c]'>
                      {calcDayRemaining(job.endDate) > 1
                        ? calcDayRemaining(job.endDate) + ' Days Remaining'
                        : calcDayRemaining(job.endDate) + ' Day Remaining'}
                    </div>
                  </div>
                </div>
                <div className='col-span-2 text-center'>
                  {job.active ? (
                    <div className='flex gap-[4px] items-center justify-center'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
                            stroke='#0BA02C'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M13.4375 8.125L8.85414 12.5L6.5625 10.3125'
                            stroke='#0BA02C'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[16px] font-medium leading-5 text-[#0BA02C]'>Active</div>
                    </div>
                  ) : (
                    <div className='flex gap-[4px] items-center justify-center'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
                            stroke='#E05151'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                          />
                          <path
                            d='M12.5 7.5L7.5 12.5'
                            stroke='#E05151'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M12.5 12.5L7.5 7.5'
                            stroke='#E05151'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[16px] font-medium leading-5 text-[#E05151]'>
                        Expired
                      </div>
                    </div>
                  )}
                </div>
                <div className='col-span-3 text-center'>
                  <div className='flex items-center gap-[8px] justify-center'>
                    <div>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z'
                          stroke='#5E6670'
                          strokeWidth='1.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M14.5703 5.43076C15.2408 5.24184 15.9441 5.1988 16.6326 5.30454C17.3212 5.41029 17.9791 5.66236 18.562 6.04377C19.1449 6.42519 19.6393 6.92709 20.012 7.51568C20.3846 8.10427 20.6268 8.76588 20.7221 9.45594C20.8175 10.146 20.764 10.8485 20.565 11.5161C20.366 12.1837 20.0263 12.8009 19.5687 13.3262C19.1111 13.8514 18.5463 14.2726 17.9123 14.5611C17.2782 14.8497 16.5897 14.9991 15.8931 14.9992'
                          stroke='#5E6670'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M1.5 18.5059C2.26138 17.4229 3.27215 16.539 4.44698 15.9288C5.62182 15.3186 6.92623 15.0001 8.25008 15C9.57393 14.9999 10.8784 15.3184 12.0532 15.9285C13.2281 16.5386 14.239 17.4225 15.0004 18.5054'
                          stroke='#5E6670'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054'
                          stroke='#5E6670'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='text-[14px] leading-5 text-[#5e6670]'>400 Applications</div>
                  </div>
                </div>
                <div className='col-span-3 flex justify-center'>
                  <div className='flex items-center gap-[8px]'>
                    <div>
                      <Link
                        to=''
                        className='w-[188px] h-[48px] bg-[#f1f2f4] rounded-[3px] text-[16px]
                   font-semibold leading-6 text-[#5e6670] py-[12px] px-[24px] hover:cursor-pointer
                   group-hover:bg-[#0b65cc] group-hover:text-white block transition duration-[0.25s]
                   ease-in-out'
                      >
                        View Applications
                      </Link>
                    </div>
                    <div>
                      <Dropdown
                        theme={custom}
                        content='content'
                        label=''
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div
                            className='w-[48px] h-[48px] group-hover:bg-[#f1f2f4] rounded-[5px]
                   hover:cursor-pointer transition duration-[0.25s] ease-in-out flex items-center
                   justify-center'
                          >
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z'
                                fill='#767F8C'
                                stroke='#767F8C'
                              />
                              <path
                                d='M12 6.65039C12.6213 6.65039 13.125 6.14671 13.125 5.52539C13.125 4.90407 12.6213 4.40039 12 4.40039C11.3787 4.40039 10.875 4.90407 10.875 5.52539C10.875 6.14671 11.3787 6.65039 12 6.65039Z'
                                fill='#767F8C'
                                stroke='#767F8C'
                              />
                              <path
                                d='M12 19.6094C12.6213 19.6094 13.125 19.1057 13.125 18.4844C13.125 17.8631 12.6213 17.3594 12 17.3594C11.3787 17.3594 10.875 17.8631 10.875 18.4844C10.875 19.1057 11.3787 19.6094 12 19.6094Z'
                                fill='#767F8C'
                                stroke='#767F8C'
                              />
                            </svg>
                          </div>
                        )}
                      >
                        <Dropdown.Item>
                          <Link
                            onClick={() => {
                              scrollTo(0, 0);
                            }}
                            to={`/job/${job.id}`}
                            className='flex items-center w-full gap-[8px]'
                          >
                            <div>
                              <svg
                                className='font-medium'
                                width='22'
                                height='22'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M10 3.54102C3.75 3.54102 1.25 9.99996 1.25 9.99996C1.25 9.99996 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 9.99996 18.75 9.99996C18.75 9.99996 16.25 3.54102 10 3.54102Z'
                                  stroke='currentColor'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z'
                                  stroke='currentColor'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                            <div className='text-[16px] font-medium text-[currentColor]'>
                              View Detail
                            </div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to={`/job/${job.id}`} className='flex items-center gap-[8px]'>
                            <div>
                              <svg
                                className='font-medium'
                                width='22'
                                height='22'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
                                  stroke='currentColor'
                                  strokeWidth='1.5'
                                  strokeMiterlimit='10'
                                />
                                <path
                                  d='M12.5 7.5L7.5 12.5'
                                  stroke='currentColor'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M12.5 12.5L7.5 7.5'
                                  stroke='currentColor'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                            <div className='text-[16px] font-medium text-[currentColor]'>
                              Make it Expired
                            </div>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
