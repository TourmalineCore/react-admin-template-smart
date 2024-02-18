import { makeAutoObservable } from "mobx";

type ToDo = {
  id: number;
  name: string;
};

export class ToDoListState {
  _todos: ToDo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initialize({
    todos,
  }: {
    todos: ToDo[];
  }) {
    this._todos = todos;
  }

  get todos() {
    return this._todos;
  }
}
