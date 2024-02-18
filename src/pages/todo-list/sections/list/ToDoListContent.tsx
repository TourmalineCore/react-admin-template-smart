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
          .map((todo) => (
            <li>{todo.name}</li>
          ))
      }
    </ul>
  );
});

export {
  ToDoListContent,
};
