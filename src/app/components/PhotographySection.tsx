import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotographySection() {
  return (
    <section id="photography" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            FOTOGRAFIE
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="font-['Rajdhani'] text-white/60 max-w-2xl mx-auto">
            Visuele verhalen vertellen door de lens – van product tot portret
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden"
          >
            <div className="relative border border-white/20 group-hover:border-white/50 transition-colors overflow-hidden">
              <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                  alt="Architecture photography"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Geometric overlay */}
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/10 transition-all duration-300 pointer-events-none"></div>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-white/60"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/60"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-white/60"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-white/60"></div>
            </div>
          </motion.div>

          {/* Regular images */}
          {[
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
            'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden"
            >
              <div className="relative border border-white/20 group-hover:border-white/50 transition-colors overflow-hidden">
                <div className="aspect-square bg-gray-900 relative overflow-hidden">
                  <ImageWithFallback
                    src={src}
                    alt={`Photography ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Geometric overlay */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-all duration-300 pointer-events-none"></div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-white/60"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-white/60"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-white/60"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-white/60"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photography Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-white/20 px-8 py-4">
            <p className="font-['Space_Mono'] text-sm text-white/70">
              Product • Portrait • Architecture • Event Photography
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}