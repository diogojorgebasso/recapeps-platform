import { logEvent, getAnalytics } from "firebase/analytics"


import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function Dashboard() {
    const analytics = getAnalytics();
    logEvent(analytics, 'tutorial_started');

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "350px",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <header>
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                </header>
                <div>
                    <h1>Dashboard</h1>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}