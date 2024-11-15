import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function PrivateRoute({ children }: { children: JSX.Element }) {

    const { isAuthenticated, isLoadingAuth } = useAuth();

    if (isLoadingAuth) {
        return (<Loader2 className="animate-spin" />)

    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};
