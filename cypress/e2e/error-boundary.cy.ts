describe(`Error Boundary`, () => {
  const incorrectURL = Cypress.env(`API_URL`);
  const id = Cypress.env(`USER_ID`);

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
      .contains(`response.map is not a function`);
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

  it(`shows the error boundaries, and then only at the section name, request a 2nd attempt and it should succeed`, () => {
    cy.visit(`/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    }).as(`wait1`);

    cy.intercept(`GET`, `${incorrectURL}/comments?postId=${id}`, {
      statusCode: 200,
      body: undefined,
    }).as(`wait2`);

    cy.contains(`Name component have error`);

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 200,
      body: { name: `Erwan Henry` },
    });

    cy
      .get(`[data-cy="error-component"]`)
      .first();

    cy.intercept(`GET`, `${incorrectURL}/users/${id}`, {
      statusCode: 200,
      body: { name: `Erwan Henry` },
    });

    cy
      .get(`[data-cy="try-again-button"]`)
      .first()
      .click();

    cy
      .get(`[data-cy="name-section"]`)
      .contains(`Erwan Henry`);

    cy
      .get(`[data-cy="error-component"]`)
      .first()
      .contains(`response.map is not a function`);
  });
});

export {};
