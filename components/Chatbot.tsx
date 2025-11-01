"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import botIcon from "../public/icons/bot3.png";
import Message from "./Message";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

// Réponses automatiques (inchangées)
const botResponses: Record<string, string[]> = {
    accueil: [
        "👋 Bonjour et bienvenue chez **Fluxyte** !",
        "Je suis votre assistant virtuel 🤖. Comment puis-je vous aider aujourd’hui ?",
        "Vous pouvez me demander des infos sur nos services, tarifs, contact ou formations.",
    ],
    services: [
        "🚀 Nous proposons : développement **web**, **applications mobiles**, **cybersécurité**, **marketing digital** et **formations**.",
        "Voir nos services complets 👉 [Nos Services](https://fluxyte.vercel.app/services)",
    ],
    web: [
        "🌐 Fluxyte crée des sites modernes, performants et personnalisés : vitrines, e-commerce ou sur mesure.",
        "Demandez un devis ici 👉 [Demander un Devis](https://fluxyte.vercel.app/contact)",
    ],
    mobile: [
        "📱 Nous développons des applications mobiles intuitives pour Android et iOS.",
        "Obtenez un devis ici 👉 [Plans & Tarifs](https://fluxyte.vercel.app/Plans%20Tarifs)",
    ],
    marketing: [
        "📣 Nous améliorons votre visibilité en ligne via community management, publicité et gestion de réseaux sociaux.",
        "Plus d’infos ici 👉 [Marketing Digital](https://fluxyte.vercel.app/services)",
    ],
    cybersécurité: [
        "🧑‍💻 Nous protégeons vos systèmes, données et sites web.",
        "Découvrez nos offres 👉 [Cybersécurité](https://fluxyte.vercel.app/services)",
    ],
    formation: [
        "🎓 Nous offrons des formations digitales pratiques et certifiantes.",
        "Voir la liste complète 👉 [Nos Formations](https://fluxyte.vercel.app/formations)",
    ],
    devis: [
        "💰 Nos tarifs varient selon le projet. Obtenez un devis gratuit ici 👉 [Devis en ligne](https://fluxyte.vercel.app/Plans%20Tarifs)",
    ],
    contact: [
        "📞 Vous pouvez nous contacter sur WhatsApp ou via le formulaire de contact.",
        "👉 [Contact Fluxyte](https://fluxyte.vercel.app/contact)",
    ],
    recrutement: [
        "🤝 Vous souhaitez rejoindre notre équipe ?",
        "Soumettez votre candidature ici 👉 [Rejoindre l'équipe](https://fluxyte.vercel.app/contact)",
    ],
    inconnu: [
        "🤖 Je n’ai pas bien compris votre demande. Pouvez-vous reformuler ?",
        "Essayez : *services*, *tarifs*, *contact*, *formations*, *cybersécurité*…",
    ],
};

const intents: Record<string, string[]> = {
    service: botResponses.services,
    web: botResponses.web,
    mobile: botResponses.mobile,
    marketing: botResponses.marketing,
    cyber: botResponses.cybersécurité,
    sécurité: botResponses.cybersécurité,
    formation: botResponses.formation,
    tarif: botResponses.devis,
    prix: botResponses.devis,
    devis: botResponses.devis,
    contact: botResponses.contact,
    recrut: botResponses.recrutement,
    emploi: botResponses.recrutement,
};

export default function Chatbot({ onClose }: { onClose: () => void }) {
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const addMessage = useCallback((role: "user" | "bot", text: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: uuidv4(),
                role,
                text,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
        ]);
    }, []);

    const sendBotMessages = useCallback(
        async (texts: string[]) => {
            setTyping(true);
            for (const text of texts) {
                await new Promise((r) => setTimeout(r, 600 + Math.random() * 600));
                addMessage("bot", text);
            }
            setTyping(false);
        },
        [addMessage]
    );

    useEffect(() => {
        const stored = localStorage.getItem("fluxyte_chat");
        const parsed = stored ? JSON.parse(stored) : [];
        setMessages(parsed.length ? parsed : []);
        if (!parsed.length) setTimeout(() => sendBotMessages(botResponses.accueil), 600);
    }, [sendBotMessages]);

    useEffect(() => {
        localStorage.setItem("fluxyte_chat", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, typing]);

    const detectIntent = (input: string): string[] => {
        const lower = input.toLowerCase();
        const results: string[] = [];
        for (const key in intents) if (lower.includes(key)) results.push(...intents[key]);
        return results.length ? results : botResponses.inconnu;
    };

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || typing) return;
        const text = input.trim();
        setInput("");
        addMessage("user", text);
        sendBotMessages(detectIntent(text));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 w-full max-w-[100vw] sm:max-w-[380px] h-[95dvh] sm:h-[540px] z-[9999] flex flex-col bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{ maxHeight: "95svh" }} // ✅ adapte la hauteur sur mobile avec clavier
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white sticky top-0 z-30">
                <div className="flex items-center gap-2">
                    <Image src={botIcon} alt="Bot" width={28} height={28} className="rounded-full sm:w-7 sm:h-7" />
                    <span className="font-semibold text-sm sm:text-base">Assistant Fluxyte</span>
                </div>
                <button
                    title="Fermer"
                    onClick={onClose}
                    className="p-2 sm:p-3 rounded-full hover:bg-white/20 transition z-50"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 flex flex-col gap-3 bg-gray-50 dark:bg-gray-800 overscroll-contain scroll-smooth"
            >
                <AnimatePresence initial={false}>
                    {messages.map((m) => (
                        <div key={m.id} className={`${m.role === "user" ? "self-end" : "self-start"} max-w-[85%]`}>
                            <Message role={m.role} time={m.time}>
                                <ReactMarkdown
                                    components={{
                                        a: ({ children, href }) => (
                                            <a
                                                href={href ?? "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 font-semibold flex items-center gap-1 hover:underline"
                                            >
                                                <ArrowRight size={14} /> {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {m.text}
                                </ReactMarkdown>
                            </Message>
                        </div>
                    ))}
                </AnimatePresence>

                {typing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs sm:text-sm text-gray-500 italic flex items-center gap-2"
                    >
                        <span className="animate-pulse">Assistant Fluxyte écrit...</span>
                    </motion.div>
                )}
            </div>

            {/* Input */}
            <form
                onSubmit={handleSend}
                className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 items-center bg-white dark:bg-gray-900 sticky bottom-0 z-30"
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:ring-2 focus:ring-violet-500 outline-none transition"
                />
                <button
                    type="submit"
                    disabled={!input.trim() || typing}
                    title="Envoyer"
                    className="p-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:scale-105 disabled:opacity-50 transition-transform"
                >
                    <Send size={18} />
                </button>
            </form>
        </motion.div>
    );
}
