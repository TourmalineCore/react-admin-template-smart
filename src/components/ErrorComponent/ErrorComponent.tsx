import { AxiosError } from 'axios';

function ErrorComponent({
  error,
  resetErrorBoundary,
  option,
}: {
  error: AxiosError | Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
  option?: {
    customError?: string;
    hasRetry?: boolean;
  };
}) {
  return (
    <div
      className="section error-component"
      data-cy="error-component"
    >
      {option ? option.customError : error.message}

      {option?.hasRetry && (
        <button
          type="button"
          onClick={() => resetErrorBoundary()}
          data-cy="try-again-button"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorComponent;
