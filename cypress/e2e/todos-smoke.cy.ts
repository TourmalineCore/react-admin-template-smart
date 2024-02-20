describe(`ToDo List Smoke`, () => {
  it(`
  GIVEN some ToDo items from the api
  WHEN open /todos page
  SHOULD see some ToDo items
  `, () => {
    cy.visit(`/todos`);

    cy.get(`[data-cy="todo-item"]`).should(`have.length.greaterThan`, 0);
  });

  it(`
  GIVEN ToDo items page
  WHEN add a new ToDo
  SHOULD see it in the list
  `, () => {
    cy.visit(`/todos`);

    const newToDoName = `[E2E-SMOKE] ${new Date()}`;

    cy.get(`[data-cy="new-todo-name-input"]`)
      .type(newToDoName);

    cy.get(`[data-cy="add-new-todo-button"]`)
      .click();

    cy.get(`[data-cy="todos"]`)
      .contains(newToDoName);
  });
});

export {};
