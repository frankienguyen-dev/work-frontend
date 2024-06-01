import { Link, useNavigate } from 'react-router-dom';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { calcDayRemaining } from '../../../utils/utils.ts';
import React from 'react';
import Loading from '../../../components/Loading/Loading.tsx';
import SvgOops from '../../../components/SvgOops';
import useQueryConfig from '../../../hooks/useQueryConfig.tsx';
import jobApi from '../../../apis/job.api.ts';
import Pagination from '../../../components/Pagination';
import { MetaData } from '../../../types/meta.type.ts';

export default function MyJobs() {
  const queryConfig = useQueryConfig();
  const queryClient = useQueryClient();
  const queryMyJobConfig = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '6'
  };

  const queryApplicationConfig = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '6'
  };
  const { data: myJobListData, isLoading } = useQuery({
    queryKey: ['jobListData', queryMyJobConfig],
    queryFn: () => jobApi.getMyJobList(queryMyJobConfig),
    gcTime: 0,
    placeholderData: keepPreviousData
  });

  const metaData = myJobListData?.data.data.meta as MetaData;
  const navigate = useNavigate();
  const handleClickViewApplicationJob = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    event.preventDefault();
    navigate({
      pathname: `/dashboard/${id}/application`
    });
    queryClient
      .invalidateQueries({
        queryKey: ['applicationListData', queryApplicationConfig]
      })
      .then();
  };
  return (
    <div className='mt-[48px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <div className='text-[18px] font-medium leading-7 text-[#18191c]'>My Jobs</div>
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
      <div className='mt-[20px] min-h-[618px]'>
        <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
          <div className='col-span-4 text-center text-[12px] text-[#535860]'>JOBS</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>STATUS</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>APPLICATIONS</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>ACTIONS</div>
        </div>
        <div className='mt-2'>
          {isLoading ? (
            <div className='h-[530px] flex items-center justify-center'>
              <Loading />
            </div>
          ) : myJobListData && myJobListData.data.data.data.length === 0 ? (
            <div className='flex flex-col items-center justify-center'>
              <SvgOops />
              <div className='font-medium text-[20px] leading-7'>Oops! No Applied Job.</div>
            </div>
          ) : (
            myJobListData &&
            myJobListData.data.data.data.map((job) => (
              <Link
                to={`/job/${job.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={job.id}
                className='grid grid-cols-12 p-[20px] group items-center h-[92px] hover:cursor-pointer
          hover:outline hover:outline-[#0b65cc] hover:rounded-[8px] border-b border-b-[#e4e5e8] solid'
              >
                <div className='col-span-4'>
                  <div className='text-[16px] font-medium leading-6 text-[#18191c]'>{job.name}</div>
                  <div className='relative flex gap-[10px] items-center mt-2'>
                    <div className='text-[14px] leading-5 text-[#767f8c]'>{job.jobType}</div>
                    <div className='w-[4px] h-[4px] bg-[#5E6670] rounded-[4px]'></div>
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
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                      <div className='text-[16px] font-medium leading-5 text-[#E05151]'>Expired</div>
                    </div>
                  )}
                </div>
                <div className='col-span-3 text-center'>
                  <div className='flex items-center gap-[8px] justify-center'>
                    <div>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                      <button
                        onClick={(event) => handleClickViewApplicationJob(event, job.id)}
                        className='w-[188px] h-[48px] bg-[#f1f2f4] rounded-[3px] text-[16px]
                   font-semibold leading-6 text-[#5e6670] py-[12px] px-[24px] hover:cursor-pointer
                   group-hover:bg-[#0b65cc] group-hover:text-white block transition duration-[0.25s]
                   ease-in-out'
                      >
                        View Applications
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className='mt-[40px]'>
        {isLoading ? (
          <Pagination queryConfig={queryMyJobConfig} totalPages={1} pathname='/dashboard/my-jobs' />
        ) : (
          <Pagination
            queryConfig={queryMyJobConfig}
            totalPages={Number(metaData.totalPages)}
            pathname='/dashboard/my-jobs'
          />
        )}
      </div>
    </div>
  );
}
