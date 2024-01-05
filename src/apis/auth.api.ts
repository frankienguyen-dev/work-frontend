import { AuthResponse } from 'src/types/auth.type';
import http from 'src/utils/http.ts';

export const URL_LOGIN = '/auth/login';
export const URL_REGISTER = '/auth/register';
export const URL_LOGOUT = '/auth/logout';
export const URL_REFRESH_TOKEN = '/auth/refresh';

export const registerAccount = (body: {
  fullName: string;
  email: string;
  password: string;
  role: string;
}) => http.post<AuthResponse>(URL_REGISTER, body);

export const loginAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>(URL_LOGIN, body);

export const logoutAccount = () => http.post(URL_LOGOUT);
