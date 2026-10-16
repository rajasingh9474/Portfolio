import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden glass-panel hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/15 transition-all duration-300 border border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Top Media Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />

        {/* Badges on image */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Highlights / Metrics if provided */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1">
            {project.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Action Links */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-indigo-500/25 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          ) : (
            <span />
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
