"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const scrollToServices = () => {
        const services = document.getElementById("services");
        if (services) services.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center overflow-hidden pt-32 pb-25 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
            {/* Background principal avec meilleur contraste */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-muted/50 transition-colors duration-500" />

            {/* === NOUVEAU BACKGROUND ANIMÉ AMÉLIORÉ === */}

            {/* Grille géométrique animée */}
            <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-15">
                <motion.div
                    animate={{
                        x: ["0%", "100%", "0%"],
                        y: ["0%", "100%", "0%"]
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:50px_50px]"
                />
            </div>

            {/* Orbes énergétiques principaux */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl
                           bg-gradient-to-r from-primary/30 via-blue-400/40 to-cyan-400/30 
                           dark:from-primary/20 dark:via-blue-600/30 dark:to-cyan-600/20"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                    rotate: [360, 180, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl
                           bg-gradient-to-r from-purple-400/30 via-pink-400/40 to-rose-400/30
                           dark:from-purple-600/20 dark:via-pink-600/30 dark:to-rose-600/20"
            />

            {/* Particules flottantes énergétiques */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, Math.sin(i) * 30, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.7
                    }}
                    className={`absolute w-2 h-2 rounded-full ${i % 4 === 0 ? 'bg-blue-400/60 dark:bg-blue-500/40' :
                        i % 4 === 1 ? 'bg-purple-400/60 dark:bg-purple-500/40' :
                            i % 4 === 2 ? 'bg-cyan-400/60 dark:bg-cyan-500/40' :
                                'bg-pink-400/60 dark:bg-pink-500/40'
                        }`}
                    style={{
                        left: `${15 + (i * 7)}%`,
                        top: `${10 + (i * 6)}%`
                    }}
                />
            ))}

            {/* Vagues de lumière */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: ["-100%", "200%"],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/3 w-64 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                />
                <motion.div
                    animate={{
                        x: ["200%", "-100%"],
                        opacity: [0, 0.3, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                    className="absolute bottom-1/3 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent dark:via-purple-500/20"
                />
            </div>

            {/* Éclairs énergétiques */}
            <motion.div
                animate={{
                    opacity: [0, 0.2, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 sm:top-32 sm:left-20 w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-xl
                           bg-primary/20 dark:bg-primary/15"
            />

            <motion.div
                animate={{
                    opacity: [0, 0.25, 0],
                    scale: [1.1, 1, 1.1],
                    rotate: [0, -5, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-20 right-10 sm:bottom-32 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-xl
                           bg-purple-400/20 dark:bg-purple-500/15"
            />

            {/* Centre d'énergie pulsante */}
            <motion.div
                animate={{
                    opacity: [0.05, 0.2, 0.05],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full blur-3xl
                           bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 
                           dark:from-primary/5 dark:via-accent/10 dark:to-primary/5"
            />

            {/* Éléments géométriques flottants */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5
                    }}
                    className={`absolute w-6 h-6 rounded-lg ${i % 4 === 0 ? 'bg-blue-400/30 dark:bg-blue-500/20' :
                        i % 4 === 1 ? 'bg-purple-400/30 dark:bg-purple-500/20' :
                            i % 4 === 2 ? 'bg-cyan-400/30 dark:bg-cyan-500/20' :
                                'bg-pink-400/30 dark:bg-pink-500/20'
                        } backdrop-blur-sm border border-white/10`}
                    style={{
                        left: `${8 + (i * 12)}%`,
                        top: `${20 + (i % 3) * 20}%`
                    }}
                />
            ))}

            {/* === CONTENU PRINCIPAL === */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex justify-center items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-4
                                   bg-blue-500 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-foreground transition-colors backdrop-blur-sm"
                    >
                        🚀 Agence digitale innovante depuis 2025
                    </motion.div>

                    {/* Titre */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight
                                   text-foreground transition-colors">
                        Transformez vos{" "}
                        <span className="bg-gradient-to-r from-primary bg-sky-600 bg-clip-text text-transparent">
                            idées
                        </span>{" "}
                        en réalité digitale
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed
                                   text-muted-foreground transition-colors"
                    >
                        Nous créons des expériences digitales exceptionnelles qui propulsent
                        votre entreprise vers l&apos;avant.
                    </motion.p>

                    {/* Boutons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
                    >
                        {/* Bouton Principal */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                        >
                            <Button
                                size="sm"
                                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full group shadow-xl
                                           bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-blue-600 text-white font-semibold relative overflow-hidden border-0"
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>

                                <Link href="/contact" className="flex items-center relative z-10">
                                    Commencer mon projet
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Bouton Secondaire */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full group border-2 font-semibold transition-all duration-300 relative overflow-hidden
                                           border-primary text-primary hover:bg-primary hover:text-primary-foreground
                                           dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground"
                            >
                                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                <span className="flex items-center relative z-10">
                                    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                                    Voir la démo
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image côté droit avec petites images en arrière-plan */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end w-full max-w-[500px] h-auto lg:translate-x-50"
                >
                    <div className="relative w-full aspect-square overflow-hidden">
                        {/* Petites images en background */}
                        <Image
                            src="/small1.png"
                            alt="Décoration 1"
                            width={50}
                            height={50}
                            className="absolute top-0 left-0 sm:top-2 sm:left-2 lg:top-5 lg:left-5"
                        />
                        <Image

                            src="/small3.png"
                            alt="Décoration 2"
                            width={40}
                            height={40}
                            className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 lg:bottom-5 lg:right-5"
                        />
                        <Image
                            src="/small2.png"
                            alt="Décoration 3"
                            width={30}
                            height={30}
                            className="absolute top-1/2 left-0 sm:left-3 lg:left-5 -translate-y-1/2"
                        />
                        <Image
                            src="/small4.png"
                            alt="Décoration 4"
                            width={35}
                            height={35}
                            className="absolute bottom-1/2 right-0 sm:right-3 lg:right-5 translate-y-1/2"
                        />

                        {/* Image principale */}
                        <Image
                            src="/lawal-pro-assis1.png"
                            alt="Fluxyte Hero"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />

                        {/* Effet de brillance */}
                        <motion.div
                            animate={{
                                opacity: [0, 0.3, 0],
                                x: ["-100%", "200%"]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 pointer-events-none"
                        />
                    </div>
                </motion.div>


            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
                <button
                    onClick={scrollToServices}
                    className="flex flex-col items-center text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors group"
                    aria-label="Voir les services"
                >
                    <span className="mb-1 font-medium group-hover:scale-110 transition-transform">Découvrir</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="group-hover:scale-110 transition-transform"
                    >
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                </button>
            </motion.div>
        </section>
    );
}