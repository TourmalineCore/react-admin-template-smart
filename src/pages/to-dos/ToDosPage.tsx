import { useMemo } from "react";
import { ToDosState } from "./sections/list/state/ToDosState";
import { ToDosContainer } from "./sections/list/ToDosContainer";
import { ToDosStateContext } from "./sections/list/state/ToDosStateContext";
import { NewToDoState } from "./sections/new/state/NewToDoState";
import { NewToDoStateContext } from "./sections/new/state/NewToDoStateContext";
import { NewToDoContainer } from "./sections/new/NewToDoContainer";

export function ToDosPage() {
  const toDosState = useMemo(
    () => new ToDosState(),
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
          onNewToDoAdded={() => toDosState.triggerToDosReload()}
        />
      </NewToDoStateContext.Provider>
      <ToDosStateContext.Provider value={toDosState}>
        <ToDosContainer />
      </ToDosStateContext.Provider>
    </>
  );
}
