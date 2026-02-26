import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Bedankt voor je bericht! (Dit is een demo - geen echte verzending)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:gianni.mameli@example.com', text: 'gianni.mameli@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/giannimameli', text: '/giannimameli' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/giannimameli', text: '/giannimameli' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/giannimameli', text: '@giannimameli' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
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
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Klaar om samen te werken? Neem contact op en laten we iets geweldigs creëren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-['Space_Mono'] text-xs text-white/60 mb-2 tracking-wider">
                  NAAM
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white font-['Rajdhani'] focus:border-white/60 focus:outline-none transition-colors"
                  placeholder="Je naam"
                />
              </div>

              <div>
                <label className="block font-['Space_Mono'] text-xs text-white/60 mb-2 tracking-wider">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white font-['Rajdhani'] focus:border-white/60 focus:outline-none transition-colors"
                  placeholder="je.email@example.com"
                />
              </div>

              <div>
                <label className="block font-['Space_Mono'] text-xs text-white/60 mb-2 tracking-wider">
                  BERICHT
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white font-['Rajdhani'] focus:border-white/60 focus:outline-none transition-colors resize-none"
                  placeholder="Vertel me over je project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full border border-white/40 px-8 py-4 text-white hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-['Rajdhani'] font-bold tracking-wider">
                  VERSTUUR BERICHT
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Animated border */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-white group-hover:h-full transition-all duration-300 delay-75"></div>
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 delay-150"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-white group-hover:h-full transition-all duration-300 delay-225"></div>
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border border-white/20 p-8">
              <h3 className="font-['Inter'] font-black text-2xl text-white mb-6 tracking-tight">
                Connect
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/50 hover:bg-white/5 transition-all"
                  >
                    <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                      <link.icon size={20} className="text-white/70 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-['Space_Mono'] text-xs text-white/50 tracking-wider">
                        {link.label}
                      </div>
                      <div className="font-['Rajdhani'] text-white/80 group-hover:text-white transition-colors">
                        {link.text}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-['Space_Mono'] text-xs text-white/60 tracking-wider">
                    BESCHIKBAAR VOOR PROJECTEN
                  </span>
                </div>
                <p className="font-['Rajdhani'] text-sm text-white/70 leading-relaxed">
                  Op zoek naar interessante samenwerkingen in marketing, design en creative business.
                  Neem contact op om de mogelijkheden te bespreken.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
