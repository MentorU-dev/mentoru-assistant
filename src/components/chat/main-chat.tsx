import { useState } from "react";
import { InputChat } from "./input-chat";

export function MainChat() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <section className="flex flex-col gap-4 pt-6 bg-card rounded-lg h-[98dvh] min-h-[98dvh] w-[800px]">
      <h1 className="text-2xl font-bold relative z-10">Simulación</h1>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              p-2 rounded ${message.startsWith("Tú:")
                ? "bg-blue-100 text-left"
                : "bg-green-50 text-left"
              }`}
          >
            {message}
          </div>
        ))}
      </div>
      <InputChat messages={messages} setMessages={setMessages} />
    </section>
  )
}
