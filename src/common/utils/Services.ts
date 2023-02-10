import axios from 'axios';

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

export const Service = {
  async getName(id: string | null) {
    return axios.get<IName>(`https://jsonplaceholder.typicode.com/users/${id}`);
  },
  async getProjects(id: string | null) {
    return axios.get<IProject[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
  async getAggregatedData(id: string | null) {
    return axios.get<IAggregatedData[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  },
};
