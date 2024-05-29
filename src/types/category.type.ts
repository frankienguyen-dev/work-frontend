import { ByUser } from './user.type.ts';
import { MetaData } from './meta.type.ts';

export interface Category {
  id: string;
  name: string;
  description: string;
  jobs:
    | {
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
        startDate: string;
        endDate: string;
        active: boolean;
        deleted: boolean;
      }[]
    | [];
  createdBy: ByUser | null;
  createdAt: string;
  updatedBy: ByUser | null;
  updatedAt: string;
  deletedBy: ByUser | null;
  deletedAt: string;
  deleted: boolean;
}

export interface CategoryResponse {
  message: string;
  statusCode: number;
  data: Category;
}

export interface CategoryListResponse {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Category[] | [];
  };
}

export interface CategoryConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  name?: string;
}

export interface CreateCategory {
  name: string;
  description: string;
}

export interface UpdateCategory {
  name: string;
  description: string;
}
