// components/blog/BlogList.tsx
'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/blog/BlogCard'

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
    posts: Post[]
}

export default function BlogList({ posts }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                >
                    <BlogCard post={post} />
                </motion.div>
            ))}
        </div>
    )
}