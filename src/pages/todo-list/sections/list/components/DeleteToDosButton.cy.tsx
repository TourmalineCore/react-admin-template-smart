import { ToDoListState } from "../state/ToDoListState";
import { ToDoListStateContext } from "../state/ToDoListStateContext";
import { DeleteToDosButton } from "./DeleteToDosButton";

describe(`DeleteToDosButton`, () => {
  it(`
  GIVEN Two ToDo items
  WHEN render the component and there is nothing selected
  SHOULD see disabled Delete button
  `, () => {
    mountComponent();

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .should(`be.disabled`);
  });

  it(`
  GIVEN Two ToDo items
  WHEN select the first one
  SHOULD see enabled Delete button
  `, () => {
    mountComponent();

    cy.get<ToDoListState>(`@toDoListState`).then((toDoListState) => {
      toDoListState.toggleToDoIdSelection({
        toDoId: 1,
      });
    });

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .should(`not.be.disabled`);
  });
});

function mountComponent() {
  const toDoListState = new ToDoListState();
  cy.wrap(toDoListState).as(`toDoListState`);

  toDoListState.initialize({
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
  });

  cy.mount(
    <ToDoListStateContext.Provider value={toDoListState}>
      <DeleteToDosButton onDeleteClick={() => {}} />
    </ToDoListStateContext.Provider>,
  );
}
