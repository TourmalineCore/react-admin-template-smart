import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { NewToDoStateContext } from "./state/NewToDoStateContext";

const NewToDoContent = observer(({
  onAddClick,
}: {
  onAddClick: () => unknown,
}) => {
  const newToDoState = useContext(NewToDoStateContext);

  return (
    <>
      <input
        onChange={(e) => newToDoState.changeName({
          newName: e.target.value,
        })}
        data-cy="new-to-do-name-input"
      />
      <button
        type="button"
        onClick={onAddClick}
        data-cy="add-new-to-do-button"
      >
        Add
      </button>
    </>
  );
});

export {
  NewToDoContent,
};
