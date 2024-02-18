import http from '../utils/http.ts';
import { AxiosRequestConfig } from 'axios';
import { JobList, JobListConfig, JobResponse, PostJob } from '../types/job.type.ts';

const jobApi = {
  getAllJobs: (params: JobListConfig & AxiosRequestConfig) => {
    return http.get<JobList>('/jobs', { params });
  },
  getJobDetail: (id: string) => {
    return http.get<JobResponse>(`/jobs/${id}`);
  },
  searchJob: (params: JobListConfig & AxiosRequestConfig) => {
    return http.get<JobList>('/jobs/search', { params });
  },
  postJob: (body: PostJob) => {
    return http.post<JobResponse>('/jobs', body);
  },
  updateJob: (id: string, body: PostJob) => {
    return http.patch(`jobs/${id}`, body);
  }
};
export default jobApi;
