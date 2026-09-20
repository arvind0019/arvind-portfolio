import React from 'react';
import { Briefcase, ShieldCheck, Cloud, Database, Code2, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Success Sign',
      period: 'Present',
      type: 'On-Site / Industry Internship',
      location: 'India',
      icon: Code2,
      isCurrent: true,
      description: 'Developing and styling modern, responsive web application interfaces using HTML5, CSS3, and JavaScript. Collaborating with senior engineering teams on production web components.',
      bullets: [
        'Building responsive, mobile-first web pages adhering to modern UI design standards.',
        'Debugging cross-browser layout inconsistencies and optimizing asset loading times.',
        'Participating in code reviews and integrating front-end scripts with database endpoints.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'UI Styling'],
    },
    {
      role: 'Student Intern',
      company: 'Netcamp In-Campus @ UCER',
      period: 'Sept 2024 – Oct 2024',
      type: 'In-Campus Intensive Internship',
      location: 'Allahabad (Prayagraj)',
      icon: Briefcase,
      isCurrent: false,
      description: 'Comprehensive training in network engineering, ethical hacking basics, Python web development, and Java-based native Android application creation.',
      bullets: [
        'Configured network routing topologies and analyzed security protocol vulnerabilities.',
        'Created Python-backed web modules and integrated MySQL database connectivity.',
        'Developed Android UI screens and activity listeners in Android Studio.',
      ],
      tags: ['Network Management', 'Ethical Hacking', 'Python', 'Android Studio', 'Java'],
    },
    {
      role: 'Data Analyst Virtual Intern',
      company: 'Deloitte (via Forage)',
      period: 'Virtual Internship',
      type: 'Job Simulation',
      location: 'Remote',
      icon: Database,
      isCurrent: false,
      description: 'Conducted exploratory data analysis, cleaned messy business data sets, and created executive dashboards.',
      bullets: [
        'Standardized raw datasets and handled missing values using analytical pipelines.',
        'Visualized key performance metrics to assist business stakeholders in decision making.',
      ],
      tags: ['Data Cleaning', 'Data Visualization', 'Business Analytics'],
    },
    {
      role: 'Cybersecurity Analyst (IAM) Virtual Intern',
      company: 'Tata (via Forage)',
      period: 'Virtual Internship',
      type: 'Job Simulation',
      location: 'Remote',
      icon: ShieldCheck,
      isCurrent: false,
      description: 'Focused on Identity & Access Management (IAM), defining access control matrices, and threat mitigation strategy.',
      bullets: [
        'Evaluated role-based access control (RBAC) frameworks for enterprise applications.',
        'Analyzed security logs for potential unauthorized escalation attempts.',
      ],
      tags: ['IAM', 'Access Management', 'Threat Detection', 'Security Policies'],
    },
    {
      role: 'Cloud Foundations Virtual Intern',
      company: 'AWS (via Forage)',
      period: 'Virtual Internship',
      type: 'Job Simulation',
      location: 'Remote',
      icon: Cloud,
      isCurrent: false,
      description: 'Explored AWS cloud infrastructure services, S3 bucket security, EC2 provisioning, and Cloud Architecture.',
      bullets: [
        'Designed scalable cloud architecture blueprints based on AWS best practices.',
        'Configured storage buckets, security groups, and IAM policies.',
      ],
      tags: ['AWS Cloud', 'S3 & EC2', 'Cloud Security', 'Solution Architecture'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 neu-pressed rounded-full mb-3">
            <Briefcase className="w-4 h-4 text-[#0066ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Professional Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            Work Experience &amp; <span className="text-[#0066ff]">Internships</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            Real-world industry exposure spanning Web Development, Networking, Analytics, and Cloud.
          </p>
        </div>

        {/* Neumorphic Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Embossed Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-2 neu-pressed rounded-full -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Central Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 neu-raised rounded-full flex items-center justify-center text-[#0066ff] z-20 border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                    <IconComponent className="w-5 h-5" />
                    {exp.isCurrent && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#0066ff] rounded-full animate-ping"></span>
                    )}
                  </div>

                  {/* Content Card Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                    <div className="neu-raised p-7 relative group hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                      
                      {/* Top Header Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-bold text-[#0066ff] neu-pressed rounded-full">
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[#0066ff] text-white rounded-md">
                            Active
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[#0066ff] transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] mt-1">
                        <span className="text-[var(--text-primary)]">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullets */}
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#0066ff] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tag Chips */}
                      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[var(--border-subtle)]">
                        {exp.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[10px] font-mono font-semibold neu-pressed text-[var(--text-secondary)] rounded-lg"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                    </div>
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
