// components/blog/BlogPost.tsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

interface Props {
    slug: string
}

export default function BlogPost({ }: Props) {
    // Données simulées pour l'article
    const post = {
        id: 1,
        title: "L'Architecture Digitale : Construire l'Avenir du Web",
        content: `
            <p>Dans l'ère numérique actuelle, l'architecture digitale est devenue la pierre angulaire de toute entreprise souhaitant prospérer en ligne. Mais qu'est-ce que l'architecture digitale exactement, et pourquoi est-elle si cruciale pour votre succès ?</p>
            
            <h2>Les Fondations de l'Architecture Digitale</h2>
            <p>L'architecture digitale va bien au-delà du simple design visuel. Elle englobe la structure, l'organisation et la stratégie derrière chaque composant de votre présence en ligne. C'est l'art de concevoir des expériences digitales cohérentes, évolutives et performantes.</p>
            
            <h3>Les Piliers Essentiels</h3>
            <ul>
                <li><strong>Expérience Utilisateur (UX)</strong> : Créer des parcours intuitifs et engageants</li>
                <li><strong>Performance Technique</strong> : Assurer rapidité et fiabilité</li>
                <li><strong>Scalabilité</strong> : Préparer la croissance future</li>
                <li><strong>Sécurité</strong> : Protéger les données et la confidentialité</li>
            </ul>
            
            <h2>Pourquoi Investir dans une Architecture Digitale Solide ?</h2>
            <p>Une architecture digitale bien conçue n'est pas un coût, mais un investissement stratégique. Elle permet :</p>
            
            <p>• Une meilleure expérience utilisateur<br/>
            • Une augmentation du taux de conversion<br/>
            • Une réduction des coûts de maintenance<br/>
            • Une adaptabilité aux futures technologies</p>
            
            <h2>L'Avenir de l'Architecture Digitale</h2>
            <p>Avec l'émergence de l'IA, de la réalité augmentée et du métaverse, l'architecture digitale évolue constamment. Les entreprises qui investissent aujourd'hui dans une architecture robuste seront celles qui domineront le paysage digital de demain.</p>
        `,
        date: "15 Jan 2024",
        readTime: "8 min",
        category: "Architecture Digitale",
        author: {
            name: "Jean Dupont",
            role: "Architecte Digital Senior",
            avatar: "/team/jean-dupont.jpg"
        }
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 overflow-hidden">
            {/* Background Architectural */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-48 h-48 bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-3xl"
                    animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{ top: "20%", left: "10%" }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-4xl">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au blog
                    </Link>
                </motion.div>

                {/* En-tête de l'article */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                        {post.category}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mb-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                JD
                            </div>
                            <div>
                                <div className="text-sm font-medium text-foreground">{post.author.name}</div>
                                <div className="text-xs text-muted-foreground">{post.author.role}</div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:bg-accent transition-colors">
                            <Bookmark className="w-4 h-4" />
                            Sauvegarder
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:bg-accent transition-colors">
                            <Share2 className="w-4 h-4" />
                            Partager
                        </button>
                    </div>
                </motion.header>

                {/* Image de l'article */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-blue-500 to-purple-600"
                />

                {/* Contenu de l'article */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="prose prose-lg dark:prose-invert max-w-none"
                >
                    <div
                        className="text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.article>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-700/30 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Prêt à Construire Votre Avenir Digital ?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Discutons de votre projet et concevons ensemble l&#39;architecture digitale parfaite pour votre entreprise.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Commencer mon projet
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}