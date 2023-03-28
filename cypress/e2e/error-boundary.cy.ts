describe(`Error Boundary`, () => {
  const id = 2;
  const incorrectURL = `https://jsonplaceholder.typicode.com`;

  it(`shows error boundary for name section when receives 404 from server`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    });

    cy
      .get(`[data-cy="error-component"]`)
      .contains(`Name component have error`);
  });

  it(`shows error boundary for indicators section when receives unexpected values from server`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/comments?postId=${id}`, {
      statusCode: 200,
      body: undefined,
    });

    cy
      .get(`[data-cy="error-component"]`)
      .contains(`response?.data.map is not a function`);
  });

  it(`shows error boundary and then name when it fails at the first attempt to load but succeeds after retry`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    });

    cy.get(`[data-cy="error-component"]`);

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 200,
      body: { name: `Erwan Henry` },
    });

    cy.get(`[data-cy="try-again-button"]`).click();

    cy
      .get(`[data-cy="name-section"]`)
      .contains(`Erwan Henry`);
  });
});

export {};
