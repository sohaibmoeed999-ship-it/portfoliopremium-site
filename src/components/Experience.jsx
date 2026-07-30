import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin, Sparkles, Eye, X, Check, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Experience() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  const experiences = [
    {
      type: 'internship',
      role: 'Data Science & Analytics Intern (Remote)',
      company: 'DevelopersHub Corporation',
      location: 'Lahore, Pakistan (Remote)',
      period: 'Apr 28, 2026 - Jun 9, 2026 (Completed)',
      description: [
        'Successfully completed a 6-week intensive remote internship program in Data Science & Analytics with exceptional performance.',
        'Developed data cleaning, processing, and structure automated pipelines using Python scripting libraries.',
        'Structured relational database models in MySQL and wrote performant transactional scripts.',
        'Collaborated on building data analytics solutions and prompt engineering structures (Ref ID: DHC-6).'
      ]
    },
    {
      type: 'education',
      role: 'BS Data Science Student (3rd Semester)',
      company: 'University of Engineering and Technology (UET) Lahore',
      location: 'Lahore, Pakistan',
      period: 'Oct 2025 - Present',
      description: [
        'Enrolled in theoretical and practical coursework covering Object-Oriented Programming (C#), Relational Databases (MySQL), Data Structures, and Computational Mathematics.',
        'Collaborating in academic groups to write code templates and build functional semester-end projects.',
        'Applying lecture principles directly to develop blood donor platforms, job dashboards, and weather apps.'
      ]
    },
    {
      type: 'milestone',
      role: 'F.Sc Pre-Medical & Initial Coding Explorations',
      company: 'Punjab Group of Colleges (PGC) Okara',
      location: 'Okara, Pakistan',
      period: 'Sep 2022 - Jun 2024',
      description: [
        'Completed higher secondary school certifications (F.Sc Pre-Medical) with top honors in Biology, Chemistry, and Physics.',
        'Transitioned into computational fields, self-studying Python programming and data handling basics during free time.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/40">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Experience & Journey
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.type === 'education' ? GraduationCap : Briefcase;
            return (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={exp.role}
                className="relative"
              >
                {/* Timeline node icon */}
                <span className="absolute -left-12.5 md:-left-20.5 top-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-900 border border-slate-855 text-indigo-500 dark:bg-slate-950 dark:border-slate-800 flex items-center justify-center shadow-md animate-glow-pulse">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 dark:text-indigo-400" />
                </span>

                {/* Card details */}
                <div className="glass-card rounded-3xl p-6 sm:p-8">
                  {/* Period tag */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-500 mb-3">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-lg sm:text-xl font-bold mb-1 tracking-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                    {exp.company}
                  </h4>

                  {/* Description points */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2.5 text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Remote Internship Verification Link */}
                  {exp.type === 'internship' && (
                    <div className="mt-6 pt-6 border-t border-slate-200/10 dark:border-white/5">
                      <button
                        onClick={() => setIsCertOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Verify Internship Certificate
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Internship Certificate Lightbox */}
      <AnimatePresence>
        {isCertOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setIsCertOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCertOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 transition-colors z-20"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="overflow-y-auto pr-1 flex flex-col">
                {/* Full Landscape Certificate Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/10 dark:border-white/5 bg-slate-950 mb-6 shrink-0 shadow-inner">
                  <img
                    src="/cert_internship.jpg"
                    alt="DevelopersHub Corporation Internship Certificate"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-1.5 leading-snug">
                  Internship Certificate of Achievement
                </h3>
                <p className="text-sm font-semibold text-indigo-650 dark:text-indigo-400 mb-4">
                  DevelopersHub Corporation (Ref ID: DHC-6)
                </p>

                {/* Verification Box */}
                <div className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-left mb-6 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 dark:text-slate-500 uppercase tracking-wider">Credential ID / Reference</span>
                    <span className="font-mono text-slate-700 dark:text-slate-350 select-all">DHC-6</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 dark:text-slate-500 uppercase tracking-wider">Verification Status</span>
                    <span className="text-emerald-555 flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Verified by DevelopersHub Corp
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="w-full flex gap-3">
                  <a
                    href="/cert_internship.jpg"
                    download
                    onClick={() => {
                      confetti({
                        particleCount: 50,
                        spread: 40,
                        colors: ['#6366f1', '#a855f7'],
                      });
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-550/10 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate Image
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
