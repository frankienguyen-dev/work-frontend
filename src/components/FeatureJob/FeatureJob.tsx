import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import jobApi from '../../apis/job.api.ts';
import { calcDayRemaining, formatSalary, getLogoUrl } from '../../utils/utils.ts';
import React, { useContext, useState } from 'react';
import ModalApplyJob from '../ModalApplyJob';
import { AppContext } from '../../contexts/app.context.tsx';
import ModalAuthentication from '../ModalAuthentication';

export default function FeatureJob() {
  const [isOpenModalApplyJob, setOpenModalApplyJob] = useState<boolean>(false);
  const [isOpenModalAuthentication, setOpenModalAuthentication] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>('');
  const [companyId, setCompanyId] = useState<string>('');
  const [jobName, setJobName] = useState<string>('');
  const { isAuthenticated } = useContext(AppContext);
  const queryParams = useQueryParams();

  const { data: jobData } = useQuery({
    queryKey: ['JobList', queryParams],
    queryFn: () => {
      return jobApi.getAllJobs(queryParams);
    }
  });

  const handleApplyJob = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    jobId: string,
    companyId: string,
    jobName: string
  ) => {
    if (isAuthenticated) {
      setOpenModalAuthentication(false);
      setLogin(true);
    } else {
      setLogin(false);
      setOpenModalAuthentication(true);
    }
    event.preventDefault();
    setOpenModalApplyJob(true);
    setJobId(jobId);
    setCompanyId(companyId);
    setJobName(jobName);
    console.log('da apply job id: ', jobId);
  };

  return (
    <div className='bg-white my-[100px]'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[40px] leading-[48px] font-medium text-[#191F33]'>Featured Job</h1>
          <Link
            className='hover:underline gap-[12px] flex items-center text-[#0A65CC] text-[16px]
            leading-6 font-semibold'
            to={'/jobs'}
            onClick={() => {
              scrollTo(0, 0);
            }}
          >
            View All{' '}
            <div>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5 12H19' stroke='#0A65CC' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path
                  d='M12 5L19 12L12 19'
                  stroke='#0A65CC'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className='mt-[50px]'>
          {jobData &&
            jobData.data.data.data.slice(0, 6).map((job) => (
              <Link
                to={`/job/${job.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={job.id}
                className='flex justify-between items-center p-[32px] border border-[#EDEFF5] cursor-pointer
             rounded-[12px] hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] h-[132px]
             group'
              >
                <div className='flex items-center gap-[20px]'>
                  <img
                    src={getLogoUrl(job.company.logo?.fileName)}
                    alt=''
                    className='w-[68px] h-[68px] object-cover rounded-[6px]'
                  />

                  <div>
                    <h3 className='text-[20px] leading-8 font-medium text-[#191F33]'>{job.name}</h3>

                    <div className='flex items-center gap-[16px] mt-[14px]'>
                      <div className='flex items-center gap-[6px]'>
                        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M19.25 9.16675C19.25 15.5834 11 21.0834 11 21.0834C11 21.0834 2.75 15.5834 2.75 9.16675C2.75 6.97871 3.61919 4.88029 5.16637 3.33312C6.71354 1.78594 8.81196 0.916748 11 0.916748C13.188 0.916748 15.2865 1.78594 16.8336 3.33312C18.3808 4.88029 19.25 6.97871 19.25 9.16675Z'
                            stroke='#C5C9D6'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M11 11.9167C12.5188 11.9167 13.75 10.6855 13.75 9.16675C13.75 7.64797 12.5188 6.41675 11 6.41675C9.48122 6.41675 8.25 7.64797 8.25 9.16675C8.25 10.6855 9.48122 11.9167 11 11.9167Z'
                            stroke='#C5C9D6'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>

                        <div className='text-[14px] leading-5 text-[#636A80]'>{job.location}</div>
                      </div>
                      <div className='flex items-center gap-[4px]'>
                        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clipPath='url(#clip0_1647_32162)'>
                            <path
                              d='M11 2.0625V19.9375'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1647_32162'>
                              <rect width='22' height='22' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <div className='text-[14px] leading-5 text-[#636A80]'>{formatSalary(job.salary)}</div>
                      </div>
                      <div className='flex items-center gap-[6px]'>
                        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clipPath='url(#clip0_1647_32168)'>
                            <path
                              d='M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M15.125 2.0625V4.8125'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M6.875 2.0625V4.8125'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M3.4375 7.5625H18.5625'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1647_32168'>
                              <rect width='22' height='22' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <div className='text-[14px] leading-5 text-[#636A80]'>
                          {calcDayRemaining(job.endDate) > 1
                            ? calcDayRemaining(job.endDate) + ' Days Remaining'
                            : calcDayRemaining(job.endDate) + ' Day Remaining'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(event) => handleApplyJob(event, job.id, job.company.id, job.name)}
                    className='group flex items-center gap-[12px] bg-[#E7F0FA] px-6 py-3 rounded-[3px]
              text-[16px] font-semibold text-[#0A65CC] group-hover:bg-[#0A65CC] group-hover:text-white'
                  >
                    Apply Now{' '}
                    <div>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
      {isOpenModalApplyJob && isLogin && (
        <ModalApplyJob
          jobId={jobId}
          jobName={jobName}
          companyId={companyId}
          closeModal={() => setOpenModalApplyJob(false)}
        />
      )}
      {!isLogin && isOpenModalAuthentication && (
        <ModalAuthentication closeModal={() => setOpenModalAuthentication(false)} />
      )}
    </div>
  );
}
