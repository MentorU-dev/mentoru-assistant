export async function difyai(prompt: string, inputs: string[]) {

  const body = {
    inputs: inputs,
    query: prompt,
    response_mode: "streaming",
    conversation_id: "",
    user: "user-123",
  }

  console.log("body", body)

  const response = await fetch(`${import.meta.env.VITE_DIFYAI_BASE_URL}/chat-messages`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_DIFYAI_API_KEY!}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error response:', errorData);
    throw new Error(`Error de API: ${response.status} - ${JSON.stringify(errorData)}`);
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = '';
  let answer = '';

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      result += chunk;

      // Procesar cada línea que comienza con "data: "
      const lines = result.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonString = line.replace('data: ', '');
          try {
            const data = JSON.parse(jsonString);
            console.log("data", data);

            if (data.event === "agent_message") {
              answer += data.answer
              console.log("answer", answer)
            }

            // Aquí puedes manejar cada objeto JSON individualmente
          } catch (e) {
            console.error('Error al parsear JSON:', e);
          }
        }
      }
      result = '';
    }
  }

  console.log("answer", answer);
  return answer;
}
