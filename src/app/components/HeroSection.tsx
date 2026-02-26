import { motion } from 'motion/react';
import { CyberSigil } from './CyberSigil';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10">
          <CyberSigil variant="circle" size={150} />
        </div>
        <div className="absolute bottom-20 right-10">
          <CyberSigil variant="hexagon" size={120} />
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
          <CyberSigil variant="network" size={100} />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <CyberSigil variant="giger" size={130} />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Animated sigil above name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <CyberSigil variant="circuit" size={80} animate />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Inter'] font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
        >
          GIANNI MAMELI
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-6"
        ></motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-['Rajdhani'] text-xl md:text-2xl text-white/80 tracking-wide mb-12"
        >
          Creative Business Student | Marketing & Design
        </motion.p>

        {/* Small decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-white/30"></div>
          <div className="w-2 h-2 border border-white/30 rotate-45"></div>
          <div className="w-12 h-[1px] bg-white/30"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="group inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="font-['Space_Mono'] text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="group-hover:text-white" />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom border decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg width="100%" height="2" viewBox="0 0 1920 2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="1920" y2="1" stroke="url(#gradient)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
