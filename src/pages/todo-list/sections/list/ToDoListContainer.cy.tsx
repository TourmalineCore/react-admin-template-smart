// @ts-nocheck

import { API_ROOT } from "../../../../common/config";
import { ToDoListContainer } from "./ToDoListContainer";
import { ToDoListState } from "./state/ToDoListState";
import { ToDoListStateContext } from "./state/ToDoListStateContext";

describe(`ToDoListContainer`, () => {
  beforeEach(() => {
    cy.intercept(
      `GET`,
      `${API_ROOT}/todos`,
      {
        todos: [
          {
            id: 1,
            name: `Un`,
          },
          {
            id: 2,
            name: `Deux`,
          },
        ],
      },
    );
  });

  it(`
  GIVEN Two ToDo items from network
  WHEN render the component
  SHOULD see them
  `, () => {
    mountComponent();

    cy.contains(`Deux`);
  });

  it(`
  GIVEN Two ToDo items from network
  WHEN render the component and there is nothing selected
  SHOULD see disabled Delete button
  `, () => {
    mountComponent();

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .should(`be.disabled`);
  });

  it(`
  GIVEN Two ToDo items from network
  WHEN select the first one
  SHOULD see enabled Delete button
  `, () => {
    mountComponent();

    cy.contains(`Un`)
      .click();

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .should(`not.be.disabled`);
  });
});

function mountComponent() {
  const toDoListState = new ToDoListState();

  cy.mount(
    <ToDoListStateContext.Provider value={toDoListState}>
      <ToDoListContainer />
    </ToDoListStateContext.Provider>,
  );
}
