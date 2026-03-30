import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Patient Stories</h2>
          <h3 className="text-4xl font-bold text-primary">What Our Patients Say</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-10 rounded-[3rem] relative"
            >
              <Quote className="absolute top-8 right-10 w-12 h-12 text-primary/5" />
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <div className="flex items-center text-xs text-slate-400 font-medium">
                    <MapPin className="w-3 h-3 mr-1" /> {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="font-bold text-primary">NABL ACCREDITED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">H</div>
              <span className="font-bold text-primary">HYGIENE FIRST</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">I</div>
              <span className="font-bold text-primary">ISO CERTIFIED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">Q</div>
              <span className="font-bold text-primary">QUALITY CARE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
