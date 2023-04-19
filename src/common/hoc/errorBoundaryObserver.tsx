/* eslint-disable react/no-unstable-nested-components */
import { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

// renamed the component, since the package react-error-boundary and our HOC have the same names
// ToDo https://tanstack.com/query/v4/docs/react/reference/QueryErrorResetBoundary
function errorBoundaryObserver<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  option?: ErrorBoundaryOptionTypes,
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

export default errorBoundaryObserver;
