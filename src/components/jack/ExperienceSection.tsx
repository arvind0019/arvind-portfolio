import { FadeIn } from "./FadeIn";

const EXPERIENCE = [
  {
    role: "Web Development Intern",
    org: "Success Sign",
    period: "Present",
    desc: "Building and styling responsive, cross-browser web pages using HTML, CSS, and JavaScript for live client projects, and collaborating with designers to translate UI/UX requirements into functional frontend interfaces.",
  },
  {
    role: "Student Intern",
    org: "Netcamp In-Campus @ UCER, Allahabad",
    period: "Sept 2024 – Oct 2024",
    desc: "Completed hands-on training across network management, full stack web development, and native Android development.",
  },
  {
    role: "Data Analyst (Virtual Internship)",
    org: "Deloitte via Forage",
    period: "",
    desc: "Cleaned, analyzed, and visualized a large dataset to produce actionable business insights.",
  },
  {
    role: "Cybersecurity Analyst — IAM (Virtual Internship)",
    org: "Tata via Forage",
    period: "",
    desc: "Worked on access management policies and threat detection scenarios.",
  },
  {
    role: "Cloud Foundations (Virtual Internship)",
    org: "AWS via Forage",
    period: "",
    desc: "Implemented core cloud service tasks in a virtual AWS environment covering cloud architecture and solution design.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]"
    >
      <FadeIn y={40}>
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            mb-16 sm:mb-20 md:mb-24
            text-white
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
        {EXPERIENCE.map((e, i) => (
          <FadeIn key={e.role + e.org} delay={i * 0.08} y={24}>
            <div
              className="
                rounded-3xl border border-white/10 bg-white/[0.03]
                backdrop-blur-md px-6 sm:px-8 py-6 sm:py-7
                transition-all duration-300
                hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                <span className="text-white font-medium uppercase text-base sm:text-lg">
                  {e.role}
                </span>
                {e.period && (
                  <span className="text-white/40 uppercase tracking-[0.15em] text-xs sm:text-sm shrink-0">
                    {e.period}
                  </span>
                )}
              </div>
              <div className="text-[#D7E2EA] text-sm sm:text-base mb-3">
                {e.org}
              </div>
              <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                {e.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
