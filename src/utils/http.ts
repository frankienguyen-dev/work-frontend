import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';
import { AuthResponse } from '../types/auth.type.ts';
import {
  clearAccessTokenFromLocalStorage,
  clearRoleToLocalStorage,
  getAccessTokenFromLocalStorage,
  isAccessTokenExpired,
  saveAccessTokenFromLocalStorage
} from './auth.ts';
import { URL_LOGIN, URL_LOGOUT } from '../apis/auth.api.ts';

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  // private refreshToken: string;
  // private refreshTokenRequest: Promise<string> | null;

  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage();
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/v1',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });

    this.instance.interceptors.request.use(
      async (config) => {
        if (this.accessToken && config.headers && !isAccessTokenExpired()) {
          config.headers.authorization = `Bearer ${this.accessToken}`;
          return config;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      async (response) => {
        const url = response.config.url;
        if (url === URL_LOGIN) {
          this.accessToken = (response.data as AuthResponse).data.accessToken;
          saveAccessTokenFromLocalStorage(this.accessToken);
        } else if (url === URL_LOGOUT) {
          this.accessToken = '';
          clearRoleToLocalStorage();
          clearAccessTokenFromLocalStorage();
        }
        return response;
      },
      (error: AxiosError) => {
        if (
          error.response?.status !== HttpStatusCode.Conflict &&
          error.response?.status !== HttpStatusCode.Unauthorized
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data;
          const message = data.detail || error.message;
          toast.error(message);
        }
        // console.log('hehehe');
        // if (isAxiosUnauthorizedError(error)) {
        //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //   const config = error.response?.config;
        //   const { url } = config;
        //   console.log('config error: ', config);
        //   // if (isAxiosExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
        //   // }
        //   clearAccessTokenFromLocalStorage();
        // }
        return Promise.reject(error);
      }
    );
  }

  // private handleRefreshToken() {
  //   this.instance
  //     .post<RefreshTokenResponse>(URL_REFRESH_TOKEN)
  //     .then((response) => {
  //       const { accessToken } = response.data.data;
  //       saveAccessTokenFromLocalStorage('access_token');
  //       this.accessToken = accessToken;
  //       return accessToken;
  //     })
  //     .catch((error) => {
  //       clearAccessTokenFromLocalStorage();
  //       this.accessToken = '';
  //       throw error;
  //     });
  // }
}

const http = new Http().instance;
export default http;
