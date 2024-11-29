import { Route, Routes as ReactRouterRoutes } from "react-router";

import Layout from "./layouts/MainLayout";
import AuthenticatedClientLayout from "./layouts/AuthenticatedClientLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Quizz from "./pages/Quizz/Quizz";
import SignUp from "./pages/SignUp";
import ChatBot from "./pages/ChatBot";
import AddQuestionForm from "./components/dashboard/add-quizz";

import Notes from "./pages/Notes";

import Profile from "@/pages/Profile"

export function Routes() {



    return (
        <ReactRouterRoutes>
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route element={<AuthenticatedClientLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-quizz" element={<AddQuestionForm />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/quizz" element={<Quizz />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/notes" element={<Notes />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
