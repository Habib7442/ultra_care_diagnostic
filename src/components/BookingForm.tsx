import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, MapPin, Clock, Home, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Easy Booking</h2>
            <h3 className="text-4xl font-bold text-primary mb-8">Schedule Your Test Today</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mr-5 flex-shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Home Sample Collection</h4>
                  <p className="text-slate-500 text-sm">Can't visit the lab? Our expert technicians will collect samples from your doorstep.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mr-5 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Fast Report Delivery</h4>
                  <p className="text-slate-500 text-sm">Get your digital reports within 24 hours for most tests via WhatsApp or Email.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mr-5 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">NABL Certified Quality</h4>
                  <p className="text-slate-500 text-sm">Every test is performed using advanced machines and verified by expert pathologists.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-primary-foreground/80 text-sm font-medium mb-2">Need immediate assistance?</p>
                <h4 className="text-2xl font-bold mb-6">Call our helpline now</h4>
                <a href="tel:+919957343303" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 mr-3" />
                  +91 99573 43303
                </a>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Test Type</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                  <option>Select a test</option>
                  <option>Blood Test</option>
                  <option>ECG / EEG</option>
                  <option>X-Ray / Sonography</option>
                  <option>Full Body Checkup</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="flex items-end">
                  <label className="flex items-center space-x-3 cursor-pointer group py-4">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary" />
                    <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">Home Collection Required</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-opacity-95 transition-all">
                Confirm Booking
              </button>
              
              <p className="text-center text-xs text-slate-400 font-medium">
                By booking, you agree to our terms and privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
