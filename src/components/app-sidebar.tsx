"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { LogoSidebar } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bci",
      logo: GalleryVerticalEnd,
      plan: "Banco",
    }
  ],
  navMain: [
    {
      title: "Simulaciones",
      url: "#/main",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Asistente de banca",
          url: "/",
        }
      ],
    },
  ],
}

export function AppSidebar({
  username,
  email,
  avatar,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  username: string
  email: string | undefined
  avatar: string | undefined
}) {
  const user = {
    name: username,
    email: email || "Sin correo",
    avatar: avatar || "/favicon.ico",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoSidebar />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
