import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

function ErrorComponent({
  error,
  resetErrorBoundary,
}: {
  error: AxiosError | unknown;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}) {
  const [errorMes, setErrorMes] = useState(``);

  useEffect(() => {
    if ((error as AxiosError).response?.status === 404) {
      // ToDo needs to make it possible to configure error message per network/call
      setErrorMes(`You have problems with name request`);
    } else {
      // Why do we print internet problems when we have 500?
      setErrorMes(`You have problems with internet`);
    }
  }, []);

  return (
    <div
      className="section error-component"
      data-cy="error-component"
    >
      {errorMes}
      <button
        type="button"
        onClick={() => resetErrorBoundary()}
        data-cy="try-again-button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorComponent;
