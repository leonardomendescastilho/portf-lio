/**
 * @file HeroViewModel.ts
 * @description ViewModel para o Hero, fornece dados e handlers.
 */
import { useMemo } from "react";
import type { HeroModel } from "./HeroModel";
import ProfileImage from '/src/assets/images/image-profile.png';
import { useLanguage } from "../Language/language-provider";

/**
 * @function useHeroViewModel
 * @description Hook para fornecer dados do Hero.
 * @returns {HeroModel} Dados do Hero.
 */
export const useHeroViewModel = (): HeroModel => {
  const { t } = useLanguage();
  
  return useMemo(() => ({
    name: t.hero.name,
    description: t.hero.description,
    techBadges: t.hero.techBadges,
    photoUrl: ProfileImage, 
    cvUrl: "/cv-leonardo-castilho.pdf",
    socialLinks: [
      { label: t.hero.socialLinks.github, url: "https://github.com/leonardomendescastilho", icon: "github" },
      { label: t.hero.socialLinks.linkedin, url: "https://www.linkedin.com/in/leonardodevcastilho/", icon: "linkedin" },
      { label: t.hero.socialLinks.instagram, url: "https://www.instagram.com/castilho.io/", icon: "instagram" },
      { label: t.hero.socialLinks.email, url: "mailto:leonardo.mendescastilho@gmail.com", icon: "mail" },
      { label: t.hero.socialLinks.whatsapp, url: "https://wa.me/5512982242771", icon: "smartphone" },
    ],
  }), [t]);
};
