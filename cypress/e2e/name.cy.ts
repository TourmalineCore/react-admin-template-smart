const CORRECT_URL = Cypress.env(`CORRECT_URL`);
const ID = 5;

describe(`Name`, () => {
  it(`loads name when there is a success response from server`, () => {
    cy
      .intercept(`GET`, `${CORRECT_URL}/${ID}`, {
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
