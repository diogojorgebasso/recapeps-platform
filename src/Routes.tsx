import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import Layout from "./Layout";
import { lazy } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./context/private-route";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";

const Profile = lazy(() => import("@/pages/Profile"));

export function Routes() {
    return (
        <ReactRouterRoutes>
            {/* Rota pública */}
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            {/* Rotas protegidas */}
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
