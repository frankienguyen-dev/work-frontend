import http from '../utils/http.ts';
import { CompanyConfig, CompanyList } from '../types/company.type.ts';
import { AxiosRequestConfig } from 'axios';

const companyApi = {
  getAllCompanies: (params: CompanyConfig & AxiosRequestConfig) => {
    return http.get<CompanyList>('/companies', { params });
  },
  getCompanyDetail: (id: string) => http.get(`companies/${id}`)
};
export default companyApi;
