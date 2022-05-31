import PropTypes from "prop-types";
import React from "react";
import Loading from "../loading/Loading";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    if (error) return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (error) console.error(error, errorInfo);
    // logic here in case of error
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <Loading />;
    }

    return this.props.children;
  }
}

export const PageErrorBounday = ({ children }) => {
  return (
    // @ts-ignore
    <ErrorBoundary>
      <React.Suspense
        fallback={
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
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
PageErrorBounday.propTypes = {
  children: PropTypes.any,
};
