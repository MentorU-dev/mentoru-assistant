"use client"

import {
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Logo } from "@/assets/logo"

export function LogoSidebar() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Logo />
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
