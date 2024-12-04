import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/feedback/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      Feedback
    </div>
  )
}
