import { ArrowUp, Mail, Heart } from 'lucide-react';
import { navigationLinks, personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/60 dark:border-slate-800/60">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
                {personalInfo.name.charAt(0)}
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              {personalInfo.role} — Turning complex engineering problems into simple, beautiful digital products.
            </p>
          </div>

          {/* Center Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.twitter && (
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Designed & crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, Vite & Tailwind
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
