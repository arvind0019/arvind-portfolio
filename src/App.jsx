import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false); // White & Soft Blue Neumorphism theme
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('theme-dark');
    } else {
      root.classList.remove('theme-dark');
      root.classList.add('light');
    }
  }, [isDark]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className={`min-h-screen relative font-sans ${isDark ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-[#eef4fa] text-[#0f172a]'}`}>
      
      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          triggerToast={triggerToast}
        />
        <About />
        <Experience />
        <Projects triggerToast={triggerToast} />
        <Skills />
        <Contact triggerToast={triggerToast} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        triggerToast={triggerToast}
      />

      {/* Floating Neumorphic Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="neu-raised px-5 py-3.5 rounded-2xl flex items-center gap-3 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[var(--shadow-hover)]">
            <Sparkles className="w-5 h-5 text-[#0066ff]" />
            <span className="text-xs font-bold text-[var(--text-primary)]">{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}
