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

export interface BelongToCompany {
  id: string;
  name: string;
}

export interface CompanyConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  name?: string;
  // lastPage?: boolean;
  // totalPages?: number | string;
  // totalElements?: number | string;
}

export interface CreateCompany {
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
  logo?: {
    id: string | undefined;
  };
  banner?: {
    id: string | undefined;
  };
}

export interface UpdateCompany {
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
  logo?: {
    id: string | undefined;
  };
  banner?: {
    id: string | undefined;
  };
}

export interface CompanyInfoInterface {
  name: string;
  description: string;
  logo?: {
    id: string | undefined;
  };
  banner?: {
    id: string | undefined;
  };
  website: string;
}

export interface FoundingInfoInterface {
  companyType: string;
  teamSize: number;
  foundedDate: string;
  email: string;
  address: string;
  phoneNumber: string;
  companyBenefit: string;
  companyVision: string;
}
