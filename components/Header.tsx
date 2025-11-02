"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { User, ChevronRight, Home, Info, Briefcase, Images, CreditCard, FileText, Mail } from "lucide-react"
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

    // Icônes pour chaque lien de navigation
    const navigation = [
        { name: "Accueil", href: "/", icon: Home },
        { name: "À propos", href: "/about", icon: Info },
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "Portfolio", href: "/portfolio", icon: Images },
        { name: "Plans & Tarifs", href: "/pricing", icon: CreditCard },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Contact", href: "/contact", icon: Mail },
    ]

    // Correction: Types Framer Motion appropriés
    const menuVariants = {
        open: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            scale: 0.8,
            opacity: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        }
    }

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 1000,
                velocity: -100
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                type: "spring" as const,
                stiffness: 1000
            }
        }
    }

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1 as const
            }
        }
    }

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
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="relative w-10 h-10 bg-sky-200/80 rounded-full overflow-hidden"
                        >
                            <Image
                                src="/fluxyte1.png"
                                alt="Fluxyte Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </motion.div>
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
                                    "relative text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group",
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
                                <div className={cn(
                                    "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                                    pathname === item.href && "scale-x-100"
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Icône User animée */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href="/login"
                                className={cn(
                                    "p-2 rounded-full transition-all duration-300 group",
                                    "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10",
                                    "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
                                    "border border-transparent hover:border-blue-200 dark:hover:border-blue-800",
                                    "shadow-sm hover:shadow-md"
                                )}
                                aria-label="Se connecter"
                            >
                                <User className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            </Link>
                        </motion.div>

                        <ThemeToggle />

                        {/* Bouton Menu Burger Amélioré */}
                        {/* Bouton Menu Burger stylé (2 barres asymétriques et animées) */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "md:hidden relative w-9 h-9 flex flex-col justify-center items-center group",
                                "transition-all duration-300"
                            )}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Menu"
                        >
                            {/* Barre supérieure */}
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: 45, y: 4, backgroundColor: "#3B82F6", width: "1.5rem" } // plus courte et bleue
                                        : { rotate: 0, y: -5, backgroundColor: "currentColor", width: "1.75rem" }
                                }
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="block h-[2px] rounded-full bg-current transition-all duration-300 group-hover:scale-105"
                            />

                            {/* Barre inférieure */}
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: -45, y: -4, backgroundColor: "#3B82F6", width: "1.25rem" } // plus courte et bleue
                                        : { rotate: 0, y: 5, backgroundColor: "currentColor", width: "1.1rem" }
                                }
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="block h-[3px] rounded-full bg-current transition-all duration-300 group-hover:scale-105"
                            />
                        </motion.button>

                    </div>
                </div>

                {/* Menu Mobile Amélioré */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className={cn(
                                "md:hidden mt-4 overflow-hidden",
                                "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl",
                                "rounded-3xl border border-gray-200 dark:border-gray-700",
                                "shadow-2xl"
                            )}
                        >
                            <motion.nav
                                className="flex flex-col p-4 space-y-2"
                                variants={containerVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                {navigation.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <motion.div
                                            key={item.name}
                                            variants={itemVariants}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "flex items-center justify-between px-4 py-4 rounded-2xl",
                                                    "transition-all duration-300 group",
                                                    "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50",
                                                    "dark:hover:from-blue-900/20 dark:hover:to-purple-900/20",
                                                    pathname === item.href
                                                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                                )}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={cn(
                                                        "p-2 rounded-xl transition-all duration-300",
                                                        "group-hover:scale-110 group-hover:rotate-12",
                                                        pathname === item.href
                                                            ? "bg-blue-500 text-white"
                                                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                    )}>
                                                        <IconComponent className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-medium">{item.name}</span>
                                                </div>

                                                <motion.div
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                    className={cn(
                                                        "transition-all duration-300",
                                                        pathname === item.href
                                                            ? "text-blue-600 dark:text-blue-400"
                                                            : "text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                                    )}
                                                >
                                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    )
                                })}

                                {/* Séparateur */}
                                <motion.div
                                    variants={itemVariants}
                                    className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 my-2"
                                />

                                {/* Lien de connexion amélioré */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-4 rounded-2xl",
                                            "transition-all duration-300 group",
                                            "bg-gradient-to-r from-blue-500/5 to-purple-500/5",
                                            "hover:from-blue-500/10 hover:to-purple-500/10",
                                            "border border-blue-200/50 dark:border-blue-800/50",
                                            pathname === '/login'
                                                ? "text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700"
                                                : "text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                                        )}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={cn(
                                                "p-2 rounded-xl transition-all duration-300",
                                                "bg-blue-500/10 group-hover:bg-blue-500/20",
                                                "group-hover:scale-110"
                                            )}>
                                                <User className="h-4 w-4" />
                                            </div>
                                            <span className="font-medium">Se connecter</span>
                                        </div>

                                        <motion.div
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                                        >
                                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            </motion.nav>

                            {/* Footer du menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="px-4 py-3 border-t border-gray-200 dark:border-gray-700"
                            >
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                    Fluxyte © 2025
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header