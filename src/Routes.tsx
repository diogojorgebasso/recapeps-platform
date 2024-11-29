import { Route, Routes as ReactRouterRoutes } from "react-router";

import Layout from "./layouts/MainLayout";
import AuthenticatedClientLayout from "./layouts/AuthenticatedClientLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import ChatBot from "./pages/ChatBot";
import AddQuestionForm from "./components/dashboard/add-quizz";

import Notes from "./pages/Notes";

import Profile from "@/pages/Profile"
import { useAuth } from "./hooks/useAuth";

export function Routes() {

    const { role, uid } = useAuth();

    const adminRoutes = (
        <>
            <Route path="/add-quizz" element={<AddQuestionForm />} />
        </>
    );
    console.log(uid);
    const userRoutes = (
        <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/profile" element={<Profile />} />
        </>
    );

    return (
        <ReactRouterRoutes>
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route element={<AuthenticatedClientLayout />}>
                {role === "admin" && adminRoutes}
                {role === "user" && userRoutes}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
