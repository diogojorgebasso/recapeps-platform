import CookieBanner from "@/components/Cookies/cookie-banner";
import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Footer from "@/components/Footer";
import { Box, Flex } from "@chakra-ui/react";

export default function MainLayout() {
    return (
        <Flex minH="100vh" direction="column">
            <Menu />
            <Box flex="1">
                <Outlet />
            </Box>
            <Footer />
            <CookieBanner />
        </Flex>
    );
};
