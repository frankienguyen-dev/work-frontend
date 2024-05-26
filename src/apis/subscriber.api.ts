import {
  PostSubscriber,
  SubscriberList,
  SubscriberListConfig,
  SubscriberResponse,
  UpdateSubscriber
} from '../types/subscriber.type.ts';
import http from '../utils/http.ts';

const subscriberApi = {
  createSubscriber: (body: PostSubscriber) => {
    return http.post<SubscriberResponse>('/subscribers', body);
  },
  getAllSubscribers: (params: SubscriberListConfig) => {
    return http.get<SubscriberList>('/subscribers', { params });
  },
  getSubscriberById: (id: string) => {
    return http.get<SubscriberResponse>(`/subscribers/${id}`);
  },
  updateSubscriberById: (id: string, body: UpdateSubscriber) => {
    return http.patch<SubscriberResponse>(`/subscribers/${id}`, body);
  },
  searchSubscriberByEmail: (params: SubscriberListConfig) => {
    return http.get<SubscriberList>('/subscribers/search', { params });
  }
};

export default subscriberApi;
