"use client";
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
    Clock,
    CheckCircle,
    Package,
    BarChart3,
    Lock,
    Zap,
    Sparkles
} from 'lucide-react';

export default function ClientDashboard() {
    const { user, logout } = useAuth();

    // Données simulées
    const services = [
        { id: 1, name: 'Site Web Corporate', status: 'en cours', progress: 60 },
        { id: 2, name: 'Application Mobile', status: 'payé', progress: 100 },
        { id: 3, name: 'SEO', status: 'livré', progress: 100 },
    ];

    const lockedSections = [
        { id: 1, name: 'Analyses Avancées', icon: BarChart3, pack: 'Pro' },
        { id: 2, name: 'Statistiques Temps Réel', icon: Zap, pack: 'Premium' },
        { id: 3, name: 'Rapports Détaillés', icon: Sparkles, pack: 'Enterprise' },
    ];

    const handleLockedSectionClick = (sectionName: string, pack: string) => {
        alert(`Vous n'êtes pas abonné au pack ${pack} pour accéder à ${sectionName}`);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">F</span>
                            </div>
                            <h1 className="text-xl font-bold text-foreground">Fluxyte Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-muted-foreground">
                                Bonjour, {user?.email}
                            </span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={logout}
                                className="border-border/50"
                            >
                                Déconnexion
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Services en cours</p>
                                <p className="text-2xl font-bold text-foreground">2</p>
                            </div>
                            <Clock className="h-8 w-8 text-blue-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Services payés</p>
                                <p className="text-2xl font-bold text-foreground">1</p>
                            </div>
                            <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Services livrés</p>
                                <p className="text-2xl font-bold text-foreground">1</p>
                            </div>
                            <Package className="h-8 w-8 text-purple-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Pack actuel</p>
                                <p className="text-lg font-bold text-foreground">Standard</p>
                            </div>
                            <BarChart3 className="h-8 w-8 text-orange-500" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <h2 className="text-lg font-semibold text-foreground mb-4">
                            Mes Services
                        </h2>
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30"
                                >
                                    <div>
                                        <p className="font-medium text-foreground">{service.name}</p>
                                        <p className="text-sm text-muted-foreground capitalize">
                                            {service.status}
                                        </p>
                                    </div>
                                    <div className="w-20 bg-muted rounded-full h-2">
                                        <div
                                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${service.progress}%` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sections Verrouillées */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-lg font-semibold text-foreground">
                            Fonctionnalités Premium
                        </h2>

                        {lockedSections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group cursor-pointer"
                                onClick={() => handleLockedSectionClick(section.name, section.pack)}
                            >
                                {/* Effet de flou et brillance */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm" />

                                <div className="relative bg-card border border-border/30 rounded-xl p-6 transition-all duration-300 group-hover:border-primary/30 overflow-hidden">

                                    {/* Effet de scintillement */}
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '200%'],
                                            opacity: [0, 0.4, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5
                                        }}
                                        className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                                    />

                                    {/* Effet de foudre */}
                                    <motion.div
                                        animate={{
                                            opacity: [0, 0.8, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.7
                                        }}
                                        className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl"
                                    />

                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 rounded-lg bg-muted/50">
                                                <section.icon className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground">{section.name}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Pack {section.pack}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-amber-500">
                                            <Lock className="h-4 w-4" />
                                            <span className="text-sm font-medium">Verrouillé</span>
                                        </div>
                                    </div>

                                    {/* Message au survol */}
                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                        <div className="text-center p-4">
                                            <Lock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                            <p className="font-semibold text-foreground mb-1">
                                                Vous n'êtes pas abonné
                                            </p>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Pack {section.pack} requis
                                            </p>
                                            <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600">
                                                S'abonner
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}