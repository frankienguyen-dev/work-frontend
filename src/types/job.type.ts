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
  category: {
    id: string;
    name: string;
    description: string;
  };
  resumes:
    | {
        id: string;
        url: string | null;
        resume: {
          id: string;
          fileName: string;
          fileType: string;
          size: number;
          uploadTime: string;
        };
        company: {
          id: string;
          name: string;
        };
        user: ByUser;
        status: string;
        createdBy: ByUser | null;
        createdAt: string | null;
        updatedBy: ByUser | null;
        updatedAt: string | null;
        deletedBy: ByUser | null;
        deletedAt: string | null;
        deleted: boolean;
      }[]
    | [];
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
  name?: string;
  location?: string;
  salary?: number | string;
  email?: string;
}

export interface PostJob {
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
  category: {
    id: string;
  };
  company: {
    name: string;
  };
  startDate: string;
  endDate: string;
  skills?: { name: string }[];
}
