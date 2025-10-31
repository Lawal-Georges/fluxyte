// src/data/chatbotData.ts

export const chatbotData = {
  welcome: {
    message:
      "👋 Bonjour et bienvenue chez **Fluxyte** ! Je suis votre assistant virtuel 🤖. Comment puis-je vous aider aujourd’hui ?",
    suggestions: [
      "À propos de Fluxyte",
      "Nos services",
      "Offres et tarifs",
      "Contact & devis",
      "Rejoindre notre équipe",
    ],
  },

  faqs: [
    {
      question: "à propos",
      answer: `💡 Fluxyte est une entreprise digitale créative qui transforme vos idées et projets en réalités numériques. 
Nous mettons notre savoir-faire au service de votre réussite à travers des services innovants et adaptés à vos besoins.`,
    },
    {
      question: "service",
      answer: `🚀 Voici nos principaux services :
🌐 **Développement web** (vitrine, e-commerce, institutionnel, sur mesure)
💻 **Applications web** (gestion, éducation, commerce, événementiel)
📱 **Applications mobiles** (sport, livraison, tourisme, etc.)
📣 **Marketing digital** (community management, publicité)
🧑‍💻 **Support IT & cybersécurité** (maintenance, sécurité, hébergement)
🎓 **Formations professionnelles** (digital & tech).`,
    },
    {
      question: "offre",
      answer: `💰 Nos tarifs varient selon le projet.
Pour un devis personnalisé, rendez-vous dans la section "Contact" ou demandez un devis ici directement.`,
    },
    {
      question: "tarif",
      answer: `💰 Nos tarifs sont flexibles et adaptés à vos besoins. 
Souhaitez-vous que je vous montre nos formules disponibles ?`,
    },
    {
      question: "contact",
      answer: `📞 Vous pouvez nous contacter :
- Sur WhatsApp : +237 620 73 20 26
- Via le formulaire de contact sur notre site
Nos équipes sont disponibles 24h/24 et 7j/7.`,
    },
    {
      question: "devis",
      answer: `🧾 Pour obtenir un devis personnalisé, remplissez le formulaire dans la section "Contact" ou donnez-moi les détails de votre projet ici.`,
    },
    {
      question: "rejoindre",
      answer: `👥 Vous souhaitez rejoindre Fluxyte ? 
Remplissez le formulaire de contact et notre équipe RH vous contactera rapidement.`,
    },
    {
      question: "formation",
      answer: `🎓 Fluxyte propose des formations pratiques et certifiantes dans le digital et la technologie, adaptées aux débutants comme aux professionnels.`,
    },
    {
      question: "merci",
      answer: `😊 Avec plaisir ! N’hésitez pas si vous avez d’autres questions.`,
    },
  ],

  fallback: {
    message:
      "🤖 Je ne suis pas sûr de comprendre. Voici quelques sujets que je peux vous expliquer 👇",
    suggestions: [
      "Nos services",
      "Offres et tarifs",
      "Contact & devis",
      "Rejoindre notre équipe",
    ],
  },
};
