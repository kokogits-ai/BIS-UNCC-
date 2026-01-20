
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Landmark, Mail, ArrowLeft, DollarSign, FileCheck } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import MotionButton from '../components/MotionButton';
import { fadeInUp } from '../lib/animations';

interface ConfirmationProps {
  fullName: string;
  onHome: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ fullName, onHome }) => {
  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-4">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <div className="inline-block relative mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-28 h-28 bg-blue-700 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40"
          >
            <FileCheck className="w-14 h-14" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600 rounded-3xl -z-10"
          />
        </div>

        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Claim Lodged Successfully</h2>
        <p className="text-slate-600 text-lg mb-12">
          Confirmation for <span className="font-bold text-slate-900">{fullName}</span> has been recorded for the 
          <span className="text-blue-700 font-bold"> $3,500,000.00</span> settlement disbursement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-left">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-700 w-fit mb-4"><Landmark className="w-5 h-5" /></div>
            <h4 className="font-bold text-slate-900 mb-1">BIS/CPM/025</h4>
            <p className="text-xs text-slate-500">Your claim has been forwarded to the Committee on Payment and Market Infrastructures.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-left">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-700 w-fit mb-4"><DollarSign className="w-5 h-5" /></div>
            <h4 className="font-bold text-slate-900 mb-1">Bank Assignment</h4>
            <p className="text-xs text-slate-500">A BIS accredited bank will be assigned for the disbursement of your approved funds.</p>
          </div>
        </div>

        <GlassCard className="text-left space-y-6 mb-10 border-blue-100 bg-blue-50/30">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-700" /> Urgent Next Steps
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The CPMI committee is currently reviewing your re-confirmed details. Please expect an official email from your 
            assigned accredited bank within 24-48 hours with the final transfer instructions. 
            <strong> Ensure you monitor the inbox of the email address you provided.</strong>
          </p>
        </GlassCard>

        <div className="space-y-4">
          <MotionButton onClick={onHome} variant="outline" className="w-full">
            <ArrowLeft className="w-4 h-4" /> Return to BIS Portal Overview
          </MotionButton>
          <p className="text-[10px] text-slate-400 italic">
            Reference file: BIS/CPM/025 • United Nations Compensation Commission UNCC
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Confirmation;
