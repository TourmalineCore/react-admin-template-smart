import axios from 'axios';
import { ITable } from '../../pages/home/section/Table/types';

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
    return axios.get<IName>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.data.name)
      // ToDo is it still needed?
      .catch((err) => { throw new Error(`Test we`, { cause: err }); });
  },
  async getProjectsAsync(id: string | null) {
    return axios.get<IProject[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
  async getAggregatedDataAsync(id: string | null) {
    return axios.get<IAggregatedData[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
  async getTableDataAsync() {
    return axios.get<ITable[]>(`https://jsonplaceholder.typicode.com/users`);
  },
  async getSpecificDataAsync() {
    return axios.get<ITable[]>(`https://jsonplaceholder.typicode.com/users`);
  },
};
