"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Play, ChevronDown, Users, Target, Zap, Sparkles, Award, Globe, Rocket, Heart, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import React from "react"
import CountUp from "react-countup";

export default function About() {
    const [activeTab, setActiveTab] = useState("mission")

    const stats = [
        { number: "50+", label: "Projets Livrés", icon: Rocket },
        { number: "98%", label: "Clients Satisfaits", icon: Heart },
        { number: "24/7", label: "Support", icon: Shield },
        { number: "5+", label: "Ans d'Expérience", icon: Award }
    ]

    const values = [
        {
            icon: Zap,
            title: "Innovation Continue",
            description: "Nous repoussons les limites du possible avec les dernières technologies et tendances digitales.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "Collaboration Transparente",
            description: "Votre vision devient notre mission. Nous travaillons main dans la main avec vous à chaque étape.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Target,
            title: "Excellence Qualitive",
            description: "Chaque pixel, chaque ligne de code est pensé pour offrir une expérience exceptionnelle.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Globe,
            title: "Impact Digital",
            description: "Nous créons des solutions qui transforment votre business et impactent positivement votre audience.",
            color: "from-orange-500 to-amber-500"
        }
    ]

    const team = [
        {
            name: "Alexandre Martin",
            role: "CEO & Lead Developer",
            image: "/team/alexandre.jpg",
            description: "Expert en développement full-stack avec 8 ans d'expérience dans le digital."
        },
        {
            name: "Sophie Lambert",
            role: "Creative Director",
            image: "/team/sophie.jpg",
            description: "Passionnée par le design d'expérience et l'innovation visuelle."
        },
        {
            name: "Thomas Dubois",
            role: "CTO & Mobile Expert",
            image: "/team/thomas.jpg",
            description: "Spécialiste des applications mobiles natives et cross-platform."
        },
        {
            name: "Marie Chen",
            role: "Growth Marketer",
            image: "/team/marie.jpg",
            description: "Stratège en marketing digital et acquisition utilisateurs."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };


    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section About */}
            <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-24 pb-8">
                {/* 🌈 Background animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />

                {/* Cercles animés */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-5 sm:top-20 sm:left-10 w-36 h-36 sm:w-60 sm:h-60 bg-blue-200 rounded-full blur-3xl dark:bg-blue-800"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-200 rounded-full blur-3xl dark:bg-purple-800"
                />

                <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-md"
                        >
                            <Sparkles className="h-4 w-4" />
                            Notre Histoire & Vision
                        </motion.div>

                        {/* Titre Principal */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug"
                        >
                            Plus qu'une agence,{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block sm:inline">
                                votre partenaire
                            </span>{" "}
                            digital
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                        >
                            Depuis 2020, nous accompagnons les entreprises dans leur transformation digitale
                            avec passion, expertise et une vision tournée vers l'innovation.
                        </motion.p>

                        {/* Bouton */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative"
                            >
                                <Button
                                    size="sm"
                                    className="rounded-full px-5 sm:px-8 py-3 sm:py-5 text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl transition-all duration-500 group overflow-hidden"
                                >
                                    <span className="flex items-center justify-center relative z-10">
                                        <motion.span whileHover={{ x: 2 }} className="mr-2">
                                            Démarrer mon projet
                                        </motion.span>
                                        <motion.div whileHover={{ x: 4 }}>
                                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                                        </motion.div>
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Indicateur scroll */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="mt-8 sm:mt-10 flex justify-center"
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
                    </motion.div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                                className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-500' : index === 1 ? 'from-purple-500 to-pink-500' : index === 2 ? 'from-green-500 to-emerald-500' : 'from-orange-500 to-amber-500'} flex items-center justify-center text-white mx-auto mb-3 sm:mb-4`}>
                                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Mission & Vision Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/lawal-pro-assis.png"
                                    alt="Notre mission"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                />
                                {/* Overlay décoratif */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Élément décoratif */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl" />
                        </motion.div>

                        {/* Contenu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-0"
                        >
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                                >
                                    <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                                    Notre Raison d'Être
                                </motion.div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                                    Donner vie à votre{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        vision digitale
                                    </span>
                                </h2>
                            </div>

                            {/* Tabs */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex flex-col sm:flex-row sm:space-x-1 space-y-1 sm:space-y-0 rounded-2xl bg-gray-100 dark:bg-gray-800 p-1 sm:p-2">
                                    {[
                                        { id: "mission", label: "Notre Mission" },
                                        { id: "vision", label: "Notre Vision" },
                                        { id: "values", label: "Nos Valeurs" }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab.id
                                                ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Contenu des Tabs */}
                                <div className="min-h-[180px] sm:min-h-[200px]">
                                    {activeTab === "mission" && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="space-y-3 sm:space-y-4 text-sm sm:text-base"
                                        >
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Notre mission est de démocratiser l'excellence digitale en offrant
                                                des solutions innovantes, accessibles et sur-mesure qui transforment
                                                réellement le business de nos clients.
                                            </p>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {[
                                                    "Créer des expériences digitales mémorables",
                                                    "Développer des solutions technologiques robustes",
                                                    "Accompagner la croissance de nos partenaires",
                                                    "Innovation constante et amélioration continue"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full mr-2 sm:mr-3" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {activeTab === "vision" && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="space-y-3 sm:space-y-4 text-sm sm:text-base"
                                        >
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Nous envisageons un futur où chaque entreprise, quelle que soit sa taille,
                                                peut bénéficier des meilleures solutions digitales pour prospérer
                                                dans l'économie moderne.
                                            </p>
                                        </motion.div>
                                    )}

                                    {activeTab === "values" && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="space-y-3 sm:space-y-4 text-sm sm:text-base"
                                        >
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Nos valeurs sont le fondement de chaque projet et interaction :
                                            </p>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {[
                                                    "Transparence et honnêteté",
                                                    "Innovation et créativité",
                                                    "Excellence et qualité",
                                                    "Collaboration et partenariat"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full mr-2 sm:mr-3" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Valeurs Section - Version finale optimisée */}
            {/* Valeurs Section */}
            <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Titre */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                            Nos{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Valeurs Fondatrices
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                            Les principes qui guident chacune de nos actions et décisions
                        </p>
                    </motion.div>

                    {/* Version Desktop (lg et plus) */}
                    <div className="relative hidden lg:block">
                        <div className="flex justify-center items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                                className="relative w-[700px] h-[700px]"
                            >
                                {/* Cercles décoratifs */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-blue-200 dark:border-blue-800/50 rounded-full pointer-events-none"
                                />
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.4, delay: 0.3 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-purple-200 dark:border-purple-800/50 rounded-full pointer-events-none"
                                />

                                {/* Cercle central */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-10"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="text-white text-center"
                                    >
                                        <span className="text-sm font-extrabold block leading-tight">NOS</span>
                                        <span className="text-base font-extrabold block leading-tight">VALEURS</span>
                                    </motion.div>
                                </motion.div>

                                {/* Points autour du cercle */}
                                {values.map((value, index) => {
                                    const totalItems = values.length;
                                    const angle = (index * 360) / totalItems - 90;
                                    const radian = (angle * Math.PI) / 180;

                                    const centerX = 350;
                                    const centerY = 350;
                                    const iconRadius = 180;
                                    const titleRadius = 230;
                                    const descRadius = 300;

                                    const iconX = centerX + Math.cos(radian) * iconRadius;
                                    const iconY = centerY + Math.sin(radian) * iconRadius;
                                    const titleX = centerX + Math.cos(radian) * titleRadius;
                                    const titleY = centerY + Math.sin(radian) * titleRadius;
                                    const descX = centerX + Math.cos(radian) * descRadius;
                                    const descY = centerY + Math.sin(radian) * descRadius;

                                    // Calcul de l'alignement du texte
                                    const textAlign = Math.cos(radian) > 0 ? "left" : "right";
                                    const descWidth = "180px";

                                    return (
                                        <React.Fragment key={value.title}>
                                            {/* Ligne */}
                                            <motion.svg
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                                transition={{ duration: 0.8, delay: index * 0.08 }}
                                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                                            >
                                                <defs>
                                                    <linearGradient id={`grad-d-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                                                    </linearGradient>
                                                </defs>
                                                <line
                                                    x1={centerX}
                                                    y1={centerY}
                                                    x2={iconX}
                                                    y2={iconY}
                                                    stroke={`url(#grad-d-${index})`}
                                                    strokeWidth="2"
                                                    strokeDasharray="4 4"
                                                />
                                            </motion.svg>

                                            {/* Icône */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                whileHover={{ scale: 1.15 }}
                                                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                                                className="absolute z-20 cursor-pointer group"
                                                style={{
                                                    left: `${iconX}px`,
                                                    top: `${iconY}px`,
                                                    transform: 'translate(-50%, -50%)'
                                                }}
                                            >
                                                <div
                                                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-xl border-3 border-white dark:border-gray-800 transition-all duration-300 group-hover:shadow-2xl`}
                                                >
                                                    <value.icon className="w-8 h-8" />
                                                </div>
                                            </motion.div>

                                            {/* Titre */}
                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", stiffness: 120, delay: index * 0.12 }}
                                                className="absolute z-30"
                                                style={{
                                                    left: `${titleX}px`,
                                                    top: `${titleY}px`,
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                <div className={`bg-gradient-to-r ${value.color} px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm`}>
                                                    <h3 className="text-sm font-bold text-white text-center whitespace-nowrap">
                                                        {value.title}
                                                    </h3>
                                                </div>
                                            </motion.div>

                                            {/* Description */}
                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 30 : -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", stiffness: 120, delay: index * 0.14 }}
                                                className="absolute z-40"
                                                style={{
                                                    left: `${descX}px`,
                                                    top: `${descY}px`,
                                                    transform: 'translate(-50%, -50%)',
                                                    width: descWidth
                                                }}
                                            >
                                                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                                                    <p className="text-xs text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </React.Fragment>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>

                    {/* Version Tablet (md à lg) */}
                    <div className="relative hidden md:block lg:hidden">
                        <div className="flex justify-center items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                                className="relative w-[550px] h-[550px]"
                            >
                                {/* Cercles décoratifs */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border-2 border-blue-200 dark:border-blue-800/50 rounded-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-purple-200 dark:border-purple-800/50 rounded-full" />

                                {/* Cercle central */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800 z-10"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="text-white text-center"
                                    >
                                        <span className="text-xs font-bold block">NOS</span>
                                        <span className="text-sm font-bold block">VALEURS</span>
                                    </motion.div>
                                </motion.div>

                                {/* Points autour */}
                                {values.map((value, index) => {
                                    const angle = (index * 360) / values.length - 90;
                                    const radian = (angle * Math.PI) / 180;
                                    const centerX = 275;
                                    const centerY = 275;
                                    const iconRadius = 140;
                                    const titleRadius = 180;
                                    const descRadius = 240;

                                    const iconX = centerX + Math.cos(radian) * iconRadius;
                                    const iconY = centerY + Math.sin(radian) * iconRadius;
                                    const titleX = centerX + Math.cos(radian) * titleRadius;
                                    const titleY = centerY + Math.sin(radian) * titleRadius;
                                    const descX = centerX + Math.cos(radian) * descRadius;
                                    const descY = centerY + Math.sin(radian) * descRadius;

                                    const textAlign = Math.cos(radian) > 0 ? "left" : "right";

                                    return (
                                        <React.Fragment key={value.title}>
                                            <motion.svg
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.06 }}
                                                className="absolute inset-0 pointer-events-none z-0"
                                            >
                                                <line
                                                    x1={centerX} y1={centerY}
                                                    x2={iconX} y2={iconY}
                                                    stroke="url(#gradTab)"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="3 3"
                                                    opacity="0.5"
                                                />
                                                <defs>
                                                    <linearGradient id="gradTab">
                                                        <stop offset="0%" stopColor="#3b82f6" />
                                                        <stop offset="100%" stopColor="#8b5cf6" />
                                                    </linearGradient>
                                                </defs>
                                            </motion.svg>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", delay: index * 0.1 }}
                                                className="absolute z-20"
                                                style={{ left: `${iconX}px`, top: `${iconY}px`, transform: 'translate(-50%, -50%)' }}
                                            >
                                                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg border-3 border-white dark:border-gray-800`}>
                                                    <value.icon className="w-7 h-7" />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 15 : -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.12 }}
                                                className="absolute z-30"
                                                style={{ left: `${titleX}px`, top: `${titleY}px`, transform: 'translate(-50%, -50%)' }}
                                            >
                                                <div className={`bg-gradient-to-r ${value.color} px-3 py-1.5 rounded-lg shadow-md`}>
                                                    <h3 className="text-xs font-bold text-white text-center whitespace-nowrap">
                                                        {value.title}
                                                    </h3>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.14 }}
                                                className="absolute z-40"
                                                style={{ left: `${descX}px`, top: `${descY}px`, transform: 'translate(-50%, -50%)', width: '140px' }}
                                            >
                                                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                                                    <p className="text-[10px] text-gray-700 dark:text-gray-300 text-center leading-snug">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </React.Fragment>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>

                    {/* Version Mobile (moins de md) */}
                    <div className="relative md:hidden">
                        <div className="flex justify-center items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                                className="relative w-[380px] h-[380px]"
                            >
                                {/* Cercles décoratifs */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-blue-200 dark:border-blue-800/50 rounded-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] border border-purple-200 dark:border-purple-800/50 rounded-full" />

                                {/* Cercle central */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 z-10"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="text-white text-center"
                                    >
                                        <span className="block text-xs font-bold">NOS</span>
                                        <span className="block text-xs font-bold">VALEURS</span>
                                    </motion.div>
                                </motion.div>

                                {/* Points autour */}
                                {values.map((value, index) => {
                                    const angle = (index * 360) / values.length - 90;
                                    const rad = (angle * Math.PI) / 180;
                                    const centerX = 190;
                                    const centerY = 190;
                                    const iconRadius = 100;
                                    const titleRadius = 130;
                                    const descRadius = 170;

                                    const iconX = centerX + Math.cos(rad) * iconRadius;
                                    const iconY = centerY + Math.sin(rad) * iconRadius;
                                    const titleX = centerX + Math.cos(rad) * titleRadius;
                                    const titleY = centerY + Math.sin(rad) * titleRadius;
                                    const descX = centerX + Math.cos(rad) * descRadius;
                                    const descY = centerY + Math.sin(rad) * descRadius;

                                    const textAlign = Math.cos(rad) > 0 ? "left" : "right";

                                    return (
                                        <React.Fragment key={value.title}>
                                            <motion.svg
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                                className="absolute inset-0 pointer-events-none z-0"
                                            >
                                                <line
                                                    x1={centerX} y1={centerY}
                                                    x2={iconX} y2={iconY}
                                                    stroke="url(#gradMob)"
                                                    strokeWidth="1"
                                                    strokeDasharray="2 2"
                                                    opacity="0.4"
                                                />
                                                <defs>
                                                    <linearGradient id="gradMob">
                                                        <stop offset="0%" stopColor="#3b82f6" />
                                                        <stop offset="100%" stopColor="#8b5cf6" />
                                                    </linearGradient>
                                                </defs>
                                            </motion.svg>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", delay: index * 0.08 }}
                                                className="absolute z-20"
                                                style={{ left: `${iconX}px`, top: `${iconY}px`, transform: 'translate(-50%, -50%)' }}
                                            >
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-md border-3 border-white dark:border-gray-700`}>
                                                    <value.icon className="w-6 h-6" />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 10 : -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="absolute z-30"
                                                style={{ left: `${titleX}px`, top: `${titleY}px`, transform: 'translate(-50%, -50%)' }}
                                            >
                                                <div className={`bg-gradient-to-r ${value.color} px-2.5 py-1 rounded-md shadow-sm`}>
                                                    <h3 className="text-[10px] font-bold text-white text-center whitespace-nowrap">
                                                        {value.title}
                                                    </h3>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: textAlign === "left" ? 15 : -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.12 }}
                                                className="absolute z-40"
                                                style={{ left: `${descX}px`, top: `${descY}px`, transform: 'translate(-50%, -50%)', width: '110px' }}
                                            >
                                                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-2 py-1.5 rounded-md shadow-sm border border-gray-200 dark:border-gray-700">
                                                    <p className="text-[9px] text-gray-700 dark:text-gray-300 text-center leading-tight">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </React.Fragment>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>






            {/* CTA Final */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-xl sm:max-w-2xl mx-auto"
                    >
                        {/* Badge animé */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white/20 text-white text-sm sm:text-base font-semibold mb-6 sm:mb-8"
                        >
                            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                            Prêt à collaborer ?
                        </motion.div>

                        {/* Titre */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-snug sm:leading-tight">
                            Commençons votre projet ensemble
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                            Rejoignez les entreprises qui ont transformé leur vision digitale en réalité avec Fluxyte.
                        </p>

                        {/* Bouton */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="sm"
                                className="text-sm sm:text-base md:text-lg lg:text-xl bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-3 sm:py-5 md:py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
                            >
                                Discuter de mon projet
                                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}