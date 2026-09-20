import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';

export default function Navbar({ isDark, setIsDark, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="neu-raised px-4 sm:px-6 py-3 flex items-center justify-between rounded-full border border-[var(--border-subtle)] backdrop-blur-md bg-opacity-90">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 neu-raised flex items-center justify-center rounded-full text-[#0066ff] font-bold text-lg group-hover:scale-105 transition-transform">
              <span className="font-mono">AC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-wide text-[var(--text-primary)] group-hover:text-[#0066ff] transition-colors">
                Arvind Chauhan
              </span>
              <span className="text-xs text-[var(--text-secondary)] font-medium -mt-1 hidden sm:inline">
                Web Dev Intern
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[#0066ff] rounded-full transition-all hover:bg-[var(--bg-surface)] hover:shadow-[var(--shadow-pressed)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Controls & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Neumorphism Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              title={isDark ? "Switch to Soft Blue Theme" : "Switch to Dark Slate Theme"}
              className="p-2.5 neu-btn text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[#0066ff]"
              aria-label="Toggle Neumorphism Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex neu-btn px-4 py-2 text-xs font-bold text-[#0066ff] gap-2 items-center hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 neu-btn text-[var(--text-primary)]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 neu-raised p-6 rounded-3xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 neu-pressed text-base font-semibold text-[var(--text-primary)] rounded-2xl flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#0066ff]">→</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mt-2 neu-btn py-3 w-full text-center font-bold text-[#0066ff] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
