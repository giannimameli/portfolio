import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Over mij' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'design', label: 'Vormgeving' },
  { id: 'photography', label: 'Fotografie' },
  { id: 'business', label: 'Creative Business' },
  { id: 'experience', label: 'Ervaringen' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="font-['Rajdhani'] font-bold tracking-wider text-white hover:text-white/80 transition-colors"
            >
              GM
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 font-['Rajdhani'] text-sm tracking-wide text-white/70 hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 font-['Rajdhani'] text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Decorative top border */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-[60]"></div>
    </>
  );
}
