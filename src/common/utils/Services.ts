import { TableType } from '../../pages/home/section/Table/types';
import { api } from './HttpClient';

interface IName {
  name: string;
}

interface IProject {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface IAggregatedData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface IAggregatedData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Service = {
  async getNameAsync(id: string | null) {
    return api.get<IName>(`/users/${id}`);
  },
  async getProjectsAsync(id: string | null) {
    return api.get<IProject[]>(`/comments?postId=${id}`);
  },
  async getAggregatedDataAsync(id: string | null) {
    return api.get<IAggregatedData[]>(`/comments?postId=${id}`);
  },
  async getTableDataAsync() {
    return api.get<TableType[]>(`/users`);
  },
  async getSpecificDataAsync() {
    return api.get<TableType[]>(`/users`);
  },
};
