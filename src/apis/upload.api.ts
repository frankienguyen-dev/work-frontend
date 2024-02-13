import http from '../utils/http.ts';
import { UploadResponse } from '../types/file.type.ts';

const uploadApi = {
  uploadImage: (body: FormData) => {
    return http.post<UploadResponse>('files/upload', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};
export default uploadApi;
