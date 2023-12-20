import { ResponseApi } from './utils.type';

export type AuthResponse = ResponseApi<{
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
}>;
