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
import { Outlet, useLocation } from "react-router"

export default function AuthenticatedClientLayout() {
  const { pathname } = useLocation()
  const pathnames = pathname.split("/").filter((x) => x);

  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
import { Outlet } from "react-router-dom"

export default function AuthenticatedClientLayout() {
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
                      <BreadcrumbSeparator key={index} className="hidden md:block" />
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
