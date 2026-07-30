import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, ArrowUpRight, Sparkles, BookOpen, Share2, MessageSquare, Trophy } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram, Fiverr } from './BrandIcons';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const currentLearning = [
    'Python Development',
    'C# & Application Architecture',
    'MySQL & Database Optimization',
    'Git & GitHub Workflows',
    'Prompt Engineering Techniques',
    'Modern Full-Stack Development',
    'AI-Driven Workflows',
    'Software Engineering',
    'Data Structures & Algorithms (DSA)',
    'Linear Algebra',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sohaibmoeed999-ship-it', name: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-shahid-6abb6039a', name: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://wa.me/923106444075', name: 'WhatsApp' },
    { icon: Fiverr, href: 'https://www.fiverr.com/sellers/sohaibshahid999/edit', name: 'Fiverr' },
    { icon: Facebook, href: 'https://www.facebook.com/share/19Gn1DatQG/', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/maliksohaib.999', name: 'Instagram' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      {/* Background Blurs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[100px] pointer-events-none" />

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
            Discover
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            About Me
          </motion.h2>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Bio Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">The Creative & Code Connection</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                As a developer, I believe programming is not just about writing syntax—it is about designing intelligent interfaces, streamlining workflows, and building solutions that bridge creative ideas with powerful backend logic.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                By combining solid fundamentals in computer science, software design principles, and modern AI engineering, I build projects that deliver real impact. Whether developing robust Python scripts, architecting database schemas, or customizing user interfaces using modern web systems and Vibe Coding, I focus on premium detail, clean execution, and high performance.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 border-t border-slate-200 dark:border-slate-800 pt-6">
              <div>
                <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">3rd</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-wide">
                  Semester Undergraduate
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">BS</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-wide">
                  Data Science Major
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">UET</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-wide">
                  Lahore Student
                </span>
              </div>
            </div>
          </motion.div>

          {/* Premium Bento Profile Picture Card */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl h-full min-h-[320px] group shadow-lg"
          >
            <img
              src="/profile2.jpg"
              alt="Sohaib Shahid Profile"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400">Location</span>
              <h4 className="text-sm font-bold">Lahore, Pakistan</h4>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-650 dark:text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Academic Journey</h3>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">
                University of Engineering and Technology (UET) Lahore
              </h4>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                BS Data Science (Undergraduate)
              </p>
              <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed">
                Immersed in advanced math, database theory, data structures, algorithm design, and computational AI tracks. I actively apply university theories to build interactive projects and automation scripts.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-555 uppercase tracking-wider">
              <span>Lahore, Pakistan</span>
              <span>2025 - 2029</span>
            </div>
          </motion.div>

          {/* Philosophy / AI Prompt Engineering Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-455">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">AI & Vibe Coding</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed">
                I leverage Prompt Engineering and modern generative AI tools alongside traditional programming. Using "Vibe Coding" methods, I rapidly prototype, refine, and deploy robust web portals, image manipulation pipelines, and automation structures, significantly shrinking the time between design concept and deployment.
              </p>
            </div>
            <a
              href="#services"
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors w-fit cursor-pointer"
            >
              <span>View Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links Card - SHOWS ALL SOCIAL LINKS CLEARLY */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Social Connections</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Connect with me instantly across my verified social profiles and channels:
              </p>
              
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((social) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100/50 hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-900 border border-slate-200/50 dark:border-slate-800 hover:border-indigo-500/30 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 shadow-sm"
                    >
                      <IconComp size={15} className="shrink-0" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Currently Learning Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Current Learning & Mastery</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed mb-6">
              I am currently deepening my understanding across these computational subjects and frameworks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentLearning.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:border-indigo-500/35 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Bento Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-650 dark:text-emerald-450">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Interests & Hobbies</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed mb-6">
                Beyond writing Python code and engineering prompts, I enjoy active sports to maintain peak focus and performance.
              </p>
              
              <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
                <span className="text-2xl" role="img" aria-label="cricket">🏏</span>
                <div>
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">Cricket Fanatic</span>
                  <span className="block text-[10px] text-slate-500 font-semibold">Playing, analyzing, and watching</span>
                </div>
              </div>
            </div>
            
            <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-right mt-6">
              Focus & Teamwork
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
