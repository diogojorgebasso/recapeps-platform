import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import Login from "./pages/Login";
import PrivateRoute from "./context/private-route";
import Home from "./pages/Home";
import Dashboard from "./pages/Dahsboard";

export function Routes() {
    return (
        <ReactRouterRoutes>
            {/* Rota pública */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* Rotas protegidas */}
            <Route
                path="/*"
                element={
                    <PrivateRoute>
                        <ReactRouterRoutes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Dashboard />} />
                        </ReactRouterRoutes>
                    </PrivateRoute>
                }
            />
        </ReactRouterRoutes >
    );
}
