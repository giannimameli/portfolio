import { motion } from 'motion/react';

const experiences = [
  {
    period: 'Jan 2025 - heden',
    title: 'DataVisual',
    current: true,
  },
  {
    period: 'Januari - Juni 2026',
    title: 'Afstudeerstage Huiskes Kokkeler',
    current: true,
  },
  {
    period: 'Feb - Aug 2024',
    title: 'N3F',
    current: false,
  },
  {
    period: 'Jan 2025 - Jun 2025',
    title: 'Stage Metropool',
    current: false,
  },
  {
    period: '2022 - heden',
    title: 'Creative Business HBO Saxion',
    current: true,
  },
];

export function SimpleExperience() {
  return (
    <section id="experience" className="relative py-24 bg-black w-full">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            ERVARINGEN
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/20"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Sigil connector */}
                <div className="absolute left-0 top-2 flex items-center">
                  {/* Dot */}
                  <div className={`w-12 h-12 border ${exp.current ? 'border-white bg-black' : 'border-white/40 bg-black'} flex items-center justify-center`}>
                    {exp.current ? (
                      // Active indicator
                      <div className="w-3 h-3 bg-white animate-pulse"></div>
                    ) : (
                      // Past indicator
                      <div className="w-3 h-3 border border-white/60"></div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`border ${exp.current ? 'border-white/40' : 'border-white/20'} p-6 hover:border-white/60 transition-colors group bg-black/50`}>
                  {/* Period */}
                  <div className="font-['Rajdhani'] text-sm text-white/50 mb-2 tracking-wider">
                    {exp.period}
                    {exp.current && (
                      <span className="ml-3 text-xs border border-white/40 px-2 py-1 text-white/60">
                        ACTIEF
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Inter'] font-black text-xl text-white tracking-tight">
                    {exp.title}
                  </h3>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/60"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/60"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/60"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/60"></div>

                  {/* Hover effect */}
                  <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}