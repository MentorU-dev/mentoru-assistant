import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "lucide-react"
import { Button } from "../ui/button"

export function InputChat() {
  return (
    <form
      className="h-28 flex gap-2 w-full focus-within:shadow-lg focus-within:ring-1 focus-within:ring-sidebar/40 focus-within:ring-offset-1 focus-within:ring-offset-background border border-input rounded-t-2xl"
    >
      <Textarea className="focus-visible:ring-0 resize-none" />
      <Button type="submit">
        <SendIcon className="w-4 h-4" />
      </Button>
    </form >
  )
}
