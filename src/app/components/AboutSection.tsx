import { motion } from 'motion/react';
import { CyberSigil } from './CyberSigil';
import profileImage from "../../assets/49d0e7e2d3d4d285d24ba4aad4f4553601cb8ddf.png";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            OVER MIJ
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Sigil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main avatar container */}
              <div className="relative w-64 h-64 border border-white/30 flex items-center justify-center bg-black/50 overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white z-10"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white z-10"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white z-10"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white z-10"></div>
                
                {/* Profile image */}
                <img 
                  src={profileImage} 
                  alt="Gianni Mameli" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Outer frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-white/20 -z-10"></div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-white/30 pl-6">
              <p className="font-['Rajdhani'] text-lg text-white/80 leading-relaxed mb-4">
                Student Creative Business aan Saxion, gepassioneerd door marketing, vormgeving en multimedia.
              </p>
              <p className="font-['Rajdhani'] text-lg text-white/80 leading-relaxed mb-4">
                Met een scherp oog voor design en een strategische mindset combineer ik creativiteit met zakelijk inzicht. 
                Mijn focus ligt op het creëren van visuele identiteiten en marketingconcepten die impact maken.
              </p>
              <p className="font-['Rajdhani'] text-lg text-white/80 leading-relaxed">
                Van fotografie tot branding, en van social media strategie tot product design – ik zoek altijd naar 
                nieuwe manieren om merken tot leven te brengen.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="border border-white/20 p-4 text-center hover:border-white/50 transition-colors">
                <div className="font-['Inter'] font-black text-2xl text-white mb-1">3+</div>
                <div className="font-['Space_Mono'] text-xs text-white/60">JAAR ERVARING</div>
              </div>
              <div className="border border-white/20 p-4 text-center hover:border-white/50 transition-colors">
                <div className="font-['Inter'] font-black text-2xl text-white mb-1">15+</div>
                <div className="font-['Space_Mono'] text-xs text-white/60">PROJECTEN</div>
              </div>
              <div className="border border-white/20 p-4 text-center hover:border-white/50 transition-colors">
                <div className="font-['Inter'] font-black text-2xl text-white mb-1">∞</div>
                <div className="font-['Space_Mono'] text-xs text-white/60">IDEEËN</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}