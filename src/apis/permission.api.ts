import http from '../utils/http.ts';
import {
  CreatePermission,
  PermissionConfig,
  PermissionList,
  PermissionResponse,
  UpdatePermission
} from '../types/permission.type.ts';

const permissionApi = {
  getALlPermissions: (params: PermissionConfig) => {
    return http.get<PermissionList>('/permissions', { params });
  },
  getPermissionById: (id: string) => {
    return http.get<PermissionResponse>(`/permissions/${id}`);
  },
  createNewPermission: (body: CreatePermission) => {
    return http.post<PermissionResponse>('/permissions', body);
  },
  updatePermissionById: (id: string, body: UpdatePermission) => {
    return http.patch<PermissionResponse>(`/permissions/${id}`, body);
  },
  searchPermission: (params: PermissionConfig) => {
    return http.get<PermissionList>('/permissions/search', { params });
  }
};

export default permissionApi;
