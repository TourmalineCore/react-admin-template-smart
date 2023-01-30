/* eslint-disable @typescript-eslint/no-shadow */
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import reactLogo from '../../assets/react.svg';
import ErrorContext from '../../components/Error Boundaries/ErrorContext';
import Name from '../../components/Name';
import './Home.scss';

function Home() {
  const [count, setCount] = useState(0);

  const { error, handlerError } = useContext(ErrorContext);

  const handler = useErrorHandler();
  console.log('error', error);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Name />
      <div className="card">
        <button
          type="button"
          onClick={() => {
            setCount((count: number) => count + 1);
            handlerError(`re ${count + 1}`);
            handler(`re ${count + 1}`);
          }}
        >
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default observer(Home);
