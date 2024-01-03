export interface SuccessResponse<Data> {
  message: string;
  statusCode: number;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  statusCode: number;
  data?: Data;
}
