"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Inbox,
  LifeBuoy,
  ListTodo,
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
import { NavLink } from "react-router"

const data = {
  navMain: [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Quizz",
      url: "/quizz",
      icon: ListTodo,
      items: [
        {
          title: "Exp. pédagogiques",
          url: "/quiz/math",
        },
        {
          title: "Les émotions",
          url: "/quiz/emotions",
        },
        {
          title: "Mixité sexuée",
          url: "/quiz/mixite-sexuee",
        },
      ],
    },
    {
      title: "Flashcards",
      url: "/flashcards",
      icon: BookOpen,
      items: [
        {
          title: "Mutations du système éducatif",
          url: "/flashcards/mutations-systeme-educatif",
        },
        {
          title: "Contexte politique",
          url: "/flashcards/contexte-politique",
        },
        {
          title: "Sport scolaire",
          url: "/flashcards/sport-scolaire",
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
      items: [
        {
          title: "Mixité sexuée",
          url: "/notes/ecrit-1/mixite-sexuee",
        },
        {
          title: "Les emotions",
          url: "/notes/ecrit-2/sport-scolaire",
        },

      ]
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "https://forms.gle/T53NiA3mLWJGMtD4A",
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
              <NavLink to="/dashboard">
                <div className="flex aspect-square size-16 items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground">
                  <img src="/Identity.svg" alt="Recap'eps" className="rounded-lg" />
                </div>
                <p className="font-bold grid flex-1 text-left text-sm leading-tight">
                  RECAP'EPS
                </p>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
