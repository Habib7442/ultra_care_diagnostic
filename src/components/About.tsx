import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Microscope, HeartPulse } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/1774833706620.jpg" 
                alt="Advanced Lab Equipment" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-secondary p-10 rounded-[3rem] text-white shadow-2xl z-20 hidden md:block">
              <div className="text-5xl font-bold mb-1">15+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Trust</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">About Ultra Care</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
              Precision Healthcare <br />
              <span className="text-secondary">Rooted in Trust.</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Ultra Care Diagnostics, operating under the prestigious Barak Path Lab & Diagnostics (Silchar), is dedicated to providing the highest quality diagnostic services to the community of Silchar and beyond.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Advanced Tech</h4>
                  <p className="text-slate-500 text-sm">Latest automated machines for error-free results.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Expert Team</h4>
                  <p className="text-slate-500 text-sm">NABL certified processes and expert pathologists.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Patient First</h4>
                  <p className="text-slate-500 text-sm">Compassionate care with a focus on your comfort.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Accurate Reports</h4>
                  <p className="text-slate-500 text-sm">Double-verified results for complete peace of mind.</p>
                </div>
              </div>
            </div>

            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
