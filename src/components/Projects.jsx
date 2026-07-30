import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'issb-navigator',
      title: 'ISSB Navigator',
      description: 'A premium prep application engineered to support ISSB candidates through organized testing tracks, interactive practice questionnaires, and real-time review interfaces.',
      status: 'Live',
      github: 'https://github.com/sohaibmoeed999-ship-it/issb-navigator-site-vc',
      live: 'https://issb-navigator-site-vc.vercel.app/',
      imageUrl: '/project_issb.png',
      stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      features: [
        'Organized preparation courses categorized by ISSB testing categories.',
        'Interactive verbal, non-verbal intelligence tests with countdown timers.',
        'Psychological profiling scenarios and situation reaction practice modules.',
        'High-fidelity dark UI with responsive mobile layouts.'
      ]
    },
    {
      id: 'job-portal',
      title: 'CareerSprint (Job Portal)',
      description: 'A full-stack practice portal that facilitates job search, application submissions, company preparations, and coding interview dashboards.',
      status: 'Live',
      github: 'https://github.com/sohaibmoeed999-ship-it/job-portal-practice',
      live: 'https://job-portal-practicesite.vercel.app/',
      imageUrl: '/project_careersprint.png',
      stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      features: [
        'Dynamic job posting feed with extensive search and category sorting.',
        'Comprehensive candidate dashboards to track status of active job applications.',
        'Recruiter panel to post new openings, view applicants, and filter resumes.',
        'Study Hub with Past Papers, Notes, and Company preparation templates.'
      ]
    },
    {
      id: 'lifelink',
      title: 'LifeLink 2.0 Donor Matrix',
      description: 'A software platform and database model designed to streamline matching blood donor metrics with emergency requests, built for university testing criteria.',
      status: 'University Project',
      github: 'https://github.com/sohaibmoeed999-ship-it/lifelink-2.0-blood-donor-Matrix',
      live: null,
      imageUrl: '/project_lifelink.jpg',
      stack: ['C#', 'SQL Server', 'ASP.NET Core', 'Relational Schemas', 'Power BI'],
      features: [
        'High-performance querying models to quickly locate match-compatible blood donors.',
        'Real-time blood stock tracking and request allocation systems.',
        'Automated database normalization templates ensuring clean data integrity.',
        'Secure dashboard logging for medical coordinator credentials.'
      ]
    },
    {
      id: 'weather-thinker',
      title: 'Weather Thinker',
      description: 'An AI-inspired premium weather dashboard displaying responsive forecasts, local alert notifications, and luxury glass visual aesthetics.',
      status: 'Localhost',
      github: null,
      live: null,
      imageUrl: '/project_weather.png',
      stack: ['React', 'Generative AI APIs', 'Weather APIs', 'Tailwind CSS'],
      features: [
        'AI climatology forecasting detailing daily pattern summaries.',
        'Adaptive premium glassmorphism layouts matching local atmospheric conditions (sun/rain/snow).',
        'Sleek weather widgets with interactive temperature charts.'
      ]
    },
    {
      id: 'portfolio-site',
      title: 'Portfolio Maker',
      description: 'A world-class, premium portfolio website and builder built to showcase data engineering and AI work, featuring spring trailing custom cursor effects, glassmorphic bento grids, and dynamic credential verification modals.',
      status: 'Live',
      github: 'https://github.com/sohaibmoeed999-ship-it/sohaib-shahid-portfolio',
      live: 'https://sohaib-shahid-portfolio.vercel.app/',
      imageUrl: '/project_portfolio.png',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      features: [
        'Systemic light/dark theme toggles dynamically saved to localStorage.',
        'Interactive physics-based custom cursor tracking mouse coordinates.',
        'Polished bento card layouts detailing services, learning paths, and connections.',
        'Verification modals for certificates and remote internship credentials.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      {/* Background overlapping lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              key={project.id}
              className="group relative glass-card rounded-3xl overflow-hidden hover:scale-101 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Frame */}
              <div className="relative aspect-video w-full bg-slate-950 border-b border-slate-200/10 dark:border-white/5 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.id === 'lifelink' || project.id === 'weather-thinker' || project.id === 'portfolio-site'
                      ? 'object-contain'
                      : 'object-cover object-top'
                  } group-hover:scale-102 transition-transform duration-500 ease-out`}
                />
                {/* Hover overlay indicator */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-xl tracking-wider uppercase scale-90 group-hover:scale-100 transition-all duration-300">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between h-[220px]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      project.status === 'Coming Soon'
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        : project.status === 'University Project'
                        ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                    }`}>
                      {project.status === 'Coming Soon' ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-bold text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[10px] font-bold text-indigo-500 bg-indigo-500/5 px-2 py-0.5 rounded">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 z-20 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Landscape Image Header */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden shrink-0 border-b border-slate-200/10 dark:border-white/5">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Scrollable details area */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <div className="flex items-center gap-3.5 mb-4">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">{selectedProject.title}</h3>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    selectedProject.status === 'Coming Soon'
                      ? 'bg-amber-500/10 text-amber-500'
                      : 'bg-emerald-500/10 text-emerald-500'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features?.map((f, i) => (
                      <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-350">
                        <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extended Stack List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Footer */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-250/20 dark:border-slate-800">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-lg transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white shadow-lg transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {!selectedProject.github && !selectedProject.live && (
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 italic">
                      Project files are private or under active staging setup.
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
