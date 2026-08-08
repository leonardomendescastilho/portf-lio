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
import { ArrowLeft } from "lucide-react";
import { useAboutModalViewModel } from "./AboutModalViewModel";
import { useLanguage } from "../Language/language-provider";
import { useSwipeToDismiss } from "@/hooks/useSwipeToDismiss";

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
  const { handlers, style } = useSwipeToDismiss(onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl scrollbar-none" style={style} {...handlers}>
        <button
          type="button"
          onClick={onClose}
          className="sm:hidden sticky top-0 z-20 -mx-6 flex items-center gap-2 bg-background/95 px-6 py-2 text-base font-medium leading-none text-primary backdrop-blur"
        >
          <ArrowLeft className="h-5 w-5" />
          {t.modals.back}
        </button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center font-serif-display">
            {t.modals.about.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            {t.modals.about.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-4 pt-4 pb-8">
          <div className="prose prose-sm max-w-none text-foreground">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-justify mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModalView;
