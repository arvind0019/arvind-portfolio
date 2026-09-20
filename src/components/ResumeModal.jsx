import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose, triggerToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0066ff', '#ffffff']
    });
    triggerToast('Downloading Arvind Chauhan Resume (PDF)...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="neu-raised-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-10 relative">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 neu-pressed rounded-full flex items-center justify-center text-[#0066ff] font-bold font-mono">
              AC
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text-primary)]">Curriculum Vitae</h3>
              <p className="text-xs text-[var(--text-secondary)]">Arvind Chauhan — Web Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="p-2.5 neu-btn text-xs font-bold text-[var(--text-primary)] hidden sm:flex items-center gap-2"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="neu-btn px-4 py-2.5 text-xs font-bold text-white bg-[#0066ff] border-none shadow-[0_0_15px_rgba(0,102,255,0.4)] flex items-center gap-2 hover:bg-[#0052cc]"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 neu-btn text-[var(--text-secondary)] hover:text-[#0066ff]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="space-y-8 text-[var(--text-primary)]">
          
          {/* Header Block */}
          <div className="neu-pressed p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0066ff]">ARVIND CHAUHAN</h1>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mt-1">
                BCA Graduate &amp; Web Development Intern
              </p>
            </div>
            <div className="text-xs space-y-1 text-[var(--text-secondary)] font-mono">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#0066ff]" /> +91 6394572654</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#0066ff]" /> arvind.harish.68@gmail.com</p>
              <p className="flex items-center gap-2"><GithubIcon className="w-3.5 h-3.5 text-[#0066ff]" /> github.com/arvind0019</p>
              <p className="flex items-center gap-2"><LinkedinIcon className="w-3.5 h-3.5 text-[#0066ff]" /> linkedin.com/in/arvind-chauhan-836a0228b</p>
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#0066ff]" /> C-Block, Sector 3, Greater Noida, UP</p>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0066ff] mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" /> Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed neu-raised-sm p-4">
              Motivated and detail-oriented developer with a strong foundation in programming, web development, and database management — passionate about applying technical and analytical skills to real-world projects.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0066ff] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h4>
            <div className="space-y-3">
              <div className="neu-pressed p-4 rounded-2xl flex flex-wrap justify-between items-center text-xs">
                <div>
                  <p className="font-extrabold text-sm text-[var(--text-primary)]">BCA (Bachelor of Computer Applications)</p>
                  <p className="text-[var(--text-secondary)]">United Institute of Management (FUGS), Prayagraj, UP</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#0066ff]">SGPA: 7.00</span>
                  <p className="text-[var(--text-secondary)] font-mono text-[10px]">2023 – 2026</p>
                </div>
              </div>

              <div className="neu-pressed p-4 rounded-2xl flex flex-wrap justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Intermediate (12th Grade)</p>
                  <p className="text-[var(--text-secondary)]">UP Board</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#0066ff]">71.4%</span>
                  <p className="text-[var(--text-secondary)] font-mono text-[10px]">2021</p>
                </div>
              </div>

              <div className="neu-pressed p-4 rounded-2xl flex flex-wrap justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-[var(--text-primary)]">High School (10th Grade)</p>
                  <p className="text-[var(--text-secondary)]">UP Board</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#0066ff]">70.33%</span>
                  <p className="text-[var(--text-secondary)] font-mono text-[10px]">2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0066ff] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience &amp; Internships
            </h4>
            <div className="space-y-4">
              <div className="neu-raised-sm p-4">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-sm text-[var(--text-primary)]">Web Development Intern</span>
                  <span className="text-xs font-mono font-bold text-[#0066ff]">Success Sign (Present)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Building and styling responsive pages using HTML, CSS, JavaScript; collaborating on real-world production projects.
                </p>
              </div>

              <div className="neu-raised-sm p-4">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-sm text-[var(--text-primary)]">Student Intern</span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Netcamp @ UCER (Sept–Oct 2024)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Training in network management, full-stack web dev with Python, and native Android development in Android Studio.
                </p>
              </div>

              <div className="neu-raised-sm p-4">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-sm text-[var(--text-primary)]">Virtual Internships (Forage)</span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Deloitte, Tata, AWS</span>
                </div>
                <ul className="text-xs text-[var(--text-secondary)] mt-2 space-y-1">
                  <li>• Deloitte: Data Analyst (Data cleaning, visualization, insights)</li>
                  <li>• Tata: Cybersecurity Analyst (IAM, access management, threat detection)</li>
                  <li>• AWS: Cloud Foundations (Cloud architecture, service design)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0066ff] mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Skills
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Programming: C, Python, Java</span>
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Web: HTML5, CSS3, JavaScript</span>
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Database: MySQL, Query Writing</span>
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Mobile: Android Studio</span>
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Cloud &amp; Security: AWS, IAM</span>
              <span className="neu-pressed px-3 py-2 rounded-xl text-center">Tools: ChatGPT, Copilot, IntelliJ</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
