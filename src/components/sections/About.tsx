import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2, Star, Users, FolderGit2 } from 'lucide-react';
import { personalInfo, timelineData, quickStats } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const [timelineTab, setTimelineTab] = useState<'experience' | 'education'>('experience');

  const filteredTimeline = timelineData.filter((item) => item.type === timelineTab);

  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-500" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-purple-500" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-500" />;
      default:
        return <Award className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Engineering with Passion & Precision"
          subtitle="Get to know the developer behind the code — my background, core values, and professional milestones."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Bento Item 1: Bio & Philosophy (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-500 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>My Journey</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Passionate about elegant systems & delightful user interfaces
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Quick Metrics / Stats Grid (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 mb-3">
                  {getStatIcon(stat.iconName)}
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Timeline Section: Education & Experience */}
        <div className="max-w-4xl mx-auto">
          {/* Timeline Tab Switcher */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setTimelineTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                timelineTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setTimelineTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                timelineTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>

          {/* Timeline List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={timelineTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8"
            >
              {filteredTimeline.map((item) => (
                <div key={item.id} className="relative group">
                  
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 shadow-sm group-hover:scale-125 transition-transform" />

                  {/* Item Card */}
                  <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 w-fit">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium mb-3">
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
