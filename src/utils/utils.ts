import axios, { AxiosError } from 'axios';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';
import { ErrorResponse } from '../types/utils.type.ts';
import moment from 'moment';

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error);
}

export function isAxiosConflictError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Conflict;
}

export function isAxiosBadRequestError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.BadRequest;
}

export function isAxiosPayloadLargeError<PayloadLargeError>(error: unknown): error is AxiosError<PayloadLargeError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.PayloadTooLarge;
}

export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized;
}

export function isAxiosExpiredTokenError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<ErrorResponse<{ timestamp: string; message: string; details: string }>>(error) &&
    error.response?.data?.data?.message === 'Unable to create Access Token from Refresh Token, Please login again'
  );
}

export function calcDayRemaining(endDate: string) {
  const currentDate = moment();
  const endDateResult = moment(endDate);
  return endDateResult.diff(currentDate, 'days');
}

export function formatSalary(salary: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  });
  return formatter.format(salary);
}

export const getLogoUrl = (logoName?: string) => {
  const { VITE_API_BASE_URL } = import.meta.env;
  return logoName
    ? `${VITE_API_BASE_URL}/files/${logoName}`
    : 'https://as1.ftcdn.net/v2/jpg/05/99/32/28/1000_F_599322870_hufBazDahX69a57xhcprgfn4WSjAlXZj.webp';
};

export const saveFileDownload = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export const getExtensionFormMIME = (mimeType: string) => {
  switch (mimeType) {
    case 'application/pdf':
      return '.pdf';
    case 'image/jpeg':
      return '.jpeg';
    case 'image/png':
      return '.png';
    case 'video/mp4':
      return '.mp4';
    default:
      return 'file';
  }
};
