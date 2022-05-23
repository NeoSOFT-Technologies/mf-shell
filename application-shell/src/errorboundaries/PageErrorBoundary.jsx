import React from 'react';
import Loading from "../loading/Loading"

export const PageErrorBounday = ({ children, noLoading }) => {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<div className='text-center'><div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div></div>}>
                {children}
            </React.Suspense>
        </ErrorBoundary>
    )
};
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Loading />;
        }

        return this.props.children;
    }
}
