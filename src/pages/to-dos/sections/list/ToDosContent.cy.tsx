// @ts-nocheck

import { ToDosContent } from "./ToDosContent";
import { ToDosState } from "./state/ToDosState";
import { ToDosStateContext } from "./state/ToDosStateContext";

describe(`ToDosContent`, () => {
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

    cy.get<ToDosState>(`@toDosState`)
      .then((toDosState) => {
        toDosState.initialize({
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

    cy.get(`[data-cy="to-do-item"]`)
      .contains(`Sixth`)
      .click();

    cy.get(`@toDosState`).should((toDosState) => {
      expect(toDosState.selectedToDoIds).to.deep.eq([6]);
    });
  });
});

function mountComponent({
  todos,
}) {
  const toDosState = new ToDosState();
  cy.wrap(toDosState).as(`toDosState`);

  toDosState.initialize({
    todos,
  });

  cy.mount(
    <ToDosStateContext.Provider value={toDosState}>
      <ToDosContent />
    </ToDosStateContext.Provider>,
  );
}
