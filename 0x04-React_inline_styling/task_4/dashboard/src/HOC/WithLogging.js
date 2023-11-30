import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLoggingComponent.displayName = `WithLogging(${wrappedComponentName})`;

  return WithLoggingComponent;
};

export default WithLogging;
