import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/main')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /main!'
}