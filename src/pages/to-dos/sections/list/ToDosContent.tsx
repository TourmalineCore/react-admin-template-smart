import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ToDosStateContext } from "./state/ToDosStateContext";

const ToDosContent = observer(() => {
  const toDosState = useContext(ToDosStateContext);

  return (
    <ul
      data-cy="to-dos"
    >
      {
        toDosState
          .todos
          .map(({
            id,
            name,
          }) => (
            <li
              key={`to-do-${id}`}
              data-cy="to-do-item"
            >
              <input
                id={`to-do-${id}-checkbox`}
                type="checkbox"
                data-cy="to-do-checkbox"
                onChange={() => toDosState.toggleToDoIdSelection({
                  toDoId: id,
                })}
                checked={toDosState.selectedToDoIds.includes(id)}
              />
              <label
                htmlFor={`to-do-${id}-checkbox`}
              >
                {name}
              </label>
            </li>
          ))
      }
    </ul>
  );
});

export {
  ToDosContent,
};
