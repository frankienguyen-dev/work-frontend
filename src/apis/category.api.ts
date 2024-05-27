import {
  CategoryConfig,
  CategoryListResponse,
  CategoryResponse,
  CreateCategory,
  UpdateCategory
} from '../types/category.type.ts';
import http from '../utils/http.ts';

const categoryApi = {
  createCategory: (body: CreateCategory) => {
    return http.post<CategoryResponse>('/categories', body);
  },
  getAllCategory: (params: CategoryConfig) => {
    return http.get<CategoryListResponse>('/categories', { params });
  },
  getCategoryById: (id: string) => {
    return http.get<CategoryResponse>(`/categories/${id}`);
  },
  updateCategoryById: (id: string, body: UpdateCategory) => {
    return http.patch<CategoryResponse>(`/categories/${id}`, body);
  },
  searchCategoryByName: (params: CategoryConfig) => {
    return http.get<CategoryListResponse>('/categories/search', { params });
  }
};

export default categoryApi;
