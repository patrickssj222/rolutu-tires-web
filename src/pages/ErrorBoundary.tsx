import { ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

type ErrorBoundaryComponentProps = {
  children: ReactNode
};

const ErrorBoundaryComponent: React.FC<ErrorBoundaryComponentProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryComponent;