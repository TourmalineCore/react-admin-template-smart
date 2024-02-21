import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ToDoListStateContext } from "./state/ToDoListStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { ToDoListContent } from "./ToDoListContent";
import { DeleteToDosButton } from "./components/DeleteToDosButton";

const ToDoListContainer = observer(() => {
  const toDoListState = useContext(ToDoListStateContext);

  useEffect(() => {
    async function loadTodos() {
      const {
        data: {
          toDos,
        },
      } = await api.get<{
        toDos: {
          id: number,
          name: string,
        }[],
      }>(`/to-dos`);

      toDoListState.initialize({
        todos: toDos,
      });
    }

    loadTodos();
  }, [toDoListState.reloadToDosFlag]);

  return (
    <>
      <ToDoListContent />
      <DeleteToDosButton
        onDeleteClick={onDeleteSelectedToDos}
      />
    </>
  );

  async function onDeleteSelectedToDos() {
    await api.post(
      `/to-dos/complete`,
      {
        toDoIds: toDoListState.selectedToDoIds,
      },
    );
  }
});

export {
  ToDoListContainer,
};
