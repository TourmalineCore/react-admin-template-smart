import React, { ReactNode } from 'react';

function ErrorBoundaries({
  children,
}:{
  children: ReactNode
}) {
  return (
    <div>{children}</div>
  );
}

export default ErrorBoundaries;
