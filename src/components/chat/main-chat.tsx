import { useState } from "react";
import { InputChat } from "./input-chat";

export function MainChat() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 pt-6 bg-card rounded-lg h-[98dvh] min-h-[98dvh] w-[800px]">
      <h1 className="text-2xl font-bold">Chat</h1>
      <div className="flex-1">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <InputChat messages={messages} setMessages={setMessages} />
    </div>
  )
}
