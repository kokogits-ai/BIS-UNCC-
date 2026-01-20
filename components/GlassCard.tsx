
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../lib/animations';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      animate="animate"
      className={`glass rounded-2xl p-8 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
