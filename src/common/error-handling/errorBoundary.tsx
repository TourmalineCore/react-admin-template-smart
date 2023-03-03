/* eslint-disable react/no-unstable-nested-components */
import { AxiosError } from 'axios';
import { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

function customErrorBoundary<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return (props) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorComponent
          error={error as AxiosError}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      <Component {...props} />
    </ErrorBoundary>
  );
}

export default customErrorBoundary;
