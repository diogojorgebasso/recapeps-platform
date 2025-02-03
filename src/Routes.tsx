import { Route, Routes as ReactRouterRoutes } from "react-router";

import Layout from "./layouts/MainLayout";
import AuthenticatedClientLayout from "./layouts/AuthenticatedClientLayout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/Auth/SignUp";
import ChatBot from "./pages/ChatBot";
import SubjectQuiz from "./pages/Quiz/SubjectQuiz";

import Notes from "./pages/Notes";
import Team from "./pages/Team";
import Profil from "@/pages/Auth/Profil"
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import FlashcardsPage from "./pages/Flashcards";
import FlashcardsSubject from "./pages/Flashcards/subject";
import Support from "./pages/Support";
import TermesCondition from "./pages/Termes-Condition";
import PaymentPage from "./pages/Checkout/Payment";
import DynamicPage from "./pages/Notes/DynamicPage";
import ForgottenPassword from "./pages/Auth/ForgotPassword";

export function Routes() {

    const userRoutes = (
        <>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="quiz/:subjectId" element={<SubjectQuiz />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="notes">
                <Route index element={<Notes />} />
                <Route path=":subject" element={<DynamicPage />} />
            </Route>
            <Route path="profil" element={<Profil />} />
            <Route path="flashcards" element={<FlashcardsPage />} />
            <Route path="flashcards/:subjectId" element={<FlashcardsSubject />} />
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
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgottenPassword />} />
            <Route element={<AuthenticatedClientLayout />}>
                {userRoutes}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </ReactRouterRoutes >
    );
}
