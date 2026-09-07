import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

const NAV_LINKS = [
  "About",
  "Experience",
  "Skills",
  "Services",
  "Projects",
  "Contact",
];

export function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity duration-200
            "
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Title */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-none
              whitespace-nowrap
              w-full
              text-[13vw]
              sm:text-[14vw]
              md:text-[15vw]
              lg:text-[16.5vw]
            "
          >
            Hi, i&apos;m arvind
          </h1>
        </FadeIn>
      </div>

      {/* Description + Button */}
      <div
        className="
          mt-auto
          flex
          justify-between
          items-end
          pb-7
          sm:pb-8
          md:pb-10
          px-6
          md:px-10
          relative
          z-20
        "
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-[160px]
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            full stack developer building responsive,
            end-to-end web applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0
          w-[280px]
          sm:w-[360px]
          md:w-[440px]
          lg:w-[520px]
        "
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="w-full aspect-square rounded-full select-none pointer-events-none flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(215,226,234,0.18), rgba(12,12,12,0.9) 70%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 0 60px rgba(168,85,247,0.15), 0 0 100px rgba(236,72,153,0.1), inset 0 1px 1px rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="hero-heading font-black uppercase leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
            >
              AC
            </span>
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}