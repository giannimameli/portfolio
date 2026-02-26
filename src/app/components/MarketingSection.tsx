import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Social Media Campagne',
    description: 'Ontwikkeling van een multi-platform social media strategie met focus op brand awareness en engagement. Inclusief content planning, visuele concepten en performance tracking.',
    tags: ['Instagram', 'TikTok', 'Strategy'],
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete merkidentiteit voor startup, van logo tot brand guidelines. Focus op moderne, cleane esthetiek met sterke herkenbaarheid en consistentie over alle touchpoints.',
    tags: ['Branding', 'Visual Identity', 'Guidelines'],
  },
  {
    title: 'Product Launch Campaign',
    description: 'Geïntegreerde marketingcampagne voor productlancering inclusief teaser content, influencer collaboraties en event activatie. Resultaat: 200% overtreffen van engagement doelen.',
    tags: ['Campaign', 'Launch', 'Influencer'],
  },
  {
    title: 'Content Marketing Strategy',
    description: 'Strategische content roadmap voor B2B tech bedrijf. Focus op thought leadership, SEO optimalisatie en lead generatie door waardevol, relevant content.',
    tags: ['Content', 'B2B', 'SEO'],
  },
];

export function MarketingSection() {
  return (
    <section id="marketing" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            MARKETING
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Strategische marketing projecten die merken tot leven brengen en meetbare resultaten leveren
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
}
