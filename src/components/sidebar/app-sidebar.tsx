"use client";

import * as React from "react";
import { ArchiveX, Command, File, Inbox, Newspaper, Send, Trash2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { NewsletterCard } from "./NewsletterCard";
import { Link } from "react-router-dom";
import { DatePicker } from "./date-picker";

// Dados de exemplo
const data = {
  navMain: [
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Drafts", url: "#", icon: File },
    { title: "Sent", url: "#", icon: Send },
    { title: "Junk", url: "#", icon: ArchiveX },
    { title: "Trash", url: "#", icon: Trash2 },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { photoURL } = useAuth();
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [isNewsletterHovered, setIsNewsletterHovered] = React.useState(false);

  return (
    <div className="flex h-full">
      {/* Primeira Sidebar */}
      <Sidebar
        collapsible="none"
        className={`transition-all duration-300 border-r ${isHovered ? "w-48" : "w-[calc(var(--sidebar-width-icon)_+_1px)]"
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <Link to="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  {isHovered && (
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <MainMenu
                items={data.navMain}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Avatar />
          <div
            onMouseEnter={() => setIsNewsletterHovered(true)}
            onMouseLeave={() => setIsNewsletterHovered(false)}
          >
            {isNewsletterHovered && <NewsletterCard />}
            <Button
              className="w-full mt-4 bg-sidebar-primary text-sidebar-primary-foreground"
              size="sm"
            >
              <Newspaper />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Segunda Sidebar */}
      <Sidebar collapsible="none" className="flex-1 md:flex hidden">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeItem.title}
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {/* Conteúdo do painel secundário */}
              <DatePicker />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

// Reutilizável para o Menu Principal
const MainMenu = ({ items, activeItem, setActiveItem }) => {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            className="flex items-center px-2.5 md:px-2"
            isActive={activeItem.title === item.title}
            onClick={() => setActiveItem(item)}
          >
            <item.icon className="mr-2" />
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
