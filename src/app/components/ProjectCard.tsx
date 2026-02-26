import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative border border-white/20 p-6 hover:border-white/60 transition-all duration-300 bg-black/40 backdrop-blur-sm"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40"></div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 border border-white/80 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <h3 className="font-['Inter'] font-black text-xl mb-3 text-white tracking-tight">
          {title}
        </h3>
        <p className="font-['Rajdhani'] text-white/70 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="font-['Space_Mono'] text-xs px-2 py-1 border border-white/30 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Decorative line */}
      <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
    </motion.div>
  );
}
