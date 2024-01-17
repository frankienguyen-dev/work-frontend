import { ByUser } from './user.type.ts';
import { MetaData } from './meta.type.ts';

export interface Company {
  id: string;
  name: string;
  description: string;
  address: string;
  email: string;
  phoneNumber: string;
  website: string;
  teamSize: number;
  foundedDate: string;
  companyBenefit: string;
  companyVision: string;
  companyType: string;
  logo: {
    id: string;
    fileName: string;
    fileType: string;
    size: number;
    uploadTime: string;
  } | null;
  banner: {
    id: string;
    fileName: string;
    fileType: string;
    size: number;
    uploadTime: string;
  } | null;
  user: ByUser[] | [];
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  deleted: boolean;
}

export interface CompanyResponse {
  message: string;
  statusCode: number;
  data: Company;
}

export interface CompanyList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Company[] | [];
  };
}

export interface CompanyConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
}
