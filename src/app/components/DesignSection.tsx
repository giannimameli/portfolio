import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const designProjects = [
  {
    title: 'UI/UX Portfolio Website',
    description: 'Modern portfolio website met focus op gebruiksvriendelijkheid en visuele impact. Responsive design met aandacht voor microinteracties en smooth transitions.',
    tags: ['Figma', 'Web Design', 'UI/UX'],
  },
  {
    title: 'Brand Guidelines Document',
    description: 'Uitgebreide brand guidelines inclusief logo gebruik, kleurpaletten, typografie en tone of voice. Complete toolkit voor consistente merkvoering.',
    tags: ['Branding', 'Guidelines', 'Canva'],
  },
  {
    title: 'Social Media Templates',
    description: 'Set van 30+ Instagram en LinkedIn templates voor consistente social media presence. Gemakkelijk aanpasbaar en on-brand.',
    tags: ['Templates', 'Social', 'Canva'],
  },
  {
    title: 'Product Packaging Design',
    description: 'Minimalistisch packaging design voor premium product lijn. Focus op duurzaamheid, premiumgevoel en shelf impact.',
    tags: ['Packaging', 'Print', 'Adobe CC'],
  },
];

export function DesignSection() {
  return (
    <section id="design" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            VORMGEVING
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Van digitale interfaces tot print materialen – design met doel en impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Design Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="font-['Rajdhani'] text-white/60 text-sm tracking-widest mb-6">TOOLS & SOFTWARE</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Adobe InDesign', 'Sketch'].map((tool, index) => (
              <div
                key={index}
                className="border border-white/20 px-6 py-3 hover:border-white/50 transition-colors"
              >
                <span className="font-['Space_Mono'] text-sm text-white/70">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
