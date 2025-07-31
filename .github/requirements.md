# Requisitos do Site Portfólio Pessoal

Este documento detalha os requisitos funcionais e não-funcionais para o desenvolvimento do site de portfólio pessoal. O objetivo é criar uma plataforma que apresente o desenvolvedor e seus projetos de forma profissional, moderna e eficaz.

---

## 1. Requisitos de Performance e Usabilidade (Não-Funcionais)

- **RF1.1 - Velocidade e Leveza:** O site deve ser rápido no carregamento e leve em seu consumo de recursos, garantindo uma experiência fluida para o usuário.
- **RF1.2 - Simplicidade e Impacto:** O design deve ser minimalista, clean e direto ao ponto, com um layout que seja visualmente impactante e transmita profissionalismo.
- **RF1.3 - Conteúdo Centralizado:** O conteúdo principal da página deve ser centralizado na tela para otimizar a legibilidade e o foco do usuário.

---

## 2. Requisitos de Layout e Navegação (Funcionais)

- **RF2.1 - Navegação Superior (Header):**
  - Deve conter links de navegação para as seções "Projetos" e "Sobre Mim".
- **RF2.2 - Toggle de Tema (Modo Escuro/Claro):**
  - Localização: Canto superior direito do header.
  - Funcionalidade: Um toggle visual (conforme Shadcn UI) que permita ao usuário alternar entre o modo claro e escuro do site.
- **RF2.3 - Toggle de Idioma (Português/Inglês):**
  - Localização: Canto superior direito do header, adjacente ao toggle de tema.
  - Elementos Visuais: Ícones que representem "BR" (símbolo do Brasil) para Português e "EN" (símbolo dos EUA) para Inglês.
  - Funcionalidade: Ao clicar em um dos ícones, toda a página deve ser traduzida dinamicamente para o idioma correspondente.

---

## 3. Requisitos de Conteúdo e Interatividade (Funcionais)

- **RF3.1 - Seção Principal (Hero/Introdução):**
  - **Imagem Central:** Uma imagem circular (minha foto) deve estar posicionada no centro da tela.
  - **Informações Pessoais:** Abaixo da imagem, deve constar:
    - Meu nome completo.
    - Uma pequena descrição concisa (tagline).
  - **Badges de Tecnologia:** Abaixo da descrição, exibir badges/ícones das tecnologias que utilizo.
  - **Botão "Download CV":** Posicionado abaixo dos badges, um botão para download do currículo.
  - **Redes Sociais:** Abaixo do botão de CV, botões/ícones para as seguintes redes sociais, com links válidos: GitHub, LinkedIn, Instagram, Email, WhatsApp.
- **RF3.2 - Footer:**
  - Conteúdo: "© 2025 Leonardo Mendes de Castilho. Todos os direitos reservados."
- **RF3.3 - Animação de Entrada:**
  - Todos os elementos do conteúdo central (imagem, nome, descrição, badges, botões de CV e sociais) devem aparecer gradualmente com o tempo, utilizando animações do Framer Motion.
- **RF3.4 - Modal de Projetos:**
  - Acionamento: Ao clicar no link "Projetos" na navegação superior.
  - Funcionalidade: Abrir um modal (`Dialog` ou similar do Shadcn UI) que exiba uma lista ou detalhes dos meus projetos.
- **RF3.5 - Modal "Sobre Mim":**
  - Acionamento: Ao clicar no link "Sobre Mim" na navegação superior.
  - Funcionalidade: Abrir um modal (`Dialog` ou similar do Shadcn UI) que contenha informações detalhadas sobre mim (minha história, experiência, etc.).
- **RF3.6 - CV Embutido:**
  - O conteúdo do currículo (CV) deve estar disponível embutido no site, tanto na versão em português quanto em inglês, acessível através das seções relevantes (e.g., dentro do modal "Sobre Mim" ou uma seção dedicada no modal de projetos, se aplicável).

---

## 4. Requisitos de Segurança e Manutenção (Não-Funcionais)

- **RF4.1 - Segurança e Proteção:** O site deve ser desenvolvido com as melhores práticas de segurança web, minimizando vulnerabilidades e protegendo os dados do usuário (embora seja um portfólio estático, é crucial pensar em XSS, etc., se houver interação).
- **RF4.2 - Manutenibilidade:** O código deve ser de fácil manutenção e extensão, seguindo os princípios de Clean Code, DRY, SOLID, KISS e YAGNI, conforme detalhado no `copilot-instructions.md`.

---
