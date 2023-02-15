import { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

function customErrorBoundary<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return (props) => (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Component {...props} />
    </ErrorBoundary>
  );
}

export default customErrorBoundary;
