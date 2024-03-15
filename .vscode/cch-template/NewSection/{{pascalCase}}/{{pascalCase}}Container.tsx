import { useContext } from "react";
import { {{pascalCase}}StateContext } from "./state/{{pascalCase}}StateContext";
import { {{pascalCase}}Content } from "./{{pascalCase}}Content";

const {{pascalCase}}Container = () => {
  const {{camelCase}}State = useContext({{pascalCase}}StateContext);

  return (
    <{{pascalCase}}Content />
  );
};

export {
  {{pascalCase}}Container,
};
