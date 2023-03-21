// ToDo add a test case when there is a js error, e.g. trying to access property of undefined response with 200 success status code
describe(`Error Boundary`, () => {
  const id = 2;
  const incorrectURL = `https://jsonplaceholder.typicode.com/users`;

  it(`shows error boundary for name section when receives 404 from server`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    });

    cy
      .get(`[data-cy="error-component"]`)
      .contains(`problems with name request`);
  });

  it(`shows error boundary and then name when it fails at the first attempt to load but succeeds after retry`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    });

    cy.get(`[data-cy="error-component"]`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 200,
      body: { name: `Erwan Henry` },
    });

    cy.get(`[data-cy="try-again-button"]`).click();

    cy
      .get(`[data-cy="name-section"]`)
      .contains(`Erwan Henry`);
  });
});
