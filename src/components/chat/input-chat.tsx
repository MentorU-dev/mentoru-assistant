import { Textarea } from "@/components/ui/textarea"
import { Loader2, SendIcon } from "lucide-react"
import { Button } from "../ui/button"
import { difyai } from "@/lib/difyai";
import React from "react";

export function InputChat({
  messages,
  setMessages
}: {
  messages: string[],
  setMessages: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;
    console.log("message", message);

    // Agregar el mensaje del usuario a la lista de mensajes
    setMessages([...messages, `Tú: ${message}`]);
    setLoading(true);

    try {
      const response = await difyai(message, messages);
      setMessages((prevMessages: string[]) => [...prevMessages, `Agente: ${response}`]);
    } catch (error) {
      console.error("Error al obtener la respuesta de difyai:", error);
      setMessages((prevMessages: string[]) => [...prevMessages, `Error: No se pudo obtener una respuesta.`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-28 flex items-center gap-2 w-full focus-within:shadow-lg focus-within:ring-1 focus-within:ring-sidebar/40 focus-within:ring-offset-1 focus-within:ring-offset-background border border-input rounded-t-2xl"
    >
      <Textarea name="message" className="focus-visible:ring-0 resize-none" />
      <Button type="submit" variant="ghost" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendIcon className="w-4 h-4" />}
      </Button>
    </form >
  )
}
