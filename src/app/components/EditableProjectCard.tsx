import { motion } from 'motion/react';
import { ExternalLink, Github, Figma } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

interface EditableProjectCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  fullDescription?: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
  videoUrl?: string;
}

/**
 * DUPLICEERBARE PROJECT CARD
 * 
 * Gebruik:
 * <EditableProjectCard
 *   title="Project Naam"
 *   description="Korte beschrijving van het project in maximaal 2 regels tekst"
 *   imageSrc="https://jouw-screenshot-url.png"
 *   fullDescription="Uitgebreide beschrijving voor in de modal"
 *   technologies={['React', 'TypeScript', 'Tailwind']}
 *   liveLink="https://live-demo.com"
 *   githubLink="https://github.com/username/repo"
 *   figmaLink="https://figma.com/file/..."
 *   videoUrl="https://www.youtube.com/watch?v=..."
 * />
 */
export function EditableProjectCard({
  title = '',
  description = '',
  imageSrc = 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&h=1080&q=80&fit=crop',
  fullDescription,
  technologies = [],
  liveLink,
  githubLink,
  figmaLink,
  videoUrl,
}: EditableProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative border border-white/20 hover:border-white/60 transition-all duration-300 bg-black cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/60 z-10"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/60 z-10"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/60 z-10"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/60 z-10"></div>

        {/* Screenshot placeholder - 16:9 ratio (1920x1080) */}
        <div className="relative aspect-video overflow-hidden bg-gray-900">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-['Inter'] font-black text-xl text-white mb-3 tracking-tight line-clamp-1">
            {title}
          </h3>

          {/* Description - max 2 lines */}
          <p className="font-['Rajdhani'] text-white/70 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem]">
            {description}
          </p>

          {/* View Details hint */}
          <div className="flex items-center gap-2 text-white/50 group-hover:text-white/80 transition-colors">
            <span className="font-['Rajdhani'] text-xs tracking-wider">KLIK VOOR DETAILS</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Animated glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 border border-white/60 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        imageSrc={imageSrc}
        fullDescription={fullDescription}
        technologies={technologies}
        liveLink={liveLink}
        githubLink={githubLink}
        figmaLink={figmaLink}
        videoUrl={videoUrl}
      />
    </>
  );
}