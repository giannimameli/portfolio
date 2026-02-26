import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  location?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function PhotoModal({
  isOpen,
  onClose,
  imageSrc,
  location,
  onPrevious,
  onNext,
}: PhotoModalProps) {
  // Store scroll position
  const scrollPositionRef = useRef(0);

  // Prevent scroll when modal is open and save scroll position
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Restore scroll position after modal closes
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrevious) onPrevious();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, onPrevious, onNext]);

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-0 right-0 z-20 p-3 border border-white/40 bg-black hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Previous button */}
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
              )}

              {/* Next button */}
              {onNext && (
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              )}

              {/* Image Container */}
              <div className="relative flex-1 flex items-center justify-center">
                <div className="relative border-2 border-white/30 bg-black max-h-[85vh]">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/80 z-10"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/80 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/80 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/80 z-10"></div>

                  <img
                    src={imageSrc}
                    alt={location || 'Photo'}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                  />
                </div>
              </div>

              {/* Location info */}
              {location && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 flex items-center justify-center gap-2 text-white/80"
                >
                  <MapPin size={16} className="text-white/60" />
                  <span className="font-['Rajdhani'] text-lg tracking-wide">{location}</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}