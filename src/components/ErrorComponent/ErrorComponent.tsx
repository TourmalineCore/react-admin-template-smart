import { AxiosError } from 'axios';

function ErrorComponent({
  error,
  resetErrorBoundary,
  option = {},
}: {
  error: AxiosError | Error,
  resetErrorBoundary: (...args: Array<unknown>) => void,
  option?: ErrorBoundaryOptionTypes,
}) {
  return (
    <div
      className="section error-component"
      data-cy="error-component"
    >
      <span>{option.customError || error.message}</span>

      {option.canRetry && (
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
