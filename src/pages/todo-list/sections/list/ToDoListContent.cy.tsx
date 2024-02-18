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
          name: `First Fizz`,
        },
        {
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
