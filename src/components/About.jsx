import React from 'react';
import { GraduationCap, BookOpen, Award, Cpu, Database, Layout, Sparkles } from 'lucide-react';

export default function About() {
  const educationList = [
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'United Institute of Management (FUGS), Prayagraj, UP',
      duration: '2023 – 2026',
      score: 'SGPA: 7.00',
      highlight: 'Core focus on Web Dev, Database Management, and Data Structures.',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'UP Board, Uttar Pradesh',
      duration: 'Completed 2021',
      score: '71.4%',
      highlight: 'Stream: Mathematics & Science foundation.',
      icon: BookOpen,
    },
    {
      degree: 'High School (10th Grade)',
      institution: 'UP Board, Uttar Pradesh',
      duration: 'Completed 2019',
      score: '70.33%',
      highlight: 'Strong logical & analytical problem-solving foundation.',
      icon: Award,
    },
  ];

  const traits = [
    { title: 'Frontend Mastery', desc: 'Crafting pixel-perfect, responsive HTML5/CSS3/JavaScript layouts.', icon: Layout },
    { title: 'Database Design', desc: 'Proficient in MySQL query optimization and relational schema structuring.', icon: Database },
    { title: 'Full Lifecycle Intern', desc: 'Hands-on exposure to network management, web apps, and cybersecurity.', icon: Cpu },
    { title: 'Problem Solver', desc: 'Analytical mindset tuned through Deloitte & Tata virtual internships.', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 neu-pressed rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-[#0066ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Background &amp; Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            About <span className="text-[#0066ff]">Arvind Chauhan</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            Combining academic rigor with real-world internship execution.
          </p>
        </div>

        {/* Bio Card */}
        <div className="neu-raised-lg p-8 sm:p-10 mb-12 relative overflow-hidden border border-[var(--border-subtle)]">
          <div className="neu-pressed p-6 sm:p-8 rounded-3xl relative">
            <span className="text-4xl text-[#0066ff] font-serif absolute top-4 left-4 opacity-30">“</span>
            <p className="text-lg sm:text-xl text-[var(--text-primary)] font-medium italic leading-relaxed pl-6 relative z-10">
              Motivated and detail-oriented developer with a strong foundation in programming, web development, and database management — passionate about applying technical and analytical skills to real-world projects.
            </p>
          </div>

          {/* Key Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {traits.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div key={idx} className="neu-raised-sm p-6 hover:shadow-[var(--shadow-hover)] transition-all">
                  <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center mb-4 text-[#0066ff]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[var(--text-primary)]">{t.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-normal">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-[#0066ff]" />
            <span>Academic Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationList.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="neu-raised p-7 relative group hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 text-xs font-extrabold neu-pressed text-[#0066ff] rounded-full">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold text-[var(--text-primary)] group-hover:text-[#0066ff] transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-xs font-semibold text-[var(--text-secondary)] mt-1">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] mt-4 leading-relaxed">
                      {edu.highlight}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                    <span>Year:</span>
                    <span className="font-bold text-[var(--text-primary)]">{edu.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
