"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            className={`flex gap-2 items-end max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
        >
            <Image
                src={isUser ? "/icons/user.png" : "/icons/bot3.png"}
                alt={isUser ? "Utilisateur" : "Bot"}
                width={30}
                height={30}
                className="rounded-full"
            />
            <div
                className={`px-3 py-2 rounded-2xl break-words text-sm leading-snug shadow-sm ${isUser
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-md"
                    }`}
            >
                <div className="prose prose-sm dark:prose-invert">{children}</div>
                <div className="text-[10px] text-gray-400 mt-1 text-right">{time}</div>
            </div>
        </motion.div>
    );
}
