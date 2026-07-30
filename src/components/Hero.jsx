import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MessageSquare, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotating typing text animation
  const titles = ['Data Science Student', 'Python Developer', 'AI & Prompt Engineer', 'Vibe Coder'];
  const [titleIdx, setTitleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIdx];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && typedText === currentTitle) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentTitle.substring(0, typedText.length - 1)
            : currentTitle.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIdx]);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(60, Math.floor(width / 30));

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#8b5cf6';
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const handleResumeClick = (e) => {
    // Elegant confetti pop on resume click
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#fbbf24'],
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sohaibmoeed999-ship-it', name: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-shahid-6abb6039a', name: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://wa.me/923106444075', name: 'WhatsApp' },
    { icon: Mail, href: 'mailto:sohaibmoeed999@gmail.com', name: 'Email' }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Modern Gradient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 z-0 hidden dark:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 z-0 dark:hidden"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.04), transparent 80%)`,
        }}
      />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[90px] animate-pulse-slow z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] animate-glow-pulse z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-2/3 w-60 h-60 rounded-full bg-rose-500/5 dark:bg-rose-600/5 blur-[80px] animate-pulse-slow z-0 pointer-events-none" />



      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-6 text-center z-20 relative flex flex-col items-center">
        {/* Animated Avatar Profile Picture (profile1.jpg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 mb-8 shadow-xl shadow-indigo-500/10 cursor-default group"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border border-slate-900/50">
            <img
              src="/profile1.jpg"
              alt="Sohaib Shahid Avatar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Outer glowing aura ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 opacity-25 blur-md -z-10 animate-pulse-slow" />
        </motion.div>

        {/* Modern Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-md mb-8 hover:scale-102 transition-transform cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Large Animated Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6"
        >
          Hi, I'm <br />
          <span className="gradient-text-hero">Sohaib Shahid</span>
        </motion.h1>

        {/* Typing Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 h-10 mb-8 flex items-center justify-center"
        >
          <span>I'm a&nbsp;</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold border-r-2 border-indigo-500 pr-1 animate-pulse">
            {typedText}
          </span>
        </motion.div>

        {/* Short Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-12"
        >
          A passionate Data Science student at the University of Engineering and Technology (UET) Lahore who loves building modern digital experiences using Python, AI, Prompt Engineering, and Vibe Coding. I enjoy solving real-world problems through intelligent solutions.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#projects"
            className="glow-btn px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl glass-panel text-slate-900 dark:text-white hover:bg-slate-800/10 dark:hover:bg-white/5 font-bold text-sm tracking-wide border border-slate-900/10 dark:border-white/10 shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Contact Me
          </a>


        </motion.div>

        {/* Animated Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-500 uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-800 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-indigo-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
