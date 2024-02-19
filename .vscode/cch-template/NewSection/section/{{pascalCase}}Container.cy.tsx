// @ts-nocheck
import { {{pascalCase}}Container } from "./{{pascalCase}}Container";
import { {{pascalCase}}State } from "./state/{{pascalCase}}State";
import { {{pascalCase}}StateContext } from "./state/{{pascalCase}}StateContext";

describe(`{{pascalCase}}Container`, () => {
  it(`
  GIVEN
  WHEN
  SHOULD
  `, () => {
    mountComponent();
  });
});

function mountComponent() {
  const {{camelCase}}State = new {{pascalCase}}State();

  cy.mount(
    <{{pascalCase}}StateContext.Provider value={{{camelCase}}State}>
      <{{pascalCase}}Container />
    </{{pascalCase}}StateContext.Provider>,
  );
}
