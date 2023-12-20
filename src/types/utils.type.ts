export interface ResponseApi<Data> {
  message: string;
  statusCode: number;
  data?: Data;
}
