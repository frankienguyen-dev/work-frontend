import { SuccessResponse } from './utils.type';

export type AuthResponse = SuccessResponse<{
  accessToken: string;
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
}>;
