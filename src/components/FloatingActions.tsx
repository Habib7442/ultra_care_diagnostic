import React from 'react';
import { MessageCircle, PhoneCall, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-primary rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919395963105"
        className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-opacity-90 transition-all"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919395963105"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-opacity-90 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
