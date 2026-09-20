import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] relative z-10 neu-flat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 neu-raised rounded-full flex items-center justify-center text-[#0066ff] font-extrabold font-mono text-sm">
              AC
            </div>
            <div>
              <p className="text-sm font-extrabold text-[var(--text-primary)]">Arvind Chauhan</p>
              <p className="text-xs text-[var(--text-secondary)]">White &amp; Soft Blue Neumorphism Portfolio</p>
            </div>
          </div>

          {/* Center Copyright */}
          <div className="text-xs text-[var(--text-secondary)] text-center flex items-center gap-1.5">
            <span>Built with Tactile Soft-Blue Neumorphism &amp; 3D Motion</span>
            <span className="text-[#0066ff]">♥</span>
            <span>• © {new Date().getFullYear()} Arvind Chauhan</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="neu-btn p-3 text-[var(--text-primary)] hover:text-[#0066ff] flex items-center gap-2 text-xs font-bold"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
