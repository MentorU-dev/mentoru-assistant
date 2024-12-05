import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "lucide-react"
import { Button } from "../ui/button"
import { axmos } from "@/lib/axmos-api"

export function InputChat({ messages, setMessages }: { messages: string[], setMessages: (messages: string[]) => void }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;
    console.log("message", message);
    const response = await axmos(message);
    setMessages([...messages, response.response]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-28 flex gap-2 w-full focus-within:shadow-lg focus-within:ring-1 focus-within:ring-sidebar/40 focus-within:ring-offset-1 focus-within:ring-offset-background border border-input rounded-t-2xl"
    >
      <Textarea name="message" className="focus-visible:ring-0 resize-none" />
      <Button type="submit">
        <SendIcon className="w-4 h-4" />
      </Button>
    </form >
  )
}
