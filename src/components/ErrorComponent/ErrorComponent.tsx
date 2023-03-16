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
      setErrorMes(`You have problems with name request`);
    } else {
      setErrorMes(`You have problems with internet`);
    }
  }, []);

  return (
    <div className="section error-component">
      {errorMes}
      <button
        type="button"
        onClick={() => resetErrorBoundary()}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorComponent;
