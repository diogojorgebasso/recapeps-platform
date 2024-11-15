import CookieBanner from "@/components/cookie/cookie-banner";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";


export default function Layout() {
    return (
        <>
            <Menu />
            <main><Outlet /> </main>
            {/* Banner de cookies */}
            <CookieBanner />
        </>
    );
};
