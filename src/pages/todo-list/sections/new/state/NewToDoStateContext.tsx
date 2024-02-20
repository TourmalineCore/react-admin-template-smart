import { createContext } from "react";
import { NewToDoState } from "./NewToDoState";

const NewToDoStateContext = createContext<NewToDoState>(null as unknown as NewToDoState);

export {
  NewToDoStateContext,
};
