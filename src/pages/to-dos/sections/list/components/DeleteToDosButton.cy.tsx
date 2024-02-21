import { ToDosState } from "../state/ToDosState";
import { ToDosStateContext } from "../state/ToDosStateContext";
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

    cy.get<ToDosState>(`@toDosState`).then((toDosState) => {
      toDosState.toggleToDoIdSelection({
        toDoId: 1,
      });
    });

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .should(`not.be.disabled`);
  });
});

function mountComponent() {
  const toDosState = new ToDosState();
  cy.wrap(toDosState).as(`toDosState`);

  toDosState.initialize({
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
    <ToDosStateContext.Provider value={toDosState}>
      <DeleteToDosButton onDeleteClick={() => {}} />
    </ToDosStateContext.Provider>,
  );
}
