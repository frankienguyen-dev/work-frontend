import { ByUser } from './user.type.ts';
import { MetaData } from './meta.type.ts';

export interface Permission {
  id: string;
  name: string;
  path: string;
  method: string;
  module: string;
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  deleted: boolean;
}

export interface PermissionResponse {
  message: string;
  statusCode: number;
  data: Permission;
}

export interface PermissionList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Permission[] | [];
  };
}

export interface PermissionConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  name?: string;
}

export interface CreatePermission {
  name: string;
  path: string;
  method: string;
  module: string;
}

export interface UpdatePermission {
  name: string;
  path: string;
  method: string;
  module: string;
}
