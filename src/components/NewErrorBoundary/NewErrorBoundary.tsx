import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class NewErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`our error`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <span className="error-component">something went wrong</span>;
    }

    return this.props.children;
  }
}

export default NewErrorBoundary;
