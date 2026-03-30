import React from 'react';
import { motion } from 'motion/react';

const GALLERY_IMAGES = [
  { url: '/1774833706555.jpg', title: 'Laboratory Facility' },
  { url: '/1774833706563.jpg', title: 'Diagnostics Area' },
  { url: '/1774833706571.jpg', title: 'Advanced Testing' },
  { url: '/1774833706578.jpg', title: 'Precision Equipment' },
  { url: '/1774833706585.jpg', title: 'Patient Safety' },
  { url: '/1774833706592.jpg', title: 'Expert Environment' },
  { url: '/1774833706600.jpg', title: 'Modern Clinic' },
  { url: '/1774833706609.jpg', title: 'Clean Lab' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Inside the Lab</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Our Real-world Facilities</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A glimpse into Silchar's most advanced diagnostic laboratory. Equipped with high-end machinery for absolute accuracy and transparency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group aspect-square rounded-2xl overflow-hidden shadow-md"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-xs font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
