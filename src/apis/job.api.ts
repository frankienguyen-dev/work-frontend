import http from '../utils/http.ts';
import { AxiosRequestConfig } from 'axios';
import { JobList, JobListConfig, JobResponse } from '../types/jobResponse.type.ts';

const jobApi = {
  getAllJobs: (params: JobListConfig & AxiosRequestConfig) => {
    console.log('hehe: ', params);
    return http.get<JobList>('/jobs', { params });
  },
  getJobDetail: (id: string) => http.get<JobResponse>(`/jobs/${id}`)
};
export default jobApi;
