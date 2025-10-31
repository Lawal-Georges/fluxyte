"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import Message from "./Message";
import ReactMarkdown from "react-markdown";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

const botResponses: Record<string, string[]> = {
    accueil: [
        "👋 Bonjour et bienvenue chez **Fluxyte** !",
        "Je suis votre assistant virtuel 🤖. Comment puis-je vous aider aujourd’hui ?",
    ],
    services: [
        "🚀 Nous proposons : développement **web**, **applications mobiles**, **cybersécurité**, **marketing digital** et **formations professionnelles**.",
        "Souhaitez-vous plus de détails sur un service spécifique ? (ex : *site web*, *cybersécurité*, *formation*)",
    ],
    web: [
        "🌐 Fluxyte crée des sites modernes, performants et personnalisés : vitrines, e-commerce, ou sur mesure.",
        "Souhaitez-vous un devis pour un site web ?",
    ],
    mobile: [
        "📱 Nous développons des applications mobiles intuitives pour Android et iOS.",
        "Elles sont adaptées à vos besoins : sport, santé, livraison, tourisme et plus encore.",
    ],
    marketing: [
        "📣 Nous aidons à améliorer votre visibilité : community management, campagnes sponsorisées et gestion des réseaux sociaux.",
    ],
    cybersécurité: [
        "🧑‍💻 Nous assurons la sécurité de vos systèmes, données et sites web.",
        "Maintenance, sauvegarde et surveillance 24h/24 — Fluxyte protège votre entreprise.",
    ],
    formation: [
        "🎓 Nous proposons des formations pratiques dans le digital, adaptées aux étudiants et professionnels.",
        "Souhaitez-vous la liste des formations disponibles ?",
    ],
    devis: [
        "💰 Nos tarifs varient selon le projet. Voulez-vous un devis gratuit et personnalisé ?",
    ],
    contact: [
        "📞 Vous pouvez nous contacter sur WhatsApp ou via le formulaire de contact sur notre site.",
        "Nous répondons très rapidement 24h/24 et 7j/7 ✅",
    ],
    recrutement: [
        "🤝 Vous souhaitez rejoindre notre équipe ?",
        "Rendez-vous dans la section *Contact* pour soumettre votre candidature.",
    ],
    inconnu: [
        "🤖 Je n’ai pas compris votre demande, pouvez-vous reformuler ?",
        "Essayez par exemple : *services*, *tarifs*, *contact*, *formations* ou *cybersécurité*.",
    ],
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
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            },
        ]);
    }, []);

    const sendBotMessages = useCallback(async (texts: string[]) => {
        setTyping(true);
        for (const text of texts) {
            await new Promise((r) => setTimeout(r, 600 + Math.random() * 600));
            addMessage("bot", text);
        }
        setTyping(false);
    }, [addMessage]);

    useEffect(() => {
        const stored = localStorage.getItem("fluxyte_chat");
        const parsed = stored ? JSON.parse(stored) : [];
        setMessages(parsed.length ? parsed : []);
        if (!parsed.length) {
            setTimeout(() => sendBotMessages(botResponses.accueil), 600);
        }
    }, [sendBotMessages]);

    useEffect(() => {
        localStorage.setItem("fluxyte_chat", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, typing]);

    const detectIntent = (input: string): string[] => {
        const lower = input.toLowerCase();
        if (lower.includes("service")) return botResponses.services;
        if (lower.includes("web")) return botResponses.web;
        if (lower.includes("mobile")) return botResponses.mobile;
        if (lower.includes("marketing")) return botResponses.marketing;
        if (lower.includes("cyber") || lower.includes("sécurité")) return botResponses.cybersécurité;
        if (lower.includes("formation")) return botResponses.formation;
        if (lower.includes("tarif") || lower.includes("prix") || lower.includes("devis"))
            return botResponses.devis;
        if (lower.includes("contact")) return botResponses.contact;
        if (lower.includes("recrut") || lower.includes("emploi")) return botResponses.recrutement;
        return botResponses.inconnu;
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
            className="fixed bottom-4 right-4 z-50 w-[92vw] sm:w-[380px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col backdrop-blur-xl"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                <div className="flex items-center gap-2">
                    <Image src="/icons/bot3.png" alt="Bot" width={28} height={28} className="rounded-full" />
                    <span className="font-semibold text-sm sm:text-base">Assistant Fluxyte</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-white/20 transition"
                    title="Fermer le chatbot"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 max-h-[65vh] sm:max-h-[400px]">
                <AnimatePresence initial={false}>
                    {messages.map((m) => (
                        <div key={m.id} className={`${m.role === "user" ? "self-end" : "self-start"} max-w-[85%]`}>
                            <Message role={m.role} time={m.time}>
                                <ReactMarkdown>{m.text}</ReactMarkdown>
                            </Message>
                        </div>
                    ))}
                </AnimatePresence>

                {typing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-gray-500 italic flex items-center gap-2">
                        <span className="animate-pulse">Assistant Fluxyte écrit...</span>
                    </motion.div>
                )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 items-center bg-gray-50 dark:bg-gray-800">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-1 px-3 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-violet-500 transition"
                />
                <button
                    type="submit"
                    disabled={!input.trim() || typing}
                    title="Envoyer"
                    className="p-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full disabled:opacity-60 hover:scale-105 transition-transform"
                >
                    <Send size={18} />
                </button>
            </form>
        </motion.div>
    );
}
