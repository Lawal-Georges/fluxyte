"use client"

import { motion } from 'framer-motion'

interface SectionTitleProps {
    title: string
    subtitle: string
    highlighted?: string
    className?: string
}

const SectionTitle = ({
    title,
    subtitle,
    highlighted,
    className = ""
}: SectionTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${className}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}{' '}
                {highlighted && (
                    <span className="text-blue-600 dark:text-blue-400">
                        {highlighted}
                    </span>
                )}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </motion.div>
    )
}

export default SectionTitle