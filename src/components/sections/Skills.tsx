import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud, Sparkles } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-500" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit cultivated through years of building real-world digital applications."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-panel p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/50 dark:border-indigo-800/50 shadow-sm">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="mt-6 space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          )}
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400 group-hover:text-indigo-500 transition-colors">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                              : 'bg-slate-400 dark:bg-slate-600'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag Pills */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={`pill-${skill.name}`}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:scale-105 transition-transform"
                  >
                    #{skill.name.toLowerCase().replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
