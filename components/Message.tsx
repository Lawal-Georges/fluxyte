"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import userIcon from "../public/icons/user0.png";
import botIcon from "../public/icons/bot3.png";

export default function Message({
    role,
    time,
    children,
}: {
    role: "user" | "bot";
    time: string;
    children: React.ReactNode;
}) {
    const isUser = role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`flex items-end gap-2 sm:gap-3 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
        >
            {/* Avatar */}
            <div className="flex-shrink-0">
                <Image
                    src={isUser ? userIcon : botIcon}
                    alt={isUser ? "Utilisateur" : "Bot"}
                    width={35}
                    height={35}
                    className="rounded-full w-7 h-7 sm:w-8 sm:h-8 object-cover"
                />
            </div>

            {/* Message */}
            <div
                className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-[13px] sm:text-sm leading-snug break-words shadow-md transition-all duration-200 ${isUser
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-md"
                    }`}
            >
                {/* Contenu du message */}
                <div className="prose prose-sm dark:prose-invert max-w-full">
                    {children}
                </div>

                {/* Heure */}
                <div
                    className={`text-[10px] sm:text-[11px] mt-1 ${isUser ? "text-blue-200" : "text-gray-400 dark:text-gray-500"
                        } text-right`}
                >
                    {time}
                </div>
            </div>
        </motion.div>
    );
}
