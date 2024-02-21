// @ts-nocheck

import { ToDosState } from "./ToDosState";

describe(`ToDosState`, () => {
  it(`
  GIVEN initial state with no ToDo items
  WHEN ask for todos
  SHOULD return an empty list 
  `, () => {
    const toDosState = new ToDosState();

    expect(toDosState.todos).to.deep.eq([]);
  });

  it(`
  GIVEN initial state with no ToDo items
  WHEN initialize with two ToDo items
  SHOULD return them from todos get property
  `, () => {
    const toDosState = new ToDosState();

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

    toDosState.initialize({
      todos: todosForInitialization,
    });

    expect(toDosState.todos).to.deep.eq(todosForInitialization);
  });

  it(`
  GIVEN three ToDo items
  WHEN select them one by one
  SHOULD end up in list of selected IDs
  `, () => {
    const toDosState = new ToDosState();

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

    toDosState.initialize({
      todos: todosForInitialization,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([]);

    toDosState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([2]);

    toDosState.toggleToDoIdSelection({
      toDoId: 3,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([2, 3]);

    toDosState.toggleToDoIdSelection({
      toDoId: 1,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([2, 3, 1]);
  });

  it(`
  GIVEN two ToDo items are selected
  WHEN unselect them on by one
  SHOULD dissapear from the list of selected IDs
  `, () => {
    const toDosState = new ToDosState();

    const todosForInitialization = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    toDosState.initialize({
      todos: todosForInitialization,
    });

    toDosState.toggleToDoIdSelection({
      toDoId: 1,
    });
    toDosState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([1, 2]);

    toDosState.toggleToDoIdSelection({
      toDoId: 2,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([1]);

    toDosState.toggleToDoIdSelection({
      toDoId: 1,
    });

    expect(toDosState.selectedToDoIds).to.deep.eq([]);
  });
});
