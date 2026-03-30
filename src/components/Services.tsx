import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Comprehensive Diagnostic Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipped with state-of-the-art technology and managed by expert pathologists, we provide a wide range of diagnostic tests with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-primary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                  Book Now <Icons.ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
