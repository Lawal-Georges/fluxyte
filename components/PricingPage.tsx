"use client"

import { motion, Easing } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X, Star, ArrowRight, HelpCircle, Zap, Sparkles, Target, Crown, User, Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const PricingPage = () => {
    const [activePlan, setActivePlan] = useState('pro')
    const [isAnnual, setIsAnnual] = useState(false)

    const plans = [
        {
            id: 'starter',
            name: "Starter",
            price: { monthly: "499", annual: "449" },
            description: "Parfait pour les petites entreprises et startups",
            popular: false,
            badge: "Essentiel",
            features: [
                { name: "Site vitrine responsive", included: true },
                { name: "Design personnalisé", included: true },
                { name: "Jusqu'à 5 pages", included: true },
                { name: "Hébergement inclus (1 an)", included: true },
                { name: "Support par email", included: true },
                { name: "Certificat SSL", included: true },
                { name: "Applications Mobile", included: false },
                { name: "Design & Branding complet", included: false },
                { name: "Marketing Digital", included: false },
                { name: "Maintenance IT", included: false },
                { name: "Publication Sponsorisée", included: false }
            ]
        },
        {
            id: 'pro',
            name: "Pro",
            price: { monthly: "899", annual: "809" },
            description: "Idéal pour les entreprises en croissance",
            popular: true,
            badge: "Populaire",
            features: [
                { name: "Site web sur mesure", included: true },
                { name: "Design avancé", included: true },
                { name: "Jusqu'à 15 pages", included: true },
                { name: "Hébergement inclus (1 an)", included: true },
                { name: "Support prioritaire", included: true },
                { name: "SEO de base", included: true },
                { name: "Analytics intégré", included: true },
                { name: "Applications Mobile", included: true },
                { name: "Design & Branding complet", included: true },
                { name: "Marketing Digital", included: false },
                { name: "Maintenance IT", included: false },
                { name: "Publication Sponsorisée", included: false }
            ]
        },
        {
            id: 'business',
            name: "Business",
            price: { monthly: "1,499", annual: "1,349" },
            description: "Solution complète pour entreprises établies",
            popular: false,
            badge: "Complet",
            features: [
                { name: "Application web complète", included: true },
                { name: "Design premium", included: true },
                { name: "Pages illimitées", included: true },
                { name: "Hébergement dédié", included: true },
                { name: "Support 24/7", included: true },
                { name: "SEO avancé", included: true },
                { name: "E-commerce intégré", included: true },
                { name: "Applications Mobile", included: true },
                { name: "Design & Branding complet", included: true },
                { name: "Marketing Digital", included: true },
                { name: "Maintenance IT (6 mois)", included: true },
                { name: "Publication Sponsorisée", included: false }
            ]
        },
        {
            id: 'premium',
            name: "Premium",
            price: { monthly: "2,499", annual: "2,249" },
            description: "Solution sur mesure pour grandes entreprises",
            popular: false,
            badge: "Enterprise",
            features: [
                { name: "Application web enterprise", included: true },
                { name: "Design exclusif", included: true },
                { name: "Pages illimitées", included: true },
                { name: "Hébergement cloud", included: true },
                { name: "Support dédié 24/7", included: true },
                { name: "SEO expert", included: true },
                { name: "Applications Mobile natives", included: true },
                { name: "Design & Branding complet", included: true },
                { name: "Marketing Digital complet", included: true },
                { name: "Maintenance IT (12 mois)", included: true },
                { name: "Publication Sponsorisée", included: true },
                { name: "Formation avancée", included: true }
            ]
        }
    ]

    const services = [
        "Développement Web",
        "Applications Mobile",
        "Design & Branding",
        "Marketing Digital",
        "Maintenance IT",
        "Publication Sponsorisée",
        "Support 24/7",
        "Hébergement Premium"
    ]

    const testimonials = [
        {
            name: "Marie Dupont",
            role: "CEO, FashionStyle",
            content: "Grâce à Fluxyte, notre startup a pu lancer son site web en un temps record avec une qualité exceptionnelle. Le plan Pro était parfait pour nos besoins !",
            rating: 5,
            avatar: "M"
        },
        {
            name: "Thomas Martin",
            role: "Directeur Marketing, TechInnov",
            content: "Le passage au plan Business nous a permis de scaler notre application mobile sans soucis. L'équipe support est réactive et professionnelle.",
            rating: 5,
            avatar: "T"
        },
        {
            name: "Sophie Leroy",
            role: "Fondatrice, GreenLife",
            content: "Le plan Starter était idéal pour démarrer, puis nous sommes passés au Pro. La flexibilité des offres nous a vraiment séduits.",
            rating: 5,
            avatar: "S"
        }
    ]

    const faqs = [
        {
            question: "Comment choisir le bon plan ?",
            answer: "Nous recommandons le Starter pour les sites vitrines simples, le Pro pour les entreprises en croissance, le Business pour les solutions complètes et le Premium pour les projets enterprise."
        },
        {
            question: "Puis-je passer à un plan supérieur plus tard ?",
            answer: "Absolument ! Vous pouvez upgrade votre plan à tout moment. Seule la différence de prix vous sera facturée."
        },
        {
            question: "Les prix incluent-ils le support technique ?",
            answer: "Oui, tous nos plans incluent du support technique. Le niveau de support (email, prioritaire, 24/7) varie selon le plan choisi."
        },
        {
            question: "Quels modes de paiement acceptez-vous ?",
            answer: "Nous acceptons les virements bancaires, cartes de crédit, Mobile Money et PayPal. Des facilités de paiement sont possibles."
        },
        {
            question: "Proposez-vous des devis personnalisés ?",
            answer: "Oui, pour les projets complexes ou spécifiques, nous établissons des devis sur mesure. Contactez-nous pour discuter de votre projet."
        },
        {
            question: "Y a-t-il des frais cachés ?",
            answer: "Non, tous nos prix sont transparents. Les seuls frais supplémentaires seraient pour des fonctionnalités spécifiques non incluses dans le plan choisi."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cubicBezier: Easing = [0.42, 0, 0.58, 1]

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: cubicBezier
            }
        }
    }

    function scrollToServices(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            {/* Hero Section */}
            <section className="pt-32  lg:pt-35 lg:pb-33 md:pt-32 pb-16 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm md:text-lg font-semibold mb-6 md:mb-8"
                        >
                            <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                            Plans Transparents
                            <Crown className="h-4 w-4 md:h-5 md:w-5" />
                        </motion.div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent px-4">
                            Des offres adaptées à vos{" "}
                            <span className="text-blue-600 dark:text-blue-400">ambitions</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                            Choisissez la solution qui propulsera votre entreprise vers de nouveaux sommets,
                            avec un accompagnement sur mesure à chaque étape.
                        </p>

                        {/* Toggle Annual/Mensuel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-8 px-4"
                        >
                            <span className={`text-base md:text-lg font-medium ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
                                Mensuel
                            </span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="relative w-14 h-7 md:w-16 md:h-8 bg-blue-600 rounded-full transition-all duration-300"
                                title="Basculer entre paiement mensuel et annuel"
                            >
                                <motion.div
                                    animate={{ x: isAnnual ? 28 : 6 }}
                                    className="absolute top-1 left-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-lg"
                                />
                            </button>
                            <div className="flex items-center gap-2">
                                <span className={`text-base md:text-lg font-medium ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
                                    Annuel
                                </span>
                                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs md:text-sm font-medium rounded-full">
                                    -10%
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4"
                        >
                            <Button size="sm" className="w-full sm:w-auto rounded-full px-6 py-5 md:px-10 md:py-7 text-base md:text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                <Target className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                                Démarrer mon projet
                                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
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
                            <span className="mb-1 font-medium">Découvrir</span>
                            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <ChevronDown className="h-4 w-4 mb-0.5" />
                                <ChevronDown className="h-4 w-4" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                </div>
            </section>

            {/* Plans & Tarifs */}
            <section className="py-16 md:py-24 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-4">
                            Des plans pour chaque{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                ambition
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                            De la startup prometteuse à l&#39;entreprise établie, découvrez la solution
                            qui correspond parfaitement à vos objectifs de croissance.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
                    >
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -4,
                                    scale: plan.popular ? 1.02 : 1.01,
                                    transition: { duration: 0.3 }
                                }}
                                className="relative group"
                            >
                                <Card className={cn(
                                    "h-full relative border-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-500 overflow-visible",
                                    "min-h-[600px] sm:min-h-[650px] lg:min-h-[700px]",
                                    plan.popular
                                        ? "border-blue-500 shadow-xl lg:shadow-2xl lg:scale-105 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800"
                                        : "border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-400"
                                )}>

                                    {/* Effet de brillance */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Badge */}
                                    <div
                                        className={cn(
                                            "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg z-10 text-center",
                                            plan.popular
                                                ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                                : "bg-gradient-to-r from-gray-600 to-gray-500"
                                        )}
                                        style={{ maxWidth: "90%" }} // Limite la largeur sur mobile
                                    >
                                        {plan.popular ? (
                                            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                                                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                                                <span className="text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal">
                                                    {plan.badge}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal">
                                                {plan.badge}
                                            </span>
                                        )}
                                    </div>


                                    <CardHeader className="text-center pb-4 sm:pb-6 pt-6 sm:pt-8 relative z-10 px-4 sm:px-6">
                                        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                                            {plan.name}
                                        </CardTitle>
                                        <div className="mt-4 sm:mt-6">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                                €{isAnnual ? plan.price.annual : plan.price.monthly}
                                            </span>
                                            <div className="flex items-center justify-center gap-2 mt-2">
                                                <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                                                    {isAnnual ? '/an' : '/projet'}
                                                </span>
                                                {isAnnual && plan.price.monthly !== plan.price.annual && (
                                                    <span className="text-green-600 text-xs sm:text-sm font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                                        Économisez 10%
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="relative z-10 px-4 sm:px-6">
                                        <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                                            {plan.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex items-start text-xs sm:text-sm"
                                                >
                                                    {feature.included ? (
                                                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                                                            <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                                                        </span>
                                                    ) : (
                                                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                                                            <X className="h-3 w-3 text-red-400 dark:text-red-300" />
                                                        </span>
                                                    )}
                                                    <span className={cn(
                                                        "text-gray-700 dark:text-gray-300 leading-tight",
                                                        !feature.included && "text-gray-400 dark:text-gray-500 line-through"
                                                    )}>
                                                        {feature.name}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                className={cn(
                                                    "w-full py-4 sm:py-6 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 group/btn",
                                                    plan.popular
                                                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl"
                                                        : "bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 shadow-md hover:shadow-lg"
                                                )}
                                                onClick={() => setActivePlan(plan.id)}
                                            >
                                                <span className="flex items-center justify-center">
                                                    <span className="hidden sm:inline">Choisir ce plan</span>
                                                    <span className="sm:hidden">Choisir</span>
                                                    <Zap className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-110 transition-transform" />
                                                </span>
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Tableau Comparatif Version Améliorée */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Comparatif des{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                            Visualisez en un coup d'œil ce qui est inclus dans chaque plan
                        </p>
                    </motion.div>

                    {/* Version Desktop - Tableau Classique */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="hidden lg:block max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                                        <th className="px-8 py-6 text-left font-bold text-gray-900 dark:text-white text-lg">
                                            Service
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.id} className={cn(
                                                "px-6 py-6 text-center font-bold text-lg transition-all duration-300",
                                                plan.popular && "bg-blue-100 dark:bg-blue-900/30 relative"
                                            )}>
                                                {plan.popular && (
                                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                                            <Star className="h-4 w-4 fill-current" />
                                                            Populaire
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="flex flex-col items-center">
                                                    <span className={cn(
                                                        "text-lg font-bold",
                                                        plan.popular ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                                                    )}>
                                                        {plan.name}
                                                    </span>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                        €{isAnnual ? plan.price.annual : plan.price.monthly}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                                    {services.map((service, index) => (
                                        <motion.tr
                                            key={service}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn(
                                                "group hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300",
                                                index % 2 === 0 ? "bg-white/50 dark:bg-gray-800/50" : "bg-gray-50/50 dark:bg-gray-700/50"
                                            )}
                                        >
                                            <td className="px-8 py-5 font-semibold text-gray-800 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 group-hover:scale-150 transition-transform duration-300" />
                                                    {service}
                                                </div>
                                            </td>
                                            {plans.map((plan) => {
                                                const feature = plan.features.find(f => f.name === service)
                                                return (
                                                    <td key={plan.id} className={cn(
                                                        "px-6 py-5 text-center transition-all duration-300",
                                                        plan.popular && "bg-blue-50/30 dark:bg-blue-900/20"
                                                    )}>
                                                        {feature?.included ? (
                                                            <motion.div
                                                                whileHover={{ scale: 1.3, rotate: 5 }}
                                                                className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto shadow-lg cursor-pointer"
                                                            >
                                                                <Check className="h-5 w-5 text-white" />
                                                            </motion.div>
                                                        ) : (
                                                            <motion.div
                                                                whileHover={{ scale: 1.3, rotate: -5 }}
                                                                className="w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center mx-auto shadow-lg cursor-pointer"
                                                            >
                                                                <X className="h-5 w-5 text-white" />
                                                            </motion.div>
                                                        )}
                                                    </td>
                                                )
                                            })}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Version Mobile & Tablet - Cards Interactives */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:hidden space-y-6 max-w-4xl mx-auto"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                            >
                                {/* En-tête du service */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
                                    <h3 className="font-bold text-gray-800 dark:text-white text-lg flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                                        {service}
                                    </h3>
                                </div>

                                {/* Plans pour ce service */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                                    {plans.map((plan) => {
                                        const feature = plan.features.find(f => f.name === service)
                                        return (
                                            <motion.div
                                                key={plan.id}
                                                whileHover={{ scale: 1.05 }}
                                                className={cn(
                                                    "text-center p-4 rounded-xl border-2 transition-all duration-300",
                                                    plan.popular
                                                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 shadow-md"
                                                        : "border-gray-200 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-700/50"
                                                )}
                                            >
                                                {/* Nom du plan */}
                                                <div className="mb-3">
                                                    <span className={cn(
                                                        "text-sm font-bold block",
                                                        plan.popular ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                                                    )}>
                                                        {plan.name}
                                                    </span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        €{isAnnual ? plan.price.annual : plan.price.monthly}
                                                    </span>
                                                </div>

                                                {/* Statut inclus/exclu */}
                                                {feature?.included ? (
                                                    <motion.div
                                                        whileHover={{ scale: 1.2 }}
                                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto shadow-lg"
                                                    >
                                                        <Check className="h-6 w-6 text-white" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        whileHover={{ scale: 1.2 }}
                                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center mx-auto shadow-lg"
                                                    >
                                                        <X className="h-6 w-6 text-white" />
                                                    </motion.div>
                                                )}

                                                {/* Label */}
                                                <span className="text-xs font-medium mt-2 block">
                                                    {feature?.included ? "Inclus" : "Non inclus"}
                                                </span>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Légende pour Mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:hidden mt-8 flex justify-center"
                    >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                            <h4 className="font-bold text-gray-800 dark:text-white mb-4 text-center">Légende des plans</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {plans.map((plan) => (
                                    <div key={plan.id} className={cn(
                                        "text-center p-3 rounded-lg border-2",
                                        plan.popular
                                            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20"
                                            : "border-gray-200 dark:border-gray-600"
                                    )}>
                                        <span className={cn(
                                            "text-sm font-bold block",
                                            plan.popular ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                                        )}>
                                            {plan.name}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            €{isAnnual ? plan.price.annual : plan.price.monthly}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Indicateur de Scroll pour Desktop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex justify-center mt-8"
                    >
                        <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                            <motion.div
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-300">Faites défiler pour voir plus</span>
                            <motion.div
                                animate={{ x: [5, -5, 5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Ils nous font{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                confiance
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                            Découvrez les retours de nos clients satisfaits
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group">
                                    <CardContent className="p-4 sm:p-6 md:p-8">
                                        <div className="flex items-center mb-4 sm:mb-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{testimonial.name}</h4>
                                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex mb-3 sm:mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                                            `{testimonial.content}`
                                        </p>

                                        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                            Il y a 2 mois
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Questions{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Fréquentes
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                            Tout ce que vous devez savoir sur nos offres
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -2 }}
                            >
                                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-4 sm:p-6 md:p-8">
                                        <div className="flex items-start space-x-4 sm:space-x-6">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                                <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white">
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-2xl bg-white/20 text-white text-sm md:text-lg font-semibold mb-6 md:mb-8"
                        >
                            <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                            Prêt à commencer ?
                        </motion.div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 px-4">
                            Transformez vos idées en réalité
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                            Rejoignez des centaines d&#39;entreprises qui ont boosté leur croissance
                            avec nos solutions digitales sur mesure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base md:text-lg px-6 py-5 md:px-10 md:py-7 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                                >
                                    <Target className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                                    Commencer maintenant
                                    <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 text-base md:text-lg px-6 py-5 md:px-10 md:py-7 rounded-full font-bold backdrop-blur-sm transition-all duration-300"
                                >
                                    <User className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                                    Demander un devis
                                </Button>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-blue-200 mt-6 md:mt-8 text-xs sm:text-sm px-4"
                        >
                            Aucun engagement • Support 7j/7 • Satisfaction garantie
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

// Fonction utilitaire pour les classes conditionnelles
function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default PricingPage