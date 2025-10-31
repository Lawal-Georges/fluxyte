// app/api/chat/route.ts
import { chatbotData } from "@/data/chatbotData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userText: string = body.text?.toLowerCase();

    if (!userText) {
      return new Response(JSON.stringify({ error: "Message vide" }), {
        status: 400,
      });
    }

    // Recherche d'une réponse correspondante
    const match = chatbotData.faqs.find((faq) =>
      userText.includes(faq.question)
    );

    let responseText = chatbotData.fallback.message;
    let suggestions = chatbotData.fallback.suggestions;

    if (match) {
      responseText = match.answer;
      suggestions = chatbotData.welcome.suggestions;
    }

    // Simulation d’un délai pour effet naturel
    await new Promise((r) => setTimeout(r, 700));

    return new Response(
      JSON.stringify({
        response: responseText,
        suggestions,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erreur API chatbot :", err);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500 }
    );
  }
}
