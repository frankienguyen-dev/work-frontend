import { SuccessResponse } from './utils.type';

export type AuthResponse = SuccessResponse<{
  accessToken: string;
  refreshToken: string;
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
}>;
export type RefreshTokenResponse = SuccessResponse<{ accessToken: string }>;
