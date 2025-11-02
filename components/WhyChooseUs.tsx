"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    Award,
    Clock,
    Users,
    Shield,
    TrendingUp,
    Heart,
    Sparkles,
    Target,
    Zap,
    Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Compteurs animés
                    animate(0, 150, {
                        duration: 2.5,
                        ease: "easeOut",
                        onUpdate: (latest) => {
                            const el = document.getElementById("projects-count");
                            if (el) el.textContent = Math.floor(latest) + "+";
                        },
                    });
                    animate(0, 98, {
                        duration: 2.5,
                        ease: "easeOut",
                        onUpdate: (latest) => {
                            const el = document.getElementById("satisfaction-count");
                            if (el) el.textContent = Math.floor(latest) + "%";
                        },
                    });
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(event.clientX - centerX);
        mouseY.set(event.clientY - centerY);
    };

    const features = [
        {
            icon: <Award className="h-5 w-5" />,
            title: "Excellence Qualitative",
            description:
                "Travail d'exception avec une attention minutieuse aux détails.",
            color: "from-blue-600 to-cyan-500",
            delay: 0.1,
        },
        {
            icon: <Clock className="h-5 w-5" />,
            title: "Respect des Délais",
            description:
                "Livraison ponctuelle pour maximiser votre retour sur investissement.",
            color: "from-green-600 to-emerald-500",
            delay: 0.15,
        },
        {
            icon: <Users className="h-5 w-5" />,
            title: "Collaboration Transparente",
            description: "Communication constante et processus totalement clair.",
            color: "from-purple-600 to-violet-500",
            delay: 0.2,
        },
        {
            icon: <Shield className="h-5 w-5" />,
            title: "Sécurité Maximale",
            description: "Protection avancée de vos données et propriété intellectuelle.",
            color: "from-orange-600 to-amber-500",
            delay: 0.25,
        },
        {
            icon: <TrendingUp className="h-5 w-5" />,
            title: "Croissance Accélérée",
            description: "Solutions scalables qui propulsent votre croissance business.",
            color: "from-pink-600 to-fuchsia-500",
            delay: 0.3,
        },
        {
            icon: <Heart className="h-5 w-5" />,
            title: "Passion & Innovation",
            description: "Une équipe passionnée qui repousse les limites de l'innovation.",
            color: "from-red-600 to-pink-500",
            delay: 0.35,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 bg-background overflow-hidden select-none"
        >
            {/* === FOND ANIMÉ identique à Testimonials === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-2/3 left-0 w-full h-[2px] 
          bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
          dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 4,
                    }}
                />
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-border/40 backdrop-blur-sm
            ${i % 3 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 3 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : "bg-cyan-200/30 dark:bg-cyan-500/20"
                            }`}
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
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-8 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4" />
                        L&#39;Excellence en Action
                        <Star className="h-4 w-4" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Pourquoi{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Nous Choisir
                        </span>
                        ?
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Découvrez comment notre approche unique combine{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            expertise technique
                        </span>
                        ,{" "}
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                            innovation constante
                        </span>{" "}
                        et{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                            passion créative
                        </span>{" "}
                        pour transformer votre vision en réalité digitale exceptionnelle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* === IMAGE 3D avec fond animé === */}
                    {/* === IMAGE 3D avec fond animé === */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onMouseMove={handleMouseMove}
                        className="relative h-[500px] lg:h-[600px] flex items-center justify-center w-full"
                    >
                        {/* === FOND ANIMÉ SPÉCIFIQUE À L'IMAGE === */}
                        <motion.div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            style={{ perspective: 800 }}
                        >
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/20
                    ${i % 3 === 0
                                            ? "bg-blue-400/30"
                                            : i % 3 === 1
                                                ? "bg-purple-400/30"
                                                : "bg-cyan-400/30"
                                        }`}
                                    animate={{
                                        x: [0, 30 * (i % 3 === 0 ? 1 : -1), 0],
                                        y: [0, -20, 0],
                                        rotateY: [0, 45, 0],
                                        rotateX: [0, 45, 0],
                                        opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                        duration: 6 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.3,
                                    }}
                                    style={{
                                        left: `${10 + i * 12}%`,
                                        top: `${15 + (i % 3) * 25}%`,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* === IMAGE 3D AVEC ROTATION SUR MOUSEMOVE === */}
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="relative flex items-center justify-center w-full h-full overflow-hidden"
                        >
                            <Image
                                src="/lawp.png"
                                alt="Nos services professionnels"
                                width={400} // taille réduite
                                height={450}
                                className="object-contain w-full h-full transition-transform duration-700"
                                priority
                                quality={90}
                            />
                        </motion.div>
                    </motion.div>


                    {/* === FEATURES === */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 px-2 sm:px-4 md:px-6"
                    >
                        {/* === FEATURES === */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * i, duration: 0.5 }}
                                    whileHover={{ y: -4, scale: 1.03 }}
                                    className="p-4 md:p-5 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-2 cursor-pointer"
                                >
                                    <div
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-2 shadow-md group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {f.icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100">
                                        {f.title}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-gray-700 dark:text-gray-300 leading-snug">
                                        {f.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* === STATS === */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-gray-200/40 dark:border-gray-700/40"
                        >
                            {[
                                { number: "5+", label: "Ans d'expérience", id: "experience-count" },
                                { number: "150+", label: "Projets livrés", id: "projects-count" },
                                { number: "98%", label: "Satisfaction", id: "satisfaction-count" },
                                { number: "24/7", label: "Support", id: "support-count" },
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-inner transition-all duration-300"
                                >
                                    <div
                                        id={s.id}
                                        className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-1"
                                    >
                                        {s.number}
                                    </div>
                                    <div className="text-[10px] md:text-xs text-gray-800 dark:text-gray-200 font-medium">
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* === CTA === */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="pt-4 flex justify-center"
                        >
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.03, rotate: 1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm md:text-base"
                                >
                                    <Target className="h-4 w-4 md:h-5 md:w-5" />
                                    Commencer Mon Projet
                                    <Zap className="h-4 w-4 md:h-5 md:w-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
