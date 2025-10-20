"use client";

import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
    ArrowRight,
    ExternalLink,
    Github,
    Play,
    Building,
    Layers,
    Zap,
    Sparkles,
    Eye
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Portfolio = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animations pour les bâtiments architecturaux
    const buildingVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: cubicBezier(0.25, 0.46, 0.45, 0.94) // ✅ Type compatible
            }
        }
    };

    const projects = [
        {
            id: 1,
            title: "Skyline Tower",
            description: "Application de gestion immobilière avec interface architecturale innovante",
            category: "Développement Web",
            image: "/appmobile.jpg",
            technologies: ["React", "Three.js", "Node.js", "MongoDB"],
            features: [
                "Visualisation 3D des bâtiments",
                "Gestion des espaces en temps réel",
                "Analytics avancés"
            ],
            liveUrl: "https://skylinetower.demo",
            githubUrl: "https://github.com/user/skylinetower",
            architecturalStyle: "modern",
            size: "large",
            color: "from-blue-600 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-950/40 dark:to-cyan-950/40"
        },
        {
            id: 2,
            title: "Urban Flow",
            description: "Plateforme de planification urbaine avec simulations interactives",
            category: "Application Web",
            image: "/appmobile.jpg",
            technologies: ["Next.js", "Framer Motion", "Mapbox", "D3.js"],
            features: [
                "Cartographie interactive",
                "Simulations de trafic",
                "Analyses prédictives"
            ],
            liveUrl: "https://urbanflow.demo",
            githubUrl: "https://github.com/user/urbanflow",
            architecturalStyle: "minimalist",
            size: "medium",
            color: "from-green-600 to-emerald-500",
            bgColor: "bg-gradient-to-br from-green-100/50 to-emerald-100/50 dark:from-green-950/40 dark:to-emerald-950/40"
        },
        {
            id: 3,
            title: "Structure Pro",
            description: "Outil de modélisation 3D pour architectes et designers",
            category: "Application Desktop",
            image: "/appmobile.jpg",
            technologies: ["Electron", "Three.js", "Blender", "WebGL"],
            features: [
                "Modélisation 3D temps réel",
                "Export multiples formats",
                "Collaboration en équipe"
            ],
            liveUrl: "https://structurepro.demo",
            githubUrl: "https://github.com/user/structurepro",
            architecturalStyle: "brutalist",
            size: "large",
            color: "from-gray-600 to-slate-500",
            bgColor: "bg-gradient-to-br from-gray-100/50 to-slate-100/50 dark:from-gray-950/40 dark:to-slate-950/40"
        },
        {
            id: 4,
            title: "Lumina Design",
            description: "Studio de design d'intérieur avec réalité augmentée",
            category: "Application Mobile",
            image: "/appmobile.jpg",
            technologies: ["React Native", "ARKit", "Three.js", "Firebase"],
            features: [
                "Visualisation AR",
                "Catalogue de matériaux",
                "Estimation de coûts"
            ],
            liveUrl: "https://luminadesign.demo",
            githubUrl: "https://github.com/user/luminadesign",
            architecturalStyle: "organic",
            size: "medium",
            color: "from-purple-600 to-violet-500",
            bgColor: "bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-950/40 dark:to-violet-950/40"
        },
        {
            id: 5,
            title: "Blueprint AI",
            description: "IA générative pour la conception de plans architecturaux",
            category: "Intelligence Artificielle",
            image: "/appmobile.jpg",
            technologies: ["Python", "TensorFlow", "React", "FastAPI"],
            features: [
                "Génération automatique de plans",
                "Optimisation spatiale",
                "Conformité réglementaire"
            ],
            liveUrl: "https://blueprintai.demo",
            githubUrl: "https://github.com/user/blueprintai",
            architecturalStyle: "futurist",
            size: "small",
            color: "from-orange-600 to-amber-500",
            bgColor: "bg-gradient-to-br from-orange-100/50 to-amber-100/50 dark:from-orange-950/40 dark:to-amber-950/40"
        },
        {
            id: 6,
            title: "Eco Habitat",
            description: "Plateforme de conception de maisons écologiques",
            category: "Développement Durable",
            image: "/appmobile.jpg",
            technologies: ["Vue.js", "Node.js", "MySQL", "Chart.js"],
            features: [
                "Calcul d'empreinte écologique",
                "Simulation énergétique",
                "Sélection de matériaux durables"
            ],
            liveUrl: "https://ecohabitat.demo",
            githubUrl: "https://github.com/user/ecohabitat",
            architecturalStyle: "sustainable",
            size: "large",
            color: "from-teal-600 to-green-500",
            bgColor: "bg-gradient-to-br from-teal-100/50 to-green-100/50 dark:from-teal-950/40 dark:to-green-950/40"
        }
    ];

    // Fonction pour déterminer la classe de taille des bâtiments
    const getBuildingSize = (size: string) => {
        const sizes: Record<string, string> = {
            small: "h-64",
            medium: "h-80",
            large: "h-96"
        };
        return sizes[size] || "h-80";
    };

    // Fonction pour déterminer le style architectural
    const getArchitecturalStyle = (style: string) => {
        const styles: Record<string, string> = {
            modern: "rounded-lg",
            minimalist: "rounded-none",
            brutalist: "rounded-sm",
            organic: "rounded-full",
            futurist: "rounded-tl-3xl rounded-br-3xl",
            sustainable: "rounded-tr-3xl rounded-bl-3xl"
        };
        return styles[style] || "rounded-lg";
    };

    // Animation du conteneur principal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-background py-38 overflow-hidden"
        >
            {/* Background architectural animé */}
            {/* Background architectural animé */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Lignes structurelles animées */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-blue-400/40 to-transparent 
                   dark:via-blue-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/4 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-purple-400/40 to-transparent 
                   dark:via-purple-300/60"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                   dark:via-cyan-300/60"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
                />

                {/* Éléments architecturaux flottants visibles dans les deux modes */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-8 h-8 sm:w-12 sm:h-12 rounded-lg border border-border/40 backdrop-blur-sm
            ${i % 4 === 0
                                ? "bg-blue-200/30 dark:bg-blue-500/20"
                                : i % 4 === 1
                                    ? "bg-purple-200/30 dark:bg-purple-500/20"
                                    : i % 4 === 2
                                        ? "bg-cyan-200/30 dark:bg-cyan-500/20"
                                        : "bg-green-200/30 dark:bg-green-500/20"}`}
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
            </div>


            <div className="container mx-auto px-4 relative z-10">
                {/* En-tête du portfolio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6"
                    >
                        <Building className="h-4 w-4" />
                        Architecture Digitale
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Portfolio{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Créatif
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Découvrez nos réalisations où l&#39;innovation technologique rencontre
                        l&#39;excellence du design architectural. Chaque projet est une structure
                        unique pensée pour durer.
                    </p>
                </motion.div>

                {/* Grille de projets architecturaux */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex justify-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform scale-90 md:scale-85 lg:scale-80 origin-center">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={buildingVariants}
                                initial="hidden"                 // Important !
                                animate="visible"                // Important !
                                whileHover={{
                                    y: -15,
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                className="group cursor-pointer"
                            >
                                <Card className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${project.bgColor}`}>
                                    <CardContent className="p-0 relative">
                                        {/* Image du projet avec effet architectural */}
                                        <div className={`relative overflow-hidden ${getBuildingSize(project.size)} ${getArchitecturalStyle(project.architecturalStyle)}`}>
                                            {/* Image de fond */}
                                            <Image
                                                src={project.image} // ex: "/appmobile.jpg"
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />

                                            {/* Overlay avec informations */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                                    {/* Technologies utilisées */}
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.technologies.length > 3 && (
                                                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                                                                +{project.technologies.length - 3}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Boutons d'action */}
                                                    <div className="flex gap-3">
                                                        <Button
                                                            size="sm"
                                                            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                                                            asChild
                                                        >
                                                            <Link href={project.liveUrl} target="_blank">
                                                                <Eye className="h-3 w-3 mr-1" />
                                                                Voir
                                                            </Link>
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="rounded-full border-white/30 text-white hover:bg-white/10"
                                                            asChild
                                                        >
                                                            <Link href={project.githubUrl} target="_blank">
                                                                <Github className="h-3 w-3 mr-1" />
                                                                Code
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Badge de catégorie */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color}`}>
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Élément architectural décoratif */}
                                            <motion.div
                                                className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${project.color} opacity-20 ${getArchitecturalStyle(project.architecturalStyle)}`}
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    opacity: [0.2, 0.4, 0.2]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>

                                        {/* Contenu texte sous l'image */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    className="text-muted-foreground group-hover:text-primary transition-colors"
                                                >
                                                    <ArrowRight className="h-5 w-5" />
                                                </motion.div>
                                            </div>

                                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Features sous forme de liste architecturale */}
                                            <ul className="space-y-2">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-3`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* Section CTA architecturale */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block"
                    >
                        <Button
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            asChild
                        >
                            <Link href="/contact">
                                <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Discutons de votre projet
                                <Zap className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-muted-foreground mt-6 text-sm"
                    >
                        Plus de 50 structures digitales conçues avec excellence
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;