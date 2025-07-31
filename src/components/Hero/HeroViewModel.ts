/**
 * @file HeroViewModel.ts
 * @description ViewModel para o Hero, fornece dados e handlers.
 */
import { useMemo } from "react";
import type { HeroModel } from "./HeroModel";
import ProfileImage from '/src/assets/images/image-profile.png';

/**
 * @function useHeroViewModel
 * @description Hook para fornecer dados do Hero.
 * @returns {HeroModel} Dados do Hero.
 */
export const useHeroViewModel = (): HeroModel => {
  return useMemo(() => ({
    name: "Leonardo Mendes",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    techBadges: ["React", "TypeScript", "Node.js", "Javascript", "Python"],
    photoUrl: ProfileImage, 
    cvUrl: "/cv-leonardo-castilho.pdf", // Substitua pelo caminho real
    socialLinks: [
      { label: "GitHub", url: "https://github.com/leonardomendescastilho", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/leonardodevcastilho/", icon: "linkedin" },
      { label: "Instagram", url: "https://www.instagram.com/castilho.io/", icon: "instagram" },
      { label: "Email", url: "mailto:leonardo.mendescastilho@gmail.com", icon: "mail" },
      { label: "WhatsApp", url: "https://wa.me/5512982242771", icon: "smartphone" },
    ],
  }), []);
};
