import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { App } from './App';
import ErrorContextProvider from './components/Error Boundaries/ErrorContextProvider';
import ErrorHandler from './components/Error Boundaries/ErrorHandler';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <ErrorHandler>
        <ErrorBoundary fallback={<div>Error</div>}>
          <App />
        </ErrorBoundary>
      </ErrorHandler>
    </ErrorContextProvider>
  </React.StrictMode>,
);
