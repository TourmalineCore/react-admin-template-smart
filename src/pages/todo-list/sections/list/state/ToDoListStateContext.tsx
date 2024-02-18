import { createContext } from "react";
import { ToDoListState } from "./ToDoListState";

const ToDoListStateContext = createContext<ToDoListState>(null as unknown as ToDoListState);

export {
  ToDoListStateContext,
};
