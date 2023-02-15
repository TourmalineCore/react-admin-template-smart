import axios from 'axios';

import { ITable } from '../../components/Table/types';

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
  async getName(id: string | null) {
    return axios.get<IName>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.data.name)
      .catch((err) => { throw new Error('Test we', { cause: err }); });
  },
  async getProjects(id: string | null) {
    return axios.get<IProject[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
  async getAggregatedData(id: string | null) {
    return axios.get<IAggregatedData[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
  async getTableData() {
    return axios.get<ITable[]>('https://jsonplaceholder.typicode.com/users');
  },
  async getSpecificData() {
    return axios.get<ITable[]>('https://jsonplaceholder.typicode.com/users');
  },
};
