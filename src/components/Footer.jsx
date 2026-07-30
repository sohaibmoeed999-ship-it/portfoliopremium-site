import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sohaibmoeed999-ship-it', name: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-shahid-6abb6039a', name: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://wa.me/923106444075', name: 'WhatsApp' },
    { icon: Mail, href: 'mailto:sohaibmoeed999@gmail.com', name: 'Email' }
  ];

  return (
    <footer className="relative border-t border-slate-200/10 dark:border-white/5 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/40 py-16 overflow-hidden">
      {/* Footer background sparkles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-650/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-md group-hover:scale-105 transition-transform duration-300">
              SS
            </span>
            <span className="font-bold text-base tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Sohaib Shahid
            </span>
          </a>
          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Recruiter Ready Portfolio
          </p>
        </div>

        {/* Quick navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-500">
          <a href="#about" className="hover:text-indigo-500 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-500 dark:hover:text-white transition-colors">Skills</a>
          <a href="#services" className="hover:text-indigo-500 dark:hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-indigo-500 dark:hover:text-white transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-indigo-500 dark:hover:text-white transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-indigo-500 dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Action column */}
        <div className="flex items-center gap-6">
          {/* Social symbols */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-slate-500 dark:text-slate-500 hover:text-indigo-650 dark:hover:text-white border border-slate-200 dark:border-slate-850 hover:border-indigo-500/25 transition-all"
                  aria-label={link.name}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Footer Back to Top Text Link */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-indigo-500 transition-colors uppercase tracking-wider"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-200/5 dark:border-white/5 text-center text-[10px] font-semibold text-slate-550 dark:text-slate-600 uppercase tracking-widest">
        &copy; {currentYear} Sohaib Shahid. Designed in alignment with Apple & Vercel design standards. All Rights Reserved.
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-2xl z-40 border border-slate-800 dark:border-slate-200 hover:-translate-y-1 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
