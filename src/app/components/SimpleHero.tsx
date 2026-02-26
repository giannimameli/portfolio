import { motion } from 'motion/react';
import { CyberSigil } from './CyberSigil';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import profileImg from "../../assets/ca2359643a8b54619a7a46e29ed7debefeeb61a9.png";

export function SimpleHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });
    
    // Auto-create ripple on hover movement (throttled)
    if (Math.random() > 0.95) { // Only create ripple 5% of the time to avoid spam
      const newRipple = { id: Date.now() + Math.random(), x, y };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1500);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRipples([]);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black w-full">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Profile Photo with water ripple hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex justify-center"
        >
          <div
            className="relative w-full max-w-2xl h-80 md:h-96 border-2 border-white/30 overflow-hidden bg-black cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Profile Image - Focus higher with grainy ASCII-like effect */}
            <img 
              src={profileImg} 
              alt="Gianni Mameli"
              className="w-full h-full object-cover transition-all duration-300"
              style={{ 
                objectPosition: 'center 15%',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.4) brightness(1.1)',
                imageRendering: 'crisp-edges'
              }}
            />

            {/* Grain/noise overlay for ASCII-like texture */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            ></div>
            
            {/* Water Ripples */}
            {ripples.map(ripple => (
              <motion.div
                key={ripple.id}
                className="absolute pointer-events-none border-2 border-white/60 rounded-full"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
                initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.8 }}
                animate={{ 
                  width: 300, 
                  height: 300, 
                  x: -150, 
                  y: -150, 
                  opacity: 0 
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}

            {/* Second ripple layer for depth */}
            {ripples.map(ripple => (
              <motion.div
                key={`${ripple.id}-2`}
                className="absolute pointer-events-none border border-white/40 rounded-full"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
                initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.6 }}
                animate={{ 
                  width: 200, 
                  height: 200, 
                  x: -100, 
                  y: -100, 
                  opacity: 0 
                }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              />
            ))}
            
            {/* Outer border decoration */}
            <div className="absolute inset-0 border border-white/20 pointer-events-none"></div>
            <div className="absolute inset-2 border border-white/10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Name - Responsive sizing with max constraint */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Inter'] font-black text-white mb-6 tracking-tight leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          GIANNI MAMELI
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-6 max-w-2xl mx-auto"
        ></motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-['Rajdhani'] text-2xl md:text-3xl text-white/80 tracking-wide mb-16"
        >
          Creative Business | Marketing & Design
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="group inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="font-['Rajdhani'] text-xs tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}