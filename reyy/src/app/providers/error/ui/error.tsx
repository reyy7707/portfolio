import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { ErrorContent } from "../../../../widgets/error-content";

interface ErrorBProps {
    children: ReactNode;
}

interface ErrorBState {
    hasError: boolean;
}

class ErrorB extends React.Component<ErrorBProps, ErrorBState> {
    constructor(props: ErrorBProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('Error is here:')
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <ErrorContent />
                </Suspense>
            )
        }

        return children;
    }
}

export default ErrorB