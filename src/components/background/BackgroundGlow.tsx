import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Primary Glowing Orbs with Framer Motion float */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 dark:from-indigo-600/25 dark:via-purple-600/20 dark:to-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-bl from-cyan-500/20 via-blue-500/20 to-indigo-500/10 dark:from-cyan-600/20 dark:via-blue-600/20 dark:to-violet-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-t from-violet-500/15 via-fuchsia-500/15 to-transparent dark:from-violet-600/20 dark:via-fuchsia-600/15 dark:to-transparent blur-3xl"
      />
    </div>
  );
};
