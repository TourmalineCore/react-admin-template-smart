import { makeAutoObservable } from 'mobx';

export interface IErrorState {
  error: string;
  handlerError: (error: string) => string;
}

class ErrorState implements IErrorState {
  private _error = '';

  constructor() {
    makeAutoObservable(this);
  }

  get error() {
    return this._error;
  }

  handlerError(error: string) {
    return this._error = error;
  }
}

export default ErrorState;
