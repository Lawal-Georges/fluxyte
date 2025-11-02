"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Building,
    Globe,
    MessageCircle,
    Zap,
    ArrowRight,
    X,
    MessageSquare
} from 'lucide-react';
import { useRef } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [whatsappForm, setWhatsappForm] = useState({
        fullName: '',
        whatsapp: '',
        email: '',
        subject: '',
        service: '',
        description: ''
    });

    const [showWhatsappModal, setShowWhatsappModal] = useState(false);

    const containerRef = useRef(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulaire envoyé:', formData);
    };

    const handleWhatsappSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const servicesMap: { [key: string]: string } = {
            'web-dev': '🚀 Développement Web',
            'app-dev': '📱 Applications Mobile',
            'branding': '🎨 Design & Branding',
            'marketing': '📈 Marketing Digital',
            'maintenance': '⚙️ Maintenance IT',
            'sponsored': '📢 Publication Sponsorisée'
        };

        const selectedService = servicesMap[whatsappForm.service] || whatsappForm.service;

        // Construction du message structuré
        const message = `*NOUVEAU CONTACT FLUXYTE*

*👤 Nom & Prénom:* ${whatsappForm.fullName}
*📱 WhatsApp:* ${whatsappForm.whatsapp}
*📧 Email:* ${whatsappForm.email || 'Non renseigné'}
*🎯 Sujet:* ${whatsappForm.subject}
*🏗️ Service:* ${selectedService}

*📝 Description du Projet:*
${whatsappForm.description}

_⚡ Message envoyé via Fluxyte Website_`;

        // Encodage du message
        const encodedMessage = encodeURIComponent(message);

        // URL WhatsApp avec numéro FIXE
        const whatsappUrl = `https://wa.me/237620732026?text=${encodedMessage}`;

        console.log('URL WhatsApp:', whatsappUrl);
        console.log('Données:', whatsappForm);

        // Ouverture de WhatsApp
        window.open(whatsappUrl, '_blank');

        // Fermer le modal et réinitialiser
        setShowWhatsappModal(false);
        setWhatsappForm({
            fullName: '',
            whatsapp: '',
            email: '',
            subject: '',
            service: '',
            description: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setWhatsappForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            description: "Contactez-nous par email",
            value: "contact@fluxyte.com",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-100/60 to-cyan-100/60 dark:from-blue-900/40 dark:to-cyan-900/40",
            delay: 0.1
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Téléphone",
            description: "Appelez-nous directement",
            value: "+33 1 23 45 67 89",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-green-100/60 to-emerald-100/60 dark:from-green-900/40 dark:to-emerald-900/40",
            delay: 0.2
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Adresse",
            description: "Notre siège social",
            value: "Paris, France",
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-gradient-to-br from-purple-100/60 to-violet-100/60 dark:from-purple-900/40 dark:to-violet-900/40",
            delay: 0.3
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Réseaux",
            description: "Suivez-nous en ligne",
            value: "@fluxyte",
            color: "from-orange-500 to-amber-500",
            bgColor: "bg-gradient-to-br from-orange-100/60 to-amber-100/60 dark:from-orange-900/40 dark:to-amber-900/40",
            delay: 0.4
        }
    ];

    const services = [
        { value: 'web-dev', label: '🚀 Développement Web' },
        { value: 'app-dev', label: '📱 Applications Mobile' },
        { value: 'branding', label: '🎨 Design & Branding' },
        { value: 'marketing', label: '📈 Marketing Digital' },
        { value: 'maintenance', label: '⚙️ Maintenance IT' },
        { value: 'sponsored', label: '📢 Publication Sponsorisée' }
    ];

    return (
        <>
            {/* Modal WhatsApp */}
            {showWhatsappModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowWhatsappModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md border border-border/50 dark:border-border/30 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border/50 dark:border-border/30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">
                                        Contact WhatsApp
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Remplissez le formulaire
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowWhatsappModal(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Formulaire */}
                        <form onSubmit={handleWhatsappSubmit} className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Nom & Prénom *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={whatsappForm.fullName}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Votre nom complet"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Numéro WhatsApp *
                                </label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    value={whatsappForm.whatsapp}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                                    placeholder="+237 XXX XX XX XX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Email (Optionnel)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={whatsappForm.email}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={whatsappForm.subject}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Sujet de votre message"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Service *
                                </label>
                                <select
                                    name="service"
                                    title='Choisissez un service'
                                    required
                                    value={whatsappForm.service}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm"
                                >
                                    <option value="">Choisissez un service</option>
                                    {services.map(service => (
                                        <option key={service.value} value={service.value}>
                                            {service.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Description du Projet *
                                </label>
                                <textarea
                                    name="description"
                                    required
                                    rows={4}
                                    value={whatsappForm.description}
                                    onChange={handleWhatsappChange}
                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-foreground transition-all duration-300 backdrop-blur-sm resize-none"
                                    placeholder="Décrivez votre projet en détail..."
                                />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    <MessageSquare className="w-5 h-5 mr-3" />
                                    Envoyer sur WhatsApp
                                    <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            )}

            {/* Page Contact Principale */}
            <section
                ref={containerRef}
                className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 overflow-hidden transition-colors duration-500"
            >
                {/* === FOND ARCHITECTURAL ANIMÉ === */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Structures architecturales flottantes */}
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
                    <motion.div
                        className="absolute w-40 h-40 bg-cyan-400/15 dark:bg-cyan-500/20 rounded-xl"
                        animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                        style={{ bottom: "10%", right: "15%" }}
                    />

                    {/* Lignes de structure */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent dark:via-blue-600/10"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent dark:via-purple-600/10"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    {/* === EN-TÊTE ARCHITECTURAL === */}
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
                            <MessageCircle className="h-4 w-4" />
                            Contactez Fluxyte
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                            Construisons{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Ensemble
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Prêt à donner vie à votre prochain projet digital ? Notre équipe d&#39;architectes
                            du web est à votre écoute pour concevoir des solutions innovantes et durables.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* === INFORMATIONS DE CONTACT ARCHITECTURALES === */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    Bâtissons Votre Succès Digital
                                </h2>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Chaque grand projet commence par une conversation. Discutons de votre vision,
                                    analysons vos besoins et concevons ensemble l&#39;architecture digitale parfaite
                                    pour votre entreprise.
                                </p>
                            </div>

                            {/* Grille des méthodes de contact */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: method.delay }}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <Card className={`${method.bgColor} border border-border/50 dark:border-border/30 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl dark:shadow-black/20 hover:shadow-2xl transition-all duration-300`}>
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <motion.div
                                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-md`}
                                                    >
                                                        {method.icon}
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-foreground mb-1">
                                                            {method.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-2">
                                                            {method.description}
                                                        </p>
                                                        <p className="text-foreground font-medium">
                                                            {method.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bouton WhatsApp */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-6"
                            >
                                <Button
                                    onClick={() => setShowWhatsappModal(true)}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    <MessageSquare className="w-5 h-5 mr-3" />
                                    Contactez-nous sur WhatsApp
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>

                            {/* Statistiques */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-foreground mb-1">24h</div>
                                    <div className="text-sm text-muted-foreground">Réponse</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                                    <div className="text-sm text-muted-foreground">Projets</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-foreground mb-1">98%</div>
                                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* === FORMULAIRE ARCHITECTURAL === */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <Card className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-900/80 border border-border/50 dark:border-border/30 backdrop-blur-sm rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-black/30 overflow-hidden">
                                {/* Élément décoratif architectural */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-full translate-y-12 -translate-x-12" />

                                <CardContent className="p-8 relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                            <Building className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground">
                                                Démarrons Votre Projet
                                            </h2>
                                            <p className="text-muted-foreground text-sm">
                                                Remplissez le formulaire ci-dessous
                                            </p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                                                    Nom complet *
                                                </label>
                                                <motion.input
                                                    whileFocus={{ scale: 1.02 }}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                                                    Email *
                                                </label>
                                                <motion.input
                                                    whileFocus={{ scale: 1.02 }}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-3">
                                                Sujet *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                                                Votre Projet *
                                            </label>
                                            <motion.textarea
                                                whileFocus={{ scale: 1.01 }}
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm resize-none"
                                                placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                                            />
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                                                    <span>Lancer le Projet</span>
                                                    <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                                                </div>
                                            </Button>
                                        </motion.div>

                                        <p className="text-center text-sm text-muted-foreground mt-4">
                                            Nous vous recontactons sous 24 heures
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* === SECTION CTA === */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-20"
                    >
                        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-700/30 rounded-2xl p-8 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    Prêt à Construire l&#39;Avenir Digital ?
                                </h3>
                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Rejoignez les entreprises innovantes qui nous font confiance pour
                                    transformer leurs idées en réalités digitales exceptionnelles.
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="inline-block"
                                >
                                    <Button
                                        onClick={() => setShowWhatsappModal(true)}
                                        size="lg"
                                        className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Contactez-nous sur WhatsApp
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </>
    );
}