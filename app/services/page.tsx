"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
    ArrowRight,
    Code,
    Smartphone,
    Palette,
    BarChart3,
    Settings,
    Megaphone,
    Zap,
    Sparkles,
    Target,
    Rocket,
    Users,
    CheckCircle,
    PlayCircle,
    ChevronDown
} from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

export default function Services() {
    const [, setActiveService] = useState("web");

    const services = [
        {
            id: "web",
            icon: Code,
            title: "Développement Web",
            description: "Des sites web sur mesure, rapides et optimisés pour convertir vos visiteurs en clients.",
            features: ["React/Next.js", "Performance optimisée", "SEO intégré", "Responsive design"],
            color: "from-blue-500 to-cyan-500",
            gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
            shape: "hexagon",
            image: "/services/appmobile.jpg",
            illustration: "/services/appmobile.jpg"
        },
        {
            id: "mobile",
            icon: Smartphone,
            title: "Applications Mobile",
            description: "Applications natives et cross-platform pour iOS et Android avec une UX exceptionnelle.",
            features: ["iOS & Android", "Applications natives", "UI/UX optimisée", "Store deployment"],
            color: "from-green-500 to-emerald-500",
            gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
            shape: "circle",
            image: "/services/mobile-dev.svg",
            illustration: "/illustrations/mobile-dev.svg"
        },
        {
            id: "design",
            icon: Palette,
            title: "Design & Branding",
            description: "Identités visuelle impactantes et interfaces utilisateur qui engagent et convertissent.",
            features: ["UI/UX Design", "Identité visuelle", "Design system", "Prototypes interactifs"],
            color: "from-purple-500 to-pink-500",
            gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
            shape: "triangle",
            image: "/services/design.svg",
            illustration: "/illustrations/design.svg"
        },
        {
            id: "marketing",
            icon: BarChart3,
            title: "Marketing Digital",
            description: "Stratégies data-driven pour booster votre visibilité et générer du trafic qualifié.",
            features: ["SEO/SEA", "Social Media", "Content Marketing", "Analytics"],
            color: "from-orange-500 to-amber-500",
            gradient: "bg-gradient-to-r from-orange-500 to-amber-500",
            shape: "diamond",
            image: "/services/marketing.svg",
            illustration: "/illustrations/marketing.svg"
        },
        {
            id: "maintenance",
            icon: Settings,
            title: "Maintenance & Support",
            description: "Support technique proactif et maintenance pour garantir la performance de vos solutions.",
            features: ["Support 24/7", "Mises à jour", "Sécurité", "Hébergement"],
            color: "from-red-500 to-rose-500",
            gradient: "bg-gradient-to-r from-red-500 to-rose-500",
            shape: "pentagon",
            image: "/services/maintenance.svg",
            illustration: "/illustrations/support.svg"
        },
        {
            id: "ads",
            icon: Megaphone,
            title: "Publicité Digital",
            description: "Campagnes publicitaires ciblées sur les réseaux sociaux et moteurs de recherche.",
            features: ["Google Ads", "Meta Ads", "Retargeting", "Optimisation ROI"],
            color: "from-indigo-500 to-purple-500",
            gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
            shape: "star",
            image: "/services/ads.svg",
            illustration: "/illustrations/ads.svg"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Strategy",
            description: "Analyse de vos besoins et définition d'une stratégie sur mesure.",
            icon: Target,
            illustration: "/illustrations/discovery.svg"
        },
        {
            step: "02",
            title: "Design & Prototypage",
            description: "Création de maquettes et prototypes interactifs pour validation.",
            icon: Palette,
            illustration: "/illustrations/design-process.svg"
        },
        {
            step: "03",
            title: "Développement",
            description: "Développement agile avec les meilleures technologies du marché.",
            icon: Code,
            illustration: "/illustrations/development.svg"
        },
        {
            step: "04",
            title: "Lancement & Support",
            description: "Déploiement et support continu pour garantir votre succès.",
            icon: Rocket,
            illustration: "/illustrations/launch.svg"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1]
            }
        }
    };




    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        .clip-path-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>

            {/* Hero Section Services */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-22 lg:pb-20">
                {/* Background animé amélioré */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-purple-900/90" />

                {/* Formes géométriques animées */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 dark:from-blue-600 dark:to-cyan-600"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 0, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 dark:from-purple-600 dark:to-pink-600"
                />

                {/* Formes supplémentaires */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [45, 90, 45],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl blur-2xl opacity-20 dark:from-green-600 dark:to-emerald-600"
                />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Texte */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6"
                            >
                                <Sparkles className="h-4 w-4" />
                                Nos Expertises Digitales
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold mb-6 leading-tight"
                            >
                                Des solutions{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    innovantes
                                </span>{" "}
                                pour votre succès digital
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-x text-gray-600 dark:text-gray-300 mb-5 leading-relaxed"
                            >
                                Nous transformons vos idées en expériences digitales exceptionnelles
                                avec des technologies de pointe et un design qui captive.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button size="sm" className="rounded-full px-3 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                        Commencer mon projet
                                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="outline" size="sm" className="rounded-full px-3 py-3 text-lg border-2 group">
                                        <PlayCircle className="mr-3 h-5 w-5" />
                                        Voir la démo
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Illustration Hero */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative"
                        >
                            <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl flex items-center justify-center">
                                {/* Image de fond */}
                                <Image
                                    src="/Group(1).png"
                                    alt="Services Digitales"
                                    width={800}
                                    height={800}
                                    className="absolute w-64 h-64 lg:w-80 lg:h-80 -top-4 -left-4 shadow-lg rounded-xl"
                                />

                                {/* Image du dessus */}
                                <Image
                                    src="/code1.jpg"
                                    alt="Services Digitales 2"
                                    width={800}
                                    height={800}
                                    className="relative w-64 h-64 lg:w-80 lg:h-80 top-0 left-0 shadow-xl rounded-xl"
                                />

                                {/* Optionnel : une troisième image pour accentuer l’effet pile */}
                                <Image
                                    src="/appmobile.jpg"
                                    alt="Services Digitales 3"
                                    width={800}
                                    height={800}
                                    className="absolute w-64 h-64 lg:w-80 lg:h-80 top-4 left-4 shadow-md rounded-xl"
                                />
                            </div>

                        </motion.div>

                    </motion.div>

                    {/* Indicateur scroll */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-8 sm:mt-15 flex justify-center"
                    >
                        <motion.button
                            onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex flex-col items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300"
                        >
                            <span className="mb-1 font-medium">Explorer</span>
                            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <ChevronDown className="h-4 w-4 mb-0.5" />
                                <ChevronDown className="h-4 w-4" />
                            </motion.div>
                        </motion.button>
                    </motion.div>


                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-15 sm:px-6 lg:px-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Nos{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Services
                            </span>{" "}
                            sur Mesure
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Une gamme complète de services digitaux pour propulser votre business
                            dans l&#39;ère numérique.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="relative group"
                            >
                                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Forme décorative */}
                                    <div className={`absolute -top-12 -right-12 w-24 h-24 ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                                    <CardHeader className="p-8 pb-6 relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className="h-8 w-8" />
                                            </div>
                                            <div className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                                                0{index + 1}
                                            </div>
                                        </div>

                                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                            {service.title}
                                        </CardTitle>

                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="p-8 pt-0 relative z-10">
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                                                Ce que nous offrons :
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.features.map((feature, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex items-center text-gray-600 dark:text-gray-400"
                                                    >
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="mt-auto"
                                        >
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between px-0 hover:bg-transparent group/btn"
                                                onClick={() => setActiveService(service.id)}
                                            >
                                                <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors">
                                                    Explorer le service
                                                </span>
                                                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Notre{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Méthodologie
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Un processus éprouvé en 4 étapes pour garantir l&#39;excellence et le succès de votre projet.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Process Steps */}
                            <div className="space-y-8">
                                {process.map((step, index) => (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start gap-6 group cursor-pointer"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                {step.step}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="w-7 h-7 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-lg">
                                                <step.icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Process Illustration */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="relative w-full sm:w-96 md:w-[28rem] lg:w-[36rem] h-60 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl flex items-center justify-center">

                                    {/* Image du fond */}
                                    <Image
                                        src="/Group(1).png"
                                        alt="Processus de travail 1"
                                        width={400}
                                        height={400}
                                        className="absolute w-40 sm:w-52 md:w-64 lg:w-80 h-40 sm:h-52 md:h-64 lg:h-80 -top-4 -left-4 rounded-2xl shadow-lg"
                                    />

                                    {/* Image du dessus */}
                                    <Image
                                        src="/Rectangle.png"
                                        alt="Processus de travail 2"
                                        width={400}
                                        height={400}
                                        className="relative w-40 sm:w-52 md:w-64 lg:w-80 h-40 sm:h-52 md:h-64 lg:h-80 rounded-2xl shadow-xl"
                                    />

                                    {/* Optionnel : troisième image pour renforcer l’effet pile */}
                                    <Image
                                        src="/dev.jpg"
                                        alt="Processus de travail 3"
                                        width={400}
                                        height={400}
                                        className="absolute w-40 sm:w-52 md:w-64 lg:w-80 h-40 sm:h-52 md:h-64 lg:h-80 top-4 left-4 rounded-2xl shadow-md"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
                {/* Background animé */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 text-white text-lg font-semibold mb-8"
                        >
                            <Sparkles className="h-5 w-5" />
                            Prêt à transformer votre vision ?
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Créons ensemble quelque chose d&#39;extraordinaire
                        </h2>

                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Votre projet mérite l&#39;excellence. Discutons de vos ambitions et
                            donnons vie à vos idées les plus audacieuses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-3 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                                >
                                    <Target className="mr-3 h-6 w-6" />
                                    Démarrer mon projet
                                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white/10 text-lg px-3 py-3 rounded-full font-bold backdrop-blur-sm"
                                >
                                    <Users className="mr-3 h-6 w-6" />
                                    Rencontrer l&#39;équipe
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}