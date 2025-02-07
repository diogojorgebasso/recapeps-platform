import CookieBanner from "@/components/Cookies/cookie-banner";
import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export default function MainLayout() {
    return (
        <Box>
            <Menu />
            <Outlet />
            <Footer />
            <CookieBanner />
        </Box>
    );
};
