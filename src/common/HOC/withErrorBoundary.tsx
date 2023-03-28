/* eslint-disable react/no-unstable-nested-components */
import { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

function withErrorBoundary<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  option?: {
    customError?: string;
    hasRetry?: boolean;
  },
): ComponentType<P> {
  return (props) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorComponent
          error={error}
          resetErrorBoundary={resetErrorBoundary}
          option={option}
        />
      )}
    >
      <Component {...props} />
    </ErrorBoundary>
  );
}

export default withErrorBoundary;
