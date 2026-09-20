import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Smartphone, Shield, Database, Eye, X, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ triggerToast }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'hackdiwas',
      title: 'Hackdiwas 2.0 Emergency & Ayurvedic App',
      category: 'Mobile & Security',
      badge: 'Hackathon Project',
      icon: Smartphone,
      shortDesc: 'Android app providing quick one-touch emergency dispatch services alongside an Ayurvedic health consultation platform.',
      fullDesc: 'Developed during Hackdiwas 2.0, this Android application delivers instant SOS emergency triggers for nearest medical centers while integrating an AI-assisted Ayurvedic consultation module. Users can search for natural remedies, book consultations, and trigger location-tagged emergency alerts.',
      tech: ['Android Studio', 'Java', 'XML Layouts', 'Firebase', 'Google Maps API'],
      features: [
        'One-touch location-tagged Emergency SOS alert trigger.',
        'Ayurvedic plant & remedy search engine with dosage guides.',
        'User authentication and appointment scheduling with local practitioners.',
        'Clean native Android UI optimized for low-end devices.',
      ],
      metrics: 'Tested on 15+ Android SDK target devices',
      github: 'https://github.com/arvind0019',
      demo: 'https://github.com/arvind0019',
    },
    {
      id: 'netcamp',
      title: 'Netcamp Network & Full-Stack Platform',
      category: 'Full Stack & Networks',
      badge: 'Company Training',
      icon: Shield,
      shortDesc: 'Integrated platform combining network administration tools, ethical hacking audit scripts, Python web backend, and mobile interface.',
      fullDesc: 'Created during the intensive Netcamp In-Campus internship at UCER Allahabad. The system allows network administrators to run local network health checks, inspect port vulnerabilities, and manage user directory data via a lightweight Python web portal synced with a native Android app.',
      tech: ['Python', 'MySQL', 'Android Studio', 'Wireshark', 'XAMPP', 'HTML/CSS'],
      features: [
        'Automated local network port scanning and vulnerability reporting scripts.',
        'Python web portal for user role management and activity logging.',
        'Android interface connected to MySQL database via PHP REST endpoints.',
        'Security auditing guidelines for local Wi-Fi and subnet defense.',
      ],
      metrics: 'Simulated multi-node local network environment',
      github: 'https://github.com/arvind0019',
      demo: 'https://github.com/arvind0019',
    },
    {
      id: 'library',
      title: 'Prabhandhan 2024 — Library Management System',
      category: 'Web Dev',
      badge: 'CodeHunt Challenge',
      icon: Database,
      shortDesc: 'Complete web application for digital library cataloging, book issuance tracking, student records, and fine calculation.',
      fullDesc: 'Built for the Prabhandhan 2024 CodeHunt competition. This web application streamlines campus library operations by automating book search, digital check-ins/check-outs, overdue fee calculations, and administrative analytics.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'XAMPP', 'PHP'],
      features: [
        'Dynamic search & filter catalog for 1000+ library books.',
        'Automated fine calculation engine based on return due dates.',
        'Admin dashboard for adding new titles, updating stock, and generating reports.',
        'Tactile responsive dashboard UI styled with clean CSS.',
      ],
      metrics: 'Processed 500+ simulated book transaction records',
      github: 'https://github.com/arvind0019',
      demo: 'https://github.com/arvind0019',
    },
  ];

  const categories = ['All', 'Web Dev', 'Mobile & Security', 'Full Stack & Networks'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 neu-pressed rounded-full mb-3">
            <FolderGit2 className="w-4 h-4 text-[#0066ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            Projects &amp; <span className="text-[#0066ff]">Hackathons</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            Hands-on technical solutions hosted on GitHub (<span className="text-[#0066ff] font-mono font-bold">arvind0019</span>).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 text-xs font-extrabold rounded-full transition-all ${
                activeTab === cat
                  ? 'neu-pressed text-[#0066ff]'
                  : 'neu-btn text-[var(--text-secondary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="neu-raised p-7 rounded-3xl flex flex-col justify-between group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border border-[var(--border-subtle)]"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[#0066ff]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-[11px] font-extrabold neu-pressed text-[#0066ff] rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[#0066ff] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-mono font-semibold neu-pressed text-[var(--text-secondary)] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="neu-btn px-4 py-2 text-xs font-bold text-[#0066ff] flex items-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href="https://github.com/arvind0019"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 neu-btn rounded-full text-[var(--text-secondary)] hover:text-[#0066ff] flex items-center justify-center"
                    title="View Source Code on GitHub (arvind0019)"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="neu-raised-lg p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 neu-btn text-[var(--text-secondary)] hover:text-[#0066ff]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold text-[#0066ff] neu-pressed rounded-full">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed neu-pressed p-4 rounded-2xl">
                {selectedProject.fullDesc}
              </p>

              {/* Key Features */}
              <div className="mt-6">
                <h4 className="text-sm font-extrabold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                  Key Features &amp; Architecture:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[#0066ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono font-bold neu-pressed text-[#0066ff] rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="mt-8 pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  ⚡ {selectedProject.metrics}
                </span>
                
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/arvind0019"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-btn px-5 py-2.5 text-xs font-bold text-[var(--text-primary)] flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>

                  <a
                    href="https://github.com/arvind0019"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-btn px-5 py-2.5 text-xs font-bold text-white bg-[#0066ff] border-none shadow-[0_0_15px_rgba(0,102,255,0.4)] flex items-center gap-2 hover:bg-[#0052cc]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
