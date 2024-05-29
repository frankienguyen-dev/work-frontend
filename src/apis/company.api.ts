import http from '../utils/http.ts';
import { CompanyConfig, CompanyList, CompanyResponse, CreateCompany, UpdateCompany } from '../types/company.type.ts';
import { AxiosRequestConfig } from 'axios';

const companyApi = {
  getAllCompanies: (params: CompanyConfig & AxiosRequestConfig) => {
    return http.get<CompanyList>('/companies', { params });
  },
  getCompanyDetail: (id: string) => http.get<CompanyResponse>(`companies/${id}`),
  createCompany: (body: CreateCompany) => {
    return http.post<CompanyResponse>('/companies', body);
  },
  searchCompany: (params: CompanyConfig & AxiosRequestConfig) => {
    return http.get<CompanyList>('/companies/search', { params });
  },
  updateCompany: (body: UpdateCompany, id: string) => http.patch<CompanyResponse>(`companies/${id}`, body),
  getMyCompany: () => http.get<CompanyResponse>('/companies/my-company')
};
export default companyApi;
