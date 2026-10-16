import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
