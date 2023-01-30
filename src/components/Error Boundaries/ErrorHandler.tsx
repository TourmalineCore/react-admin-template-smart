import React, { ReactNode } from 'react';
import ErrorBoundaries from './ErrorBoundaries';

function ErrorHandler({ children }: {
  children: ReactNode
}) {
  return (
    <ErrorBoundaries>{children}</ErrorBoundaries>
  );
}

export default ErrorHandler;
