import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { App } from './App';

import './index.scss';
import 'react-loading-skeleton/dist/skeleton.css';

// Why is this file main.tsx but not index.tsx? Is it a vite convention of some sort?

import ErrorComponent from './components/ErrorComponent/ErrorComponent';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <App />
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
