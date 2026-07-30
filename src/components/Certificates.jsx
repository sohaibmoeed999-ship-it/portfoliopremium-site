import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Download, Eye, X, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // Configuration Array - ORIGINAL CERTIFICATES
  const certificatesData = [
    {
      id: 'excel-advanced',
      title: 'Excel Beginner to Advanced',
      issuer: 'Udemy / Janus Consulting',
      date: 'Dec 24, 2025',
      credentialId: 'UC-e2a46530-8f68-4138-b494-0b6c8ccdfdb9',
      verifyUrl: 'https://ude.my/UC-e2a46530-8f68-4138-b494-0b6c8ccdfdb9',
      downloadUrl: '/cert_excel.jpg',
      imageUrl: '/cert_excel.jpg',
      color: 'from-green-500 to-emerald-500',
      description: 'Completed 18.5 hours of comprehensive training, covering formatting, advanced data manipulation, lookup tables, arrays, and analytics modeling.'
    },
    {
      id: 'photo-editing',
      title: 'AI-Enhanced Photo Editing: From Beginner to Pro',
      issuer: 'Udemy / Skylum Academy & Anton Voroniuk',
      date: 'Dec 30, 2025',
      credentialId: 'UC-7efa02e9-efc4-4e45-9145-9f019477cf47',
      verifyUrl: 'https://ude.my/UC-7efa02e9-efc4-4e45-9145-9f019477cf47',
      downloadUrl: '/cert_photo_editing.jpg',
      imageUrl: '/cert_photo_editing.jpg',
      color: 'from-pink-500 to-fuchsia-600',
      description: 'Learned professional-grade generative AI fill systems, image layering, advanced compositions, masking, and color balance calibrations.'
    },
    {
      id: 'python-programming',
      title: 'Python Programming: The Complete Course for Success',
      issuer: 'Udemy / Sara Academy',
      date: 'Jan 3, 2026',
      credentialId: 'UC-18f3c3b9-d4aa-403e-baed-1b06a0db086b',
      verifyUrl: 'https://ude.my/UC-18f3c3b9-d4aa-403e-baed-1b06a0db086b',
      downloadUrl: '/cert_python.jpg',
      imageUrl: '/cert_python.jpg',
      color: 'from-blue-500 to-indigo-650',
      description: 'Comprehensive software certification covering Python syntax, data structures, conditional algorithms, looping systems, and object-oriented scripts.'
    },
    {
      id: 'prompt-simplilearn',
      title: 'Introduction to Prompt Engineering',
      issuer: 'Simplilearn SkillUp',
      date: 'Jun 26, 2026',
      credentialId: '10395320',
      verifyUrl: 'https://www.simplilearn.com/',
      downloadUrl: '/cert_prompt_simplilearn.jpg',
      imageUrl: '/cert_prompt_simplilearn.jpg',
      color: 'from-cyan-500 to-blue-550',
      description: 'Fundamentals of structured prompt construction, response optimization, context engineering, and output alignment with Large Language Models.'
    },
    {
      id: 'prompt-aws',
      title: 'Essentials of Prompt Engineering',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jul 23, 2026',
      credentialId: 'AWS-PE-2026',
      verifyUrl: 'https://aws.amazon.com/',
      downloadUrl: '/cert_prompt_aws.jpg',
      imageUrl: '/cert_prompt_aws.jpg',
      color: 'from-amber-450 to-orange-550',
      description: 'Acquired core competencies in designing, deploying, and optimizing prompts on AWS Bedrock to build reliable AI-driven API operations.'
    }
  ];

  const handleDownload = (certTitle) => {
    confetti({
      particleCount: 50,
      spread: 40,
      colors: ['#6366f1', '#a855f7'],
    });
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Certificates & Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-sm sm:text-base"
          >
            Industry verified courses, educational completions, and specialized AI and Python credentials.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              key={cert.id}
              className="group relative glass-card rounded-3xl p-5 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Visual Thumbnail Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/10 dark:border-white/5 mb-5 shrink-0 group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-lg text-[9px] font-bold text-white uppercase tracking-wider">
                    {cert.date.split(',')[1] || cert.date}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-450 uppercase">{cert.date}</span>
                </div>

                <h3 className="font-bold text-base sm:text-lg mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Interaction Panel */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/10 dark:border-white/5">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Details
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-500 hover:border-indigo-500/25 transition-all"
                  title="Verify Certificate"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Landscape Overlay Detail */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setActiveCert(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 transition-colors z-20"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="overflow-y-auto pr-1 flex flex-col">
                {/* Full Landscape Certificate Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/10 dark:border-white/5 bg-slate-950 mb-6 shrink-0 shadow-inner">
                  <img
                    src={activeCert.imageUrl}
                    alt={activeCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-1.5 pr-8 leading-snug">
                  {activeCert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-650 dark:text-indigo-400 mb-2">
                  {activeCert.issuer}
                </p>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4 block">
                  Issued: {activeCert.date}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-450 leading-relaxed mb-6">
                  {activeCert.description}
                </p>

                {/* Verification Box */}
                <div className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-left mb-6 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 dark:text-slate-500 uppercase tracking-wider">Credential ID</span>
                    <span className="font-mono text-slate-700 dark:text-slate-350 select-all">{activeCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 dark:text-slate-500 uppercase tracking-wider">Verification Status</span>
                    <span className="text-emerald-555 flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Online Verified
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="w-full flex gap-3 mt-2">
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:border-indigo-500/25 transition-all hover:bg-slate-50 dark:hover:bg-slate-850"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Online
                  </a>
                  <a
                    href={activeCert.downloadUrl}
                    download
                    onClick={() => handleDownload(activeCert.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-550/10 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download File
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
