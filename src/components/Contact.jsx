import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Award, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram, Fiverr } from './BrandIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactDetails = {
    emails: [
      { address: 'sohaibmoeed999@gmail.com', label: 'Primary' },
      { address: 'sohaibmalik1833@gmail.com', label: 'Secondary' }
    ],
    phones: [
      { number: '+92 310 6444075', whatsapp: 'https://wa.me/923106444075' },
      { number: '+92 321 6964296', whatsapp: 'https://wa.me/923216964296' }
    ]
  };

  const socials = [
    { icon: Github, url: 'https://github.com/sohaibmoeed999-ship-it', name: 'GitHub', color: 'hover:text-white hover:bg-slate-900 border-slate-800' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sohaib-shahid-6abb6039a', name: 'LinkedIn', color: 'hover:text-blue-500 hover:bg-blue-500/10 border-blue-500/20' },
    { icon: Facebook, url: 'https://www.facebook.com/share/19Gn1DatQG/', name: 'Facebook', color: 'hover:text-sky-600 hover:bg-sky-600/10 border-sky-600/20' },
    { icon: Instagram, url: 'https://www.instagram.com/maliksohaib.999', name: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-500/10 border-pink-500/20' },
    { icon: Fiverr, url: 'https://www.fiverr.com/sellers/sohaibshahid999/edit', name: 'Fiverr Seller', color: 'hover:text-emerald-500 hover:bg-emerald-500/10 border-emerald-500/20' }
  ];

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(''), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    // Simulate sending progress
    setTimeout(() => {
      setSending(false);
      setSent(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[100px] pointer-events-none" />

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
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Visual Portrait Image Card (profile3.jpg) */}
            <div className="relative overflow-hidden rounded-3xl h-[420px] w-full mb-6 group border border-slate-200/50 dark:border-slate-800 shadow-md">
              <img
                src="/profile3.jpg"
                alt="Sohaib Shahid Business Portrait"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-4">Contact Information</h3>
            <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed mb-6">
              Have an interesting semester project, freelance script, website idea, or internship opportunity? Drop a line or initiate a quick chat over WhatsApp.
            </p>

            {/* Email Cards */}
            <div className="space-y-3">
              {contactDetails.emails.map((e) => (
                <div key={e.address} className="flex items-center justify-between p-4 rounded-2xl glass-card text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase block">{e.label} Email</span>
                      <a href={`mailto:${e.address}`} className="hover:text-indigo-500 hover:underline">
                        {e.address}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(e.address)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-550 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail === e.address ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>

            {/* Phones & WhatsApps */}
            <div className="space-y-3">
              {contactDetails.phones.map((p, index) => (
                <div key={p.number} className="p-4 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-650 dark:text-purple-400">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase block">Line {index + 1}</span>
                      <a href={`tel:${p.number.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold hover:text-purple-500 hover:underline">
                        {p.number}
                      </a>
                    </div>
                  </div>
                  <a
                    href={p.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                </div>
              ))}
            </div>

            {/* Social Grid */}
            <div className="pt-6">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-4">Find Me Online</h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((soc) => {
                  const IconComponent = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold text-slate-550 dark:text-slate-400 transition-all ${soc.color}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {soc.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold tracking-tight mb-6">Send a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Transmitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. Sohaib will get in touch with you at the email address provided as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-slate-550 uppercase mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-slate-550 uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="e.g. name@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-bold text-slate-550 uppercase mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="e.g. Freelance project discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-slate-550 uppercase mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Type your message details here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="glow-btn w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
