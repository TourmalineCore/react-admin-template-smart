function ErrorComponent({
  error,
  resetErrorBoundary,
}:{
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}) {
  return (
    <div>
      <div>
        Error:
        {error.message}
      </div>
      <button type="button" onClick={resetErrorBoundary}>Click</button>
    </div>
  );
}

export default ErrorComponent;
