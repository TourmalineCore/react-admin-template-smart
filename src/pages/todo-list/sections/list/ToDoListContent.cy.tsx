import { ToDoListContent } from "./ToDoListContent";
import { ToDoListState } from "./state/ToDoListState";
import { ToDoListStateContext } from "./state/ToDoListStateContext";

describe(`ToDoListContent`, () => {
  it(`
  GIVEN Two ToDo items
  WHEN render the component
  SHOULD see them
  `, () => {
    mountComponent();

    cy.contains(`First Fizz`);
    cy.contains(`Second Buzz`);
  });
});

function mountComponent() {
  const toDoListState = new ToDoListState();

  toDoListState.initialize({
    todos: [
      {
        name: `First Fizz`,
      },
      {
        name: `Second Buzz`,
      },
    ],
  });

  cy.mount(
    <ToDoListStateContext.Provider value={toDoListState}>
      <ToDoListContent />
    </ToDoListStateContext.Provider>,
  );
}
