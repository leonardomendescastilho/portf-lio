/**
 * @file AboutModalView.tsx
 * @description Componente Modal "Sobre Mim" usando Dialog do Shadcn UI.
 */
import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAboutModalViewModel } from "./AboutModalViewModel";
import { useLanguage } from "../Language/language-provider";

interface AboutModalViewProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * @function AboutModalView
 * @description Renderiza o modal "Sobre Mim" com texto sobre o desenvolvedor.
 * @param {AboutModalViewProps} props - Props do componente.
 * @returns {JSX.Element} O modal "Sobre Mim".
 */
const AboutModalView: FC<AboutModalViewProps> = ({ isOpen, onClose }) => {
  const { aboutText } = useAboutModalViewModel(isOpen, onClose);
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-scroll scrollbar-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center font-serif-display">
            {t.modals.about.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            {t.modals.about.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="prose prose-sm max-w-none text-foreground">
            <p className="text-base leading-relaxed text-justify">
              {aboutText}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModalView;
