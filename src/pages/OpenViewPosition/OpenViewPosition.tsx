import Loading from '../../components/Loading/Loading.tsx';
import { calcDayRemaining, formatSalary, getLogoUrl, isAxiosUnauthorizedError } from '../../utils/utils.ts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import moment from 'moment/moment';
import useQueryConfig from '../../hooks/useQueryConfig.tsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jobApi from '../../apis/job.api.ts';
import { Job, JobListConfig } from '../../types/job.type.ts';
import companyApi from '../../apis/company.api.ts';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/app.context.tsx';
import ModalAuthentication from '../../components/ModalAuthentication';
import ModalExpiredToken from '../../components/ModalExpiredToken';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../utils/auth.ts';
import ModalApplyJob from '../../components/ModalApplyJob';
import { ErrorResponse } from '../../types/utils.type.ts';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import SvgOops from '../../components/SvgOops';

type UnauthorizedError = {
  message: string;
};

export default function OpenViewPosition() {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const [isOpenModalApplyJob, setOpenModalApplyJob] = useState<boolean>(false);
  const [isOpenModalAuthentication, setOpenModalAuthentication] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>('');
  const [companyId, setCompanyId] = useState<string>('');
  const [jobName, setJobName] = useState<string>('');
  const { isAuthenticated } = useContext(AppContext);
  const { id } = useParams();
  const queryConfig = useQueryConfig();
  const queryParams = useQueryParams();
  const queryClient = useQueryClient();
  const queryJobListConfig = {
    ...queryConfig,
    pageSize: '6'
  };
  const queryRelatedJob = {
    ...queryConfig,
    pageSize: '6'
  };
  const queryFavoriteJobConfig = {
    ...queryConfig,
    pageSize: '1000'
  };
  const navigate = useNavigate();
  const { data: relatedJobData } = useQuery({
    queryKey: ['relatedJob', queryRelatedJob],
    queryFn: () => jobApi.getAllJobs(queryRelatedJob)
  });

  const shuffleArray = (arr: Job[]) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const { data: companyDetailData } = useQuery({
    queryKey: ['companyDetail', id],
    queryFn: () => {
      return companyApi.getCompanyDetail(id as string);
    }
  });
  const company = companyDetailData?.data.data;

  const { data: jobData, isLoading } = useQuery({
    queryKey: ['jobListCompany'],
    queryFn: () => jobApi.getJobListByCompanyId(id as string, queryJobListConfig)
  });

  const { data: favoriteJobListData } = useQuery({
    queryKey: ['favoriteJobListData', queryFavoriteJobConfig],
    queryFn: () => jobApi.getFavoriteJobList(queryFavoriteJobConfig),
    enabled: isAuthenticated
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
    event.stopPropagation();
    setOpenModalApplyJob(true);
    setJobId(jobId);
    setCompanyId(companyId);
    setJobName(jobName);
    console.log('da apply job id: ', jobId);
  };

  const handleFavoriteJob = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, jobId: string) => {
    event.preventDefault();
    event.stopPropagation();
    if (isAuthenticated) {
      setOpenModalAuthentication(false);
      setLogin(true);
    } else {
      setLogin(false);
      setOpenModalAuthentication(true);
    }
    setJobId(jobId);
  };

  const favoriteJobMutation = useMutation({
    mutationFn: (jobId: string) => jobApi.favoriteJob(jobId)
  });

  useEffect(() => {
    if (jobId) {
      favoriteJobMutation.mutate(jobId, {
        onSuccess: (data) => {
          queryClient
            .invalidateQueries({
              queryKey: ['JobList', queryParams]
            })
            .then();
          queryClient
            .invalidateQueries({
              queryKey: ['favoriteJobListData', queryFavoriteJobConfig]
            })
            .then();
          console.log('check favorite job success ', data);
        },
        onError: (error) => {
          if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
            clearAccessTokenFromLocalStorage();
            setIsOpenModalUnauthorized(true);
          }
        }
      });
    }
    return () => {
      setJobId('');
    };
  }, [jobId]);

  return (
    <div className='mt-[138px] min-h-[2200px]'>
      <div className='h-[76px] bg-[#f1f2f4]'>
        <div className='container'>
          <div className='py-[24px]'>
            <div className='text-[18px] leading-7 font-medium text-[#18191c]'>View Position</div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className='h-[530px] flex items-center justify-center'>
          <Loading />
        </div>
      ) : (
        company && (
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
                        <div className='text-[24px] leading-8 font-medium text-[#18191c]'>{company.name}</div>
                        <div className='mt-[10px] text-[16px] leading-6 text-[#5e6670]'>{company.companyType}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container '>
              <div className=' mt-[128px] mb-[28px] h-[848px]'>
                <div className='text-[18px] mb-[28px] leading-7 font-medium text-[#18191c]'>Open Position</div>
                {jobData && jobData.data.data.data.length === 0 ? (
                  <div className='flex flex-col items-center justify-center'>
                    <SvgOops />
                    <div className='font-medium text-[20px] leading-7'>
                      There are currently no jobs being recruited.
                    </div>
                  </div>
                ) : (
                  jobData?.data.data.data.slice(0, 6).map((job) => (
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
                              <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
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
                              <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
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
                              <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
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

                      <div className='flex items-center gap-[8px]'>
                        {favoriteJobListData &&
                        favoriteJobListData.data.data.data.some((favorite) => favorite.id === job.id) ? (
                          <button
                            onClick={(event) => handleFavoriteJob(event, job.id)}
                            className='w-[48px] h-[48px] rounded-[5px] flex items-center
                      justify-center group-hover:bg-[#f1f2f4] group-hover:text-[#18191c] text-[#767f8c]'
                          >
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z'
                                stroke='#FBBC09'
                                fill='#FBBC09'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={(event) => handleFavoriteJob(event, job.id)}
                            className='w-[48px] h-[48px] rounded-[5px] flex items-center
                      justify-center group-hover:bg-[#f1f2f4] group-hover:text-[#18191c] text-[#767f8c]'
                          >
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </button>
                        )}
                        <div>
                          <button
                            onClick={(event) => handleApplyJob(event, job.id, job.company.id, job.name)}
                            className='group flex items-center gap-[12px] bg-[#E7F0FA] px-6 py-3 rounded-[3px]
              text-[16px] font-semibold text-[#0A65CC] group-hover:bg-[#0A65CC] group-hover:text-white'
                          >
                            Apply Now{' '}
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
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
            <div className='container py-[100px]'>
              <div className='text-[40px] leading-[48px] font-medium text-[#191F33]'>Related Jobs</div>
              <div className='grid grid-cols-3 gap-[24px] mt-[50px]'>
                {relatedJobData &&
                  shuffleArray(relatedJobData.data.data.data).map((job) => (
                    <div
                      key={job.id}
                      className='col-span-1 p-[32px] h-[204px] border solid border-[#eeeff5] rounded-[12px]
            hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] hover:cursor-pointer'
                    >
                      <div className='flex items-center gap-[16px]'>
                        <div>
                          <img
                            src={getLogoUrl(job.company.logo?.fileName)}
                            alt=''
                            className='h-[56px] w-[56px] rounded-[4px] object-cover'
                          />
                        </div>
                        <div>
                          <div className='text-[16px] font-medium leading-6 text-[#18191c]'>{job.company.name}</div>
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
                            <div className='text-[14px] leading-5 text-[#949aae]'>{job.location}</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-[24px]'>
                        <div className='text-[20px] font-medium leading-8 text-[#191f33]'>{job.name}</div>
                        <div className='mt-[8px] flex items-center gap-[8px]'>
                          <div className='text-[14px] leading-5 text-[#646a80]'>{job.jobType}</div>
                          <div className='w-[4px] h-[4px] rounded-[4px] bg-[#646a80]'></div>
                          <div className='text-[14px] leading-5 text-[#646a80]'>{formatSalary(job.salary)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )
      )}
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
      {isOpenModalUnauthorized && isLogin && (
        <ModalExpiredToken
          closeModal={() => {
            // window.location.reload();
            clearRoleToLocalStorage();
            navigate('/signin');
            setIsOpenModalUnauthorized(false);
          }}
          heading='Credential session has expired, please sign in again.'
          textButtonYes='OK'
          icon={
            <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M16.125 9.75L10.625 15L7.875 12.375'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
        />
      )}
    </div>
  );
}
