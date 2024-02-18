import { ToDoListContent } from "./ToDoListContent";

describe(`ToDoListContent`, () => {
  it(`
  GIVEN Two ToDo items
  WHEN render the component
  SHOULD see them
  `, () => {
    cy.mount(<ToDoListContent />);

    cy.contains(`First ToDo`);
    cy.contains(`Second ToDo`);
  });
});
