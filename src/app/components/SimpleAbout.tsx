import { motion } from 'motion/react';
import { CyberSigil } from './CyberSigil';
import profileImg from "../../assets/49d0e7e2d3d4d285d24ba4aad4f4553601cb8ddf.png";

export function SimpleAbout() {
  return (
    <section id="about" className="relative py-24 bg-black w-full">
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
            OVER MIJ
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          {/* Profile Photo - Circle crop with hover movement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full border-2 border-white/30 overflow-hidden bg-black">
              {/* Cropped profile image */}
              <img 
                src={profileImg} 
                alt="Gianni Mameli"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
              />
              
              {/* Outer ring decoration */}
              <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bio - Max 150 words */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="border-l-2 border-white/30 pl-6">
              <p className="font-['Rajdhani'] text-lg text-white/80 leading-relaxed">
                <span className="text-white font-bold">Hallo, ik ben Gianni.</span> Een Creative Business student met een passie voor 
                sterke marketing met goede content en een duidelijke boodschap.
              </p>
              
              <p className="font-['Rajdhani'] text-lg text-white/80 leading-relaxed mt-4">
                Met een achtergrond in marketing en vormgeving help ik graag om een verhaal op een 
                authentieke en impactvolle manier te vertellen.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {['Marketingconcepten', 'Grafische vormgeving', 'Foto- en videografie', 'Siteanalyse'].map((skill, index) => (
                <div
                  key={index}
                  className="border border-white/20 px-4 py-2 text-center hover:border-white/50 transition-colors"
                >
                  <span className="font-['Rajdhani'] text-sm text-white/70">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}