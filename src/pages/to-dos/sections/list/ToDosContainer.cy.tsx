// @ts-nocheck

import { API_ROOT } from "../../../../common/config";
import { ToDosContainer } from "./ToDosContainer";
import { ToDosState } from "./state/ToDosState";
import { ToDosStateContext } from "./state/ToDosStateContext";

describe(`ToDosContainer`, () => {
  beforeEach(() => {
    cy.intercept(
      `GET`,
      `${API_ROOT}/to-dos`,
      {
        toDos: [
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
  WHEN select both of them and click Complete
  SHOULD call network with the ids in the body
  `, () => {
    cy.intercept(
      `POST`,
      `${API_ROOT}/to-dos/complete`,
      `true`, // because it needs this to be specified and to be string, even if it is not correct by the API contract
    ).as(`completeToDosNetworkCall`);

    mountComponent();

    cy.contains(`Un`)
      .click();

    cy.contains(`Deux`)
      .click();

    cy.get(`[data-cy=delete-selected-todos-button]`)
      .click();

    cy.get(`@completeToDosNetworkCall`)
      .its(`request.body`)
      .should(`deep.equal`, {
        toDoIds: [1, 2],
      });
  });
});

function mountComponent() {
  const toDosState = new ToDosState();

  cy.mount(
    <ToDosStateContext.Provider value={toDosState}>
      <ToDosContainer />
    </ToDosStateContext.Provider>,
  );
}
