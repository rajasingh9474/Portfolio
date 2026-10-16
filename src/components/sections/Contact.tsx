import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Copy, Check, MessageSquare, User, AtSign, Loader2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Toast } from '../ui/Toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server submission
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setToastMessage(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setToastMessage('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Whether you have an upcoming project, an engineering inquiry, or simply want to say hello, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Current Status
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Currently <span className="font-semibold text-emerald-600 dark:text-emerald-400">{personalInfo.availability}</span> for full-time opportunities, high-impact contracts, and advisory roles.
              </p>
            </div>

            {/* Email Card with Quick Copy */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Direct Email</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Base Location</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form with Validation (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white/70 dark:bg-slate-900/70 border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <div className="relative">
                    <AtSign className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white/70 dark:bg-slate-900/70 border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry / Full-time role / Hello"
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white/70 dark:bg-slate-900/70 border ${
                    errors.subject
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or question..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white/70 dark:bg-slate-900/70 border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Interactive Toast Feedback */}
      <Toast
        isVisible={!!toastMessage}
        message={toastMessage || ''}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
