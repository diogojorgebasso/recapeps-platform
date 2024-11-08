import { Route, Routes as ReactRouterRoutes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Toaster, toaster } from "@/components/ui/toaster"
import Login from "./pages/Login";

import { useAuth } from "@/hooks/useAuth";

export function Routes() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();


    return (
        <>
            <Toaster />
            <ReactRouterRoutes>
                <Route path="/" element={<Login />} />
                {isAuthenticated && (
                    <Route path="/" element={<Layout />}>
                        <Route path="/expedient" element={<Expedient />} />
                        <Route path="/expedient/:id" element={<ExportReport />} />
                        <Route path="/consult-codes" element={<ConsultCodes />} />
                        <Route path="/consult-codes/:id" element={<ConsultCodes />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/settings" element={<Configuration />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                )}
            </ReactRouterRoutes>
        </>

    );
}
