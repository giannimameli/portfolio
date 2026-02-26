import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Figma } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
  fullDescription?: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
  videoUrl?: string;
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  imageSrc,
  fullDescription,
  technologies = [],
  liveLink,
  githubLink,
  figmaLink,
  videoUrl,
}: ProjectModalProps) {
  // Store scroll position
  const scrollPositionRef = useRef(0);

  // Prevent scroll when modal is open and save scroll position
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Restore scroll position after modal closes
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Ref for modal content
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-black border-2 border-white/30 overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/80 z-10"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/80 z-10"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/80 z-10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/80 z-10"></div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 border border-white/40 bg-black hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Video or Image */}
                <div className="relative aspect-video w-full mb-8 border border-white/20 overflow-hidden bg-gray-900 flex items-center justify-center">
                  {videoUrl ? (
                    <iframe
                      src={videoUrl}
                      title={title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={imageSrc}
                      alt={title}
                      className="w-full h-full object-contain p-4"
                    />
                  )}
                </div>

                {/* Title */}
                <h2 className="font-['Inter'] font-black text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  {title}
                </h2>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-white/60 via-white/20 to-transparent mb-6"></div>

                {/* Short description */}
                <p className="font-['Rajdhani'] text-white/80 text-lg mb-6 leading-relaxed">
                  {description}
                </p>

                {/* Full description */}
                {fullDescription && (
                  <div className="mb-8">
                    <h3 className="font-['Inter'] font-bold text-xl text-white mb-3 tracking-tight">
                      Over dit project
                    </h3>
                    <p className="font-['Rajdhani'] text-white/70 text-base leading-relaxed whitespace-pre-line">
                      {fullDescription}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                {technologies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Inter'] font-bold text-xl text-white mb-3 tracking-tight">
                      Technologieën
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 border border-white/30 text-white/80 font-['Rajdhani'] text-sm tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 border-2 border-white/60 px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <span className="font-['Rajdhani'] font-bold tracking-wide">BEKIJK LIVE</span>
                      <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300"
                    >
                      <Github size={20} />
                      <span className="font-['Rajdhani'] font-medium tracking-wide">GitHub</span>
                    </a>
                  )}

                  {figmaLink && (
                    <a
                      href={figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300"
                    >
                      <Figma size={20} />
                      <span className="font-['Rajdhani'] font-medium tracking-wide">Figma</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}