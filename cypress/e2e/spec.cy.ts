describe(`Test name is loaded correctly`, () => {
  const id = 5;
  const correctURL = `https://jsonplaceholder.typicode.com/users`;

  it.skip(`receives correct response status`, () => {
    cy.request({
      url: `${correctURL}/${id}`,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it.skip(`loads name`, () => {
    cy.intercept(`GET`, `${correctURL}/${id}`, {
      fixture: `example.json`,

    }).as(`request`);
    cy.visit(`http://localhost:5173/?id=${id}`);
    cy.wait(`@request`);
    cy.wait(5000);
    cy.get(`.table .table-row:first-child .column2`).should(`have.text`, `Leanne Graham`);
  });
});

describe(`Test error boundary is shown when request for name fails`, () => {
  const id = 2;
  const incorrectURL = `https://jsonplaceholder.typicode.com/users`;

  it(`shows error boundary for name section`, () => {
    cy.visit(`http://localhost:5173/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
      failOnStatusCode: false,
    }).as(`request`);

    cy.wait(`@request`);
    cy.wait(10000);
    cy.get(`.error-component`);
  });
});
