import { Component, ErrorInfo, ReactNode } from 'react';

// // Reference for Error-Boundary technique
// // https://reactjs.org/docs/concurrent-mode-suspense.html#handling-errors

interface Props {
  children: ReactNode;
  fallBack: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * class instance for ErrorBoundary
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError( _: Error ): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch( error: Error, errorInfo: ErrorInfo ) {
    console.error( 'Uncaught error:', error, errorInfo );
  }

  public render() {
    if ( this.state.hasError ) {
      return this.props.fallBack;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
