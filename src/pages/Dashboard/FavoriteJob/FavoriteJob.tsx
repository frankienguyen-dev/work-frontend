import { Link } from 'react-router-dom';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useQueryConfig from '../../../hooks/useQueryConfig.tsx';
import jobApi from '../../../apis/job.api.ts';
import Loading from '../../../components/Loading/Loading.tsx';
import SvgOops from '../../../components/SvgOops';
import { calcDayRemaining, formatSalary, getLogoUrl, isAxiosUnauthorizedError } from '../../../utils/utils.ts';
import React, { useEffect, useState } from 'react';
import ModalApplyJob from '../../../components/ModalApplyJob';
import { MetaData } from '../../../types/meta.type.ts';
import Pagination from '../../../components/Pagination';
import { ErrorResponse } from '../../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../utils/auth.ts';
import ModalExpiredToken from '../../../components/ModalExpiredToken';

type UnauthorizedError = {
  message: string;
};

export default function FavoriteJob() {
  const [isOpenModalApplyJob, setOpenModalApplyJob] = useState<boolean>(false);
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>('');
  const [companyId, setCompanyId] = useState<string>('');
  const [jobName, setJobName] = useState<string>('');
  const queryConfig = useQueryConfig();
  const queryClient = useQueryClient();
  const queryFavoriteJobConfig = {
    ...queryConfig,
    sortBy: 'createdAt',
    pageSize: '6',
    sortDir: 'desc'
  };
  const { data, isLoading } = useQuery({
    queryKey: ['favoriteJobList', queryFavoriteJobConfig],
    queryFn: () => jobApi.getFavoriteJobList(queryFavoriteJobConfig),
    placeholderData: keepPreviousData,
    gcTime: 0
  });
  const favoriteJobListData = data?.data.data.data;
  const metaData: MetaData = data?.data.data.meta as MetaData;

  const unFavoriteMutation = useMutation({
    mutationFn: (jobId: string) => jobApi.favoriteJob(jobId)
  });

  const handleApplyJob = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    jobId: string,
    companyId: string,
    jobName: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenModalApplyJob(true);
    setJobId(jobId);
    setCompanyId(companyId);
    setJobName(jobName);
  };

  const handleUnFavoriteJob = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, jobId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setJobId(jobId);
  };

  useEffect(() => {
    if (jobId) {
      unFavoriteMutation.mutate(jobId, {
        onSuccess: (data) => {
          queryClient
            .invalidateQueries({
              queryKey: ['favoriteJobList', queryFavoriteJobConfig]
            })
            .then();
          console.log('check un-favorite success: ', data);
        },
        onError: (error) => {
          if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
            clearAccessTokenFromLocalStorage();
            setIsOpenModalUnauthorized(true);
          }
        }
      });
    }
  }, [jobId]);

  return (
    <div className='mt-[48px]'>
      <div className='flex gap-[8px] items-center h-[44px]'>
        <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Favorite Jobs</div>
        <div className='text-[18px] leading-7 font-medium text-[#9199a3]'>(17)</div>
      </div>
      <div className='mt-[20px] min-h-[618px]'>
        <div className='mt-2'>
          {isLoading ? (
            <div className='h-[530px] flex items-center justify-center'>
              <Loading />
            </div>
          ) : favoriteJobListData && favoriteJobListData.length === 0 ? (
            <div className='flex flex-col items-center justify-center'>
              <SvgOops />
              <div className='font-medium text-[20px] leading-7'>Oops! No Favorite Job.</div>
            </div>
          ) : (
            favoriteJobListData?.map((favoriteJob) => (
              <Link to={`/job/${favoriteJob.id}`} onClick={() => scrollTo(0, 0)} key={favoriteJob.id}>
                <div
                  className='flex items-center justify-between py-[22px] px-[20px] group hover:cursor-pointer
        hover:outline hover:outline-[#0b65cc] hover:rounded-[8px] border-b border-b-[#e4e5e8] solid h-[100px]'
                >
                  <div className='flex items-center gap-[20px]'>
                    <div>
                      <img
                        src={getLogoUrl(favoriteJob.company.logo?.fileName)}
                        alt=''
                        className='w-[56px] h-[56px] rounded-[4px] object-cover'
                      />
                    </div>
                    <div>
                      <div className='text-[16px] leading-6 font-medium text-[#18191c]'>{favoriteJob.name}</div>
                      <div className='flex items-center gap-[16px] mt-[12px]'>
                        <div className='flex items-center gap-[6px]'>
                          <div>
                            <svg
                              width='22'
                              height='22'
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M19.25 9.16699C19.25 15.5837 11 21.0837 11 21.0837C11 21.0837 2.75 15.5837 2.75 9.16699C2.75 6.97896 3.61919 4.88054 5.16637 3.33336C6.71354 1.78619 8.81196 0.916992 11 0.916992C13.188 0.916992 15.2865 1.78619 16.8336 3.33336C18.3808 4.88054 19.25 6.97896 19.25 9.16699Z'
                                stroke='#C5C9D6'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M11 11.917C12.5188 11.917 13.75 10.6858 13.75 9.16699C13.75 7.64821 12.5188 6.41699 11 6.41699C9.48122 6.41699 8.25 7.64821 8.25 9.16699C8.25 10.6858 9.48122 11.917 11 11.917Z'
                                stroke='#C5C9D6'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='text-[14px] leading-5 text-[#646a80]'>{favoriteJob.location}</div>
                        </div>
                        <div className='flex items-center gap-[4px]'>
                          <div>
                            <svg
                              width='22'
                              height='22'
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clipPath='url(#clip0_198_10233)'>
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
                                <clipPath id='clip0_198_10233'>
                                  <rect width='22' height='22' fill='white' />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className='text-[14px] leading-5 text-[#646a80]'>{formatSalary(favoriteJob.salary)}</div>
                        </div>
                        <div className='flex items-center gap-[6px]'>
                          <div>
                            <svg
                              width='22'
                              height='22'
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clipPath='url(#clip0_198_7544)'>
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
                                <clipPath id='clip0_198_7544'>
                                  <rect width='22' height='22' fill='white' />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className='text-[14px] leading-5 text-[#646a80]'>
                            {calcDayRemaining(favoriteJob.endDate) > 1
                              ? calcDayRemaining(favoriteJob.startDate) + ' Days Remaining'
                              : calcDayRemaining(favoriteJob.endDate) + ' Day Remaining'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-[8px]'>
                    <button
                      onClick={(event) => handleUnFavoriteJob(event, favoriteJob.id)}
                      className='p-[12px] group-hover:bg-[#f1f2f4] rounded-[5px] transition
            duration-[0.25s] ease-in-out'
                    >
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M17.735 21.424C17.8892 21.5203 18.0834 21.5254 18.2424 21.4373C18.4014 21.3492 18.5 21.1818 18.5 21V4.5C18.5 4.16848 18.3683 3.85054 18.1339 3.61612C17.8995 3.3817 17.5815 3.25 17.25 3.25H6.75C6.41848 3.25 6.10054 3.3817 5.86612 3.61612C5.6317 3.85054 5.5 4.16848 5.5 4.5V21C5.5 21.1818 5.59864 21.3492 5.75763 21.4373C5.91661 21.5254 6.11089 21.5203 6.26502 21.424L11.9993 17.8396L17.735 21.424Z'
                          fill='#FBBC09'
                          stroke='#FBBC09'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(event) =>
                        handleApplyJob(event, favoriteJob.id, favoriteJob.company.id, favoriteJob.name)
                      }
                      className='w-[179px] h-[48px] py-[12px] px-[24px] bg-[#e7f0fa] text-[#0b65cc] flex
            items-center justify-center font-semibold text-[16px] leading-6 rounded-[3px]
            group-hover:bg-[#0b65cc] group-hover:text-white transition duration-[0.25s] ease-in-out'
                    >
                      Apply Now
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
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className='mt-[40px]'>
        {isLoading ? (
          <Pagination queryConfig={queryFavoriteJobConfig} totalPages={1} pathname='/dashboard/favorite-job' />
        ) : (
          <Pagination
            queryConfig={queryFavoriteJobConfig}
            totalPages={Number(metaData.totalPages)}
            pathname='/dashboard/favorite-job'
          />
        )}
      </div>
      {isOpenModalApplyJob && (
        <ModalApplyJob
          closeModal={() => setOpenModalApplyJob(false)}
          jobId={jobId}
          companyId={companyId}
          jobName={jobName}
        />
      )}
      {isOpenModalUnauthorized && (
        <ModalExpiredToken
          closeModal={() => {
            window.location.reload();
            clearRoleToLocalStorage();
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
