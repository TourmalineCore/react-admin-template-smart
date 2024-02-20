// @ts-nocheck

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

  it(`
  GIVEN three ToDo items
  WHEN select them one by one
  SHOULD end up in list of selected IDs
  `, () => {
    const toDoListState = new ToDoListState();

    const todosForInitialization = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];

    toDoListState.initialize({
      todos: todosForInitialization,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([]);

    toDoListState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([2]);
  });
});
