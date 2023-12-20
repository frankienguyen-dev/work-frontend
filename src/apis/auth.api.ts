import { AuthResponse } from 'src/types/auth.type';
import http from 'src/utils/http';

export const registerAccount = (body: {
  fullName: string;
  email: string;
  password: string;
  role: string;
}) => http.post<AuthResponse>('/api/v1/auth/register', body);
