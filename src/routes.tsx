import { type RouteConfig, route, index, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout.tsx", [
        index("./Home.tsx"),
        route("contact", "./Contact.tsx"),
        route("a-propos", "./APropos.tsx"),
        route("terme-condition", "./pages/Legal/Termes-Condition.tsx"),
    ]),

    route("register", "./pages/Auth/Register.tsx"),
    route("login", "./pages/Auth/Login.tsx"),
    route("forgot-password", "./pages/Auth/ForgotPassword.tsx"),

    layout("./layouts/AuthenticatedClientLayout.tsx", [
        route("dashboard", "./Dashboard.tsx"),
        route("quiz", "./pages/Quiz/index.tsx"),
        route("quiz/:subjectId", "./pages/Quiz/SubjectQuiz.tsx"),
        ...prefix("notes", [
            index("./pages/Notes/index.tsx"),
            route(":subject", "./pages/Notes/DynamicPage.tsx"),
            route("create-note", "./pages/Notes/createNote.tsx"), // funcionalitie just for admins
        ]),
        route("profil", "./pages/Auth/Profil.tsx"),
        ...prefix("flashcards", [
            index("./pages/Flashcards/index.tsx"),
            route(":subjectId", "./pages/Flashcards/subject.tsx"),
        ]),
        route("checkout", "./pages/Checkout/index.tsx"),
        route("payment", "./pages/Checkout/Payment.tsx"),
        route("*?", "catchall.tsx"),
    ]),
] satisfies RouteConfig

