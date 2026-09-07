import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAndroid,
  FaAws,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiMysql,
  SiC,
  SiXampp,
  SiIntellijidea,
  SiAnthropic,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { VscCopilot } from "react-icons/vsc";

const row1 = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: FaJava, name: "Java", color: "#F89820" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiXampp, name: "XAMPP", color: "#FB7A24" },
  { Icon: FaDatabase, name: "Database Design", color: "#4479A1" },
];

const row2 = [
  { Icon: FaAndroid, name: "Android Studio", color: "#3DDC84" },
  { Icon: FaAws, name: "AWS Cloud", color: "#FF9900" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: SiIntellijidea, name: "IntelliJ IDEA", color: "#FE315D" },
  { Icon: FaLaptopCode, name: "VS Code", color: "#007ACC" },
  { Icon: FaNetworkWired, name: "Network Management", color: "#61DAFB" },
  { Icon: FaShieldAlt, name: "Ethical Hacking", color: "#E34F26" },
];

const row3 = [
  { Icon: RiOpenaiFill, name: "ChatGPT", color: "#FFFFFF" },
  { Icon: SiAnthropic, name: "Claude", color: "#D97757" },
  { Icon: VscCopilot, name: "GitHub Copilot", color: "#FFFFFF" },
  { Icon: FaShieldAlt, name: "IAM", color: "#4479A1" },
];

function SkillRow({
  skills,
  reverse = false,
}: {
  skills: typeof row1;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={index}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              hover:bg-white/[0.06]
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={36} color={skill.color} />

            <span className="text-white font-medium text-lg">
              {skill.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills"
      className="py-24 overflow-hidden"
      style={{ background: "#0C0C0C" }}
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
            text-white
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <SkillRow skills={row1} />

        <SkillRow skills={row2} reverse />

        <SkillRow skills={row3} />
      </div>
    </section>
  );
}