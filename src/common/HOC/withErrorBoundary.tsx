/* eslint-disable react/no-unstable-nested-components */
import { AxiosError } from 'axios';
import { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

function withErrorBoundary<P extends Record<string, unknown>, ErrorTypes = AxiosError>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return (props) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorComponent
          error={error as ErrorTypes}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      <Component {...props} />
    </ErrorBoundary>
  );
}

export default withErrorBoundary;
