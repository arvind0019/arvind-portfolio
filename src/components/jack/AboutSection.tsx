import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { FaCode, FaServer, FaDatabase, FaShieldAlt } from "react-icons/fa";

function CornerIcon({ Icon }: { Icon: typeof FaCode }) {
  return (
    <div
      className="w-full aspect-square rounded-full flex items-center justify-center border border-white/10"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, rgba(215,226,234,0.12), rgba(12,12,12,0.9) 75%)",
      }}
    >
      <Icon size={36} color="#D7E2EA" style={{ opacity: 0.7 }} />
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute top-[4%] left-[4%] w-[90px]"
      >
        <CornerIcon Icon={FaCode} />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[8%] left-[10%] w-[80px]"
      >
        <CornerIcon Icon={FaDatabase} />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute top-[4%] right-[4%] w-[90px]"
      >
        <CornerIcon Icon={FaServer} />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[8%] right-[10%] w-[95px]"
      >
        <CornerIcon Icon={FaShieldAlt} />
      </FadeIn>

      <FadeIn delay={0} y={40} className="text-center relative z-10">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <AnimatedText
          text="I am a BCA graduate and Full Stack Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, and MySQL, along with internship exposure to cloud, data analytics, and cybersecurity. I enjoy shipping end-to-end web applications and growing within an engineering team."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        <p
          className="text-white/50 uppercase tracking-[0.2em] text-center"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1rem)" }}
        >
          BCA · United Institute of Management (FUGS), Prayagraj &middot; 2023 – 2026
        </p>

        <ContactButton />
      </div>
    </section>
  );
}
