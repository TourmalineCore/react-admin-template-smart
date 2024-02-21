import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ToDosStateContext } from "./state/ToDosStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { ToDosContent } from "./ToDosContent";
import { DeleteToDosButton } from "./components/DeleteToDosButton";

const ToDosContainer = observer(() => {
  const toDosState = useContext(ToDosStateContext);

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

      toDosState.initialize({
        todos: toDos,
      });
    }

    loadTodos();
  }, [toDosState.reloadToDosFlag]);

  return (
    <>
      <ToDosContent />
      <DeleteToDosButton
        onDeleteClick={onDeleteSelectedToDos}
      />
    </>
  );

  async function onDeleteSelectedToDos() {
    await api.post(
      `/to-dos/complete`,
      {
        toDoIds: toDosState.selectedToDoIds,
      },
    );
  }
});

export {
  ToDosContainer,
};
