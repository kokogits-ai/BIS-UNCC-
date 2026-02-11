import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, ShieldCheck, Clock, Landmark, AlertCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    icon: <Landmark className="w-5 h-5 text-[#002868]" />,
    q: "What is the BIS-UNCC 2025 Settlement?",
    a: "It is a joint federal initiative by the Bank for International Settlements (BIS) and the United Nations Compensation Commission to recover lost assets and provide compensation to verified US-eligible beneficiaries."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#BF0A30]" />,
    q: "How is my eligibility verified?",
    a: "Verification is performed by cross-referencing your legal identity against the Federal Asset Database and BIS File CPM/025 records using secure AES-256 encryption."
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    q: "How long does the disbursement take?",
    a: "Once a claim is authorized, a dedicated Settlement Officer will contact you within 24 hours to coordinate the final transfer node."
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    q: "Are there any upfront fees?",
    a: "The $3.5 Million settlement is a pre-allocated federal grant. While standard federal processing or courier nodes may apply based on the delivery method, no private bank PINs or sensitive passwords are ever requested."
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white shadow-2xl z-[101] overflow-hidden"
          >
            <div className="bg-[#002868] p-6 text-white flex items-center justify-between border-b-4 border-[#BF0A30]">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Settlement FAQ & Support</h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="space-y-8">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 pt-1">{faq.icon}</div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">{faq.q}</h4>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-slate-50 border border-slate-200">
                <p className="text-[10px] text-center font-black text-[#002868] uppercase tracking-[0.2em]">
                  Official Support: cpmi-settlement@bis.org
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FAQModal;