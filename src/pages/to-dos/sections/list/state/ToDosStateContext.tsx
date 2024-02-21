import { createContext } from "react";
import { ToDosState } from "./ToDosState";

const ToDosStateContext = createContext<ToDosState>(null as unknown as ToDosState);

export {
  ToDosStateContext,
};
