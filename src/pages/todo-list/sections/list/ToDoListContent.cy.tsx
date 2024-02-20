// @ts-nocheck

import { ToDoListContent } from "./ToDoListContent";
import { ToDoListState } from "./state/ToDoListState";
import { ToDoListStateContext } from "./state/ToDoListStateContext";

describe(`ToDoListContent`, () => {
  it(`
  GIVEN Two ToDo items
  WHEN render the component
  SHOULD see them
  `, () => {
    mountComponent({
      todos: [
        {
          id: 1,
          name: `First Fizz`,
        },
        {
          id: 2,
          name: `Second Buzz`,
        },
      ],
    });

    cy.contains(`First Fizz`);
    cy.contains(`Second Buzz`);
  });

  it(`
  GIVEN default state with no ToDo items
  WHEN two ToDo items for initialization of state
  SHOULD see them
  `, () => {
    mountComponent({
      todos: [],
    });

    cy.get<ToDoListState>(`@toDoListState`)
      .then((toDoListState) => {
        toDoListState.initialize({
          todos: [
            {
              name: `Third`,
            },
            {
              name: `Forth`,
            },
          ],
        });
      });

    cy.contains(`Third`);
    cy.contains(`Forth`);
  });

  it(`
  GIVEN two ToDo items
  WHEN click on the 2nd of them
  SHOULD add its ID to the list of selected IDs
  `, () => {
    mountComponent({
      todos: [
        {
          id: 5,
          name: `Fifth`,
        },
        {
          id: 6,
          name: `Sixth`,
        },
      ],
    });

    cy.get(`[data-cy="todo-item"]`)
      .contains(`Sixth`)
      .click();

    cy.get(`@toDoListState`).should((toDoListState) => {
      expect(toDoListState.selectedToDoIds).to.deep.eq([6]);
    });
  });
});

function mountComponent({
  todos,
}) {
  const toDoListState = new ToDoListState();
  cy.wrap(toDoListState).as(`toDoListState`);

  toDoListState.initialize({
    todos,
  });

  cy.mount(
    <ToDoListStateContext.Provider value={toDoListState}>
      <ToDoListContent />
    </ToDoListStateContext.Provider>,
  );
}
