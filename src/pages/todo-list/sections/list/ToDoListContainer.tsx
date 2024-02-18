import { useContext, useEffect, useRef } from "react";
import { ToDoListStateContext } from "./state/ToDoListStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { ToDoListContent } from "./ToDoListContent";

const ToDoListContainer = () => {
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
    <ToDoListContent />
  );
};

export {
  ToDoListContainer,
};
