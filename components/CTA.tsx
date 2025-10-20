"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Prêt à transformer votre vision en réalité ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Contactez-nous dès aujourd&#39;hui pour discuter de votre projet et obtenir un devis personnalisé.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
                        >
                            Demander un devis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-full"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Nous appeler
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8 flex items-center justify-center space-x-2 text-blue-100"
                    >
                        <Mail className="h-5 w-5" />
                        <span>contact@fluxyte.com</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA