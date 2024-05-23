import { Permission } from './permission.type.ts';
import { ByUser } from './user.type.ts';
import { MetaData } from './meta.type.ts';

export interface Role {
  id: string;
  name: string;
  permissions: Permission | null;
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  users: ByUser | null;
  active: boolean;
  deleted: boolean;
}

export interface RoleResponse {
  message: string;
  statusCode: number;
  data: Role;
}

export interface RoleList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Role[] | [];
  };
}

export interface RoleConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  name?: string;
}

export interface CreateRole {
  name: string;
  active: boolean;
  permissions: { name: string }[] | [];
}

export interface UpdateRole {
  name: string;
  active: boolean;
  permissions: { name: string }[] | [];
}
