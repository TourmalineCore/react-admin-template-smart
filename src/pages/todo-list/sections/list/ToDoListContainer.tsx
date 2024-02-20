import { useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { ToDoListStateContext } from "./state/ToDoListStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { ToDoListContent } from "./ToDoListContent";

const ToDoListContainer = observer(() => {
  const toDoListState = useContext(ToDoListStateContext);

  // https://stackoverflow.com/a/74609594
  const effectRan = useRef(false);

  useEffect(() => {
    async function loadTodos() {
      const {
        data: {
          toDos,
        },
      } = await api.get<{
        toDos: {
          id: number;
          name: string;
        }[];
      }>(`/toDos`);

      toDoListState.initialize({
        todos: toDos,
      });
    }

    if (!effectRan.current) {
      loadTodos();
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  return (
    <>
      <ToDoListContent />
      <button
        type="button"
        data-cy="delete-selected-todos-button"
        disabled={toDoListState.selectedToDoIds.length === 0}
        onClick={onDeleteSelectedToDos}
      >
        Delete
      </button>
    </>
  );

  async function onDeleteSelectedToDos() {
    await api.post(
      `/toDos/complete`,
      {
        toDoIds: toDoListState.selectedToDoIds,
      },
    );
  }
});

export {
  ToDoListContainer,
};
