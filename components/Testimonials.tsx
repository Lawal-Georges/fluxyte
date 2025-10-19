"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Marie Dupont",
            role: "CEO, FashionStyle",
            image: "/avatars/marie-dupont.jpg",
            content: "Fluxyte a transformé notre présence en ligne. Leur équipe a créé une plateforme e-commerce exceptionnelle qui a boosté nos ventes de 150% en seulement 6 mois.",
            rating: 5
        },
        {
            name: "Thomas Martin",
            role: "Directeur Marketing, TechInnov",
            image: "/avatars/thomas-martin.jpg",
            content: "Le travail d'équipe avec Fluxyte a été remarquable. Ils ont parfaitement compris nos besoins et ont livré une application mobile qui dépasse nos attentes.",
            rating: 5
        },
        {
            name: "Sophie Leroy",
            role: "Fondatrice, GreenLife",
            image: "/avatars/sophie-leroy.jpg",
            content: "Professionalisme, créativité et respect des délais. Fluxyte a su donner vie à notre vision avec un site web magnifique et parfaitement fonctionnel.",
            rating: 5
        },
        {
            name: "Alexandre Petit",
            role: "Directeur Technique, FinancePlus",
            image: "/avatars/alexandre-petit.jpg",
            content: "La qualité du code et l'architecture proposée par Fluxyte sont exceptionnelles. Notre application est scalable, sécurisée et performante.",
            rating: 5
        },
        {
            name: "Julie Moreau",
            role: "Responsable Communication, EduTech",
            image: "/avatars/julie-moreau.jpg",
            content: "Le service client de Fluxyte est exceptionnel. Réactifs, à l'écoute et toujours disponibles pour répondre à nos questions et besoins.",
            rating: 5
        },
        {
            name: "Michel Bernard",
            role: "Directeur, RestaurantLeGourmet",
            image: "/avatars/michel-bernard.jpg",
            content: "Notre application de réservation développée par Fluxyte a révolutionné notre business. Simple, intuitive et parfaitement adaptée à nos besoins.",
            rating: 5
        }
    ]

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ils nous font <span className="text-blue-600">confiance</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Découvrez les témoignages de nos clients satisfaits
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6">
                                    {/* Rating */}
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center">
                                        <Avatar className="h-12 w-12 mr-4">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials