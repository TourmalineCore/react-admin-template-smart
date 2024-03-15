import {{pascalCase}} from "./{{pascalCase}}";

describe(`{{pascalCase}}`, () => {
  it(`
    SHOULD
    WHEN `, 
    () => {
        mountComponent();
  });
});

function mountComponent() {
  return (
    cy.mount(
      <{{pascalCase}} />,
    )
  );
}
