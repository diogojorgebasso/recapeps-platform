import { Outlet } from "react-router-dom";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";

export default function AuthenticatedClientLayout() {
    return (
        <div>
            <SidebarProvider style={{ "--sidebar-width": "350px" } as React.CSSProperties}>
                <AppSidebar />
                <SidebarInset>
                    <header>
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                    </header>
                    <Outlet />
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}