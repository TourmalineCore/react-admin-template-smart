import axios from 'axios';

interface IName {
  userId: number;
  id: number;
  title:string;
  completed:boolean;
}

export const Service = {
  async getName() {
    return axios.get<IName>('https://jsonplaceholder.typicode.com/todos/1');
  },
};
