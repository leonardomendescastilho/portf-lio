/**
 * @file translations.ts
 * @description Sistema de tradução centralizado para PT-BR e EN-US
 */

export type Language = "pt-BR" | "en-US";

export interface Translations {
  // Header
  header: {
    projects: string;
    about: string;
  };
  
  // Hero Section
  hero: {
    name: string;
    description: string;
    techBadges: string[];
    techBadgeDescriptions: Record<string, string>;
    downloadCV: string;
    socialLinks: {
      github: string;
      linkedin: string;
      instagram: string;
      email: string;
      whatsapp: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
  };
  
  // Modals (para futuras implementações)
  modals: {
    projects: {
      title: string;
      description: string;
      sampleProject1Description: string;
      sampleProject2Description: string;
      sampleProject3Description: string;
    };
    about: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  "pt-BR": {
    header: {
      projects: "Projetos",
      about: "Sobre Mim",
    },
    hero: {
      name: "Leonardo Mendes",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python"],
      techBadgeDescriptions: {
        "React": "Biblioteca para interfaces modernas",
        "TypeScript": "JavaScript tipado para maior segurança",
        "Node.js": "Execução de JS no backend",
        "Javascript": "Linguagem base da web",
        "Python": "Versátil e poderosa para scripts e IA"
      },
      downloadCV: "Download CV",
      socialLinks: {
        github: "GitHub",
        linkedin: "LinkedIn", 
        instagram: "Instagram",
        email: "Email",
        whatsapp: "WhatsApp",
      },
    },
    footer: {
      copyright: "© 2025 Leonardo Mendes. Todos os direitos reservados.",
    },
    modals: {
      projects: {
        title: "Meus Projetos",
        description: "Aqui estão alguns dos meus projetos mais relevantes.",
        sampleProject1Description: "Website de portfólio moderno construído com React e TypeScript",
        sampleProject2Description: "Solução completa de e-commerce com integração de pagamentos",
        sampleProject3Description: "Aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real",
      },
      about: {
        title: "Sobre Mim",
        description: "Conheça mais sobre minha trajetória e experiências.",
      },
    },
  },
  "en-US": {
    header: {
      projects: "Projects",
      about: "About Me",
    },
    hero: {
      name: "Leonardo Mendes",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python"],
      techBadgeDescriptions: {
        "React": "Library for modern UIs",
        "TypeScript": "Typed JavaScript for safety",
        "Node.js": "JavaScript runtime for backend",
        "Javascript": "The language of the web",
        "Python": "Versatile and powerful for scripts and AI"
      },
      downloadCV: "Download CV",
      socialLinks: {
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram", 
        email: "Email",
        whatsapp: "WhatsApp",
      },
    },
    footer: {
      copyright: "© 2025 Leonardo Mendes. All rights reserved.",
    },
    modals: {
      projects: {
        title: "My Projects",
        description: "Here are some of my most relevant projects.",
        sampleProject1Description: "Modern portfolio website built with React and TypeScript",
        sampleProject2Description: "Full-stack e-commerce solution with payment integration",
        sampleProject3Description: "Collaborative task management application with real-time updates",
      },
      about: {
        title: "About Me",
        description: "Learn more about my journey and experiences.",
      },
    },
  },
};
