/**
 * @file translations.ts
 * @description Sistema de tradução centralizado para PT-BR e EN-US
 */

export type Language = "pt-BR" | "en-US";
import MoiveFinder from "@/assets/images/moviefinder.png";
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
      project?: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        githubUrl: string;
        liveUrl: string;
        imageUrl: string;
      }[];
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
            description: "Desenvolvedor com mais de um ano de experiência. Minhas habilidades incluem a criação de interfaces e a construção de APIs. Tenho experiência no ciclo completo de desenvolvimento, desde a concepção e consumo de APIs até a gestão de dados. Sou entusiasta de tudo relacionado à inteligência artificial e meditação.",
            techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python", "Streamlit"],
            techBadgeDescriptions: {
                "React": "Biblioteca para interfaces modernas",
                "TypeScript": "JavaScript tipado para maior segurança",
                "Node.js": "Execução de JS no backend",
                "Javascript": "Linguagem base da web",
                "Python": "Versátil e poderosa para scripts e IA",
                "Streamlit": "Framework para construir apps de dados rapidamente",
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
                project : [
                    {
                       id: "1",
                        title: "MovieFinder – Buscador de Filmes",
                        description: "Aplicação web para busca de filmes com integração à API do The Movie Database (TMDB). Permite pesquisar, visualizar detalhes e adicionar aos favoritos.",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Shadcn"],
                        githubUrl: "https://github.com/leonardomendescastilho/MovieFinder",
                        liveUrl: "https://leonardomendescastilho.github.io/MovieFinder/",
                        imageUrl: MoiveFinder
                    },
                    {
                        id: "2",
                        title: "Portfolio Website",
                        description: "Modern portfolio website built with React and TypeScript",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
                        githubUrl: "https://github.com/leonardomendescastilho/portfolio",
                        liveUrl: "https://leonardocastilho.dev",
                        imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uF4xhcEH4QKRB9cX8sMSeAHaFA%3Fpid%3DApi&f=1&ipt=c3cc9fc59ad28bfd12aa5569d69701a26f74435cda19ec112803464c0fba1c7f"
                    },
                  
                ]
            },
            about: {
                title: "Sobre Mim",
                description: "Conheça mais sobre minha trajetória e experiências.",
                content: `Olá! Sou Leonardo Mendes, desenvolvedor de São José dos Campos. Comecei minha jornada na web com HTML, CSS e JavaScript, e foi com o React que me apaixonei pelo desenvolvimento de interfaces. Com o tempo, venho expandindo meu conhecimento no back-end, explorando o ecossistema Node.js, APIs e bancos de dados relacionais e não relacionais.\n\nCurso Análise e Desenvolvimento de Sistemas pela UNINTER, complementando minha formação com cursos nacionais e internacionais. Tenho experiência em projetos pessoais e profissionais — destaque para o SIOGA, desenvolvido para a FURNAS. Nesse projeto, atuei no desenvolvimento de interfaces interativas, tabelas e gráficos dinâmicos, com foco na melhoria da performance e da usabilidade. Trabalhei na estruturação e adaptação de dados provenientes de uma API RESTful, além de participar ativamente da escolha de tecnologias, contribuindo com decisões sobre componentização, responsividade e carregamento eficiente dos dados.\n\nAtualmente, trabalho também com Python e Streamlit na criação de interfaces para dados, ampliando minha atuação para soluções analíticas e dashboards interativos.\n\nFora da tecnologia, sou praticante de meditação e valorizo momentos em contato com a natureza e com minha família — pilares que reforçam meu foco, clareza e equilíbrio no trabalho. Sou entusiasta de tudo relacionado à inteligência artificial.\n\nMeu objetivo vai além da técnica: quero evoluir como profissional capaz de liderar projetos, colaborar com times multidisciplinares e atuar de forma estratégica no desenvolvimento de produtos que façam a diferença.`,
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
            description: "Developer with over a year of experience. My skills include creating user interfaces and building APIs. I have experience with the full development cycle, from designing and consuming APIs to managing data. I'm an enthusiast of everything related to artificial intelligence and meditation.",
            techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python", "Streamlit"],
            techBadgeDescriptions: {
                "React": "Library for modern interfaces",
                "TypeScript": "Typed JavaScript for greater safety",
                "Node.js": "JavaScript runtime for backend",
                "Javascript": "The language of the web",
                "Python": "Versatile and powerful for scripts and AI",
                "Streamlit": "Framework for building data apps quickly",
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
                project: [
                     {
                        id: "1",
                        title: "MovieFinder – Movie Search",
                        description: "Web application for searching movies with integration to The Movie Database (TMDB) API. Allows searching, viewing details, and adding to favorites.",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Shadcn"],
                        githubUrl: "https://github.com/leonardomendescastilho/MovieFinder",
                        liveUrl: "https://leonardomendescastilho.github.io/MovieFinder/",
                        imageUrl: MoiveFinder
                    },
                    {
                        id: "2",
                        title: "Portfolio Website",
                        description: "Modern portfolio website built with React and TypeScript",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
                        githubUrl: "https://github.com/leonardomendescastilho/portfolio",
                        liveUrl: "https://leonardocastilho.dev",
                        imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uF4xhcEH4QKRB9cX8sMSeAHaFA%3Fpid%3DApi&f=1&ipt=c3cc9fc59ad28bfd12aa5569d69701a26f74435cda19ec112803464c0fba1c7f"
                    },
                ]
            },
            about: {
                title: "About Me",
                description: "Learn more about my journey and experiences.",
                content: `Hello! I'm Leonardo Mendes, a developer from São José dos Campos. I started my journey in web development with HTML, CSS, and JavaScript, and it was with React that I fell in love with building interfaces. Over time, I've expanded my knowledge in backend development, exploring the Node.js ecosystem, APIs, and both relational and non-relational databases.\n\nI'm studying Systems Analysis and Development at UNINTER, complementing my education with national and international courses. I have experience in both personal and professional projects — highlight for SIOGA, developed for FURNAS. In this project, I worked on interactive interfaces, dynamic tables and charts, focusing on performance and usability improvements. I structured and adapted data from a RESTful API, and actively participated in technology choices, contributing to decisions about componentization, responsiveness, and efficient data loading.\n\nI currently work with Python and Streamlit to create data interfaces, expanding my skills to analytical solutions and interactive dashboards.\n\nOutside of technology, I practice meditation and value moments in contact with nature and my family — pillars that reinforce my focus, clarity, and balance at work. I'm an enthusiast of everything related to artificial intelligence.\n\nMy goal goes beyond technique: I want to evolve as a professional capable of leading projects, collaborating with multidisciplinary teams, and acting strategically in the development of products that make a difference.`,
            },
        },
    },
};
