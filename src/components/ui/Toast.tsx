import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isVisible,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl backdrop-blur-md border glass-panel bg-white/95 dark:bg-slate-900/95 max-w-md"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
          )}
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100 flex-1">
            {message}
          </p>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
