import PropTypes from "prop-types";
import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    if (error) return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export const AsyncLoader = ({ children }) => {
  return (
    // @ts-ignore
    <ErrorBoundary>
      <React.Suspense
        fallback={
          <div className="text-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};
AsyncLoader.propTypes = {
  children: PropTypes.any,
};
