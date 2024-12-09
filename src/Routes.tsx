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
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import FlashcardsPage from "./pages/FlashCard";
import Support from "./pages/Support";

export function Routes() {

    const { role } = useAuth();

    const adminRoutes = (
        <>
            <Route path="add-quizz" element={<AddQuestionForm />} />
            <Route path="dashboard" element={<DashboardAdmin />} />
        </>
    );
    const userRoutes = (
        <>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="notes" element={<Notes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="flashcards" element={<FlashcardsPage />} />
        </>
    );

    return (
        <ReactRouterRoutes>
            <Route element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="about" element={<About />} />
                <Route path="support" element={<Support />} />
                <Route path="outlis">
                    {/* <Route path="dashboard" element={<DashboardMock />} /> */}
                </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
            <Route element={<AuthenticatedClientLayout />}>
                {role === "admin" && adminRoutes}
                {role === "user" && userRoutes}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
