import { Permission } from './permission.type.ts';
import { ByUser } from './user.type.ts';

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
