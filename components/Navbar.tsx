import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Menu, X, ShieldCheck, HelpCircle } from 'lucide-react';
import { navbarVariants } from '../lib/animations.ts';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onOpenFAQ: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onOpenFAQ }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      {/* Official US Gov Banner */}
      <div className="bg-[#f0f0f0] border-b border-slate-200 py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
          alt="USA Flag" 
          className="h-3 w-5 object-cover shadow-sm"
        />
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
          Official website of the United States Government & BIS Partner
        </p>
      </div>

      <div className="glass border-b border-slate-200/50 px-4 sm:px-6 lg:px-8 shadow-sm bg-white/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="p-1.5 bg-[#002868] rounded-lg">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight border-l-2 border-[#BF0A30] pl-3">
              <span className="text-lg font-black text-[#002868] tracking-tighter">US-SETTLEMENT</span>
              <span className="text-[9px] font-bold text-[#BF0A30] uppercase tracking-[0.2em]">Authorized BIS Portal</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${currentPage === 'home' ? 'text-[#002868]' : 'text-slate-500 hover:text-[#002868]'}`}
            >
              Overview
            </button>
            <button 
              onClick={onOpenFAQ}
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#002868] flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              Help
            </button>
            <button 
              onClick={() => onNavigate('verify')}
              className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded bg-[#002868] text-white hover:bg-slate-900 transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Lodge Federal Claim
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-slate-200 bg-white"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 font-bold text-slate-700 text-sm uppercase"
            >
              Overview
            </button>
            <button 
              onClick={() => { onOpenFAQ(); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 font-bold text-slate-700 text-sm uppercase"
            >
              FAQ & Support
            </button>
            <button 
              onClick={() => { onNavigate('verify'); setIsMenuOpen(false); }}
              className="block w-full text-center py-3 font-bold bg-[#002868] text-white rounded text-sm uppercase"
            >
              Lodge Federal Claim
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;