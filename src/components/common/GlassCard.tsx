import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}) => {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        shadow-xl hover:shadow-2xl transition-all duration-300
        ${hover ? 'hover:bg-white/15 hover:border-white/30 hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;