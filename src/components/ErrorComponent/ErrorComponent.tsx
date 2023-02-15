function ErrorComponent({
  error,
}:{
  error: Error;
}) {
  return (
    <div className="section error-component">
      Error:
      {error.message}
    </div>
  );
}

export default ErrorComponent;
