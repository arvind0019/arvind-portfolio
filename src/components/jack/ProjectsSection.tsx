import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FaBookOpen, FaHeartbeat, FaNetworkWired } from "react-icons/fa";

interface Project {
  n: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  event: string;
  Icon: typeof FaBookOpen;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Web · Full Stack",
    name: "Library Management System",
    desc: "A full stack web app to manage book and student records for a library, with a MySQL-backed database run through XAMPP.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
    event: "Prabhandhan 2024 · CodeHunt",
    Icon: FaBookOpen,
  },
  {
    n: "02",
    category: "Android",
    name: "Emergency & Ayurvedic Consultation App",
    desc: "A native Android application offering quick access to emergency services alongside Ayurvedic consultations, built in Android Studio.",
    tags: ["Java", "Android Studio"],
    event: "Hackdiwas 2.0",
    Icon: FaHeartbeat,
  },
  {
    n: "03",
    category: "Training Project",
    name: "Full Stack Training Project",
    desc: "Hands-on company training project spanning network management & ethical hacking, Python web development, and Android development modules.",
    tags: ["Python", "Java", "Networking", "Ethical Hacking"],
    event: "Netcamp Company Training",
    Icon: FaNetworkWired,
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  const Icon = project.Icon;

  return (
    <div
      className="sticky top-24 md:top-32"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-white/10
          bg-[#0C0C0C]/95
          backdrop-blur-xl
          p-4 sm:p-6 md:p-8
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          transition-all duration-300
          hover:border-white/20
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div
              className="hero-heading font-black text-white/15"
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
                lineHeight: 1,
              }}
            >
              {project.n}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm">
                {project.category}
              </span>

              <span
                className="text-white font-medium uppercase"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                }}
              >
                {project.name}
              </span>
            </div>
          </div>

          <span
            className="
              inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
              font-medium uppercase tracking-widest
              px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm
              text-center
            "
          >
            {project.event}
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-2 sm:px-4">
          {/* Icon panel */}
          <div
            className="md:col-span-2 rounded-[30px] border border-white/10 flex items-center justify-center"
            style={{
              minHeight: "clamp(200px,26vw,320px)",
              background:
                "radial-gradient(circle at 30% 20%, rgba(215,226,234,0.12), rgba(12,12,12,0.9) 75%)",
            }}
          >
            <Icon size={72} color="#D7E2EA" style={{ opacity: 0.85 }} />
          </div>

          {/* Description + tags */}
          <div className="md:col-span-3 flex flex-col justify-center gap-6 py-6 md:py-0">
            <p
              className="font-light leading-relaxed"
              style={{
                color: "#FFFFFF",
                opacity: 0.75,
                fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)",
              }}
            >
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-4 py-2 rounded-full text-xs sm:text-sm
                    border border-white/10 bg-white/[0.03]
                    text-white/70 uppercase tracking-wide
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects"
      ref={containerRef}
      className="
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        bg-[#0C0C0C]
      "
    >
      <FadeIn
        y={40}
        className="text-center mb-16 sm:mb-20 md:mb-28"
      >
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-white
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={project.n}
            className="h-[75vh]"
          >
            <ProjectCard
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
