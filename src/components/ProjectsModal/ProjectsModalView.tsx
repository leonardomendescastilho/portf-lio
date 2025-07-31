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
import { Github, ExternalLink } from "lucide-react";
import { useProjectsModalViewModel } from "./ProjectsModalViewModel";
import { useLanguage } from "../Language/language-provider";

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center font-serif-display">
            {t.modals.projects.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            {t.modals.projects.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 mt-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código do ${project.title} no GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.title} ao vivo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsModalView;
