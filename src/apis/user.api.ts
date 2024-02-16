import http from '../utils/http.ts';
import {
  CreateUser,
  UpdateUser,
  UserList,
  UserListConfig,
  UserResponse
} from '../types/user.type.ts';

const userApi = {
  getProfile: () => {
    return http.get<UserResponse>('/users/me');
  },
  getAllUsers: (params: UserListConfig) => {
    return http.get<UserList>('/users', { params });
  },
  searchUser: (params: UserListConfig) => {
    return http.get<UserList>('users/search', { params });
  },
  createUser: (body: CreateUser) => {
    return http.post<UserResponse>('/users', body);
  },
  getUserDetails: (id: string) => {
    return http.get<UserResponse>(`users/${id}`);
  },
  updateUser: (id: string, body: UpdateUser) => {
    return http.patch<UserResponse>(`users/${id}`, body);
  }
};
export default userApi;
