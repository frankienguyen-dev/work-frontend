import { MetaData } from './meta.type.ts';
import { Job } from './job.type.ts';

export interface JobResponse {
  message: string;
  statusCode: number;
  data: Job;
}

export interface JobList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Job[] | [];
  };
}

export interface JobListConfig {
  pageNo?: number;
  pageSize?: number;
  sortBy?: number | string;
  sortDir?: number | string;
}
