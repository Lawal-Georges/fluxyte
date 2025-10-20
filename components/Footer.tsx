"use client"

import Link from 'next/link'
import Image from "next/image";

import { motion } from 'framer-motion'
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Zap
} from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info with Animated Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >


                        {/* VOTRE LOGO ICI */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: 0.2
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
                                />
                                <div className="absolute inset-1 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Image
                                        src="/fluxyte0.png" // ⬅️ METTEZ VOTRE LOGO ICI
                                        alt="Fluxyte Logo"
                                        width={120}
                                        height={120}
                                        className="rounded-lg w-20 sm:w-24 md:w-28"
                                        priority
                                    />
                                </div>
                            </div>
                            <motion.h3
                                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.05 }}
                            >
                                Fluxyte
                            </motion.h3>
                        </motion.div>


                        <p className="text-gray-300 leading-relaxed">
                            Transformons vos idées en solutions digitales exceptionnelles.
                            Innovation, qualité et satisfaction client sont au cœur de notre démarche.
                        </p>

                        <div className="flex space-x-3 pt-2">
                            {[
                                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={social.href}
                                        className={`p-2.5 bg-gray-800/50 backdrop-blur-sm rounded-lg ${social.color} transition-all duration-300 border border-gray-700/50 hover:border-transparent shadow-lg`}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-6 flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 mr-3 rounded-full"></span>
                            Liens Rapides
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Accueil', href: '/' },
                                { name: 'À propos', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center"
                                    >
                                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-6 flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 mr-3 rounded-full"></span>
                            Nos Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                'Développement Web',
                                'Applications Mobile',
                                'Design & Branding',
                                'Marketing Digital',
                                'Maintenance IT',
                                'Publication Sponsorisée'
                            ].map((service) => (
                                <motion.li
                                    key={service}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <span className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center">
                                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {service}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-semibold mb-6 flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-red-500 mr-3 rounded-full"></span>
                            Contactez-nous
                        </h4>
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-3 group cursor-pointer"
                            >
                                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors border border-gray-700/50">
                                    <Mail className="h-5 w-5 text-blue-400" />
                                </div>
                                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                                    contact@fluxyte.com
                                </span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-3 group cursor-pointer"
                            >
                                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-green-500/20 transition-colors border border-gray-700/50">
                                    <Phone className="h-5 w-5 text-green-400" />
                                </div>
                                <span className="text-gray-300 group-hover:text-green-400 transition-colors">
                                    +237 620 xx xx xx
                                </span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-3 group cursor-pointer"
                            >
                                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-purple-500/20 transition-colors border border-gray-700/50">
                                    <MapPin className="h-5 w-5 text-purple-400" />
                                </div>
                                <span className="text-gray-300 group-hover:text-purple-400 transition-colors">
                                    Douala, Cameroun
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-700/50 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-center md:text-left">
                            © {currentYear} Fluxyte. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Politique de confidentialité
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Conditions d&#39;utilisation
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer