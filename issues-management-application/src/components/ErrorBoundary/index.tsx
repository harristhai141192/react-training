// Libraries
import { Component, ReactNode } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

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
      return (
        <Box>
          <Text size='xl'>An error has been occurred!! </Text>
          <Text as='sub' style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
          </Text>
          <Button type='button' onClick={() => this.setState({ hasError: false })}>
            Try again?
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
