const E2E_SMOKE_TODO_NAME_PREFIX = `[E2E-SMOKE]`;

describe(`ToDo List Smoke`, () => {
  it(`
  GIVEN ToDo items page
  WHEN add a new ToDo
  SHOULD see it in the list
  `, () => {
    cy.visit(`/to-dos`);

    const newToDoName = `${E2E_SMOKE_TODO_NAME_PREFIX} ${new Date()}`;

    cy.get(`[data-cy="new-to-do-name-input"]`)
      .type(newToDoName);

    cy.get(`[data-cy="add-new-to-do-button"]`)
      .click();

    cy.get(`[data-cy="to-dos"]`)
      .contains(newToDoName);
  });

  after(`Clean`, () => {
    cy.request({
      method: `GET`,
      url: `${Cypress.env(`API_URL`)}/to-dos`,
    }).then(({
      body,
    }) => {
      const {
        toDos,
      } = body;

      const toDosToDelete = toDos
        .filter(({
          name,
        }) => name.startsWith(E2E_SMOKE_TODO_NAME_PREFIX));

      toDosToDelete.forEach(({
        id,
      }) => {
        cy.request({
          method: `DELETE`,
          url: `${Cypress.env(`API_URL`)}/to-dos?toDoId=${id}`,
        });
      });
    });
  });
});

export {};
