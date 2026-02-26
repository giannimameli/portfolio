import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export function SimpleContact() {
  return (
    <section id="contact" className="relative py-24 bg-black w-full">
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
            CONTACT
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Social Links - Centered */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href="https://nl.linkedin.com/in/gianni-mameli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/20 p-4 hover:border-white transition-all duration-300"
            >
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <Linkedin size={24} className="text-white/70 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <div className="font-['Rajdhani'] text-sm text-white/50">LinkedIn</div>
                <div className="font-['Rajdhani'] text-white/80 group-hover:text-white">/gianni-mameli</div>
              </div>
              {/* Cyberpunk hover line */}
              <div className="w-0 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></div>
            </a>

            <a
              href="https://www.instagram.com/cb_gianni"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/20 p-4 hover:border-white transition-all duration-300"
            >
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <Instagram size={24} className="text-white/70 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <div className="font-['Rajdhani'] text-sm text-white/50">Instagram</div>
                <div className="font-['Rajdhani'] text-white/80 group-hover:text-white">CB_Gianni</div>
              </div>
              <div className="w-0 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></div>
            </a>

            <a
              href="mailto:giannimameli04@gmail.com"
              className="group flex items-center gap-4 border border-white/20 p-4 hover:border-white transition-all duration-300"
            >
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <Mail size={24} className="text-white/70 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <div className="font-['Rajdhani'] text-sm text-white/50">Email</div>
                <div className="font-['Rajdhani'] text-white/80 group-hover:text-white">giannimameli04@gmail.com</div>
              </div>
              <div className="w-0 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></div>
            </a>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-white/20 p-6 mt-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-['Rajdhani'] text-sm text-white/60">Beschikbaar voor projecten</span>
            </div>
            <p className="font-['Rajdhani'] text-sm text-white/70 leading-relaxed">
              Op zoek naar samenwerkingen in marketing, design en creative business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}