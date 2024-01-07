import http from '../utils/http.ts';
import { AxiosRequestConfig } from 'axios';
import { JobList, JobListConfig, JobResponse } from '../types/job.type.ts';

const jobApi = {
  getAllJobs: (params: JobListConfig & AxiosRequestConfig) => {
    return http.get<JobList>('/jobs', { params });
  },
  getJobDetail: (id: string) => http.get<JobResponse>(`/jobs/${id}`)
};
export default jobApi;
