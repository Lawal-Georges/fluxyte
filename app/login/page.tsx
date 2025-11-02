// app/maintenance/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Rocket, Mail, ArrowRight, Target, Zap, Heart, Construction } from 'lucide-react';

export default function MaintenancePage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 31,
        hours: 5,
        minutes: 8,
        seconds: 0
    });

    // Positions fixes pour éviter l'erreur d'hydratation
    const fixedPositions = [
        { left: "10%", top: "15%" },
        { left: "25%", top: "80%" },
        { left: "40%", top: "30%" },
        { left: "60%", top: "65%" },
        { left: "75%", top: "20%" },
        { left: "90%", top: "50%" },
        { left: "15%", top: "45%" },
        { left: "35%", top: "70%" },
        { left: "55%", top: "25%" },
        { left: "70%", top: "85%" },
        { left: "85%", top: "35%" },
        { left: "95%", top: "75%" }
    ];

    // Animation 3D identique aux testimonials
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration du canvas responsive
        const setCanvasSize = () => {
            const size = Math.min(400, window.innerWidth * 0.8);
            canvas.width = size;
            canvas.height = size;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Animation 3D avec le même style que testimonials
        const drawCharacter = (time: number) => {
            if (!ctx) return;

            // Effacer le canvas avec fond adaptatif
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Position centrale
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const scale = Math.min(canvas.width, canvas.height) / 400;

            // Animation de pulsation identique
            const pulseScale = 1 + Math.sin(time * 0.002) * 0.1;

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.scale(scale * pulseScale, scale * pulseScale);

            // Tête avec effet 3D amélioré
            const headGradient = ctx.createRadialGradient(-10, -50, 5, 0, -40, 30);
            headGradient.addColorStop(0, '#87CEEB');
            headGradient.addColorStop(1, '#4682B4');
            ctx.fillStyle = headGradient;
            ctx.beginPath();
            ctx.arc(0, -40, 30, 0, Math.PI * 2);
            ctx.fill();

            // Détails du visage avec animation
            ctx.fillStyle = '#2c3e50';
            ctx.beginPath();
            ctx.arc(-8, -45, 3 + Math.sin(time * 0.005) * 1, 0, Math.PI * 2);
            ctx.arc(8, -45, 3 + Math.cos(time * 0.005) * 1, 0, Math.PI * 2);
            ctx.fill();

            // Sourire animé
            ctx.strokeStyle = '#2c3e50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            const smileOffset = Math.sin(time * 0.003) * 0.1;
            ctx.arc(0, -35, 12, 0.2 + smileOffset, Math.PI - 0.2 - smileOffset);
            ctx.stroke();

            // Corps avec gradient identique aux cartes testimonials
            const bodyGradient = ctx.createLinearGradient(-25, -10, 25, 70);
            bodyGradient.addColorStop(0, '#5F9EA0');
            bodyGradient.addColorStop(0.5, '#4682B4');
            bodyGradient.addColorStop(1, '#36648B');
            ctx.fillStyle = bodyGradient;
            ctx.fillRect(-25, -10, 50, 80);

            // Bras avec animation fluide
            const armSwing = Math.sin(time * 0.003) * 0.5;

            // Bras gauche avec outil animé
            ctx.save();
            ctx.translate(-35, 0);
            ctx.rotate(-armSwing);
            ctx.fillStyle = '#5F9EA0';
            ctx.fillRect(-5, -5, 30, 10);

            // Outil avec rotation continue
            ctx.fillStyle = '#f39c12';
            ctx.save();
            ctx.translate(25, -3);
            ctx.rotate(time * 0.008);
            ctx.fillRect(-3, -8, 15, 4);
            ctx.fillRect(7, -12, 4, 12);

            // Effet de brillance sur l'outil
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillRect(8, -14, 2, 3);
            ctx.restore();
            ctx.restore();

            // Bras droit
            ctx.save();
            ctx.translate(35, 0);
            ctx.rotate(armSwing);
            ctx.fillStyle = '#5F9EA0';
            ctx.fillRect(-25, -5, 30, 10);
            ctx.restore();

            // Jambes avec animation décalée
            const legSwing = Math.sin(time * 0.004) * 0.3;
            const legSwing2 = Math.cos(time * 0.004) * 0.3;

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
            ctx.rotate(legSwing2);
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(-5, 0, 10, 40);
            ctx.restore();

            // Éclairage dynamique avec pulsation
            ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(time * 0.004) * 0.3})`;
            ctx.beginPath();
            ctx.arc(12, -48, 4 + Math.sin(time * 0.003) * 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // Particules flottantes identiques aux testimonials
            for (let i = 0; i < 6; i++) {
                const angle = time * 0.001 + i;
                const radius = canvas.width * 0.25;
                const particleX = (Math.sin(angle) * radius) + centerX;
                const particleY = (Math.cos(angle) * (radius * 0.6)) + centerY - 30;
                const size = 2 + Math.sin(time * 0.005 + i) * 1.5;
                const alpha = 0.4 + Math.sin(time * 0.002 + i) * 0.3;

                // Alternance de couleurs comme dans testimonials
                const colors = ['#87CEEB', '#9370DB', '#20B2AA'];
                ctx.fillStyle = `rgba(${colors[i % 3] === '#87CEEB' ? '135, 206, 235' :
                    colors[i % 3] === '#9370DB' ? '147, 112, 219' : '32, 178, 170'
                    }, ${alpha})`;

                ctx.beginPath();
                ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
                ctx.fill();

                // Traînée de particules
                ctx.strokeStyle = `rgba(${colors[i % 3] === '#87CEEB' ? '135, 206, 235' :
                    colors[i % 3] === '#9370DB' ? '147, 112, 219' : '32, 178, 170'
                    }, ${alpha * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleX, particleY);
                ctx.lineTo(
                    particleX - Math.sin(angle) * 8,
                    particleY - Math.cos(angle) * 8
                );
                ctx.stroke();
            }

            requestAnimationFrame(drawCharacter);
        };

        const animationId = requestAnimationFrame(drawCharacter);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    // Simulation du compte à rebours
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const { days, hours, minutes, seconds } = prev;

                if (seconds > 0) return { ...prev, seconds: seconds - 1 };
                if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
                if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
                if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };

                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-35 bg-background overflow-hidden select-none">

            {/* === FOND ANIMÉ IDENTIQUE AUX TESTIMONIALS === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lignes structurelles identiques */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                    dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                    dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute top-2/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                    dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
                />

                {/* Éléments flottants identiques */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-border/40 backdrop-blur-sm
                        ${i % 3 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 3 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : "bg-cyan-200/30 dark:bg-cyan-500/20"}`}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                    />
                ))}

                {/* Points lumineux avec positions fixes */}
                {fixedPositions.map((position, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400 dark:bg-blue-300"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        style={{
                            left: position.left,
                            top: position.top,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header identique aux testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-1"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6 shadow-lg"
                    >
                        <Construction className="h-4 w-4" />
                        Maintenance en Cours
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Nous travaillons sur{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            quelque chose de génial
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Notre application est actuellement en cours d&#39;amélioration pour vous offrir
                        une expérience{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            encore plus exceptionnelle
                        </span>
                        . Revenez bientôt !
                    </p>
                </motion.div>

                {/* Animation 3D Centrale */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mb-12 flex justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-blue-300/30 blur-xl"></div>
                    <canvas
                        ref={canvasRef}
                        className="relative z-10 mx-auto w-full max-w-[400px] h-auto"
                    />
                </motion.div>

                {/* Contenu principal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-8 max-w-4xl mx-auto"
                >
                    {/* Statistiques avec le même style que les cartes testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: Clock,
                                value: "Bientôt",
                                label: "Disponible",
                                gradient: "from-blue-600 to-cyan-500"
                            },
                            {
                                icon: Rocket,
                                value: "Nouveautés",
                                label: "En préparation",
                                gradient: "from-purple-600 to-violet-500"
                            },
                            {
                                icon: Target,
                                value: "Améliorations",
                                label: "En cours",
                                gradient: "from-green-600 to-emerald-500"
                            }
                        ].map((item) => (
                            <motion.div
                                key={item.value}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <div className={`bg-gradient-to-br ${item.gradient} p-[2px] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                                    <div className="h-full bg-black/20 rounded-[22px] p-6 flex flex-col justify-between text-white">
                                        <div className="p-0 relative">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                                    <item.icon className="h-6 w-6 text-white" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-white mb-2">
                                                    {item.value}
                                                </div>
                                                <p className="text-sm text-white/80 leading-relaxed">
                                                    {item.label}
                                                </p>
                                            </div>

                                            <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${item.gradient} mx-auto`} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Compte à rebours stylé */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="bg-gradient-to-br from-orange-600 to-amber-500 p-[2px] rounded-3xl shadow-xl max-w-md mx-auto"
                    >
                        <div className="h-full bg-black/20 rounded-[22px] p-6 text-white">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                                <Zap className="h-5 w-5 text-yellow-300" />
                                Lancement dans
                            </h3>
                            <div className="flex justify-center space-x-4">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="text-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-white font-bold text-lg">
                                                {value.toString().padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/60 mt-2 uppercase">
                                            {unit === 'days' ? 'Jours' :
                                                unit === 'hours' ? 'Heures' :
                                                    unit === 'minutes' ? 'Minutes' : 'Secondes'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Actions principales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                                Être notifié du lancement
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 group backdrop-blur-sm"
                            >
                                Voir notre progression
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Message de fin */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2"
                    >
                        <Heart className="h-4 w-4 text-red-400" />
                        Merci pour votre patience et votre confiance
                    </motion.div>
                </motion.div>
            </div>

            {/* Fond animé du bas identique */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                    dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/3 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                    dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
            </div>
        </section>
    );
}