import {
  CreateResume,
  ResumeConfig,
  ResumeListResponse,
  ResumeResponse,
  UpdateStatusResume
} from '../types/resumes.type.ts';
import http from '../utils/http.ts';

const resumeApi = {
  createResume: (body: CreateResume) => {
    return http.post<ResumeResponse>('/resumes', body);
  },
  getAllResume: (params: ResumeConfig) => {
    return http.get<ResumeListResponse>('/resumes', { params });
  },
  getResumeById: (id: string) => {
    return http.get<ResumeResponse>(`/resumes/${id}`);
  },
  updateResumeById: (id: string, body: UpdateStatusResume) => {
    return http.patch<ResumeResponse>(`/resumes/${id}`, body);
  },
  getMyResumeList: (params: ResumeConfig) => {
    return http.get<ResumeListResponse>('/resumes/my-resumes', { params });
  },
  searchResume: (params: ResumeConfig) => {
    return http.get<ResumeListResponse>('resumes/search', { params });
  }
};

export default resumeApi;
