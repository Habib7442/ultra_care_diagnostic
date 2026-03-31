import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-bold tracking-tight">ULTRA CARE</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Diagnostics</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8">
              Operating under Barak Path Lab & Diagnostics, we are Silchar's most trusted diagnostic center providing accurate and timely results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="hover:text-secondary transition-colors">Expert Doctors</a></li>
              <li><a href="#booking" className="hover:text-secondary transition-colors">Book a Test</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Download Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-primary-foreground/60 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span>GHUNGOOR, SMCH POINT, SILCHAR, PIN - 788014</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span>+91 99573 43303</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span>ultracare60@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-primary-foreground/60 text-sm mb-6">Subscribe to get health tips and lab updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/10 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-secondary outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-4 rounded-lg hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Ultra Care Diagnostics. All rights reserved. Powered by Barak Path Lab.
          </p>
          <div className="flex space-x-8 text-primary-foreground/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
