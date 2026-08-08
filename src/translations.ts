/**
 * @file translations.ts
 * @description Sistema de tradução centralizado para PT-BR e EN-US
 */

export type Language = "pt-BR" | "en-US";
import FestivalNadaYoga from "@/assets/images/festival-nada-yoga.jpg";
export interface Translations {
  // Header
  header: {
    projects: string;
    about: string;
  };
  
  // Hero Section
  hero: {
    name: string;
    role: string;
    location: string;
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
  
  // Modals (para futuras implementações)
  modals: {
    back: string;
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
            role: "AI Engineer @ RapidCanvas",
            location: "Brasil · Remoto",
            description: "AI Engineer entregando software que resolve problemas reais. Atuo end-to-end — do entendimento do problema à entrega — construindo soluções de IA generativa e sistemas agênticos para clientes nacionais e internacionais.",
            techBadges: ["React", "FastAPI", "Node.js", "PostgreSQL", "RAG", "Sistemas Agênticos", "Claude", "LangChain", "Streamlit", "Docker", "CI/CD", "Testes"],
            techBadgeDescriptions: {
                "React": "Interfaces modernas (com TypeScript)",
                "FastAPI": "APIs em Python de alta performance",
                "Node.js": "JavaScript no backend",
                "PostgreSQL": "Banco relacional — modelagem e queries",
                "RAG": "Geração aumentada por recuperação de contexto",
                "Sistemas Agênticos": "Agentes multi-etapa que usam ferramentas",
                "Claude": "LLMs da Anthropic para IA generativa",
                "LangChain": "Orquestração de LLMs e agentes",
                "Streamlit": "Apps de dados construídos rapidamente",
                "Docker": "Containerização de aplicações",
                "CI/CD": "Integração e entrega contínuas",
                "Testes": "Testes automatizados (unit, integração, e2e)",
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
        modals: {
            back: "Voltar",
            projects: {
                title: "Meus Projetos",
                description: "Aqui estão alguns dos meus projetos mais relevantes.",
                project: [
                    {
                        id: "festival-nada-yoga",
                        title: "Festival de Nāda Yoga",
                        description: "Landing page da 1ª edição do Festival de Nāda Yoga (Escola IntuiSom). Site de página única, mobile-first, com scroll suave, animações de entrada e conteúdo totalmente tipado e editável a cada edição. Projeto real, em produção.",
                        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Lenis", "Vercel"],
                        githubUrl: "",
                        liveUrl: "https://www.festivalnadayoga.com.br/",
                        imageUrl: FestivalNadaYoga,
                    },
                ]
            },
            about: {
                title: "Sobre Mim",
                description: "Conheça mais sobre minha trajetória e experiências.",
                content: `Olá! Sou Leonardo Mendes, AI Engineer na RapidCanvas. Comecei minha jornada na web com HTML, CSS e JavaScript, e foi com o React que me apaixonei pelo desenvolvimento de interfaces. Com o tempo expandi para o back-end — Node.js, Python, APIs e bancos de dados relacionais e não relacionais — e, mais recentemente, para a engenharia de IA.\n\nHoje atuo end-to-end no desenvolvimento de software B2B para clientes internacionais. Trabalho de perto com os clientes para projetar, desenvolver e entregar aplicações sobre a plataforma da RapidCanvas, guiando-os rumo aos seus objetivos de negócio através de inovação orientada por IA. No dia a dia participo do levantamento de requisitos, das reuniões com clientes e times internos, do desenvolvimento das soluções e do gerenciamento de times.\n\nIsso passa por construir — IA generativa, sistemas agênticos, machine learning, interfaces de dados — identificando problemas técnicos, sugerindo evoluções no produto e transformando casos reais de clientes em documentação e exemplos de uso de GenAI que se sustentam no mundo real.\n\nEm paralelo, mantenho projetos independentes — de landing pages e sites educacionais e profissionais a sistemas que resolvem problemas de verdade no dia a dia. É onde ajudo outras pessoas a tirar do papel seus próprios sonhos, negócios e ideias.\n\nFora da tecnologia, sou praticante de meditação e valorizo momentos em contato com a natureza e com minha família — pilares que reforçam meu foco, clareza e equilíbrio no trabalho. Meu trabalho já vai além da técnica: lidero projetos, colaboro com times multidisciplinares e atuo de forma estratégica no desenvolvimento de produtos que fazem a diferença — e sigo aprimorando minha liderança e minha visão de produto a cada projeto.`,
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
            role: "AI Engineer @ RapidCanvas",
            location: "Brazil · Remote",
            description: "AI Engineer building software that solves real problems. I work end-to-end — from understanding the problem to delivery — creating generative AI solutions and agentic systems for national and international clients.",
            techBadges: ["React", "FastAPI", "Node.js", "PostgreSQL", "RAG", "Agentic Systems", "Claude", "LangChain", "Streamlit", "Docker", "CI/CD", "Testing"],
            techBadgeDescriptions: {
                "React": "Modern interfaces (with TypeScript)",
                "FastAPI": "High-performance Python APIs",
                "Node.js": "JavaScript on the backend",
                "PostgreSQL": "Relational database — modeling and queries",
                "RAG": "Retrieval-Augmented Generation for grounded AI",
                "Agentic Systems": "Multi-step agents that use tools",
                "Claude": "Anthropic's LLMs for generative AI",
                "LangChain": "LLM and agent orchestration",
                "Streamlit": "Data apps built quickly",
                "Docker": "Application containerization",
                "CI/CD": "Continuous integration & delivery",
                "Testing": "Automated tests (unit, integration, e2e)",
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
        modals: {
            back: "Back",
            projects: {
                title: "My Projects",
                description: "Here are some of my most relevant projects.",
                project: [
                    {
                        id: "festival-nada-yoga",
                        title: "Festival de Nāda Yoga",
                        description: "Landing page for the 1st edition of the Nāda Yoga Festival (IntuiSom School). Mobile-first single-page site with smooth scrolling, entrance animations, and fully typed, per-edition editable content. Real project, in production.",
                        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Lenis", "Vercel"],
                        githubUrl: "",
                        liveUrl: "https://www.festivalnadayoga.com.br/",
                        imageUrl: FestivalNadaYoga,
                    },
                ]
            },
            about: {
                title: "About Me",
                description: "Learn more about my journey and experiences.",
                content: `Hello! I'm Leonardo Mendes, an AI Engineer at RapidCanvas. I started my journey in web development with HTML, CSS, and JavaScript, and it was with React that I fell in love with building interfaces. Over time, I expanded into the backend — Node.js, Python, APIs, and both relational and non-relational databases — and, more recently, into AI engineering.\n\nToday I work end-to-end on B2B software development for international clients. I collaborate closely with clients to design, develop, and deliver applications on the RapidCanvas platform, guiding them toward their business goals through AI-driven innovation. Day to day, I take part in requirements gathering, client and internal team meetings, building the solutions, and managing internal teams.\n\nThat means building — generative AI, agentic systems, machine learning, data interfaces — identifying technical issues, suggesting product improvements, and turning real client cases into documentation and GenAI use case examples that hold up in the real world.\n\nOn the side, I keep building independent projects — from landing pages and educational and professional websites to systems that solve real everyday problems. It's where I help other people get their own dreams, businesses, and ideas off the ground.\n\nOutside of technology, I practice meditation and value moments in contact with nature and my family — pillars that reinforce my focus, clarity, and balance at work. My work already goes beyond technique: I lead projects, collaborate with multidisciplinary teams, and act strategically on products that make a difference — and I keep sharpening my leadership and product vision with every project.`,
            },
        },
    },
};
