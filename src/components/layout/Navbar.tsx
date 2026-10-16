import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { navigationLinks, personalInfo } from '../../data/portfolioData';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-nav shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 group-hover:shadow-indigo-500/25 transition-all">
              {personalInfo.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {personalInfo.availability}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/60 rounded-full -z-10 border border-indigo-200/60 dark:border-indigo-800/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass-nav border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navigationLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-indigo-500" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/25 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
