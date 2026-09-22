import { Section } from "@/components/layout/section";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <Section id="hero" noPadTop className="flex min-h-dvh flex-col items-center justify-center text-center">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <p className="animate-fade-in mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Hello, I&apos;m
        </p>

        <h1 className="animate-fade-in delay-100 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-gradient">Subandrio</span>
        </h1>

        <p className="animate-fade-in delay-200 mx-auto mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
          A developer passionate about building clean, modern, and impactful
          digital experiences.
        </p>

        <div className="animate-fade-in delay-300 mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-all hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-500 absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </Section>
  );
}
