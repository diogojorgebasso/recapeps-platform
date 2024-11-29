"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Inbox,
  LifeBuoy,
  NotebookTabs,
  Send,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NewsletterCard } from "./NewsletterCard"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Inbox,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        }
      ],
    },
    {
      title: "Quiz",
      url: "/quiz",
      icon: Bot,
      items: [
        {
          title: "Math",
          url: "/quiz/math",
        },
        {
          title: "Physics",
          url: "/quiz/physics",
        },
        {
          title: "Quantum",
          url: "/quiz/sport",
        },
      ],
    },
    {
      title: "FlashCards",
      url: "flashcards",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "ChatBot",
      url: "/chatbot",
      icon: Bot,
    },
    {
      title: "Notes",
      url: "/notes",
      icon: NotebookTabs,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <img src="/logo.svg" alt="Recapeps" className="rounded-lg" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">RECAPEPS</span>
                  <span className="truncate text-xs">Plataform</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NewsletterCard />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
