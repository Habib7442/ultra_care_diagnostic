import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>ULTRA CARE</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Diagnostics</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="tel:+919957343303" className="flex items-center text-primary font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">99573 43303</span>
              </a>
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                Book Test
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold">
                  Book Test
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-xl font-semibold flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" /> Download Report
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
