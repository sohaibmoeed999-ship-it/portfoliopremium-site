import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, MessageSquare, Database, Sparkles, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack', icon: Cpu },
    { id: 'programming', name: 'Programming', icon: Terminal },
    { id: 'web', name: 'Web Dev', icon: Code },
    { id: 'ai', name: 'AI & Prompts', icon: MessageSquare },
    { id: 'databases', name: 'Databases', icon: Database },
  ];

  const skillsData = [
    // Programming
    { name: 'Python', category: 'programming', icon: '🐍', subtitle: 'Scripting & Data Analytics', color: 'from-blue-500 to-yellow-500' },
    { name: 'C#', category: 'programming', icon: '🎯', subtitle: 'OOP & Desktop Software', color: 'from-purple-600 to-indigo-500' },
    { name: 'SQL', category: 'programming', icon: '📊', subtitle: 'Query Scripting & Logic', color: 'from-emerald-500 to-teal-400' },
    
    // Web
    { name: 'HTML & CSS', category: 'web', icon: '🎨', subtitle: 'Responsive Layout Grids', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', category: 'web', icon: '⚡', subtitle: 'Dynamic Interactive logic', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', category: 'web', icon: '⚛️', subtitle: 'Stateful UI components', color: 'from-sky-400 to-blue-500' },

    // AI
    { name: 'Prompt Engineering', category: 'ai', icon: '🧠', subtitle: 'System Prompt Optimization', color: 'from-violet-500 to-purple-600' },
    { name: 'Generative AI', category: 'ai', icon: '🤖', subtitle: 'Custom API Integrations', color: 'from-fuchsia-500 to-rose-500' },
    { name: 'Google Flow', category: 'ai', icon: '🌀', subtitle: 'Agent Workflow automation', color: 'from-blue-400 to-indigo-500' },
    { name: 'Google Gemini', category: 'ai', icon: '♊', subtitle: 'Large Language Modeling', color: 'from-indigo-400 to-cyan-400' },
    { name: 'AI Image Creation', category: 'ai', icon: '✨', subtitle: 'Midjourney Art Generation', color: 'from-amber-400 to-orange-500' },
    { name: 'AI Image Editing', category: 'ai', icon: '🖌️', subtitle: 'Generative Inpainting comps', color: 'from-rose-400 to-pink-500' },

    // Databases
    { name: 'MySQL', category: 'databases', icon: '🗄️', subtitle: 'Relational Database Schemas', color: 'from-blue-600 to-cyan-500' },

    // Development
    { name: 'Git', category: 'all', icon: '🌿', subtitle: 'Version Control systems', color: 'from-orange-600 to-amber-500' },
    { name: 'GitHub', category: 'all', icon: '🐙', subtitle: 'Collaboration & Repos', color: 'from-slate-800 to-slate-600' },
    { name: 'Fiverr', category: 'all', icon: '🟢', subtitle: 'Freelance Client Operations', color: 'from-emerald-500 to-green-600' },
    { name: 'Vercel', category: 'all', icon: '▲', subtitle: 'Web Application Deployments', color: 'from-black to-slate-700 dark:from-white dark:to-slate-300' },
    { name: 'Vibe Coding', category: 'all', icon: '🎵', subtitle: 'High-speed AI Prototyping', color: 'from-indigo-500 via-purple-500 to-pink-500' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/40">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-violet-600/5 dark:bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-600/5 dark:bg-indigo-600/5 blur-[120px] pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Skills & Stack
          </motion.h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-950 shadow-lg shadow-indigo-500/5'
                    : 'glass-panel border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={skill.name}
                className="group relative glass-card rounded-2xl p-4.5 hover:-translate-y-1 flex items-center gap-4.5 transition-all duration-300"
              >
                {/* Visual hover border glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${skill.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none`} />

                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center text-xl shrink-0 z-10 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  {skill.icon}
                </div>

                <div className="z-10 min-w-0">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors truncate">
                    {skill.name}
                  </h3>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5 truncate">
                    {skill.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
