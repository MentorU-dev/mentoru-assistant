export async function axmos(message: string) {
  console.log("axmos", message);
  console.log("axmos", import.meta.env.VITE_AXMOS_API_KEY);
  if (import.meta.env.VITE_AXMOS_API_KEY) {
    throw new Error("VITE_AXMOS_API_KEY is not set");
  }

  const payload = {
    consumerId: "66ef7214-b0e5-11ef-80bf-d270b90c9e03",
    indexName: "",
    modelParams: { model: "", temperature: 0.4, maxOutputTokens: 1024, topP: 0.2, topK: 40, response_mime_type: "text" },
    question: message,
    session: "new-40610-axmos-75475",
    placeholders: {},
  };

  const response = await fetch(`https://api.genai.axmos.tech/axmos-gen-ai/v1/master/?key=${import.meta.env.VITE_AXMOS_API_KEY!}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
