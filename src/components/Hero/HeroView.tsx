/**
 * @file HeroView.tsx
 * @description Componente Hero centralizado, com animação, badges, foto, CV e redes sociais.
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useHeroViewModel } from "./HeroViewModel";
import { useLanguage } from "@/components/Language/language-provider";

/**
 * @function HeroView
 * @description Renderiza o Hero com animação, badges, foto, CV e redes sociais.
 * @returns {JSX.Element}
 */
const HeroView = () => {
  const hero = useHeroViewModel();
  const { t } = useLanguage();
  // Isola "RapidCanvas" no cargo para virar link (cor da marca, sem sublinhado).
  const [rolePre, rolePost = ""] = hero.role.split("RapidCanvas");

  return (
    <TooltipProvider>
      <section className="flex flex-col flex-1 items-center justify-center py-8 w-full max-w-xl mx-auto min-h-0">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <motion.div
            aria-hidden
            className="photo-glow pointer-events-none absolute -inset-[20%] rounded-full blur-2xl hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* Bug WebKit iOS (#98538/#254151): overflow:hidden + border-radius não recorta.
              Fix comprovado: isolation:isolate NO elemento que recorta (não no pai). */}
          <motion.div
            className="relative isolate h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 overflow-hidden rounded-full border-2 border-primary shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={hero.photoUrl}
              alt={hero.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-tight font-serif-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {hero.name}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base font-medium tracking-wide text-foreground/70 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {rolePre}
            <a
              href="https://www.rapidcanvas.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#FF492C] no-underline transition-opacity hover:opacity-80"
            >
              RapidCanvas
            </a>
            {rolePost}
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm text-muted-foreground text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
          >
            {hero.location}
          </motion.p>
        </div>
        <motion.p
          className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {hero.description}
        </motion.p>
      
      <motion.div
        className="flex flex-wrap gap-2 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {hero.techBadges.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.12, duration: 0.4 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="text-xs sm:text-sm px-2.5 py-0.5 cursor-pointer">
                  {tech}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.hero.techBadgeDescriptions[tech]}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>

      </div>

      <motion.div
          className="mt-10 sm:mt-16 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={hero.cvUrl} download rel="noopener noreferrer">
              {t.hero.downloadCV}
            </a>
          </Button>
        </motion.div>
        <motion.div
          className="flex gap-4 mt-10 sm:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {hero.socialLinks.map((link) => {
            const icons: Record<string, React.ReactElement> = {
              github: <Github className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
              linkedin: <Linkedin className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
              instagram: <Instagram className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
              mail: <Mail className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
              phone: <Phone className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
              smartphone: <Phone className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            };
            // Sem URL (ex.: telefone): ícone decorativo, sem link/hover clicável.
            if (!link.url) {
              return (
                <span key={link.label} aria-label={link.label} className="text-muted-foreground">
                  {icons[link.icon]}
                </span>
              );
            }
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                {icons[link.icon]}
              </a>
            );
          })}
        </motion.div>
    </section>
    </TooltipProvider>
  );
};

export default HeroView;
