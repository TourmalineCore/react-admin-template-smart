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

    toDoListState.toggleToDoIdSelection({
      toDoId: 3,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([2, 3]);

    toDoListState.toggleToDoIdSelection({
      toDoId: 1,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([2, 3, 1]);
  });

  it(`
  GIVEN two ToDo items are selected
  WHEN unselect them on by one
  SHOULD dissapear from the list of selected IDs
  `, () => {
    const toDoListState = new ToDoListState();

    const todosForInitialization = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    toDoListState.initialize({
      todos: todosForInitialization,
    });

    toDoListState.toggleToDoIdSelection({
      toDoId: 1,
    });
    toDoListState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([1, 2]);

    toDoListState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([1]);

    toDoListState.toggleToDoIdSelection({
      toDoId: 1,
    });

    expect(toDoListState.selectedToDoIds).to.deep.eq([]);
  });
});
