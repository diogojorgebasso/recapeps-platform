import { Route, Routes as ReactRouterRoutes } from "react-router";

import Layout from "./layouts/MainLayout";
import AuthenticatedClientLayout from "./layouts/AuthenticatedClientLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Quizz from "./pages/Quizz";
import SignUp from "./pages/SignUp";
import ChatBot from "./pages/ChatBot";
import AddQuestionForm from "./components/dashboard/add-quizz";
import SubjectQuiz from "./pages/Quizz/SubjectQuiz";

import Notes from "./pages/Notes";

import Profile from "@/pages/Profile"
import { useAuth } from "./hooks/useAuth";
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import FlashcardsPage from "./pages/Flashcards";
import FlashcardsSubject from "./pages/Flashcards/subject";
import Support from "./pages/Support";
import DashboardAdmin from "./pages/DashboardAdmin";
import TermesCondition from "./pages/Termes-Condition";
import DashboardMock from "./pages/DashboardMock";
import PaymentPage from "./pages/Checkout/Payment";
import Mixite from "./pages/Notes/ecrit-1/Mixite";
import LesEmotion from "./pages/Notes/ecrit-2/les-emotion";

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
            <Route path="quizz" element={<Quizz />} />
            <Route path="quizz/:exame/:subjectId" element={<SubjectQuiz />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="notes">
                <Route index element={<Notes />} />
                <Route path="ecrit-1/mixite-sexuee" element={<Mixite />} />
                <Route path="ecrit-2/les-emotion" element={<LesEmotion />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="flashcards" element={<FlashcardsPage />} />
            <Route path="flashcards/:subjectId" element={<FlashcardsSubject />} />
            <Route path="account" element={<Profile />} />
        </>
    );

    return (
        <ReactRouterRoutes>
            <Route element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="about" element={<About />} />
                <Route path="support" element={<Support />} />
                <Route path="termes-et-condition" element={<TermesCondition />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="outlis">
                    <Route path="dashboard" element={<DashboardMock />} />
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
