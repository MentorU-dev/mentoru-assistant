import { MainChat } from '@/components/chat/main-chat'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <MainChat />
    </div>
  )
}
