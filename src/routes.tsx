import { type RouteConfig, route, index, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout.tsx", [
        index("./Home.tsx"),
        route("contact", "./Contact.tsx"),
        route("a-propos", "./APropos.tsx"),
        ...prefix("legal", [
            route("conditions-generales", "./pages/Legal/conditions-generales.tsx"),
            route("politique-confidentialite", "./pages/Legal/politique-confidentialite.tsx"),
            route("mentions-legales", "./pages/Legal/mentions-legales.tsx"),
        ])
    ]),

    route("register", "./pages/Auth/Register.tsx"),
    route("login", "./pages/Auth/Login.tsx"),
    route("forgot-password", "./pages/Auth/ForgotPassword.tsx"),

    layout("./layouts/AuthenticatedClientLayout.tsx", [
        route("dashboard", "./Dashboard.tsx"),
        route("quiz", "./pages/Quiz/index.tsx"),
        route("oral", "./pages/Oral/index.tsx"),
        route("oral/:subjectId", "./pages/Oral/Subject.ts"),
        route("quiz/:subjectId", "./pages/Quiz/SubjectQuiz.tsx"),
        ...prefix("notes", [
            index("./pages/Notes/index.tsx"),
        ]),
        route("profil", "./pages/Auth/Profil.tsx"),
        ...prefix("flashcards", [
            index("./pages/Flashcards/index.tsx"),
            route(":subjectId", "./pages/Flashcards/subject.tsx"),
        ]),
        route("checkout", "./pages/Checkout/index.tsx"),
        route("success", "./Success.tsx"),
        route("error", "./Error.tsx"),
        route("*?", "catchall.tsx"),
    ]),
] satisfies RouteConfig

