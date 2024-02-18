import { useContext, useEffect } from "react";
import { ToDoListStateContext } from "./state/ToDoListStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { ToDoListContent } from "./ToDoListContent";

const ToDoListContainer = () => {
  const toDoListState = useContext(ToDoListStateContext);

  useEffect(() => {
    async function loadTodos() {
      const {
        data,
      } = await api.get<{
        id: number;
        name: string;
      }[]>(`/todos`);

      toDoListState.initialize({
        todos: data,
      });
    }

    loadTodos();
  }, []);

  return (
    <ToDoListContent />
  );
};

export {
  ToDoListContainer,
};
