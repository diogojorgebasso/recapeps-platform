import { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import SidebarDesktop from "@/components/sidebar/SidebarDesktop";
import { SidebarMobile } from "@/components/sidebar/sidebarMobile";
import { Outlet } from "react-router";

export default function AuthenticatedClientLayout() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      {isMobile ? (
        <>
          <IconButton
            title="Open Menu"
            onClick={() => setMobileOpen(true)}
            position="fixed"
            top="20px"
            left="20px"
            zIndex="1000"
            bg="orange.400"
            color="white"
          >
            <FiMenu />
          </IconButton>
          <SidebarMobile isOpen={isMobileOpen} onOpen={setMobileOpen} />
        </>
      ) : (
        <SidebarDesktop />
      )}
      <Box
        ml={{ base: 0, md: "100px" }} // Ajusta o espaço conforme o dispositivo
        p="4"
      >
        <Outlet />
      </Box>
    </Box>

  );
}

