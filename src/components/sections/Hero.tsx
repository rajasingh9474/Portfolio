import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code2, Layers } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Hero: React.FC = () => {
  const handleDownloadResume = (e: React.MouseEvent) => {
    // If user has a real resume link in portfolioData, navigate to it; otherwise simulate a nice download/alert
    if (!personalInfo.resumeUrl || personalInfo.resumeUrl === '#') {
      e.preventDefault();
      // Create a dummy sample resume download or trigger friendly notice
      const element = document.createElement('a');
      const file = new Blob(
        [
          `Resume - ${personalInfo.name}\nRole: ${personalInfo.role}\nEmail: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\n\nSummary:\n${personalInfo.shortBio}\n`
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
              <span className="text-slate-400">•</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{personalInfo.location}</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Role Title with Code Badge */}
            <div className="inline-flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-6">
              <span className="text-indigo-500 font-mono">&lt;</span>
              <span>{personalInfo.role}</span>
              <span className="text-indigo-500 font-mono">/&gt;</span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons: View Projects & Download Resume */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                onClick={handleDownloadResume}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Ribbon */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-2">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
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
                    className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send Email"
                    className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visual Showcase & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Center Card with Glassmorphic Code Preview */}
            <div className="relative w-full max-w-md rounded-2xl glass-panel border border-slate-200/90 dark:border-slate-800/90 p-6 shadow-2xl shadow-indigo-500/10">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-indigo-400" />
                  developer.tsx
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-mono">
                  v2.4
                </span>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-indigo-400">name:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'{personalInfo.name}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-indigo-400">role:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'{personalInfo.role}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-indigo-400">skills:</span> [
                  <span className="text-amber-600 dark:text-amber-400">'React'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400">'TypeScript'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400">'Node'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-indigo-400">hardWorker:</span>{' '}
                  <span className="text-rose-500">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-indigo-400">problemSolver:</span>{' '}
                  <span className="text-rose-500">true</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Mini Status Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Ready to collaborate
                </span>
                <span className="font-mono text-indigo-500">UTF-8</span>
              </div>
            </div>

            {/* Floating Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-6 p-3.5 rounded-xl glass-panel shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-white"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <span>Clean Code</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 rounded-xl glass-panel shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-white"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <span>Modern Architecture</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
