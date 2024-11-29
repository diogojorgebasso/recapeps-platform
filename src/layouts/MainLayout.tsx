import CookieBanner from "@/components/Cookies/cookie-banner";
import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Footer from "@/components/Footer";

export default function MainLayout() {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
            <CookieBanner />
        </>
    );
};
