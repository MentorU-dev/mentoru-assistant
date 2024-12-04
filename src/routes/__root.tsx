import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <SidebarProvider>
      <AppSidebar username="John Doe" email="john.doe@example.com" avatar="https://github.com/shadcn.png" />
      <SidebarInset>
        <main>
          {/* <SidebarTrigger /> */}
          <Outlet />
        </main>
      </SidebarInset>
      <TanStackRouterDevtools position="bottom-right" />
    </SidebarProvider>
  )
}
