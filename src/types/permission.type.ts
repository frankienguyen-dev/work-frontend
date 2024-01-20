import { ByUser } from './user.type.ts';

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
