import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });

    this.instance.interceptors.response.use(
      function (response) {
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
