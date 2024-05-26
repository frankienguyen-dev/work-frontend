import { MetaData } from './meta.type.ts';

export interface Subscriber {
  id: string;
  name: string;
  email: string;
  skills: { name: string }[] | [];
}

export interface SubscriberResponse {
  message: string;
  statusCode: number;
  data: Subscriber;
}

export interface SubscriberList {
  message: string;
  statusCode: number;
  data: {
    meta: MetaData;
    data: Subscriber[] | [];
  };
}

export interface SubscriberListConfig {
  pageNo?: number | string;
  pageSize?: number | string;
  sortBy?: number | string;
  sortDir?: number | string;
  email?: string;
}

export interface PostSubscriber {
  name: string;
  email: string;
  skills: { name: string }[] | [];
}

export interface UpdateSubscriber {
  name: string;
  email: string;
  skills: { name: string }[] | [];
}
