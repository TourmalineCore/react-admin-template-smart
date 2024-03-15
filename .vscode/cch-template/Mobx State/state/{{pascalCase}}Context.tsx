import { createContext, useMemo, ReactNode } from "react";
import {{pascalCase}}State from "./{{pascalCase}}State";

const {{pascalCase}}Context = createContext<{{pascalCase}}State>(null as unknown as {{pascalCase}}State);

function {{pascalCase}}Provider({
  children
}: {
  children: ReactNode
}) {
    const productsState = useMemo(() => new {{pascalCase}}State(), []);
  
    return (
      <{{pascalCase}}Context.Provider value={productsState}>
        {children}
      </{{pascalCase}}Context.Provider>
    );
  }
  
export {
  {{pascalCase}}Context,
  {{pascalCase}}Provider,
}  