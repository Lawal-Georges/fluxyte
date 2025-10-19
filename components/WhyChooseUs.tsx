"use client"

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
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
    Star
} from 'lucide-react'
import Image from 'next/image'

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Compteurs animés
                    animate(0, 150, {
                        duration: 2.5,
                        ease: "easeOut",
                        onUpdate: (latest) => {
                            const el = document.getElementById('projects-count')
                            if (el) el.textContent = Math.floor(latest) + '+'
                        }
                    })
                    animate(0, 98, {
                        duration: 2.5,
                        ease: "easeOut",
                        onUpdate: (latest) => {
                            const el = document.getElementById('satisfaction-count')
                            if (el) el.textContent = Math.floor(latest) + '%'
                        }
                    })
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const features = [
        { icon: <Award className="h-5 w-5" />, title: "Excellence Qualitative", description: "Travail d'exception avec une attention minutieuse aux détails.", color: "from-blue-500 to-cyan-500", delay: 0.1 },
        { icon: <Clock className="h-5 w-5" />, title: "Respect des Délais", description: "Livraison ponctuelle pour maximiser votre retour sur investissement.", color: "from-green-500 to-emerald-500", delay: 0.15 },
        { icon: <Users className="h-5 w-5" />, title: "Collaboration Transparente", description: "Communication constante et processus totalement transparent.", color: "from-purple-500 to-violet-500", delay: 0.2 },
        { icon: <Shield className="h-5 w-5" />, title: "Sécurité Maximale", description: "Protection avancée de vos données et propriété intellectuelle.", color: "from-orange-500 to-amber-500", delay: 0.25 },
        { icon: <TrendingUp className="h-5 w-5" />, title: "Croissance Accélérée", description: "Solutions scalables qui propulsent votre croissance business.", color: "from-pink-500 to-rose-500", delay: 0.3 },
        { icon: <Heart className="h-5 w-5" />, title: "Passion & Innovation", description: "Équipe passionnée qui repousse les limites de l'innovation.", color: "from-red-500 to-pink-500", delay: 0.35 }
    ]

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(event.clientX - centerX)
        mouseY.set(event.clientY - centerY)
    }

    return (
        <section
            ref={sectionRef}
            className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/10 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Header Centré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        L&#39;Excellence en Action
                        <Star className="h-4 w-4" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Pourquoi{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Nous Choisir
                        </span>
                        ?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        Découvrez comment notre approche unique combine{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">expertise technique</span>,{' '}
                        <span className="text-green-600 dark:text-green-400 font-semibold">innovation constante</span>{' '}
                        et{' '}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">passion créative</span>{' '}
                        pour transformer votre vision en réalité digitale exceptionnelle.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Partie Gauche - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                        onMouseMove={handleMouseMove}
                    >
                        <motion.div
                            style={{ rotateX: rotateX, rotateY: rotateY }}
                            className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 flex items-center justify-center">
                                <Image
                                    src="/lawp.png"
                                    alt="Nos services professionnels"
                                    width={800}
                                    height={900}
                                    className="rounded-3xl object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-700"
                                    priority
                                    quality={90}
                                />
                            </div>

                            {/* Effets décoratifs */}
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-300/30 backdrop-blur-sm"
                            />
                            <motion.div
                                animate={{ rotate: [360, 0] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-300/20 backdrop-blur-sm"
                            />
                        </motion.div>

                        {/* Points flottants décoratifs */}
                        <motion.div
                            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-3 h-3 rounded-full bg-blue-400/60"
                        />
                        <motion.div
                            animate={{ y: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-cyan-400/60"
                        />
                    </motion.div>

                    {/* Partie Droite - Contenu */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="space-y-8"
                    >
                        {/* Grille des features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8 + feature.delay }}
                                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                    className="p-5 rounded-xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats animés */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
                        >
                            {[
                                { number: '5+', label: "Ans d'expérience", id: 'experience-count' },
                                { number: '150+', label: 'Projets livrés', id: 'projects-count' },
                                { number: '98%', label: 'Satisfaction', id: 'satisfaction-count' },
                                { number: '24/7', label: 'Support', id: 'support-count' }
                            ].map((stat, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
                                    <div id={stat.id} className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.4 }} className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <Target className="h-5 w-5" />
                                Commencer Mon Projet
                                <Zap className="h-5 w-5" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
