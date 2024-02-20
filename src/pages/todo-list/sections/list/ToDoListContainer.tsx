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
          todos,
        },
      } = await api.get<{
        todos: {
          id: number;
          name: string;
        }[];
      }>(`/todos`);

      toDoListState.initialize({
        todos,
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
      >
        Delete
      </button>
    </>
  );
});

export {
  ToDoListContainer,
};
