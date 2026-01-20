
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Menu, X, Landmark } from 'lucide-react';
import { navbarVariants } from '../lib/animations';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <Landmark className="w-8 h-8 text-blue-700" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">BIS-UNCC</span>
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">Global Settlement</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Settlement Overview
            </button>
            <button 
              onClick={() => onNavigate('verify')}
              className={`text-sm font-medium px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-sm`}
            >
              Lodge Claim
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-slate-200"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 font-medium text-slate-700"
            >
              Overview
            </button>
            <button 
              onClick={() => { onNavigate('verify'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 font-medium text-blue-600"
            >
              Lodge Claim
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
