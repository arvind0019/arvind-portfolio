import { useEffect, useRef, useState } from "react";

const LABELS = [
  "FULL STACK",
  "WEB DEV",
  "ANDROID",
  "MYSQL",
  "AWS CLOUD",
  "JAVA",
  "PYTHON",
  "CYBERSECURITY",
  "GIT",
  "DATA ANALYSIS",
  "JAVASCRIPT",
];

const ROW1 = LABELS.slice(0, 6);
const ROW2 = LABELS.slice(6);

function Card({ label }: { label: string }) {
  return (
    <div
      className="rounded-2xl shrink-0 flex items-center justify-center border border-white/10"
      style={{
        width: 300,
        height: 190,
        background:
          "linear-gradient(135deg, rgba(215,226,234,0.08), rgba(12,12,12,0.95))",
      }}
    >
      <span
        className="hero-heading font-black uppercase tracking-wide text-center px-4"
        style={{ fontSize: "1.5rem" }}
      >
        {label}
      </span>
    </div>
  );
}

function Row({ labels }: { labels: string[] }) {
  const tripled = [...labels, ...labels, ...labels];
  return (
    <div className="flex gap-3" style={{ willChange: "transform" }}>
      {tripled.map((label, i) => (
        <Card key={i} label={label} />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const x1 = offset - 200;
  const x2 = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <div style={{ transform: `translateX(${x1}px)`, willChange: "transform" }}>
        <Row labels={ROW1} />
      </div>
      <div style={{ transform: `translateX(${x2}px)`, willChange: "transform" }}>
        <Row labels={ROW2} />
      </div>
    </section>
  );
}
