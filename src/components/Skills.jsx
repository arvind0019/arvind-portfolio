import React, { useState } from 'react';
import { Cpu, Code, Database, Shield, Bot, Check } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      name: 'Programming & Web Dev',
      icon: Code,
      skills: [
        { name: 'HTML5 & CSS3', level: 92, tag: 'Advanced Layouts & Neumorphism' },
        { name: 'JavaScript (ES6+)', level: 85, tag: 'DOM Logic & Async APIs' },
        { name: 'Responsive Web Design', level: 90, tag: 'Mobile-First & Micro-UI' },
        { name: 'C Language', level: 80, tag: 'Data Structures & Pointers' },
        { name: 'Python', level: 78, tag: 'Scripting & Web Backend' },
        { name: 'Java (Basics)', level: 75, tag: 'OOP Principles & Logic' },
      ],
    },
    {
      name: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MySQL & Query Writing', level: 88, tag: 'Joins, Indexing & Optimization' },
        { name: 'Relational DB Design', level: 84, tag: 'Normalization & Schemas' },
        { name: 'AWS Cloud Foundations', level: 76, tag: 'S3, EC2 & IAM Security' },
        { name: 'Data Cleaning & EDA', level: 82, tag: 'Deloitte Job Simulation' },
      ],
    },
    {
      name: 'Mobile, Networking & Security',
      icon: Shield,
      skills: [
        { name: 'Android Studio', level: 82, tag: 'Native XML & Activity Flows' },
        { name: 'Network Management', level: 80, tag: 'Netcamp Training & Topologies' },
        { name: 'Ethical Hacking Basics', level: 74, tag: 'Port Audits & Wireshark' },
        { name: 'IAM & Threat Detection', level: 78, tag: 'Tata Virtual Internship' },
      ],
    },
    {
      name: 'Tools & AI Capabilities',
      icon: Bot,
      skills: [
        { name: 'AI Engineering Tools', level: 90, tag: 'ChatGPT, Claude, Copilot' },
        { name: 'Developer Tools', level: 85, tag: 'IntelliJ IDEA, XAMPP, VS Code' },
        { name: 'Git & Version Control', level: 78, tag: 'Commits, Branching & GitHub' },
      ],
    },
  ];

  const categories = ['All', 'Programming & Web Dev', 'Database & Cloud', 'Mobile, Networking & Security', 'Tools & AI Capabilities'];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 neu-pressed rounded-full mb-3">
            <Cpu className="w-4 h-4 text-[#0066ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Technical Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            Skills &amp; <span className="text-[#0066ff]">Proficiencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            Interactive skill matrix across software development, database design, mobile, and cloud foundations.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                activeCategory === cat
                  ? 'neu-pressed text-[#0066ff] scale-105'
                  : 'neu-btn text-[var(--text-secondary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = cat.icon;

            return (
              <div
                key={catIdx}
                className="neu-raised p-8 rounded-3xl border border-[var(--border-subtle)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="w-10 h-10 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                    {cat.name}
                  </h3>
                </div>

                {/* Skill Tracks */}
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-[var(--text-primary)] font-bold text-sm">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[var(--text-secondary)] hidden sm:inline">
                            {skill.tag}
                          </span>
                          <span className="text-[#0066ff] font-mono font-extrabold text-xs neu-pressed px-2 py-0.5 rounded-md">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Inset Neumorphic Track */}
                      <div className="w-full h-3.5 neu-pressed rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-gradient-to-r from-[#0066ff] to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,102,255,0.4)]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* AI & Developer Tool Chips Badge Container */}
        <div className="mt-12 neu-pressed p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)]">
          <h4 className="text-xs font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-4 text-center sm:text-left">
            Integrated AI Tooling &amp; IDE Workflow:
          </h4>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {['ChatGPT', 'Claude 3.5', 'GitHub Copilot', 'IntelliJ IDEA', 'XAMPP Local Server', 'VS Code', 'Git Command Line', 'Android Studio'].map((tool, i) => (
              <div
                key={i}
                className="neu-raised px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-primary)] flex items-center gap-2 border border-[var(--border-subtle)] hover:scale-105 transition-transform"
              >
                <Check className="w-3.5 h-3.5 text-[#0066ff]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
