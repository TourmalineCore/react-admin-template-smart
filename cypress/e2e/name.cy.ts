const CORRECT_URL = Cypress.env(`APP_URL`);
const ID = Cypress.env(`USER_ID`);

describe(`Name`, () => {
  it(`loads name when there is a success response from server`, () => {
    cy
      .intercept(`GET`, `${CORRECT_URL}/user/${ID}`, {
        fixture: `example.json`,
      });

    cy.visit(`/?id=${ID}`);

    cy
      .get(`[data-cy="table-name-cell"]`)
      .first()
      .contains(`Leanne Graham`);
  });
});

export {};
