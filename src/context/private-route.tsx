import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type PrivateRouteProps = {
    element: JSX.Element;
};

export default function PrivateRoute({ element }: PrivateRouteProps) {
    const { isAuthenticated, isLoadingAuth } = useAuth();

    if (isLoadingAuth) {
        return <div>Chargement...</div>; // Show loading state
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return element;
};
