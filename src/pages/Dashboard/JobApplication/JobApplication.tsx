import { Link, useParams } from 'react-router-dom';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import useQueryConfig from '../../../hooks/useQueryConfig.tsx';
import Loading from '../../../components/Loading/Loading.tsx';
import SvgOops from '../../../components/SvgOops';
import resumeApi from '../../../apis/resume.api.ts';
import Pagination from '../../../components/Pagination';
import { MetaData } from '../../../types/meta.type.ts';
import { getExtensionFormMIME, getLogoUrl, saveFileDownload } from '../../../utils/utils.ts';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import uploadApi from '../../../apis/upload.api.ts';
import { AxiosResponse } from 'axios';
import ModalViewApplication from '../../../components/ModalViewApplication';

export default function JobApplication() {
  const [resumeId, setResumeId] = useState<string>('');
  const [applicationId, setApplicationId] = useState<string>('');
  const [isOpenModalViewApplication, setIsOpenModalViewApplication] = useState<boolean>(false);
  const { id } = useParams();
  const queryConfig = useQueryConfig();
  const queryApplicationConfig = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '6'
  };

  const { data: applicationData, isLoading } = useQuery({
    queryKey: ['applicationListData', queryApplicationConfig],
    queryFn: () => resumeApi.getListResumeByJobId(id as string, queryApplicationConfig),
    gcTime: 0,
    placeholderData: keepPreviousData
  });

  console.log('check application data: ', applicationData);
  const metaData = applicationData && (applicationData.data.data.meta as MetaData);
  const downloadResumeMutation = useMutation({
    mutationFn: (resumeId: string) => uploadApi.downloadFile(resumeId),
    onSuccess: (response: AxiosResponse<Blob>, variables: string) => {
      const mimeType = response.headers['content-type'];
      const extension = getExtensionFormMIME(mimeType);
      const fileName = `resume_${variables}${extension}`;
      saveFileDownload(response.data, fileName);
    }
  });
  const handleDownloadResume = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, resumeId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setResumeId(resumeId);
    downloadResumeMutation.mutate(resumeId, {
      onSuccess: (data) => {
        console.log('check success download: ', data);
      }
    });
  };

  const handleClickViewApplicationJob = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    applicationId: string,
    resumeId: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setApplicationId(applicationId);
    setResumeId(resumeId);
    setIsOpenModalViewApplication(true);
  };

  return (
    <div className='mt-[48px]'>
      <div className='flex items-center justify-between h-[44px]'>
        <div className='flex items-center gap-x-[6px]'>
          <div className='text-[20px] font-medium leading-8 text-[#18191C]'>Job Applications</div>
          <div className='text-[16px] leading-6 text-[5E6670]'>(200 Applications)</div>
        </div>
        <div>
          <select
            name='sort'
            id='sort'
            defaultValue='Filter Sort'
            className='w-[180px] h-[48px] rounded-[6px] border border-[#e4e5e8]
              text-[16px] leading-5 text-[#474d61] py-[14px] px-[18px] hover:cursor-pointer
              focus:outline-none focus:border-[#9099a3] focus:ring-0'
          >
            <option value='Filter sort...' disabled>
              Filter sort...
            </option>
            <option value='newest'>Newest</option>
            <option value='lasted'>Latest</option>
          </select>
        </div>
      </div>
      <div className='mt-[30px]'>
        {isLoading ? (
          <div className='h-[530px] flex items-center justify-center'>
            <Loading />
          </div>
        ) : applicationData && applicationData.data.data.data.length === 0 ? (
          <div className='flex flex-col items-center justify-center'>
            <SvgOops />
            <div className='font-medium text-[20px] leading-7'>Oops! No Application.</div>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-x-[24px] gap-y-[26px] h-[542px]'>
            {applicationData &&
              applicationData.data.data.data.map((resume) => (
                <Link
                  to=''
                  onClick={(event) => handleClickViewApplicationJob(event, resume.user.id, resume.resume.id)}
                  key={resume.id}
                  className='col-span-1 hover:cursor-pointer border-[2px] border-[#EDEFF5]
          hover:outline hover:outline-[#0b65cc] hover:rounded-[12px] rounded-[12px] h-[254px] solid'
                >
                  <div className='p-[32px]'>
                    <div className='flex items-center gap-x-[16px]'>
                      <img
                        src={getLogoUrl(resume.user.avatar.fileName)}
                        alt=''
                        className='w-[56px] h-[56px]
                      object-cover rounded-full flex items-center border-[2px] solid'
                      />
                      <div>
                        <div className='text-[16px] font-medium leading-6 text-[#18191C]'>{resume.user.fullName}</div>
                        <div className='mt-[4px] text-[16px] leading-5 text-[#767F8C]'>{resume.user.title}</div>
                      </div>
                    </div>
                    <div className='mt-[24px]'>
                      <div className='flex items-center gap-x-[9px]'>
                        <div className='w-[4px] h-[4px] bg-[#5E6670] rounded-[4px]'></div>
                        <div className='text-[16px] leading-5 text-[#5E6670]'>{resume.user.experience}</div>
                      </div>
                      <div className='flex items-center gap-x-[9px] mt-[5px]'>
                        <div className='w-[4px] h-[4px] bg-[#5E6670] rounded-[4px]'></div>
                        <div className='text-[16px] leading-5 text-[#5E6670]'>{resume.user.education}</div>
                      </div>

                      <div className='flex items-center gap-x-[9px] mt-[5px]'>
                        <div className='w-[4px] h-[4px] bg-[#5E6670] rounded-[4px]'></div>
                        <div className='text-[16px] leading-5 text-[#5E6670]'>
                          {' '}
                          Applied: {moment(resume.createdAt).format('MMM DD, YYYY')}
                        </div>
                      </div>
                      <button
                        type='button'
                        className='mt-4 flex items-center gap-x-[6px]'
                        onClick={(event) => handleDownloadResume(event, resume.resume.id)}
                      >
                        <div>
                          <svg
                            width='24'
                            height='24'
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
                        <div className='text-[16px] leading-5 font-medium text-[#0A65CC]'>Download Resume</div>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
      <div className='mt-[40px]'>
        {isLoading ? (
          <Pagination queryConfig={queryApplicationConfig} totalPages={1} pathname={`/dashboard/${id}/application`} />
        ) : (
          <Pagination
            queryConfig={queryApplicationConfig}
            totalPages={Number(metaData?.totalPages)}
            pathname={`/dashboard/${id}/application`}
          />
        )}
      </div>
      {isOpenModalViewApplication && (
        <ModalViewApplication
          applicationId={applicationId}
          resumeId={resumeId}
          closeModal={() => setIsOpenModalViewApplication(false)}
        />
      )}
    </div>
  );
}
