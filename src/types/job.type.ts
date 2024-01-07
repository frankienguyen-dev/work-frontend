import { ByUser } from './user.type.ts';
import { Company } from './company.type.ts';
import { Skill } from './skill.type.ts';

export interface Job {
  id: string;
  name: string;
  description: string;
  location: string;
  quantity: number;
  salary: number;
  level: string;
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
  company: Company;
  startDate: string | null;
  endDate: string | null;
  skills: Skill[] | [];
  active: boolean;
  deleted: boolean;
}
