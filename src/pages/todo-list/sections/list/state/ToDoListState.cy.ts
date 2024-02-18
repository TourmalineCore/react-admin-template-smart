import { ToDoListState } from "./ToDoListState";

describe(`ToDoListState`, () => {
  it(`
  GIVEN initial state with no ToDo items
  WHEN ask for todos
  SHOULD return an empty list 
  `, () => {
    const toDoListState = new ToDoListState();

    expect(toDoListState.todos).to.deep.eq([]);
  });

  it(`
  GIVEN initial state with no ToDo items
  WHEN initialize with two ToDo items
  SHOULD return them from todos get property
  `, () => {
    const toDoListState = new ToDoListState();

    const todosForInitialization = [
      {
        id: 2,
        name: `Fizz`,
      },
      {
        id: 3,
        name: `Buzz`,
      },
    ];

    toDoListState.initialize({
      todos: todosForInitialization,
    });

    expect(toDoListState.todos).to.deep.eq(todosForInitialization);
  });
});
