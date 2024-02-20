import { useMemo } from "react";
import { ToDoListState } from "./sections/list/state/ToDoListState";
import { ToDoListContainer } from "./sections/list/ToDoListContainer";
import { ToDoListStateContext } from "./sections/list/state/ToDoListStateContext";
import { NewToDoState } from "./sections/new/state/NewToDoState";
import { NewToDoStateContext } from "./sections/new/state/NewToDoStateContext";
import { NewToDoContainer } from "./sections/new/NewToDoContainer";

export function ToDoListPage() {
  const toDoListState = useMemo(
    () => new ToDoListState(),
    [],
  );

  const newToDoState = useMemo(
    () => new NewToDoState(),
    [],
  );

  return (
    <>
      <NewToDoStateContext.Provider value={newToDoState}>
        <NewToDoContainer
          onNewToDoAdded={() => toDoListState.triggerToDosReload()}
        />
      </NewToDoStateContext.Provider>
      <ToDoListStateContext.Provider value={toDoListState}>
        <ToDoListContainer />
      </ToDoListStateContext.Provider>
    </>
  );
}
