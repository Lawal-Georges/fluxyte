"use client"

import { motion } from 'framer-motion'

interface MotionWrapperProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    duration?: number
}

const MotionWrapper = ({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 0.5
}: MotionWrapperProps) => {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 }
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0
            }}
            transition={{
                duration,
                delay
            }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default MotionWrapper