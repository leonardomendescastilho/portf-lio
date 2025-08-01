/**
 * @file HeaderView.tsx
 * @description Componente Header com navegação, toggle de tema e idioma, usando Shadcn UI e Tailwind.
 */
import type { FC } from "react";
import { useHeaderViewModel } from "./HeaderViewModel";
import { ModeToggle } from "@/components/Theme/mode-toggle";
import { LanguageToggle } from "@/components/Language/language-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/Language/language-provider";
import { ProjectsModal } from "@/components/ProjectsModal";
import { AboutModal } from "@/components/AboutModal";

/**
 * @function HeaderView
 * @description Renderiza o header com navegação, toggle de tema e idioma.
 * @returns {JSX.Element} O header do site.
 */
const HeaderView: FC = () => {
  const { links, onNavigate, isProjectsModalOpen, closeProjectsModal, isAboutMeModalOpen, closeAboutMeModal } = useHeaderViewModel();
  const { t } = useLanguage();

  return (
    <>
      <header className="w-full flex items-center justify-between py-4 px-6 border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex-1 flex justify-center">
          <nav className="flex gap-6 ml-20">
            {links.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="font-medium text-base"
                onClick={() => onNavigate(link.href, link.type)}
              >
                {link.href === "#projetos" ? t.header.projects : t.header.about}
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </header>
      
      <ProjectsModal 
          isOpen={isProjectsModalOpen} 
          onClose={closeProjectsModal} 
      />

      <AboutModal
          isOpen={isAboutMeModalOpen}
          onClose={closeAboutMeModal}
      />
    </>
  );
};

export default HeaderView;
