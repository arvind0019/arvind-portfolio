import React, { useState, useRef } from 'react';
import { Download, FolderGit2, Mail, Phone, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenResume, triggerToast }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt calculation (max +/- 14 degrees)
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0066ff', '#ffffff', '#e10600']
    });
    triggerToast('Resume ready! Opening document viewer...');
    onOpenResume();
  };

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 neu-pressed rounded-full w-fit mx-auto lg:mx-0 border border-[var(--border-subtle)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066ff] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
                Web Development Intern @ Success Sign
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
              Hi, I'm <span className="text-[#0066ff] relative inline-block drop-shadow-[0_0_15px_rgba(0,102,255,0.3)]">Arvind Chauhan</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-[var(--text-primary)] font-semibold">BCA Graduate</strong> &amp; <strong className="text-[var(--text-primary)] font-semibold">Web Developer</strong> — Turning ideas into high-performance, tactile, and interactive digital experiences.
            </p>

            {/* Location Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-[var(--text-secondary)] -mt-2">
              <MapPin className="w-4 h-4 text-[#0066ff]" />
              <span>C-Block, Sector 3, Greater Noida, UP, India</span>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 my-2 max-w-lg mx-auto lg:mx-0">
              <div className="neu-pressed p-3 rounded-2xl text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#0066ff]">7.00</span>
                <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-semibold uppercase">SGPA (BCA)</span>
              </div>
              <div className="neu-pressed p-3 rounded-2xl text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#0066ff]">3+</span>
                <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-semibold uppercase">Internships</span>
              </div>
              <div className="neu-pressed p-3 rounded-2xl text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#0066ff]">100%</span>
                <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-semibold uppercase">Dedicated</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="neu-btn px-7 py-3.5 text-base font-bold text-white bg-[#0066ff] border-none shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:bg-[#0052cc] hover:shadow-[0_0_28px_rgba(0,102,255,0.6)] flex items-center gap-2 group transition-all"
              >
                <FolderGit2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleDownloadResume}
                className="neu-btn px-7 py-3.5 text-base font-bold text-[var(--text-primary)] hover:text-[#0066ff] flex items-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Buttons Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Connect:</span>
              
              <a
                href="https://github.com/arvind0019"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 neu-btn rounded-full text-[var(--text-secondary)] hover:text-[#0066ff] flex items-center justify-center"
                title="GitHub Profile (arvind0019)"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/arvind-chauhan-836a0228b"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 neu-btn rounded-full text-[var(--text-secondary)] hover:text-[#0066ff] flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:arvind.harish.68@gmail.com"
                className="w-10 h-10 neu-btn rounded-full text-[var(--text-secondary)] hover:text-[#0066ff] flex items-center justify-center"
                title="Email Arvind"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:+916394572654"
                className="w-10 h-10 neu-btn rounded-full text-[var(--text-secondary)] hover:text-[#0066ff] flex items-center justify-center"
                title="Call Arvind (+91 6394572654)"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side Interactive 3D Parallax Photo Card */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.active ? 1.03 : 1}, ${tilt.active ? 1.03 : 1}, 1)`,
                transition: tilt.active ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
              }}
              className="relative p-6 neu-raised-lg rounded-[36px] max-w-sm w-full cursor-pointer group hover:shadow-[var(--shadow-hover)]"
            >
              {/* Dynamic 3D Glowing Backlight Aura */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#0066ff] via-[#e10600] to-cyan-400 rounded-[44px] opacity-25 group-hover:opacity-60 blur-2xl transition-opacity duration-300 pointer-events-none"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              ></div>
              
              {/* Outer Neumorphism 3D Surface */}
              <div
                className="relative rounded-[28px] overflow-hidden neu-pressed p-2 border border-[var(--border-subtle)]"
                style={{ transform: 'translateZ(20px)' }}
              >
                {/* User's Uploaded 3D Portrait Image */}
                <img
                  src="/arvind_portrait.jpg"
                  alt="Arvind Chauhan - 3D Interactive Portrait"
                  className="w-full h-[400px] sm:h-[440px] object-cover rounded-[24px] filter contrast-105 transition-transform duration-500 group-hover:scale-105"
                  style={{ transform: 'translateZ(30px)' }}
                />

                {/* Dynamic Specular 3D Glare Sheen Overlay */}
                <div
                  className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-300"
                  style={{
                    background: tilt.active
                      ? `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 65%)`
                      : 'none',
                    mixBlendMode: 'overlay',
                  }}
                ></div>

                {/* Overlaid Red Rim Light Simulation Overlay */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-slate-950/40 via-transparent to-[#e10600]/25 pointer-events-none"></div>

                {/* 3D Floating Bottom Badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-3.5 neu-raised rounded-2xl backdrop-blur-md bg-opacity-90 flex items-center justify-between border border-[var(--border-subtle)] shadow-xl"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0066ff] to-[#e10600] flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                      3D
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[var(--text-primary)]">Arvind Chauhan</p>
                      <p className="text-[10px] text-[var(--text-secondary)] font-semibold">Greater Noida, Sector 3 (C-Block)</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-extrabold text-[#0066ff] neu-pressed rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0066ff]" />
                    3D Mode
                  </span>
                </div>
              </div>

              {/* 3D Corner LEDs */}
              <div
                className="absolute top-4 left-4 w-3.5 h-3.5 rounded-full neu-pressed flex items-center justify-center"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#0066ff] animate-ping"></div>
              </div>
              <div
                className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full neu-pressed flex items-center justify-center"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#e10600]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
