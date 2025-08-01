# 🚀 Portfólio Pessoal - Leonardo Mendes de Castilho

Um portfólio moderno, responsivo e bilingue desenvolvido com as mais recentes tecnologias web, seguindo os princípios de Clean Code e arquitetura MVVM.

![Build Status](https://github.com/leonardomendescastilho/portf-lio/workflows/Build%20and%20Deploy%20Portfolio/badge.svg)

## ✨ Características

- 🎨 **Design Moderno**: Interface clean e profissional com modo escuro/claro
- 🌍 **Bilíngue**: Suporte completo para Português e Inglês
- 📱 **Responsivo**: Adaptado para todos os dispositivos
- ⚡ **Performance**: Otimizado com Vite para carregamento ultra-rápido
- 🎭 **Animações**: Transições suaves com Framer Motion
- ♿ **Acessibilidade**: Seguindo as melhores práticas de A11y

## 🛠️ Tecnologias Utilizadas

- **Frontend:**

  - [React 19](https://react.dev/) - Biblioteca UI moderna
  - [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
  - [Vite](https://vitejs.dev/) - Build tool ultra-rápido
  - [Tailwind CSS 4.1](https://tailwindcss.com/) - Framework CSS utility-first
  - [Shadcn/ui](https://ui.shadcn.com/) - Componentes UI modernos
  - [Framer Motion](https://framer.com/motion/) - Animações declarativas

- **Ferramentas:**
  - [ESLint](https://eslint.org/) - Linting de código
  - [GitHub Actions](https://github.com/features/actions) - CI/CD
  - [GitHub Pages](https://pages.github.com/) - Deploy automático

## 🏗️ Arquitetura

O projeto segue uma arquitetura **MVVM (Model-View-ViewModel)** com separação clara de responsabilidades:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Hero/           # Seção principal
│   ├── Header/         # Navegação superior
│   ├── ProjectsModal/  # Modal de projetos
│   ├── AboutModal/     # Modal "Sobre Mim"
│   └── ui/             # Componentes Shadcn UI
├── hooks/              # Custom hooks
├── services/           # Serviços de dados
├── utils/              # Funções utilitárias
├── assets/             # Recursos estáticos
└── config/             # Configurações globais
```

## 🚀 Executando Localmente

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/leonardomendescastilho/portf-lio.git
   cd portf-lio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build localmente
- `npm run lint` - Executa linting do código

## 🚀 Deploy

O deploy é automatizado via GitHub Actions e ocorre automaticamente a cada push na branch `main`:

1. **Build automático** com verificação de linting
2. **Deploy para GitHub Pages**
3. **URL de produção**: https://leonardomendescastilho.github.io/portf-lio/

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Seção Hero com animações
- [x] Toggle de tema (claro/escuro)
- [x] Toggle de idioma (PT/EN)
- [x] Modal de projetos
- [x] Modal "Sobre Mim"
- [x] Tooltips informativos
- [x] Responsividade completa
- [x] Deploy automatizado

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📧 Contato

**Leonardo Mendes de Castilho**

- GitHub: [@leonardomendescastilho](https://github.com/leonardomendescastilho)
- LinkedIn: [Leonardo Mendes de Castilho](https://linkedin.com/in/leonardomendescastilho)
- Email: leonardo.mendescastilho@gmail.com

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
