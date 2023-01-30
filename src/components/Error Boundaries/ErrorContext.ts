import { createContext } from 'react';
import { IErrorState } from './ErrorState';

// @ts-ignore
const ErrorContext = createContext<IErrorState>();

export default ErrorContext;
