import http from '../utils/http.ts';
import { UploadResponse } from '../types/file.type.ts';

const uploadApi = {
  uploadImage: (body: FormData) => {
    return http.post<UploadResponse>('files/upload', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  downloadFile: (id: string) => {
    return http.get<Blob>(`/files/download/${id}`, {
      responseType: 'blob'
    });
  }
};
export default uploadApi;
