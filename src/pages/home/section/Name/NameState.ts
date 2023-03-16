import { makeAutoObservable } from 'mobx';

class NameState {
  private _name = '';

  private _isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get name() {
    return this._name;
  }

  get isLoading() {
    return this._isLoading;
  }

  setName(newName: string) {
    this._name = newName;
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading;
  }
}

export default NameState;
