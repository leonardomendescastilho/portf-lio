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
import { motion } from "framer-motion";

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
      <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex sm:grid sm:grid-cols-3 items-center justify-between gap-2 py-3 px-4 sm:px-6 border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        {/* Spacer (só desktop) para o nav centralizar de verdade */}
        <div className="hidden sm:block" aria-hidden />

        {/* Navegação (visível em todas as telas — só 2 seções). Centralizada no sm+ */}
        <nav className="flex justify-start sm:justify-center gap-1 sm:gap-4">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="font-medium text-sm sm:text-base px-2 sm:px-3"
              onClick={() => onNavigate(link.href, link.type)}
            >
              {link.href === "#projetos" ? t.header.projects : t.header.about}
            </Button>
          ))}
        </nav>

        {/* Controles à direita */}
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </motion.header>
      
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
