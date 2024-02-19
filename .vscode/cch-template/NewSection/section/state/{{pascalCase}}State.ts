import { makeAutoObservable } from "mobx";

export class {{pascalCase}}State {
  constructor() {
    makeAutoObservable(this);
  }
}
