import { useMemo } from "react";
import { {{pascalCase}}State } from "./state/{{pascalCase}}State";
import { {{pascalCase}}Container } from "./{{pascalCase}}Container";
import { {{pascalCase}}StateContext } from "./state/{{pascalCase}}StateContext";

export function {{pascalCase}}Page() {
  const {{camelCase}}State = useMemo(
    () => new {{pascalCase}}State(),
    [],
  );

  return (
    <{{pascalCase}}StateContext.Provider value={{{camelCase}}State}>
      <{{pascalCase}}Container />
    </{{pascalCase}}StateContext.Provider>
  );
}
