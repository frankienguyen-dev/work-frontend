import { ByUser } from './user.type.ts';
import { Company } from './company.type.ts';
import { Skill } from './skill.type.ts';
import { MetaData } from './meta.type.ts';

export interface Job {
  id: string;
  name: string;
  description: string;
  responsibility: string;
  location: string;
  quantity: number;
  salary: number;
  level: string;
  experience: string;
  jobType: string;
  education: string;
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  company: Company;
  startDate: string;
  endDate: string;
  skills: Skill[] | [];
  active: boolean;
  deleted: boolean;
}

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
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
}
