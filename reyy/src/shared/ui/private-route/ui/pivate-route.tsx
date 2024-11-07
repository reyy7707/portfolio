import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    element: React.ReactNode;
    redirectPath: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element, redirectPath }) => {
    if (!redirectPath) {
        return <Navigate to="/" replace />;
    }
    return <>{element}</>;
};

export default PrivateRoute;
