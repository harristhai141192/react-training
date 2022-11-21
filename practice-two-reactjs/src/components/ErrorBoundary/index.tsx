// Libraries
import { Component, ReactNode } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Page404 from '@pages/404';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type ErrorBoundaryProps = { children: ReactNode };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return <Navigate to='/Page404' replace={true}></Navigate>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
