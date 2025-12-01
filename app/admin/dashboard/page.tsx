"use client";
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
    Users,
    Settings,
    BarChart3,
    Package,
    Plus,
    Edit3,
    Trash2,
    Eye
} from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');

    // Données simulées
    const clients = [
        { id: 1, name: 'Client 1', email: 'client1@example.com', subscription: 'Standard', status: 'active' },
        { id: 2, name: 'Client 2', email: 'client2@example.com', subscription: 'Pro', status: 'active' },
        { id: 3, name: 'Client 3', email: 'client3@example.com', subscription: 'Premium', status: 'inactive' },
    ];

    const services = [
        { id: 1, name: 'Site Web Corporate', description: 'Site vitrine professionnel', price: 2500, status: 'active' },
        { id: 2, name: 'Application Mobile', description: 'Application iOS et Android', price: 15000, status: 'active' },
        { id: 3, name: 'SEO', description: 'Optimisation moteurs de recherche', price: 800, status: 'inactive' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header Admin */}
            <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-muted-foreground">
                                Admin: {user?.email}
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
                {/* Navigation */}
                <div className="flex space-x-1 bg-muted/50 rounded-lg p-1 mb-8">
                    {[
                        { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
                        { id: 'clients', label: 'Clients', icon: Users },
                        { id: 'services', label: 'Services', icon: Package },
                        { id: 'settings', label: 'Paramètres', icon: Settings },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab.id
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <tab.icon className="h-4 w-4" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Contenu selon l'onglet */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* KPI Admin */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total Clients</p>
                                        <p className="text-2xl font-bold text-foreground">156</p>
                                    </div>
                                    <Users className="h-8 w-8 text-blue-500" />
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
                                        <p className="text-sm text-muted-foreground">Services en cours</p>
                                        <p className="text-2xl font-bold text-foreground">42</p>
                                    </div>
                                    <Package className="h-8 w-8 text-green-500" />
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
                                        <p className="text-sm text-muted-foreground">Revenus mensuels</p>
                                        <p className="text-2xl font-bold text-foreground">€12.5K</p>
                                    </div>
                                    <BarChart3 className="h-8 w-8 text-purple-500" />
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
                                        <p className="text-sm text-muted-foreground">Taux de satisfaction</p>
                                        <p className="text-2xl font-bold text-foreground">98%</p>
                                    </div>
                                    <Settings className="h-8 w-8 text-orange-500" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Graphiques et statistiques */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Répartition par pack
                                </h3>
                                {/* Placeholder pour graphique circulaire */}
                                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                                    <p className="text-muted-foreground">Graphique circulaire</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Tendances des services
                                </h3>
                                {/* Placeholder pour graphique en barres */}
                                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                                    <p className="text-muted-foreground">Graphique en barres</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {activeTab === 'clients' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-foreground">Gestion des Clients</h3>
                            <Button className="bg-gradient-to-r from-primary to-blue-600">
                                <Plus className="h-4 w-4 mr-2" />
                                Nouveau client
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {clients.map((client) => (
                                <div
                                    key={client.id}
                                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30"
                                >
                                    <div>
                                        <p className="font-medium text-foreground">{client.name}</p>
                                        <p className="text-sm text-muted-foreground">{client.email}</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className={`px-2 py-1 rounded-full text-xs ${client.status === 'active'
                                                ? 'bg-green-500/20 text-green-600'
                                                : 'bg-red-500/20 text-red-600'
                                                }`}>
                                                {client.status === 'active' ? 'Actif' : 'Inactif'}
                                            </span>
                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-600">
                                                {client.subscription}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Edit3 className="h-4 w-4 mr-1" />
                                            Modifier
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Eye className="h-4 w-4 mr-1" />
                                            Voir
                                        </Button>
                                        <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'services' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-foreground">Gestion des Services</h3>
                            <Button className="bg-gradient-to-r from-primary to-blue-600">
                                <Plus className="h-4 w-4 mr-2" />
                                Nouveau service
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium text-foreground">{service.name}</p>
                                            <span className="text-lg font-bold text-foreground">
                                                €{service.price.toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className={`px-2 py-1 rounded-full text-xs ${service.status === 'active'
                                                ? 'bg-green-500/20 text-green-600'
                                                : 'bg-red-500/20 text-red-600'
                                                }`}>
                                                {service.status === 'active' ? 'Actif' : 'Inactif'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 ml-4">
                                        <Button variant="outline" size="sm">
                                            <Edit3 className="h-4 w-4 mr-1" />
                                            Modifier
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Eye className="h-4 w-4 mr-1" />
                                            Prévisualiser
                                        </Button>
                                        <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}