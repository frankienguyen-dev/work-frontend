import { ByUser } from './user.type.ts';
import { MetaData } from './meta.type.ts';

export interface Invitation {
  id: string;
  senderUser: ByUser;
  receiverUser: ByUser;
  company: {
    id: string;
    name: string;
  };
  status: string;
  content: string;
  createdAt: string | null;
  acceptedAt: string | null;
  rejectedAt: string | null;
}

export interface InvitationResponse {
  message: string;
  statusCode: number;
  data: Invitation;
}

export interface InvitationByUserResponse {
  message: string;
  statusCode: number;
  data: Invitation[] | [];
}

export interface InvitationListResponse {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Invitation[] | [];
  };
}

export interface InvitationConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  email?: string;
}

export interface InviteJoinCompany {
  receiverUserEmail: string;
  content: string;
}

export interface AcceptOrRejectInvitation {
  accepted: boolean;
}

export interface AcceptOrRejectInvitationResponse {
  message: string;
  statusCode: number;
  data: {
    message: string;
    status: string;
    acceptedAt: string | null;
    rejectedAt: string | null;
  };
}
