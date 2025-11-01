"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Chatbot from "./Chatbot";

interface FloatingActionsProps {
    locale: string;
}

export default function FloatingActions({ locale }: FloatingActionsProps) {
    const [showChat, setShowChat] = useState(false);

    return (
        <>
            {/* 💬 Bouton Chatbot */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50"
                data-locale={locale}
            >
                <motion.button
                    whileHover={{
                        scale: 1.08,
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(99,102,241,0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowChat((s) => !s)}
                    className="relative p-2 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                    title={showChat ? "Fermer le chatbot" : "Ouvrir le chatbot"}
                    aria-label="Ouvrir ou fermer le chatbot"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md"
                    />

                    <Image
                        src="/icons/bot3.png"
                        alt="Chatbot"
                        width={65}
                        height={65}
                        className="relative z-10 transition-transform duration-300 hover:scale-110"
                    />

                    {/* 🔔 Indicateur de notification */}
                    {!showChat && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md"
                        >
                            1
                        </motion.span>
                    )}
                </motion.button>

                {/* 🧠 Fenêtre Chatbot */}
                <AnimatePresence>
                    {showChat && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="w-[90vw] sm:w-auto"
                        >
                            <Chatbot onClose={() => setShowChat(false)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
