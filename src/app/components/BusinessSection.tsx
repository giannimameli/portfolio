import { motion } from 'motion/react';

const caseStudies = [
  {
    title: 'Rebranding Campaign voor Tech Startup',
    problem: 'Startup had geen duidelijke merkidentiteit en worstelde met brand recognition in competitieve markt',
    solution: 'Complete rebranding inclusief nieuwe visual identity, messaging strategie en multi-channel launch campagne',
    impact: '+150% brand awareness, +85% website traffic, +60% lead conversion in eerste kwartaal',
  },
  {
    title: 'Social Commerce Strategie',
    problem: 'E-commerce bedrijf wilde social media kanalen monetizen maar had geen clear strategie',
    solution: 'Ontwikkeling van social commerce roadmap met shoppable content, influencer partnerships en UGC campagnes',
    impact: '€50K+ revenue via social channels in 3 maanden, 200% ROI op influencer budget',
  },
  {
    title: 'Content Marketing voor B2B SaaS',
    problem: 'B2B SaaS bedrijf genereerde te weinig gekwalificeerde leads via content',
    solution: 'Data-driven content strategie met focus op bottom-funnel content, SEO optimalisatie en lead magnets',
    impact: '3x organic traffic, 250% increase in MQLs, positie #1 voor 12 target keywords',
  },
];

export function BusinessSection() {
  return (
    <section id="business" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            CREATIVE BUSINESS
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Where creativity meets strategy – case studies met meetbare business impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-white/20 hover:border-white/50 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40"></div>

              <div className="p-8 md:p-10">
                <h3 className="font-['Inter'] font-black text-2xl text-white mb-6 tracking-tight">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Problem */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-[1px] bg-white/40"></div>
                      <h4 className="font-['Space_Mono'] text-xs tracking-widest text-white/60">PROBLEM</h4>
                    </div>
                    <p className="font-['Rajdhani'] text-white/70 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-[1px] bg-white/40"></div>
                      <h4 className="font-['Space_Mono'] text-xs tracking-widest text-white/60">SOLUTION</h4>
                    </div>
                    <p className="font-['Rajdhani'] text-white/70 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-[1px] bg-white/40"></div>
                      <h4 className="font-['Space_Mono'] text-xs tracking-widest text-white/60">IMPACT</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.impact.split(',').map((item, i) => (
                        <li key={i} className="font-['Space_Mono'] text-sm text-white/80 flex items-start gap-2">
                          <span className="text-white/40 mt-1">▸</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hover effect line */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="font-['Rajdhani'] text-white/60 text-sm tracking-widest mb-6 text-center">CORE COMPETENTIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Strategic Marketing',
              'Brand Development',
              'Digital Strategy',
              'Content Creation',
              'Data Analytics',
              'Project Management',
              'Client Relations',
              'Innovation',
            ].map((skill, index) => (
              <div
                key={index}
                className="border border-white/20 px-4 py-3 text-center hover:border-white/50 hover:bg-white/5 transition-all group"
              >
                <span className="font-['Space_Mono'] text-sm text-white/70 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
