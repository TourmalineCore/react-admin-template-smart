import { api } from './HttpClient';

export const Service = {
  async getNameAsync(id: string | null) {
    return api.get<NameTypes>(`/users/${id}`);
  },
  async getProjectsAsync(id: string | null) {
    return api.get<ProjectTypes[]>(`/comments?postId=${id}`);
  },
  async getAggregatedDataAsync(id: string | null) {
    return api.get<AggregatedDataTypes[]>(`/comments?postId=${id}`);
  },
  async getTableDataAsync() {
    return api.get<TableType[]>(`/users`);
  },
  async getSpecificDataAsync() {
    return api.get<TableType[]>(`/users`);
  },
};
