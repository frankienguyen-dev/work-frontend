import { Job } from './job.type.ts';
import { MetaData } from './meta.type.ts';

export interface ByUser {
  id: string;
  email: string;
}

export interface User {
  id: string;
  fullName: string;
  address: string;
  email: string;
  education: string;
  experience: string;
  avatar: {
    id: string;
    fileName: string;
    fileType: string;
    size: number;
    uploadTime: string;
  } | null;
  phoneNumber: string;
  gender: string;
  biography: string;
  coverLetter: string;
  title: string;
  age: number;
  roles: {
    name: string;
  }[];
  jobs: Job[] | [];
  company?: {
    id: string;
    name: string;
  };
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
}

export interface UserResponse {
  message: string;
  statusCode: number;
  data: User;
}

export interface UserList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: User[] | [];
  };
}

export interface UserListConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  email?: string;
}

export interface CreateUser {
  fullName: string;
  address: string;
  email: string;
  education: string;
  experience: string;
  avatar?: {
    id: string | undefined;
  };
  phoneNumber?: string;
  gender: string;
  password: string;
  title: string;
  biography: string;
  coverLetter: string;
  age?: number;
  company: {
    name: string;
  } | null;
  roles: {
    name: string;
  }[];
}

export interface UpdateUser {
  fullName: string;
  address: string;
  email: string;
  education: string;
  experience: string;
  avatar?: {
    id: string | undefined;
  };
  phoneNumber: string;
  gender: string;
  biography: string;
  coverLetter: string;
  title: string;
  age: number;
  company: {
    name: string;
  } | null;
  roles: {
    name: string;
  }[];
}
