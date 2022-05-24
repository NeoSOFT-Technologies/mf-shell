import React from "react";
import Loading from "../loading/Loading";

export const PageErrorBounday = ({ children }) => {
  return (
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

  render() {
    if (this.state.hasError) {
      return <Loading />;
    }

    return this.props.children;
  }
}
