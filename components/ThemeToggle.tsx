"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-gray-100/50 dark:bg-gray-800/50 animate-pulse" />
        )
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer
                     bg-gray-100 dark:bg-gray-800
                     hover:bg-gray-200 dark:hover:bg-gray-700
                     border border-gray-200 dark:border-gray-700
                     transition-colors duration-200"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className="absolute"
                >
                    {theme === 'dark' ? (
                        <Moon className="h-[18px] w-[18px] text-indigo-300" strokeWidth={2.5} />
                    ) : (
                        <Sun className="h-[18px] w-[18px] text-amber-500" strokeWidth={2.5} />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    )
}

export default ThemeToggle