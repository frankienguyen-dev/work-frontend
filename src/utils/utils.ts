import axios, { AxiosError } from 'axios';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';
import { ErrorResponse } from '../types/utils.type.ts';

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error);
}

export function isAxiosConflictError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Conflict;
}

export function isAxiosUnauthorizedError<UnauthorizedError>(
  error: unknown
): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized;
}

export function isAxiosExpiredTokenError<UnauthorizedError>(
  error: unknown
): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<
      ErrorResponse<{ timestamp: string; message: string; details: string }>
    >(error) &&
    error.response?.data?.data?.message ===
      'Unable to create Access Token from Refresh Token, Please login again'
  );
}
