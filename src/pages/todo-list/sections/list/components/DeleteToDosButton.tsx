import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ToDoListStateContext } from "../state/ToDoListStateContext";

const DeleteToDosButton = observer(({
  onDeleteClick,
}: {
  onDeleteClick: () => unknown;
}) => {
  const toDoListState = useContext(ToDoListStateContext);

  return (
    <button
      type="button"
      data-cy="delete-selected-todos-button"
      disabled={toDoListState.selectedToDoIds.length === 0}
      onClick={onDeleteClick}
    >
      Delete
    </button>
  );
});

export {
  DeleteToDosButton,
};
