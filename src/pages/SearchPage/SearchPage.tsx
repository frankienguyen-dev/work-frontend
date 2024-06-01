import Pagination from '../../components/Pagination';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jobApi from '../../apis/job.api.ts';
import { calcDayRemaining, formatSalary, getLogoUrl, isAxiosUnauthorizedError } from '../../utils/utils.ts';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import useQueryConfig from '../../hooks/useQueryConfig.tsx';
import { useForm } from 'react-hook-form';
import { schema, Schema } from '../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { omit } from 'lodash';
import { JobListConfig } from '../../types/job.type.ts';
import { sortByJob } from '../../constants/sort.ts';
import React, { useContext, useEffect, useState } from 'react';
import { ErrorResponse } from '../../types/utils.type.ts';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../utils/auth.ts';
import ModalExpiredToken from '../../components/ModalExpiredToken';
import { AppContext } from '../../contexts/app.context.tsx';

type FormData = Pick<Schema, 'name' | 'location'>;
const searchPageSchema = schema.pick(['name', 'location']);

type UnauthorizedError = {
  message: string;
};

export default function SearchPage() {
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);
  const { isAuthenticated } = useContext(AppContext);
  const [jobId, setJobId] = useState<string>('');
  const queryConfig = useQueryConfig();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const pageNo = Number(queryConfig.pageNo);
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      location: ''
    },
    resolver: yupResolver(searchPageSchema)
  });
  const queryFavoriteJobConfig = {
    ...queryConfig,
    pageSize: '1000'
  };
  const queryParams = useQueryParams();
  const { data: searchJobData } = useQuery({
    queryKey: ['JobList', queryParams],
    queryFn: () => {
      return jobApi.searchJob(queryParams);
    },
    placeholderData: keepPreviousData
  });
  const metaData = searchJobData?.data.data.meta;

  const { data: favoriteJobListData } = useQuery({
    queryKey: ['favoriteJobListData', queryFavoriteJobConfig],
    queryFn: () => jobApi.getFavoriteJobList(queryFavoriteJobConfig),
    enabled: isAuthenticated
  });

  console.log('check favorite job list: ', favoriteJobListData);

  const onSubmitSearch = handleSubmit((data) => {
    navigate({
      pathname: '/job/search',
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            name: data.name as string,
            location: data.location as string
          },
          ['salary', 'sortBy', 'sortDir']
        )
      ).toString()
    });
  });

  const favoriteJobMutation = useMutation({
    mutationFn: (jobId: string) => jobApi.favoriteJob(jobId)
  });

  const handleFavoriteJob = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, jobId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setJobId(jobId);
  };

  const handleSelectSortDir = (sortDirValue: Exclude<JobListConfig['sortDir'], undefined>) => {
    navigate({
      pathname: '/jobs',
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sortDir: sortDirValue as string,
            sortBy: sortByJob.startDate as string
          },
          ['location', 'name', 'salary']
        )
      ).toString()
    });
  };

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
    <div className='pt-[138px] min-h-[1900px]'>
      <div className='h-[76px] bg-[#f1f2f4]'>
        <div className='container py-[24px]'>
          <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Search Job</div>
        </div>
      </div>
      <div className='h-[112px] bg-[#f1f2f4]'>
        <div className='container'>
          <form noValidate onSubmit={onSubmitSearch}>
            <div className='bg-white h-[80px] rounded-[8px] grid grid-cols-12 p-[12px]'>
              <div className='col-span-7 relative border-r solid border-r-[#eeeff5]'>
                <div className='absolute left-[18px] top-[50%] translate-y-[-50%]'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M21 21L16.65 16.65'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <input
                  placeholder='Job tittle, Keyword...'
                  type='text'
                  className='w-full h-[56px] pl-[54px] border-none border-transparent
                  focus:border-transparent focus:ring-0 leading-6 text-[16px] text-[#18191C]'
                  {...register('name')}
                />
              </div>
              <div className='col-span-3 relative'>
                <div className='absolute left-[18px] top-[50%] translate-y-[-50%]'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div>
                  <input
                    placeholder='Location'
                    type='text'
                    className='w-full h-[56px] pl-[54px] border-none border-transparent
                  focus:border-transparent focus:ring-0 leading-6 text-[16px] text-[]'
                    {...register('location')}
                  />
                </div>
              </div>
              <div className='col-span-2 text-right'>
                <button
                  type='submit'
                  className='w-[132px] h-[56px] bg-[#0A65CC] text-white text-[16px]
                      leading-6 font-semibold  rounded-[4px] hover:opacity-90'
                >
                  Find Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='container'>
        <div className='flex justify-end gap-[16px] items-center my-[18px]'>
          <div className='text-[16px] font-semibold text-[#18191c]'>
            Page {pageNo} / {metaData?.totalPages}
          </div>
          <div>
            <select
              name='filter_time'
              id='filer_time'
              className='w-[180px] h-[48px] rounded-[6px] border border-[#e4e5e8]
              text-[16px] leading-5 text-[#474d61] py-[14px] px-[18px] hover:cursor-pointer
              focus:outline-none focus:border-[#9099a3] focus:ring-0'
              defaultValue='Filter sort...'
              onChange={(event) =>
                handleSelectSortDir(event.target.value as Exclude<JobListConfig['sortDir'], undefined>)
              }
            >
              <option value='Filter sort...' disabled>
                Filter sort...
              </option>
              <option value='newest'>Newest</option>
              <option value='lasted'>Latest</option>
            </select>
          </div>
          <div
            className='flex items-center gap-[8px] rounded-[6px] border border-[#e4e5e8] p-[8px]
          w-[88px] h-[48px]'
          >
            <div className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'>
              <svg
                className='group-hover:text-[#18191C] text-[#939AAD]'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z'
                  fill='currentColor'
                />
                <path
                  d='M16 3H12C11.4477 3 11 3.44772 11 4V8C11 8.55228 11.4477 9 12 9H16C16.5523 9 17 8.55228 17 8V4C17 3.44772 16.5523 3 16 3Z'
                  fill='currentColor'
                />
                <path
                  d='M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z'
                  fill='currentColor'
                />
                <path
                  d='M8 11H4C3.44772 11 3 11.4477 3 12V16C3 16.5523 3.44772 17 4 17H8C8.55228 17 9 16.5523 9 16V12C9 11.4477 8.55228 11 8 11Z'
                  fill='currentColor'
                />
              </svg>
            </div>
            <div className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'>
              <svg
                className='group-hover:text-[#18191C] text-[#939AAD]'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H16C16.5523 9 17 8.55228 17 8V4C17 3.44772 16.5523 3 16 3Z'
                  fill='currentColor'
                />
                <path
                  d='M16 3H12C11.4477 3 11 3.44772 11 4V8C11 8.55228 11.4477 9 12 9H16C16.5523 9 17 8.55228 17 8V4C17 3.44772 16.5523 3 16 3Z'
                  fill='currentColor'
                />
                <path
                  d='M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z'
                  fill='currentColor'
                />
                <path
                  d='M16 11H4C3.44772 11 3 11.4477 3 12V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='mt-[20px] mb-[48px]'>
          {searchJobData &&
            searchJobData.data.data.data.map((job) => (
              <Link
                to={`/job/${job.id}`}
                key={job.id}
                onClick={() => scrollTo(0, 0)}
                className='flex items-center justify-between p-[32px] h-[132px] rounded-[12px] group
          hover:cursor-pointer hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s]
          border solid border-[#e3e4e7] mt-[24px]'
              >
                <div className='flex items-center gap-[20px] '>
                  <div>
                    <img
                      src={getLogoUrl(job.company.logo?.fileName)}
                      alt=''
                      className='w-[68px] h-[68px] object-cover rounded-[6px]'
                    />
                  </div>
                  <div>
                    <div className='text-[18px] leading-7 font-medium text-[#18191c]'>{job.name}</div>
                    <div className='flex gap-[16px] items-center mt-[12px]'>
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
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M11 11.917C12.5188 11.917 13.75 10.6858 13.75 9.16699C13.75 7.64821 12.5188 6.41699 11 6.41699C9.48122 6.41699 8.25 7.64821 8.25 9.16699C8.25 10.6858 9.48122 11.917 11 11.917Z'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div className='text-[14px] leading-5 text-[#5e6670]'>{job.location}</div>
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
                            <g clipPath='url(#clip0_321_11228)'>
                              <path
                                d='M11 2.0625V19.9375'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_321_11228'>
                                <rect width='22' height='22' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className='text-[14px] leading-5 text-[#5e6670]'>{formatSalary(job.salary)}/month</div>
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
                            <g clipPath='url(#clip0_321_11234)'>
                              <path
                                d='M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M15.125 2.0625V4.8125'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M6.875 2.0625V4.8125'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M3.4375 7.5625H18.5625'
                                stroke='#C8CCD1'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_321_11234'>
                                <rect width='22' height='22' fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className='text-[14px] leading-5 text-[#5e6670]'>
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
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                      className='min-w-[168px] h-[48px] py-[12px] px-[24px] flex items-center gap-[12px]
                  text-[16px] leading-6 font-semibold text-[#0b65cc] bg-[#e7f0fa] rounded-[3px]
                  group-hover:bg-[#0A65CC] group-hover:text-white'
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
            ))}
        </div>
        <div className='mb-[100px]'>
          <Pagination queryConfig={queryConfig} totalPages={metaData?.totalPages as number} pathname='/job/search' />
        </div>
      </div>
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
