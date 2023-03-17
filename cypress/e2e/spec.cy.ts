describe(`Test name is loaded correctly`, () => {
  const id = 5;
  const correctURL = `https://jsonplaceholder.typicode.com/users`;

  it(`receives correct response status`, () => {
    cy.request({
      url: `${correctURL}/${id}`,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it(`loads name`, () => {
    cy.intercept(`GET`, `${correctURL}/${id}`, {
      fixture: `example.json`,

    }).as(`request`);
    cy.visit(`http://localhost:5173/?id=${id}`);
    cy.wait(`@request`);
    cy.wait(5000);
    cy.get(`.table .table-row:first-child .column2`).should(`have.text`, `Leanne Graham`);
  });
});

describe(`Test error boundary behavior`, () => {
  const id = 2;
  const incorrectURL = `https://jsonplaceholder.typicode.com/users`;

  it(`shows error boundary for name section`, () => {
    cy.visit(`http://localhost:5173/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    }).as(`request`);

    cy.wait(`@request`);
    cy.wait(2000);
    cy.get(`.error-component`);
  });

  it(`shows name instead of error boundary for name section after retry`, () => {
    cy.visit(`http://localhost:5173/?id=${id}`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 404,
      body: `404 Not Found!`,
    }).as(`request`);

    cy.wait(`@request`);
    cy.wait(2000);
    cy.get(`.error-component`);

    cy.intercept(`GET`, `${incorrectURL}/${id}`, {
      statusCode: 200,
      body: { name: `Erwan Henry` },
    }).as(`request`);

    cy.get(`button`).contains(`Try again`).click();
    cy.get(`.name`).should(`have.text`, `Erwan Henry`);
  });
});
