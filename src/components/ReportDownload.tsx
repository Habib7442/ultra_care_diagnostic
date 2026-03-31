import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, ArrowRight } from 'lucide-react';

export default function ReportDownload() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                <FileText className="w-4 h-4 mr-2" />
                Digital Reports
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Access Your Reports <br />
                <span className="text-secondary">Anytime, Anywhere.</span>
              </h3>
              <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
                No more waiting in queues. Enter your mobile number or report ID to download your verified diagnostic results instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-bold">Secure Access</div>
                    <div className="text-xs text-primary-foreground/50">OTP Verified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-bold">PDF Format</div>
                    <div className="text-xs text-primary-foreground/50">Print Ready</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl">
              <h4 className="text-2xl font-bold text-primary mb-8">Download Report</h4>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Mobile Number / Report ID</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter details"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-primary font-medium"
                    />
                  </div>
                </div>
                <button className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-all flex items-center justify-center">
                  Download Now <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <p className="text-center text-xs text-slate-400 font-medium">
                  Facing issues? Contact our support at +91 99573 43303
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
