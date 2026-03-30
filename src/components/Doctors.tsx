import React from 'react';
import { DOCTORS } from '../constants';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Expert Panel</h2>
            <h3 className="text-4xl font-bold text-primary">Recommended Specialists</h3>
            <p className="text-slate-600 mt-4">
              Our lab is supported by some of the most experienced medical specialists in Silchar, ensuring expert consultation for every test.
            </p>
          </div>
          <button className="flex items-center text-primary font-bold hover:translate-x-2 transition-transform">
            View All Doctors <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <button className="bg-white text-primary py-3 rounded-2xl font-bold text-sm shadow-lg">
                    Book Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-primary">{doctor.name}</h4>
                  <p className="text-secondary font-semibold text-sm mb-1">{doctor.specialty}</p>
                  <p className="text-xs text-slate-400 font-medium">{doctor.qualification}</p>
                </div>
                <div className="flex items-center bg-slate-50 px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-xs font-bold text-primary">{doctor.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
