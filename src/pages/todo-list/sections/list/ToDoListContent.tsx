import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ToDoListStateContext } from "./state/ToDoListStateContext";

const ToDoListContent = observer(() => {
  const toDoListState = useContext(ToDoListStateContext);

  return (
    <ul>
      {
        toDoListState
          .todos
          .map(({
            id,
            name,
          }) => (
            <li
              key={`todo-${id}`}
              data-cy="todo-item"
            >
              <input
                type="checkbox"
                data-cy="todo-checkbox"
                onChange={() => toDoListState.toggleToDoIdSelection({ toDoId: id })}
                checked={toDoListState.selectedToDoIds.includes(id)}
              />
              {name}
            </li>
          ))
      }
    </ul>
  );
});

export {
  ToDoListContent,
};
