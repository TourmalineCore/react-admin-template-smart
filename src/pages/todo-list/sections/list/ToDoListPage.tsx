import { useMemo } from "react";
import { ToDoListState } from "./state/ToDoListState";
import { ToDoListContainer } from "./ToDoListContainer";
import { ToDoListStateContext } from "./state/ToDoListStateContext";

export function ToDoListPage() {
  const toDoListState = useMemo(
    () => new ToDoListState(),
    [],
  );

  return (
    <ToDoListStateContext.Provider value={toDoListState}>
      <ToDoListContainer />
    </ToDoListStateContext.Provider>
  );
}
