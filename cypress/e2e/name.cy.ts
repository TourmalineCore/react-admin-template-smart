// ToDo extract to env and read from there in the main code and in tests as well
const CORRECT_URL = `https://jsonplaceholder.typicode.com/users`;
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
