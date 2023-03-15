/* eslint-disable react/no-unstable-nested-components */
import { ComponentType } from 'react';

function customErrorBoundary<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return (props) => (
    // <ErrorBoundary
    //   fallbackRender={({ error, resetErrorBoundary }) => (
    //     <ErrorComponent
    //       error={error as AxiosError}
    //       resetErrorBoundary={resetErrorBoundary}
    //     />
    //   )}
    // >
    <Component {...props} />
    // </ErrorBoundary>
  );
}

export default customErrorBoundary;
