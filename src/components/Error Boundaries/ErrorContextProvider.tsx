import React, { ReactNode, useMemo, useState } from 'react';
import ErrorContext from './ErrorContext';

function ErrorContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [error, setError] = useState<any>('Andrey');

  function handlerError(errors: any) {
    setError(errors);

    return error;
  }

  const values = useMemo(() => ({
    error,
    handlerError,
  }), [error, handlerError]);

  return (
    <ErrorContext.Provider value={values}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContextProvider;
