import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile & AI', 'UI/UX'] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Work"
          title="Curated Projects & Experiments"
          subtitle="A showcase of production-ready web apps, developer tools, and scalable cloud applications."
        />

        {/* Filter Pills with animated background */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white glass-panel'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800/80 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repository CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 p-8 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Looking for more open source projects?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Explore 20+ additional repositories, utility libraries, and experiments on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white shadow-md transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Visit GitHub Archive</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
