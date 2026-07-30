import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Edit3, MessageSquare, Terminal, Database, Laptop, Layers, GraduationCap, Cpu, HelpCircle, Sparkles, X, Check } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'ai-visuals',
      title: 'AI Visuals & Photo Editing',
      description: 'Creative AI image creation & professional photo editing. Creating highly specific, premium generative images, upscale comps, and backdrop replacements.',
      color: 'text-violet-500 bg-violet-500/10',
      icon: Image,
      imageUrl: '/service_ai.jpg',
      scope: [
        'Generative AI Image Generation (Midjourney & Stable Diffusion)',
        'Professional Face & Object Inpainting / Editing',
        'AI Upscaling (4K/8K resolution enhancement)',
        'Custom Backdrop Removal & Composition',
        'Color Grading, Contrast Correction, and Light Balancing',
        'High-quality final asset delivery (JPEG, PNG, PSD)'
      ]
    },
    {
      id: 'vibe-coding-web',
      title: 'Vibe Coding Web Solutions',
      description: 'Modern Websites. Smart Code. Powerful Results. Rapid-prototyping responsive websites, interactive single-page applications, and clean CSS styling.',
      color: 'text-rose-500 bg-rose-500/10',
      icon: Laptop,
      imageUrl: '/service_web.jpg',
      scope: [
        'Responsive layout engineering using Tailwind CSS',
        'Interactive state components using Vite & React',
        'Ultra-fast loading optimization & Clean Code practices',
        'Interactive micro-animations & custom cursor effects',
        'Instant serverless deployment setup on Vercel/Netlify',
        'Complete basic SEO tagging and metadata optimization'
      ]
    },
    {
      id: 'prompt-eng',
      title: 'Prompt Engineering',
      description: 'Designing, testing, and optimizing prompts for LLMs (GPT-4, Claude, Gemini) to automate workflows, query structures, or output precise formats.',
      color: 'text-indigo-500 bg-indigo-500/10',
      icon: MessageSquare,
      imageUrl: '/service_prompt.jpg',
      scope: [
        'System prompt optimization for GPT-4/Claude/Gemini',
        'Zero-shot, few-shot, and Chain-of-Thought prompts design',
        'Structured schema parser integration (JSON/XML)',
        'API cost reduction & query minimization layouts',
        'AI agent prompt pipeline setups'
      ]
    },
    {
      id: 'python-dev',
      title: 'Python Development',
      description: 'Architecting clean Python scripts, data processing workflows, automated scrapers, CLI utilities, and task schedulers to streamline operation.',
      color: 'text-blue-500 bg-blue-500/10',
      icon: Terminal,
      imageUrl: '/service_python.jpg',
      scope: [
        'Automated web scraping & API data collectors',
        'CSV/Excel data cleaning and restructuring files',
        'Local file organization and system admin automations',
        'Background script daemon setups & scheduling',
        'Robust error handling and custom debugging logs'
      ]
    },
    {
      id: 'sql-db',
      title: 'SQL Database Solutions',
      description: 'Designing relational database schemas, writing complex query scripts, setting up MySQL structures, and tuning query execution for projects.',
      color: 'text-emerald-500 bg-emerald-500/10',
      icon: Database,
      imageUrl: '/service_sql.jpg',
      scope: [
        'Relational Database Schema Design & ERD modeling',
        'Data normalization parameters (1NF/2NF/3NF)',
        'Complex query scripting & multi-table JOINs',
        'Database index configurations for fast search times',
        'MySQL database backup and schema transfer files'
      ]
    },
    {
      id: 'academic-projects',
      title: 'Student Academic Projects',
      description: 'Coordinating, structuring, and developing academic semester projects, research prototypes, and technical reports for computer science students.',
      color: 'text-amber-500 bg-amber-500/10',
      icon: GraduationCap,
      imageUrl: '/service_academic.jpg',
      scope: [
        'Codebase templates with clear instruction guides',
        'Technical documentation flowcharts and ER diagrams',
        'Unit test creation & verification test cases',
        'Review session code walkthrough prep slides'
      ]
    },
    {
      id: 'technical-consultation',
      title: 'Technical Consultation',
      description: 'Strategic advisory on stack choices, prompt deployment pipelines, AI system configuration, and software structure scoping to guide projects.',
      color: 'text-slate-500 bg-slate-500/10',
      icon: HelpCircle,
      imageUrl: '/service_consultation.jpg',
      scope: [
        'Architecture scoping & tech-stack advisories',
        'System feasibility research & comparison charts',
        'AI API integration planning and cost analysis',
        'Code security checkups & performance refactoring'
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[100px] pointer-events-none" />

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
            Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Premium Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-sm sm:text-base"
          >
            Tailored digital services combining computer science principles, artificial intelligence workflows, and custom developer speed.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                key={service.title}
                className="group relative glass-card rounded-3xl p-8 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Glow Layer */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-300 pointer-events-none" />

                <div>
                  {/* Service Graphic Image if available */}
                  {service.imageUrl ? (
                    <div className={`relative w-full ${
                      service.id === 'vibe-coding-web' ? 'aspect-[16/10]' : 'aspect-[3/4]'
                    } rounded-2xl overflow-hidden mb-6 border border-slate-200/10 dark:border-white/5 bg-slate-950 shadow-sm shrink-0`}>
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500 ease-out"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  )}

                  <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-250">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-655 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveService(service)}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors duration-250 cursor-pointer text-left border-none bg-transparent pt-3"
                >
                  <span>Scope details</span>
                  <span>&rarr;</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scope Details Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setActiveService(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 transition-colors z-20"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="overflow-y-auto pr-1 flex flex-col">
                {activeService.imageUrl && (
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/10 dark:border-white/5 bg-slate-950 mb-6 shrink-0 shadow-inner">
                    <img
                      src={activeService.imageUrl}
                      alt={activeService.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-black mb-2 pr-8 leading-snug">
                  {activeService.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {activeService.description}
                </p>

                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Service Deliverables & Scope:
                </h4>

                {/* Scope Bullet Checklist */}
                <ul className="space-y-2.5 mb-8">
                  {activeService.scope.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="w-full flex gap-3 mt-auto pt-4 border-t border-slate-200/10 dark:border-white/5">
                  <button
                    onClick={() => setActiveService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-850 transition-all cursor-pointer"
                  >
                    Close Scope
                  </button>
                  <a
                    href={`https://wa.me/923106444075?text=Hi Sohaib, I am interested in your service: ${encodeURIComponent(activeService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-550/10 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquire on WhatsApp
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
