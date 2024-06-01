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

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
  statusCode: number;
  data: {
    newPassword: string;
  };
}
