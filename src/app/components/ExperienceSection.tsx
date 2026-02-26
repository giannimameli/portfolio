import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Marketing & Design Intern',
    company: 'Huiskes Kokkeler',
    period: '2024 - Heden',
    description: 'Ontwikkeling van marketingcampagnes en visueel materiaal voor automotive dealergroep. Focus op social media, event marketing en brand consistency.',
    achievements: [
      'Lead social media strategie voor 5+ dealerlocaties',
      'Design van promotional materials en event branding',
      'Implementatie van nieuwe visual identity guidelines',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Creative',
    company: 'Diverse Opdrachtgevers',
    period: '2022 - Heden',
    description: 'Freelance projecten in branding, fotografie en digital marketing voor lokale bedrijven en startups.',
    achievements: [
      '10+ succesvolle branding projecten',
      'Product fotografie voor e-commerce bedrijven',
      'Social media management en content creatie',
    ],
  },
  {
    type: 'education',
    title: 'Creative Business',
    company: 'Saxion Hogeschool',
    period: '2021 - 2025',
    description: 'HBO opleiding gericht op de combinatie van creativiteit en ondernemerschap. Specialisatie in marketing en design.',
    achievements: [
      'Minor: Digital Marketing & E-commerce',
      'Project: Award-winning social media campaign',
      'Relevante vakken: Brand Strategy, Visual Design, Marketing Analytics',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
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
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Van studie tot praktijk – mijn reis in creative business
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:flex md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="border border-white/20 p-6 hover:border-white/50 transition-colors group bg-black/50">
                    {/* Icon */}
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
                        {exp.type === 'work' ? (
                          <Briefcase size={20} className="text-white/70" />
                        ) : (
                          <GraduationCap size={20} className="text-white/70" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-['Inter'] font-black text-lg text-white">
                          {exp.title}
                        </h3>
                        <div className="font-['Rajdhani'] text-white/60 text-sm">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="font-['Space_Mono'] text-xs text-white/50 tracking-wider">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-['Rajdhani'] text-white/70 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <span className="text-white/40 text-xs mt-1">▸</span>
                          <span className="font-['Space_Mono'] text-xs text-white/60 flex-1">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40"></div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white bg-black"></div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
