import React from 'react';
import { motion } from 'motion/react';
import { Download, Calendar, ShieldCheck, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden medical-gradient">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3 h-3 mr-2" />
              NABL Certified Laboratory
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Accurate Diagnostics. <br />
              <span className="text-secondary">Trusted Care.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Powered by Barak Path Lab, delivering precision healthcare and advanced diagnostic services in Silchar with global standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Test
              </button>
              <button className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tests Done</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Expert Doctors</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/hero-doctor.png" 
                alt="Ultra Care Diagnostic Lab" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 glass p-6 rounded-3xl shadow-xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">NABL Certified</div>
                  <div className="text-[10px] text-slate-500">Quality Guaranteed</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">Trusted by 5k+</div>
                  <div className="text-[10px] text-slate-500">Local Families</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
