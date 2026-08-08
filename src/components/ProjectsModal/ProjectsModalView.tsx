/**
 * @file ProjectsModalView.tsx
 * @description Componente Modal de Projetos usando Dialog do Shadcn UI.
 */
import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useProjectsModalViewModel } from "./ProjectsModalViewModel";
import { useLanguage } from "../Language/language-provider";
import { useSwipeToDismiss } from "@/hooks/useSwipeToDismiss";

interface ProjectsModalViewProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * @function ProjectsModalView
 * @description Renderiza o modal de projetos com lista de projetos e informações.
 * @param {ProjectsModalViewProps} props - Props do componente.
 * @returns {JSX.Element} O modal de projetos.
 */
const ProjectsModalView: FC<ProjectsModalViewProps> = ({ isOpen, onClose }) => {
  const { projects } = useProjectsModalViewModel(isOpen, onClose);
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
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center font-serif-display">
            {t.modals.projects.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            {t.modals.projects.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid min-w-0 gap-4 sm:gap-6 sm:grid-cols-2 mt-4 pb-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex min-w-0 flex-col gap-3 rounded-lg border p-4 sm:p-5 transition-shadow hover:shadow-md"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="aspect-video w-full rounded-md border-2 border-transparent object-cover transition-colors group-hover:border-primary"
              />
              <h3 className="text-lg font-semibold break-words">{project.title}</h3>
              {/* Altura fixa ~5 linhas: descrição maior ganha scroll interno, mantendo cards uniformes. */}
              <p className="h-[8.2em] overflow-y-auto pr-1 text-sm sm:text-base leading-relaxed text-muted-foreground break-words">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex gap-2 pt-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código do ${project.title} no GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} ao vivo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsModalView;
