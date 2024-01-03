import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';
import { AuthResponse } from '../types/auth.type.ts';
import {
  clearAccessTokenFromLocalStorage,
  getAccessTokenFromLocalStorage,
  saveAccessTokenFromLocalStorage
} from './auth.ts';

class Http {
  instance: AxiosInstance;
  private accessToken: string;

  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage();
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/v1',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
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
      (response) => {
        console.log('response: ', response);
        const url = response.config.url;
        if (url === '/auth/login') {
          this.accessToken = (response.data as AuthResponse).data.accessToken;
          saveAccessTokenFromLocalStorage(this.accessToken);
        } else if (url === '/auth/logout') {
          this.accessToken = '';
          clearAccessTokenFromLocalStorage();
        }
        return response;
      },
      function (error: AxiosError) {
        if (
          error.response?.status !== HttpStatusCode.Conflict &&
          error.response?.status !== HttpStatusCode.Unauthorized
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data;
          const message = data.detail || error.message;
          toast.error(message);
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export default http;
