import axios, { AxiosError } from 'axios';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';
import { getAccessTokenFromLocalStorage } from './auth.ts';

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error);
}

export function isAxiosConflictError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Conflict;
}

export function isAxiosUnauthorizedError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized;
}

export const isAccessTokenExpired = () => {
  const accessToken = getAccessTokenFromLocalStorage();
  if (!accessToken) return true;
  const tokenSplit = accessToken.split('.');
  const tokenPayload = tokenSplit[1];
  const decodedToken = JSON.parse(atob(tokenPayload));
  const expirationTime = decodedToken.exp * 1000;
  return expirationTime < Date.now();
};
