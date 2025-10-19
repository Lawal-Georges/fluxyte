"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User } from "lucide-react" // AJOUT: Import de l'icône User
import { cn } from "@/lib/utils"
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // MODIFICATION: Ajout de "Plans & Tarifs" dans la navigation
    const navigation = [
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Plans & Tarifs", href: "/pricing" }, // NOUVEAU LIEN
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto",
                "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70",
                "rounded-full border border-gray-200 dark:border-gray-700 shadow-md",
                scrolled ? "py-2 mt-2" : "py-3 mt-4",
                "transition-all duration-300"
            )}
        >
            <div className="px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative w-10 h-10 bg-sky-200/80 rounded-full overflow-hidden">
                            <Image
                                src="/fluxyte1.png"
                                alt="Fluxyte Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Fluxyte
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                    pathname === item.href
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-300"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* MODIFICATION: Right Section - Ajout de l'icône User */}
                    <div className="flex items-center space-x-4">
                        {/* NOUVEAU: Icône User animée et cliquable */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href="/login"
                                className={cn(
                                    "p-2 rounded-full transition-colors duration-200",
                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                    "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
                                    "border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                                )}
                                aria-label="Se connecter"
                            >
                                <User className="h-5 w-5" />
                            </Link>
                        </motion.div>

                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* MODIFICATION: Mobile Navigation - Ajout du lien de connexion */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-4 py-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                            pathname === item.href
                                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {/* NOUVEAU: Lien de connexion dans le menu mobile */}
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                        "flex items-center space-x-2",
                                        pathname === '/login'
                                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                    )}
                                >
                                    <User className="h-4 w-4" />
                                    <span>Se connecter</span>
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header