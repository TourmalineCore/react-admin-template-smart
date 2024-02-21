import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ToDosStateContext } from "../state/ToDosStateContext";

const DeleteToDosButton = observer(({
  onDeleteClick,
}: {
  onDeleteClick: () => unknown,
}) => {
  const toDosState = useContext(ToDosStateContext);

  return (
    <button
      type="button"
      data-cy="delete-selected-todos-button"
      disabled={toDosState.selectedToDoIds.length === 0}
      onClick={onDeleteClick}
    >
      Delete
    </button>
  );
});

export {
  DeleteToDosButton,
};
