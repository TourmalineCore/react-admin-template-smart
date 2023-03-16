import { createContext } from 'react';
import NameState from './NameState';

// @ts-ignore
const NameStateContext = createContext<NameState>();

export default NameStateContext;
