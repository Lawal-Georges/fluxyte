"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Mail,
    Facebook,
    Linkedin,
    Eye,
    EyeOff,
    ArrowRight,
    Chrome
} from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle, signInWithFacebook, signInWithLinkedIn } = useAuth();

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signIn(email, password);
        } catch (error) {
            console.error('Erreur de connexion:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider: string) => {
        setLoading(true);
        try {
            switch (provider) {
                case 'google':
                    await signInWithGoogle();
                    break;
                case 'facebook':
                    await signInWithFacebook();
                    break;
                case 'linkedin':
                    await signInWithLinkedIn();
                    break;
            }
        } catch (error) {
            console.error('Erreur de connexion sociale:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background animé similaire à Hero.tsx */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-muted/50 transition-colors duration-500" />

            {/* Éléments décoratifs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl
                   bg-gradient-to-r from-primary/30 via-blue-400/40 to-cyan-400/30 
                   dark:from-primary/20 dark:via-blue-600/30 dark:to-cyan-600/20"
            />

            <div className="relative z-10 w-full max-w-md mx-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 mt-25 shadow-2xl"
                >
                    {/* En-tête */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-blue-600 mb-4"
                        >
                            <span className="text-2xl font-bold text-white">F</span>
                        </motion.div>
                        <h1 className="text-2xl font-bold text-foreground mb-2">
                            Connexion à Fluxyte
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Accédez à votre espace personnel
                        </p>
                    </div>

                    {/* Formulaire email/mot de passe */}
                    <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
                        <div>
                            <Input
                                type="email"
                                placeholder="Adresse e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-background/50 border-border/50"
                                startIcon={<Mail className="h-4 w-4" />}
                            />
                        </div>

                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-background/50 border-border/50 pr-10"
                                startIcon={<Eye className="h-4 w-4" />}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
                        >
                            {loading ? "Connexion..." : "Se connecter"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    {/* Séparateur */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border/50" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-card/50 text-muted-foreground">
                                Ou continuer avec
                            </span>
                        </div>
                    </div>

                    {/* Boutons sociaux */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                type="button"
                                variant="outline"
                                disabled={loading}
                                onClick={() => handleSocialLogin('google')}
                                className="w-full h-11 border-border/50 hover:bg-accent/50"
                            >
                                <Chrome className="h-5 w-5" />
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                type="button"
                                variant="outline"
                                disabled={loading}
                                onClick={() => handleSocialLogin('facebook')}
                                className="w-full h-11 border-border/50 hover:bg-accent/50"
                            >
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                type="button"
                                variant="outline"
                                disabled={loading}
                                onClick={() => handleSocialLogin('linkedin')}
                                className="w-full h-11 border-border/50 hover:bg-accent/50"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Lien vers la page d'accueil */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            ← Retour à l&#39;accueil
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
