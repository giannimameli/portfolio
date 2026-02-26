export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full max-w-2xl"></div>
        </div>

        {/* Footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-['Inter'] font-black text-xl text-white mb-2 tracking-tight">
              GIANNI MAMELI
            </div>
            <div className="font-['Rajdhani'] text-sm text-white/60">
              Creative Business Student
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="font-['Space_Mono'] text-xs text-white/50 mb-3 tracking-widest">
              NAVIGATION
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Work', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="font-['Rajdhani'] text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="font-['Space_Mono'] text-xs text-white/50 mb-2 tracking-widest">
              EST. 2024
            </div>
            <div className="font-['Rajdhani'] text-sm text-white/60">
              All rights reserved
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 px-6 py-2">
            <div className="w-2 h-2 border border-white/30 rotate-45"></div>
            <span className="font-['Space_Mono'] text-xs text-white/40 tracking-wider">
              DESIGNED & BUILT BY GIANNI MAMELI
            </span>
            <div className="w-2 h-2 border border-white/30 rotate-45"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px]">
          <svg width="100%" height="1" viewBox="0 0 1920 1" preserveAspectRatio="none">
            <line x1="0" y1="0.5" x2="1920" y2="0.5" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
