type ToDo = {
  name: string;
};

export class ToDoListState {
  _todos: ToDo[] = [];

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
