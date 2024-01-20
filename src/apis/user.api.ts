import http from '../utils/http.ts';
import { UserResponse } from '../types/user.type.ts';

const userApi = {
  getProfile: () => {
    return http.get<UserResponse>('/users/me');
  }
};
export default userApi;
