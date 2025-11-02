// components/blog/BlogCard.tsx
'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

interface Post {
    id: number
    title: string
    excerpt: string
    date: string
    readTime: string
    category: string
    slug: string
    image: string
    featured?: boolean
}

interface Props {
    post: Post
    featured?: boolean
}

export default function BlogCard({ post, featured = false }: Props) {
    if (featured) {
        return (
            <motion.article
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-900/80 border border-border/50 dark:border-border/30 backdrop-blur-sm rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-black/30 overflow-hidden">
                    {/* Image Featured */}
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20" />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                {post.category}
                            </span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                Vedette
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/link"
                        >
                            <span className="group-hover/link:underline">Lire l&#39;article</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </motion.article>
        )
    }

    return (
        <motion.article
            className="group cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-900/80 border border-border/50 dark:border-border/30 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl dark:shadow-black/20 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-500/10" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-grow">
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                    </p>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group/link mt-auto"
                    >
                        <span className="group-hover/link:underline">Lire l&#39;article</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}