import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, MapPin, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact({ triggerToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    triggerToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#0066ff', '#ffffff', '#38bdf8']
      });
      triggerToast('Message sent successfully! Arvind will respond shortly.');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 neu-pressed rounded-full mb-3">
            <MessageSquare className="w-4 h-4 text-[#0066ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            Contact <span className="text-[#0066ff]">Arvind Chauhan</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            Open for Web Development roles, technical collaborations, and internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Location Banner */}
            <div className="neu-raised p-6 rounded-3xl border border-[var(--border-subtle)] flex items-center gap-4">
              <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--text-secondary)] uppercase">Address / Location</p>
                <p className="text-sm font-extrabold text-[var(--text-primary)] mt-0.5">
                  C-Block, Sector 3, Greater Noida, UP, India
                </p>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/arvind0019"
              target="_blank"
              rel="noreferrer"
              className="neu-raised p-6 rounded-3xl border border-[var(--border-subtle)] flex items-center justify-between group hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-secondary)] uppercase">GitHub Profile</p>
                  <p className="text-base font-extrabold text-[var(--text-primary)] mt-0.5 group-hover:text-[#0066ff] transition-colors font-mono">
                    github.com/arvind0019
                  </p>
                </div>
              </div>
              <span className="text-[#0066ff] font-bold">→</span>
            </a>

            {/* Phone Card */}
            <div className="neu-raised p-6 rounded-3xl border border-[var(--border-subtle)] flex items-center justify-between group hover:shadow-[var(--shadow-hover)] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-secondary)] uppercase">Phone / WhatsApp</p>
                  <p className="text-base font-extrabold text-[var(--text-primary)] mt-0.5">+91 6394572654</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('+916394572654', 'Phone Number')}
                className="p-3 neu-btn rounded-xl text-[var(--text-secondary)] hover:text-[#0066ff]"
                title="Copy Phone Number"
              >
                {copiedField === 'Phone Number' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Card */}
            <div className="neu-raised p-6 rounded-3xl border border-[var(--border-subtle)] flex items-center justify-between group hover:shadow-[var(--shadow-hover)] transition-all">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-[var(--text-secondary)] uppercase">Email Address</p>
                  <p className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] mt-0.5 truncate">
                    arvind.harish.68@gmail.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('arvind.harish.68@gmail.com', 'Email Address')}
                className="p-3 neu-btn rounded-xl text-[var(--text-secondary)] hover:text-[#0066ff] shrink-0 ml-2"
                title="Copy Email Address"
              >
                {copiedField === 'Email Address' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/arvind-chauhan-836a0228b"
              target="_blank"
              rel="noreferrer"
              className="neu-raised p-6 rounded-3xl border border-[var(--border-subtle)] flex items-center justify-between group hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-secondary)] uppercase">LinkedIn Profile</p>
                  <p className="text-base font-extrabold text-[var(--text-primary)] mt-0.5 group-hover:text-[#0066ff] transition-colors">
                    linkedin.com/in/arvind-chauhan
                  </p>
                </div>
              </div>
              <span className="text-[#0066ff] font-bold">→</span>
            </a>

          </div>

          {/* Right Inset Neumorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="neu-raised-lg p-8 sm:p-10 rounded-3xl border border-[var(--border-subtle)] relative">
              
              <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-8">
                Fields feature inset soft-shadow contours carved into the surface.
              </p>

              {submitted ? (
                <div className="neu-pressed p-8 rounded-2xl text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 neu-raised rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-[var(--text-primary)]">Thank You!</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-2">
                    Your message has been dispatched directly to Arvind. You will receive a response shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 neu-btn px-6 py-2.5 text-xs font-bold text-[#0066ff]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-5 py-3.5 neu-pressed text-sm font-semibold text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all rounded-2xl"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-5 py-3.5 neu-pressed text-sm font-semibold text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all rounded-2xl"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Message Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss project requirements, hiring opportunity, or technical inquiry..."
                      className="w-full px-5 py-3.5 neu-pressed text-sm font-semibold text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none transition-all rounded-2xl resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full neu-btn py-4 text-base font-extrabold text-white bg-[#0066ff] border-none shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:bg-[#0052cc] flex items-center justify-center gap-2 group transition-all"
                  >
                    {sending ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
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
