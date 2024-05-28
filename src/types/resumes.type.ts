import { ByUser } from './user.type.ts';
import { Company } from './company.type.ts';
import { MetaData } from './meta.type.ts';

export interface Resumse {
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
  job: {
    id: string;
    name: string;
    description: string;
    responsibility: string;
    location: string;
    quantity: number;
    salary: number;
    level: string;
    education: string;
    jobType: string;
    experience: string;
    category: {
      id: string;
      name: string;
      description: string;
    } | null;
    createdBy: ByUser | null;
    createdAt: string;
    updatedBy: ByUser | null;
    updatedAt: string;
    deletedBy: ByUser | null;
    deletedAt: string;
    company: Company;
    startDate: string;
    endDate: string;
    skills:
      | {
          name: string;
        }[]
      | [];
    active: boolean;
    deleted: boolean;
  };
  user: ByUser;
  status: string;
  createdBy: ByUser | null;
  createdAt: string;
  updatedBy: ByUser | null;
  updatedAt: string;
  deletedBy: ByUser | null;
  deletedAt: string;
  deleted: boolean;
}

export interface ResumeResponse {
  message: string;
  statusCode: number;
  data: Resumse;
}

export interface ResumeListResponse {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Resumse[] | [];
  };
}

export interface ResumeConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  email?: string;
}

export interface CreateResume {
  url: string | null;
  company: { id: string };
  job: { id: string };
  resume: { id: string };
}

export interface UpdateStatusResume {
  status: string;
}
