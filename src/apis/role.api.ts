import http from '../utils/http.ts';
import { CreateRole, RoleConfig, RoleList, RoleResponse, UpdateRole } from '../types/role.type.ts';

const roleApi = {
  getAllRoles: (params: RoleConfig) => {
    return http.get<RoleList>('/roles', { params });
  },
  getRoleById: (id: string) => {
    return http.get<RoleResponse>(`/roles/${id}`);
  },
  updateRoleById: (id: string, body: UpdateRole) => {
    return http.patch<RoleResponse>(`/roles/${id}`, body);
  },
  createRole: (body: CreateRole) => {
    return http.post<RoleResponse>('/roles', body);
  },
  searchRole: (params: RoleConfig) => {
    return http.get<RoleList>('/roles/search', { params });
  }
};

export default roleApi;
