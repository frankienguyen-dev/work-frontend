import { ByUser } from './user.type.ts';

export interface Company {
  id: string;
  name: string;
  description: string;
  address: string;
  logo: string | null;
  user: ByUser[] | [];
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  deleted: boolean;
}
