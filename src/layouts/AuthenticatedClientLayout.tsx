import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet, useLocation, useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react"
export default function AuthenticatedClientLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingAuth } = useAuth();

  useEffect(() => {
    if (!isLoadingAuth && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoadingAuth]);

  const { pathname } = useLocation()
  const pathnames = pathname.split("/").filter((x) => x);

  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pathnames.map((name, index) => {
                  return (
                    <>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem key={index}>
                        <BreadcrumbPage>{capitalizeFirstLetter(name)}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
