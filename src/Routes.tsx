import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import Layout from "./layouts/MainLayout";
import AuthenticatedClientLayout from "./layouts/AuthenticatedClientLayout";
import { lazy } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./context/private-route";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Quizz from "./pages/Quizz/Quizz";
import SignUp from "./pages/SignUp";
import ChatBot from "./pages/ChatBot";
import AddQuestionForm from "./components/dashboard/add-quizz";

const Profile = lazy(() => import("@/pages/Profile"));

export function Routes() {
    return (
        <ReactRouterRoutes>
            {/* Rota pública */}
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />     

            <Route element={<AuthenticatedClientLayout />}>
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/add-quizz" element={<PrivateRoute element={<AddQuestionForm />} />} />
                <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
                <Route path="/quizz" element={<PrivateRoute element={<Quizz />} />}/>
                <Route path="/chatbot" element={<PrivateRoute element={<ChatBot />} />}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
