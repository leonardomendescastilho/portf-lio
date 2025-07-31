/**
 * @file HeroView.tsx
 * @description Componente Hero centralizado, com animação, badges, foto, CV e redes sociais.
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useHeroViewModel } from "./HeroViewModel";

/**
 * @function HeroView
 * @description Renderiza o Hero com animação, badges, foto, CV e redes sociais.
 * @returns {JSX.Element}
 */
const HeroView = () => {
  const hero = useHeroViewModel();

  return (
    <section className="flex flex-col items-center gap-7 py-12 w-full max-w-xl mx-auto">
      <motion.img
        src={hero.photoUrl}
        alt={hero.name}
        className="w-48 h-48 rounded-full object-cover border-2 border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.h1
        className="text-3xl font-bold text-center tracking-tight font-serif-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {hero.name}
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground text-center tracking-tighter mb-4 font-serif-display"
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
        key={tech}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + idx * 0.12, duration: 0.4 }}
          >
        <Badge variant="outline" className="text-sm px-3 py-1">
          {tech}
        </Badge>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button asChild size="lg" className="mt-2">
          <a href={hero.cvUrl} download target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </motion.div>
      <motion.div
        className="flex gap-3 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {hero.socialLinks.map((link) => {
          const icons: Record<string, JSX.Element> = {
            github: <Github className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            linkedin: <Linkedin className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            instagram: <Instagram className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            mail: <Mail className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            phone: <Phone className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
            smartphone: <Phone className="w-5 h-5 hover:text-primary transition-colors" strokeWidth={1.3} />,
          };
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
  );
};

export default HeroView;
