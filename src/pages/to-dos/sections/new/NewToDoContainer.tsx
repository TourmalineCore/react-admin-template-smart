import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { NewToDoStateContext } from "./state/NewToDoStateContext";
import { api } from "../../../../common/utils/HttpClient";
import { NewToDoContent } from "./NewToDoContent";

const NewToDoContainer = observer(({
  onNewToDoAdded,
}: {
  onNewToDoAdded: () => unknown,
}) => {
  const newToDoState = useContext(NewToDoStateContext);

  return (
    <NewToDoContent
      onAddClick={onAdd}
    />
  );

  async function onAdd() {
    await api.post(
      `/to-dos`,
      {
        name: newToDoState.name,
      },
    );

    onNewToDoAdded();
  }
});

export {
  NewToDoContainer,
};
