"use client";

import { motion, useAnimation, Easing } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            name: "Marie Dupont",
            role: "CEO, FashionStyle",
            image: "/lawal-pro-assis1.png",
            content:
                "Fluxyte a transformé notre présence en ligne. Leur équipe a créé une plateforme e-commerce exceptionnelle qui a boosté nos ventes de 150% en seulement 6 mois.",
            rating: 5,
            gradient: "from-blue-600 to-cyan-500",
        },
        {
            name: "Thomas Martin",
            role: "Directeur Marketing, TechInnov",
            image: "/avatars/thomas-martin.jpg",
            content:
                "Le travail d'équipe avec Fluxyte a été remarquable. Ils ont livré une application mobile qui dépasse nos attentes.",
            rating: 5,
            gradient: "from-purple-600 to-violet-500",
        },
        {
            name: "Sophie Leroy",
            role: "Fondatrice, GreenLife",
            image: "/avatars/sophie-leroy.jpg",
            content:
                "Professionnalisme, créativité et respect des délais. Fluxyte a su donner vie à notre vision avec un site web magnifique et fonctionnel.",
            rating: 5,
            gradient: "from-green-600 to-emerald-500",
        },
        {
            name: "Alexandre Petit",
            role: "CTO, FinancePlus",
            image: "/avatars/alexandre-petit.jpg",
            content:
                "La qualité du code et l'architecture proposées par Fluxyte sont exceptionnelles. Notre application est scalable et sécurisée.",
            rating: 5,
            gradient: "from-orange-600 to-amber-500",
        },
        {
            name: "Julie Moreau",
            role: "Responsable Communication, EduTech",
            image: "/avatars/julie-moreau.jpg",
            content:
                "Le service client de Fluxyte est exceptionnel. Réactifs, à l'écoute et toujours disponibles pour nos besoins.",
            rating: 5,
            gradient: "from-pink-600 to-fuchsia-500",
        },
    ];

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    // --- Animation automatique fluide ---
    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: ["0%", "-50%"],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls]);

    const cubicBezier: Easing = [0.42, 0, 0.58, 1];

    return (
        <section className="relative py-24 bg-background overflow-hidden select-none">
            {/* === FOND ANIMÉ === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lignes structurelles */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                    dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                    dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute top-2/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                    dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
                />

                {/* Éléments flottants */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-border/40 backdrop-blur-sm
                        ${i % 3 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 3 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : "bg-cyan-200/30 dark:bg-cyan-500/20"}`}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                    />
                ))}
            </div>

            {/* === CONTENU === */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4" />
                        Témoignages Clients
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Ils nous font{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            confiance
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Découvrez les expériences de nos clients avec{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            Fluxyte
                        </span>{" "}
                        et les résultats qu’ils ont obtenus.
                    </p>
                </motion.div>

                {/* Carrousel */}
                <div className="relative cursor-grab active:cursor-grabbing">
                    {/* Gradients latéraux */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <motion.div
                        ref={containerRef}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 0 }}
                        dragElastic={0.1}
                        onDragStart={() => setIsPaused(true)}
                        onDragEnd={() => setIsPaused(false)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        animate={controls}
                        className="flex gap-8 w-max"
                    >
                        {duplicatedTestimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3, ease: cubicBezier }}
                            >
                                <Card className={`bg-gradient-to-br ${t.gradient} p-[2px] rounded-3xl shadow-xl hover:shadow-2xl`}>
                                    <div className="h-full bg-black/20 rounded-[22px] p-6 flex flex-col justify-between text-white">
                                        <CardContent className="p-0 relative">
                                            <div className="flex items-center mb-4">
                                                <Avatar className="h-14 w-14 mr-4 ring-2 ring-offset-2 ring-border/40">
                                                    <AvatarImage src={t.image} alt={t.name} />
                                                    <AvatarFallback className={`bg-gradient-to-br ${t.gradient} text-white font-bold`}>
                                                        {t.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className="font-bold text-white">{t.name}</h4>
                                                    <p className="text-sm text-white/80">{t.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex mb-4">
                                                {[...Array(t.rating)].map((_, starIndex) => (
                                                    <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>

                                            <p className="text-sm leading-relaxed italic text-white/90">
                                                “{t.content}”
                                            </p>

                                            <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${t.gradient}`} />
                                        </CardContent>
                                    </div>
                                </Card>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-10 text-sm text-muted-foreground"
                >
                    🌀 Survolez pour mettre en pause ou glissez pour naviguer
                </motion.div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lignes structurelles */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                    dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                    dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute top-2/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                    dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
                />

                {/* Éléments flottants */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-border/40 backdrop-blur-sm
                        ${i % 3 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 3 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : "bg-cyan-200/30 dark:bg-cyan-500/20"}`}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                    />
                ))}
            </div>

        </section>
    );
};

export default Testimonials;
