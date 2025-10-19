"use client";

import { motion, Easing } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
    Code,
    Smartphone,
    Palette,
    BarChart3,
    Settings,
    Megaphone,
    ArrowRight,
    Sparkles,
    Zap,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
    const services = [
        {
            icon: <Code className="h-10 w-10" />,
            title: "Développement Web",
            description:
                "Sites vitrines, blogs, e-commerce et applications web sur mesure.",
            features: [
                "Site vitrine responsive",
                "E-commerce",
                "Application web sur mesure",
                "API RESTful",
            ],
            color: "from-blue-600 to-cyan-500",
            textColor: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-950/40 dark:to-cyan-950/40",
            shape: "rectangle",
            size: "large",
            href: "/services/web-dev",
        },
        {
            icon: <Smartphone className="h-10 w-10" />,
            title: "Applications Mobile",
            description: "Applications iOS et Android natives et cross-platform.",
            features: [
                "Applications natives",
                "UI/UX mobile optimisée",
                "Publication sur stores",
            ],
            color: "from-green-600 to-emerald-500",
            textColor: "text-green-600 dark:text-green-400",
            bgColor: "bg-gradient-to-br from-green-100/50 to-emerald-100/50 dark:from-green-950/40 dark:to-emerald-950/40",
            shape: "square",
            size: "medium",
            href: "/services/app-dev",
        },
        {
            icon: <Palette className="h-10 w-10" />,
            title: "Design & Branding",
            description: "Identité visuelle et UI/UX design pour votre marque.",
            features: [
                "Identité visuelle",
                "UI/UX design",
                "Design system",
                "Maquettes interactives",
            ],
            color: "from-purple-600 to-violet-500",
            textColor: "text-purple-600 dark:text-purple-400",
            bgColor: "bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-950/40 dark:to-violet-950/40",
            shape: "wide",
            size: "large",
            href: "/services/branding",
        },
        {
            icon: <BarChart3 className="h-10 w-10" />,
            title: "Marketing Digital",
            description:
                "Stratégies SEO, campagnes publicitaires et growth hacking.",
            features: [
                "Référencement SEO",
                "Publicité en ligne",
                "Growth hacking",
                "Analyse de données",
            ],
            color: "from-orange-600 to-amber-500",
            textColor: "text-orange-600 dark:text-orange-400",
            bgColor: "bg-gradient-to-br from-orange-100/50 to-amber-100/50 dark:from-orange-950/40 dark:to-amber-950/40",
            shape: "rectangle",
            size: "medium",
            href: "/services/marketing",
        },
        {
            icon: <Settings className="h-10 w-10" />,
            title: "Maintenance IT",
            description: "Support technique, hébergement et maintenance continue.",
            features: [
                "Hébergement cloud",
                "Maintenance technique",
                "Sauvegarde de données",
            ],
            color: "from-red-600 to-rose-500",
            textColor: "text-red-600 dark:text-red-400",
            bgColor: "bg-gradient-to-br from-red-100/50 to-rose-100/50 dark:from-red-950/40 dark:to-rose-950/40",
            shape: "square",
            size: "small",
            href: "/services/maintenance",
        },
        {
            icon: <Megaphone className="h-10 w-10" />,
            title: "Publication Sponsorisée",
            description:
                "Campagnes publicitaires ciblées sur les réseaux sociaux.",
            features: [
                "Campagnes social media",
                "Publicité Google Ads",
                "Ciblage avancé",
                "Analyse de performance",
            ],
            color: "from-pink-600 to-fuchsia-500",
            textColor: "text-pink-600 dark:text-pink-400",
            bgColor: "bg-gradient-to-br from-pink-100/50 to-fuchsia-100/50 dark:from-pink-950/40 dark:to-fuchsia-950/40",
            shape: "wide",
            size: "large",
            href: "/services/sponsored",
        },
    ];

    const getCardClass = (shape: string, size: string) => {
        const base =
            "relative overflow-hidden group cursor-pointer border border-border/40 backdrop-blur-sm transition-all duration-300 hover:border-border/60";
        const shapes: Record<string, string> = {
            rectangle: "rounded-3xl",
            square: "rounded-3xl aspect-square",
            wide: "rounded-3xl",
        };
        const sizes: Record<string, string> = {
            small: "min-h-[140px]",
            medium: "min-h-[180px]",
            large: "min-h-[200px]",
        };
        return `${base} ${shapes[shape]} ${sizes[size]}`;
    };

    const cubicBezier: Easing = [0.42, 0, 0.58, 1];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: cubicBezier },
        },
    };

    return (
        <section
            id="services"
            className="relative py-24 bg-background overflow-hidden"
        >
            {/* === FOND ANIMÉ === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lignes structurelles animées */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                   dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/4 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                   dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                   dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
                />

                {/* Éléments architecturaux flottants */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-12 sm:h-12 rounded-lg border border-border/40 backdrop-blur-sm
            ${i % 4 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 4 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : i % 4 === 2
                                        ? "bg-cyan-200/30 dark:bg-cyan-500/20"
                                        : "bg-green-200/30 dark:bg-green-500/20"}`}
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
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4" />
                        Nos Domaines d'Expertise
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Services{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Premium
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Des solutions sur-mesure adaptées à vos besoins.{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            Innovation
                        </span>,{" "}
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                            qualité
                        </span>{" "}
                        et{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                            résultats
                        </span>{" "}
                        garantis.
                    </p>
                </motion.div>

                {/* Grille de services */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="flex-shrink-0 w-full sm:w-[38%] lg:w-[30%] xl:w-[24%]"
                        >
                            <Card
                                className={`${service.bgColor} ${getCardClass(
                                    service.shape,
                                    service.size
                                )} shadow-xl hover:shadow-2xl transition-all duration-300 border-0`}
                            >
                                <CardContent className="p-6 sm:p-7 flex flex-col relative h-full">
                                    {/* Icône */}
                                    <motion.div
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Contenu */}
                                    <div className="flex-1">
                                        <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${service.textColor}`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center text-sm sm:text-base text-muted-foreground"
                                                >
                                                    <div
                                                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}
                                                    />
                                                    <span className="leading-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Bouton */}
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-between px-0 hover:bg-transparent border-t border-border/40 pt-4 rounded-none mt-auto group/button"
                                    >
                                        <Link
                                            href={service.href}
                                            className="flex items-center justify-between w-full"
                                        >
                                            <span className={`font-semibold ${service.textColor} group-hover/button:opacity-80 transition-opacity`}>
                                                Découvrir
                                            </span>
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-xs mr-2 shadow-md`}
                                                >
                                                    <Zap className="h-3 w-3" />
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/button:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mt-6 text-sm sm:text-base max-w-lg mx-auto">
                        Plus de 200 projets réalisés avec succès
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;