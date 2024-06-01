export interface Image {
  id: string;
  fileName: string;
  fileType: string;
  size: number;
  uploadTime: string;
}

export interface UploadResponse {
  message: string;
  statusCode: number;
  data: Image;
}

export interface DownloadResponse {
  message: string;
  statusCode: number;
  data: Image;
}
