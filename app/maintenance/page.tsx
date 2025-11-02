// app/maintenance/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Rocket, Mail, ArrowRight } from 'lucide-react';

export default function MaintenancePage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration du canvas
        canvas.width = 400;
        canvas.height = 400;

        // Animation 3D simplifiée (personnage stylisé)
        const drawCharacter = (time: number) => {
            if (!ctx) return;

            // Effacer le canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Couleur de fond
            ctx.fillStyle = 'rgba(135, 206, 235, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Position centrale
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Animation de pulsation
            const scale = 1 + Math.sin(time * 0.002) * 0.1;

            // Corps du personnage
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.scale(scale, scale);

            // Tête
            ctx.fillStyle = '#87CEEB';
            ctx.beginPath();
            ctx.arc(0, -40, 30, 0, Math.PI * 2);
            ctx.fill();

            // Corps
            ctx.fillStyle = '#5F9EA0';
            ctx.fillRect(-25, -10, 50, 80);

            // Bras (animation)
            const armSwing = Math.sin(time * 0.003) * 0.5;

            // Bras gauche tenant un outil
            ctx.save();
            ctx.translate(-35, 0);
            ctx.rotate(-armSwing);
            ctx.fillStyle = '#5F9EA0';
            ctx.fillRect(-5, -5, 30, 10);

            // Outil (clé)
            ctx.fillStyle = '#f39c12';
            ctx.fillRect(20, -8, 15, 4);
            ctx.fillRect(30, -12, 4, 12);
            ctx.restore();

            // Bras droit
            ctx.save();
            ctx.translate(35, 0);
            ctx.rotate(armSwing);
            ctx.fillStyle = '#5F9EA0';
            ctx.fillRect(-25, -5, 30, 10);
            ctx.restore();

            // Jambes
            const legSwing = Math.sin(time * 0.004) * 0.3;

            // Jambe gauche
            ctx.save();
            ctx.translate(-15, 70);
            ctx.rotate(legSwing);
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(-5, 0, 10, 40);
            ctx.restore();

            // Jambe droite
            ctx.save();
            ctx.translate(15, 70);
            ctx.rotate(-legSwing);
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(-5, 0, 10, 40);
            ctx.restore();

            // Éclairage/effet de brillance
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(10, -50, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // Particules flottantes
            for (let i = 0; i < 5; i++) {
                const particleX = (Math.sin(time * 0.001 + i) * 100) + centerX;
                const particleY = (Math.cos(time * 0.001 + i) * 80) + centerY - 100;
                const size = 3 + Math.sin(time * 0.005 + i) * 2;

                ctx.fillStyle = `rgba(135, 206, 235, ${0.5 + Math.sin(time * 0.002 + i) * 0.3})`;
                ctx.beginPath();
                ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(drawCharacter);
        };

        const animationId = requestAnimationFrame(drawCharacter);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center"
            >
                {/* Animation 3D */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/20 to-transparent blur-xl"></div>
                    <canvas
                        ref={canvasRef}
                        className="relative z-10 mx-auto"
                    />
                </div>

                {/* Contenu principal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Badge de statut */}
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Wrench className="w-4 h-4" />
                        Maintenance Évolutive
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Nous travaillons
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                            sur quelque chose de génial !
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Notre application web est actuellement en cours d&#39;amélioration.
                        Nous déployons de nouvelles fonctionnalités passionnantes pour
                        vous offrir une expérience encore meilleure.
                    </p>

                    {/* Statistiques */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sky-100">
                            <Clock className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900">Bientôt</div>
                            <div className="text-sm text-gray-600">Disponible</div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sky-100">
                            <Rocket className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900">Nouveautés</div>
                            <div className="text-sm text-gray-600">En préparation</div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sky-100">
                            <Wrench className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900">Améliorations</div>
                            <div className="text-sm text-gray-600">En cours</div>
                        </div>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Être notifié du lancement
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-sky-300 text-sky-700 hover:bg-sky-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                        >
                            Voir notre progression
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                    {/* Compte à rebours stylé */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sky-200 max-w-md mx-auto"
                    >
                        <div className="flex justify-center space-x-4">
                            {['J', 'H', 'M', 'S'].map((unit, index) => (
                                <div key={unit} className="text-center">
                                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {[2, 4, 8, 0][index]}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">{unit}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            Temps estimé avant le lancement
                        </p>
                    </motion.div>

                    {/* Message de fin */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-gray-500 text-sm mt-8 max-w-md mx-auto"
                    >
                        Merci pour votre patience. Nous créons quelque chose de spécial
                        qui va transformer votre expérience digitale.
                    </motion.p>
                </motion.div>

                {/* Effets décoratifs */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </motion.div>
        </div>
    );
}