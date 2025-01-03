import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Outlet, useLocation, useNavigate } from "react-router"
import { Separator, Box, IconButton, Flex, HStack } from "@chakra-ui/react"

import { BreadcrumbCurrentLink, BreadcrumbRoot } from "@/components/ui/breadcrumb"

import Sidebar from "@/components/sidebar/sidebar"
import { useEffect } from "react"
import { LuPanelLeftClose } from "react-icons/lu";

export default function AuthenticatedClientLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadedAuth } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // TODO : ESSE COMPORTAMENTO ESTÁ ESTRANHO.
  useEffect(() => {
    if (isLoadedAuth && !isAuthenticated) {
      navigate("/login");
    }
  }, []);

  const { pathname } = useLocation()
  const pathnames = pathname.split("/").filter((x) => x);

  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <Flex h="100vh">
      <Sidebar isSidebarOpen={isSidebarOpen} path={pathnames} />
      <Box flex="1" overflowY="auto">
        <main>
          <Box position="sticky" bg={{ base: "white", _dark: "black" }} top="0" as="header">
            <HStack>
              <IconButton
                aria-label="Toggle Sidebar"
                onClick={toggleSidebar}
                variant="ghost"
                size="sm">
                <LuPanelLeftClose />
              </IconButton>
              <BreadcrumbRoot>
                {pathnames.map((name, index) => (
                  <BreadcrumbCurrentLink key={index}>&ge;	{capitalizeFirstLetter(name)}
                  </BreadcrumbCurrentLink>
                ))}
              </BreadcrumbRoot>
            </HStack>
            <Separator />
          </Box>
          <Outlet />
        </main>
      </Box >
    </Flex >
  )
}
