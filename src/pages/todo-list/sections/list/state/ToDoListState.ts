import { makeAutoObservable } from "mobx";

type ToDo = {
  id: number;
  name: string;
};

export class ToDoListState {
  _todos: ToDo[] = [];

  _selectedToDoIds: number[] = [];

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

  get selectedToDoIds() {
    return this._selectedToDoIds;
  }

  toggleToDoIdSelection({
    toDoId,
  }: {
    toDoId: number;
  }) {
    const indexOfToDoIdAmongSelected = this._selectedToDoIds.indexOf(toDoId);

    if (indexOfToDoIdAmongSelected === -1) {
      this._selectedToDoIds.push(toDoId);
    } else {
      this._selectedToDoIds.splice(indexOfToDoIdAmongSelected, 1);
    }
  }
}
