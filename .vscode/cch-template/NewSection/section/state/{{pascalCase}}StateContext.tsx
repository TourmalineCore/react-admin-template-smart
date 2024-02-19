import { createContext } from "react";
import { {{pascalCase}}State } from "./{{pascalCase}}State";

const {{pascalCase}}StateContext = createContext<{{pascalCase}}State>(null as unknown as {{pascalCase}}State);

export {
  {{pascalCase}}StateContext,
};
