import { motion } from 'motion/react';

interface CyberSigilProps {
  variant?: 'circle' | 'hexagon' | 'network' | 'giger' | 'circuit';
  size?: number;
  className?: string;
  animate?: boolean;
}

export function CyberSigil({ variant = 'circle', size = 100, className = '', animate = false }: CyberSigilProps) {
  const renderSigil = () => {
    switch (variant) {
      case 'circle':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="50" y1="5" x2="50" y2="25" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="50" y1="75" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="5" y1="50" x2="25" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="75" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="30" y2="30" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="70" y1="70" x2="85" y2="85" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="85" y1="15" x2="70" y2="30" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="30" y1="70" x2="15" y2="85" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="#ffffff" />
          </svg>
        );
      
      case 'hexagon':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="10" y1="27.5" x2="90" y2="72.5" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="90" y1="27.5" x2="10" y2="72.5" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2" fill="#ffffff" />
          </svg>
        );
      
      case 'network':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <circle cx="20" cy="20" r="3" fill="#ffffff" />
            <circle cx="80" cy="20" r="3" fill="#ffffff" />
            <circle cx="50" cy="50" r="3" fill="#ffffff" />
            <circle cx="20" cy="80" r="3" fill="#ffffff" />
            <circle cx="80" cy="80" r="3" fill="#ffffff" />
            <line x1="20" y1="20" x2="50" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="50" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="20" y1="80" x2="50" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="80" y1="80" x2="50" y2="50" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="80" y2="20" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="20" y1="80" x2="80" y2="80" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="20" y2="80" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="80" y2="80" stroke="#ffffff" strokeWidth="0.5" />
          </svg>
        );
      
      case 'giger':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <path d="M 50 10 C 50 10, 30 30, 30 50 C 30 70, 50 90, 50 90" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M 50 10 C 50 10, 70 30, 70 50 C 70 70, 50 90, 50 90" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="30" cy="35" rx="8" ry="12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="70" cy="35" rx="8" ry="12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="30" cy="65" rx="8" ry="12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="70" cy="65" rx="8" ry="12" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="30" y1="35" x2="50" y2="30" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="70" y1="35" x2="50" y2="30" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="30" y1="65" x2="50" y2="70" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="70" y1="65" x2="50" y2="70" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          </svg>
        );
      
      case 'circuit':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="75" cy="25" r="5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="25" cy="75" r="5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="75" cy="75" r="5" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="30" y1="25" x2="70" y2="25" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="30" y1="75" x2="70" y2="75" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="25" y1="30" x2="25" y2="70" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="75" y1="30" x2="75" y2="70" stroke="#ffffff" strokeWidth="0.5" />
            <rect x="45" y="45" width="10" height="10" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="45" y2="45" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="75" y1="25" x2="55" y2="45" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="25" y1="75" x2="45" y2="55" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="75" y1="75" x2="55" y2="55" stroke="#ffffff" strokeWidth="0.5" />
          </svg>
        );
      
      default:
        return null;
    }
  };

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        {renderSigil()}
      </motion.div>
    );
  }

  return <>{renderSigil()}</>;
}
