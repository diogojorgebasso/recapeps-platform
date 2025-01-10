import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import SidebarMobile from "@/components/sidebar/sidebarMobile";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@/components/ui/drawer"

import { LuPanelLeftClose } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";

import { useAuth } from "@/hooks/useAuth";
import { BreadcrumbCurrentLink, BreadcrumbRoot } from "@/components/ui/breadcrumb";
import { Separator } from "@chakra-ui/react"
import Sidebar from "@/components/sidebar/sidebar";

export default function AuthenticatedClientLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadedAuth } = useAuth();

  // Desktop collapse/expand state
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const [open, onOpen] = useState(false);
  const onClose = () => onOpen(false);

  const isMobile = useBreakpointValue({ base: true, md: false });

  // Auth check (your existing logic)
  useEffect(() => {
    if (isLoadedAuth && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoadedAuth, isAuthenticated, navigate]);

  // Breadcrumb logic
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  return (
    <Flex h="100vh">
      {isMobile ? (
        <DrawerRoot open={open} onOpenChange={(e) => onOpen(e.open)} placement="top">
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <SidebarMobile onClose={onClose} />
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      ) : (
        <Sidebar isSidebarOpen={isSidebarOpen} path={pathnames} />
      )}

      <Box flex="1" overflowY="auto">
        <main>
          {/* STICKY HEADER */}
          <Box
            position="sticky"
            top="0"
            bg={{ base: "white", _dark: "black" }}
            zIndex="sticky"
            as="header"
          >
            <HStack gap={2}>
              <IconButton
                aria-label="Toggle Sidebar"
                onClick={isMobile ? () => onOpen(true) : toggleSidebar}
                variant="ghost"
                size="sm"
              >
                {isMobile ? <FiMenu /> : <LuPanelLeftClose />}
              </IconButton>

              <BreadcrumbRoot>
                {pathnames.map((name, index) => (
                  <BreadcrumbCurrentLink key={index}>
                    {capitalizeFirstLetter(name)}
                  </BreadcrumbCurrentLink>
                ))}
              </BreadcrumbRoot>
            </HStack>

            <Separator />
          </Box>
          <Outlet />
        </main>
      </Box>
    </Flex>
  );
}
