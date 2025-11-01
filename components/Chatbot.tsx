"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, ArrowRight } from "lucide-react";
import Message from "./Message";
import ReactMarkdown from "react-markdown";
import botIcon from "../public/icons/bot3.png";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

const botResponses: Record<string, string[]> = {
    accueil: [
        "👋 Bonjour et bienvenue chez **Fluxyte** !",
        "Je suis votre assistant virtuel 🤖. Comment puis-je vous aider aujourd’hui ?",
        "Vous pouvez me demander des informations sur nos services, tarifs, contact ou formations."
    ],
    services: [
        "🚀 Nous proposons : développement **web**, **applications mobiles**, **cybersécurité**, **marketing digital** et **formations professionnelles**.",
        "Pour voir tous nos services détaillés, cliquez sur le lien suivant : [Nos Services](https://fluxyte.vercel.app/services)"
    ],
    web: [
        "🌐 Fluxyte crée des sites modernes, performants et personnalisés : vitrines, e-commerce, ou sur mesure.",
        "Pour obtenir un devis pour un site web, visitez : [Demander un Devis](https://fluxyte.vercel.app/contact)"
    ],
    mobile: [
        "📱 Nous développons des applications mobiles intuitives pour Android et iOS.",
        "Vous pouvez demander un devis ici : [Demander un Devis](https://fluxyte.vercel.app/Plans%20Tarifs)"
    ],
    marketing: [
        "📣 Nous aidons à améliorer votre visibilité : community management, campagnes sponsorisées et gestion des réseaux sociaux.",
        "Pour plus de détails, visitez : [Nos Services Marketing](https://fluxyte.vercel.app/services)"
    ],
    cybersécurité: [
        "🧑‍💻 Nous assurons la sécurité de vos systèmes, données et sites web.",
        "Maintenance, sauvegarde et surveillance 24h/24 — Fluxyte protège votre entreprise.",
        "Plus de détails sur nos services cybersécurité : [Cybersécurité](https://fluxyte.vercel.app/services)"
    ],
    formation: [
        "🎓 Nous proposons des formations pratiques dans le digital, adaptées aux étudiants et professionnels.",
        "Pour la liste complète des formations : [Nos Formations](https://fluxyte.vercel.app/formations)"
    ],
    devis: [
        "💰 Nos tarifs varient selon le projet. Vous pouvez obtenir un devis gratuit et personnalisé ici : [Devis en ligne](https://fluxyte.vercel.app/Plans%20Tarifs)"
    ],
    contact: [
        "📞 Vous pouvez nous contacter sur WhatsApp ou via le formulaire de contact sur notre site.",
        "Contactez-nous ici : [Contact Fluxyte](https://fluxyte.vercel.app/contact)"
    ],
    recrutement: [
        "🤝 Vous souhaitez rejoindre notre équipe ?",
        "Rendez-vous dans la section *Contact* pour soumettre votre candidature : [Rejoindre l'équipe](https://fluxyte.vercel.app/contact)"
    ],
    inconnu: [
        "🤖 Je n’ai pas compris votre demande, pouvez-vous reformuler ?",
        "Essayez par exemple : *services*, *tarifs*, *contact*, *formations* ou *cybersécurité*."
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
        setMessages(prev => [
            ...prev,
            {
                id: uuidv4(),
                role,
                text,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
        ]);
    }, []);

    const sendBotMessages = useCallback(async (texts: string[]) => {
        setTyping(true);
        for (const text of texts) {
            await new Promise(r => setTimeout(r, 600 + Math.random() * 600));
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
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, typing]);

    const detectIntent = (input: string): string[] => {
        const lower = input.toLowerCase();
        const results: string[] = [];
        for (const key in intents) {
            if (lower.includes(key)) results.push(...intents[key]);
        }
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
            className="fixed bottom-0 right-0 w-full max-w-[100vw] sm:max-w-[380px] h-[95vh] sm:h-[540px] z-[9999] flex flex-col bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-300 dark:border-gray-700 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <Image src={botIcon} alt="Bot" width={24} height={24} className="rounded-full sm:w-7 sm:h-7" />
                    <span className="font-semibold text-xs sm:text-sm">Assistant Fluxyte</span>
                </div>
                <button title="Fermer" onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition">
                    <X size={16} className="sm:w-4 sm:h-4" />
                </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-2 sm:px-3 py-2 flex flex-col gap-2 sm:gap-3 chat-scroll overscroll-contain">
                <AnimatePresence initial={false}>
                    {messages.map((m) => (
                        <div key={m.id} className={`${m.role === "user" ? "self-end" : "self-start"} max-w-[85%]`}>
                            <Message role={m.role} time={m.time}>
                                <ReactMarkdown
                                    components={{
                                        a: ({ children, href, ...props }) => {
                                            if (!href) return <span {...props}>{children}</span>; // sécurité si pas de href
                                            return (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-600 font-semibold flex items-center gap-1 hover:underline"
                                                    {...props}
                                                >
                                                    <ArrowRight size={14} /> {children}
                                                </a>
                                            );
                                        },
                                    }}
                                >

                                    {m.text}
                                </ReactMarkdown>
                            </Message>
                        </div>
                    ))}
                </AnimatePresence>
                {typing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs sm:text-sm text-gray-500 italic flex items-center gap-1 sm:gap-2">
                        <span className="animate-pulse">Assistant Fluxyte écrit...</span>
                    </motion.div>
                )}
            </div>

            {/* Input zone */}
            <form
                onSubmit={handleSend}
                className="p-2 sm:p-3 border-t border-gray-200 dark:border-gray-700 flex gap-1 sm:gap-2 items-center bg-gray-50 dark:bg-gray-800 sticky bottom-0 z-20"
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-1 px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none text-xs sm:text-sm focus:ring-2 focus:ring-violet-500 transition"
                />
                <button
                    type="submit"
                    disabled={!input.trim() || typing}
                    title="Envoyer"
                    className="p-2 sm:p-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full disabled:opacity-60 hover:scale-105 transition-transform"
                >
                    <Send size={16} className="sm:w-4 sm:h-4" />
                </button>
            </form>
        </motion.div>
    );
}
