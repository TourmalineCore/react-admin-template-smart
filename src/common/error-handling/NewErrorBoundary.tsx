/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';

class NewErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('our error', error, errorInfo);
  }

  render() {
    console.log('this.state.hasError', this.state.hasError);
    // @ts-ignore
    if (this.state.hasError) {
      return <span className="error-component">something went wrong</span>;
    }

    // @ts-ignore
    return this.props.children;
  }
}

export default NewErrorBoundary;
