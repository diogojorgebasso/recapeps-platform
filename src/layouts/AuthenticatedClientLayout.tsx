import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Outlet, useLocation, useNavigate } from "react-router"
import { Separator, Box, IconButton, Flex } from "@chakra-ui/react"

import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@/components/ui/breadcrumb"

import Sidebar from "@/components/sidebar/sidebar"
import { useEffect } from "react"
import { LuPanelLeftClose } from "react-icons/lu";

export default function AuthenticatedClientLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingAuth, role } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!isLoadingAuth && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, role, isLoadingAuth]);

  const { pathname } = useLocation()
  const pathnames = pathname.split("/").filter((x) => x);

  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <Flex>
      {isSidebarOpen && <Sidebar />}
      <Box>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <IconButton
              aria-label="Toggle Sidebar"
              onClick={toggleSidebar}
              variant="ghost"
              size="sm"
              _hover={{ bg: "gray.200" }}
            >
              <LuPanelLeftClose />
            </IconButton>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbRoot>
              {pathnames.map((name, index) => (
                <BreadcrumbLink key={index} href={name}>{capitalizeFirstLetter(name)}
                </BreadcrumbLink>
              ))}
              <BreadcrumbCurrentLink>Props</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
          </div>
        </header>
        <Outlet />
      </Box>
    </Flex>
  )
}
