describe(`ToDo List Smoke`, () => {
  it(`
  GIVEN some ToDo items from the api
  WHEN open /todos page
  SHOULD see some ToDo items
  `, () => {
    cy.visit(`/todos`);

    cy.get(`[data-cy="todo-item"]`).should(`have.length.greaterThan`, 0);
  });
});

export {};
