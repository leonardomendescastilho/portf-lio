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
      content: string;
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
            description: "Desenvolvedor com mais de um ano de experiência. Minhas habilidades incluem a criação de interfaces e a construção de APIs robustas. Tenho experiência no ciclo completo de desenvolvimento, desde a concepção e consumo de APIs até a gestão de dados. Além disso, sou entusiasta de inteligência artificial e meditação.",
            techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python", "Docker"],
            techBadgeDescriptions: {
                "React": "Biblioteca para interfaces modernas",
                "TypeScript": "JavaScript tipado para maior segurança",
                "Node.js": "Execução de JS no backend",
                "Javascript": "Linguagem base da web",
                "Python": "Versátil e poderosa para scripts e IA",
                "Docker": "Plataforma de containerização para ambientes consistentes",
            },
            downloadCV: "Baixar Currículo",
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
                sampleProject1Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sampleProject2Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sampleProject3Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            about: {
                title: "Sobre Mim",
                description: "Conheça mais sobre minha trajetória e experiências.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
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
            description: "Developer with over a year of experience. My skills include creating user interfaces and building robust APIs. I have experience with the full development cycle, from designing and consuming APIs to managing data. I'm also enthusiast of artificial intelligence and meditation.",
            techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python", "Docker"],
            techBadgeDescriptions: {
                "React": "Library for modern UIs",
                "TypeScript": "Typed JavaScript for greater safety",
                "Node.js": "JavaScript runtime for backend",
                "Javascript": "The language of the web",
                "Python": "Versatile and powerful for scripts and AI",
                "Docker": "Containerization platform for consistent environments",
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
                sampleProject1Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sampleProject2Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sampleProject3Description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            about: {
                title: "About Me",
                description: "Learn more about my journey and experiences.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            },
        },
    },
};
