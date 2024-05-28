import {
  AcceptOrRejectInvitation,
  AcceptOrRejectInvitationResponse,
  InvitationByUserResponse,
  InvitationConfig,
  InvitationListResponse,
  InvitationResponse,
  InviteJoinCompany
} from '../types/invitation.type.ts';
import http from '../utils/http.ts';

const invitationApi = {
  inviteJoinCompany: (body: InviteJoinCompany) => {
    return http.post<InvitationResponse>('/invitations', body);
  },
  getInvitationByEmail: (params: InvitationConfig) => {
    return http.get<InvitationByUserResponse>('/invitations/get-invitation', { params });
  },
  getAllInvitations: (params: InvitationConfig) => {
    return http.get<InvitationListResponse>('/invitations', { params });
  },
  searchInvitation: (params: InvitationConfig) => {
    return http.get<InvitationListResponse>('/invitations/search', { params });
  },
  acceptOrRejectInvitation: (id: string, body: AcceptOrRejectInvitation) => {
    return http.post<AcceptOrRejectInvitationResponse>(`/invitations/${id}`, body);
  }
};

export default invitationApi;
