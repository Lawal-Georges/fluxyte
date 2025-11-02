// components/blog/BlogPage.tsx
'use client'

import { motion } from 'framer-motion'
import BlogList from '@/components/blog/BlogList'
import { Sparkles, BookOpen, TrendingUp } from 'lucide-react'
import BlogCard from './BlogCard'

const blogPosts = [
    {
        id: 1,
        title: "L'Architecture Digitale : Construire l'Avenir du Web",
        excerpt: "Découvrez comment nous concevons des expériences digitales durables et innovantes qui transforment les idées en réalités tangibles.",
        date: "15 Jan 2024",
        readTime: "8 min",
        category: "Architecture Digitale",
        slug: "architecture-digitale-futur-web",
        image: "/blog/architecture-digitale.jpg",
        featured: true
    },
    {
        id: 2,
        title: "Les Tendances UI/UX 2024 : Design Émotionnel et Expériences Immersives",
        excerpt: "Explorez les nouvelles frontières du design d'interface où l'émotion rencontre la technologie pour créer des expériences mémorables.",
        date: "12 Jan 2024",
        readTime: "6 min",
        category: "Design",
        slug: "tendances-ui-ux-2024",
        image: "/blog/ui-ux-trends.jpg",
        featured: false
    },
    {
        id: 3,
        title: "Performance Web : Optimiser la Vitesse et l'Expérience Utilisateur",
        excerpt: "Les stratégies avancées pour des applications web ultra-rapides qui engagent et convertissent votre audience.",
        date: "10 Jan 2024",
        readTime: "7 min",
        category: "Performance",
        slug: "performance-web-optimisation",
        image: "/blog/web-performance.jpg",
        featured: false
    },
    {
        id: 4,
        title: "Intelligence Artificielle et Développement : Révolution ou Évolution ?",
        excerpt: "Comment l'IA transforme le paysage du développement web et les opportunités qu'elle offre aux créateurs digitaux.",
        date: "8 Jan 2024",
        readTime: "9 min",
        category: "IA & Tech",
        slug: "ia-developpement-revolution",
        image: "/blog/ai-development.jpg",
        featured: true
    },
    {
        id: 5,
        title: "Design System : La Colonne Vertébrale de Votre Identité Digitale",
        excerpt: "Créez une cohérence visuelle et technique à travers tous vos produits digitaux avec un design system solide.",
        date: "5 Jan 2024",
        readTime: "5 min",
        category: "Design System",
        slug: "design-system-identite-digitale",
        image: "/blog/design-system.jpg",
        featured: false
    },
    {
        id: 6,
        title: "Accessibilité Web : Construire un Internet Inclusif pour Tous",
        excerpt: "Les meilleures pratiques pour créer des expériences digitales accessibles à tous les utilisateurs, sans exception.",
        date: "3 Jan 2024",
        readTime: "6 min",
        category: "Accessibilité",
        slug: "accessibilite-web-inclusive",
        image: "/blog/web-accessibility.jpg",
        featured: false
    }
]

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured)
    const regularPosts = blogPosts.filter(post => !post.featured)

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 overflow-hidden">
            {/* Background Architectural Animé */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-48 h-48 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{ top: "10%", left: "15%" }}
                />
                <motion.div
                    className="absolute w-32 h-32 bg-purple-400/15 dark:bg-purple-500/20 rotate-45 rounded-md"
                    animate={{ y: [0, 20, 0], rotate: [45, 65, 45] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ top: "60%", left: "10%" }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* En-tête Architectural */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6 shadow-lg"
                    >
                        <BookOpen className="h-4 w-4" />
                        Blog Fluxyte
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Notre{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Savoir
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explorez les dernières tendances, insights et innovations en architecture digitale,
                        design et développement. Chaque article est une pierre angulaire de votre succès digital.
                    </p>
                </motion.div>

                {/* Articles en Vedette */}
                {featuredPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">
                                Articles en Vedette
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <BlogCard post={post} featured={true} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Tous les Articles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                            Tous les Articles
                        </h2>
                    </div>

                    <BlogList posts={regularPosts} />
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-700/30 rounded-2xl p-8 backdrop-blur-sm text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Ne Manquez Aucun Article
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Abonnez-vous à notre newsletter pour recevoir les derniers insights
                            sur l&#39;architecture digitale et les tendances du web.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                S&#39;abonner
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}