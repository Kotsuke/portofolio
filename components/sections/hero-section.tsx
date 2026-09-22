"use client";

import { ArrowDown } from "lucide-react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { LampContainer } from "../ui/lamp";
import { motion } from "motion/react";

export function HeroSection() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "next-gen",
    },
    {
      text: "web",
    },
    {
      text: "applications.",
      className: "text-accent dark:text-accent",
    },
  ];

  return (
    <section id="hero" className="relative w-full min-h-dvh flex flex-col items-center justify-center">
      <LampContainer className="w-full flex-1 min-h-dvh rounded-none">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <p className="animate-fade-in text-neutral-600 dark:text-neutral-200 text-xs sm:text-base uppercase tracking-widest font-medium">
            Subandrio • Full-Stack Developer
          </p>

          <div className="animate-fade-in delay-100">
            <TypewriterEffectSmooth words={words} />
          </div>

          <p className="animate-fade-in delay-200 mt-4 max-w-2xl text-center text-sm md:text-base text-neutral-600 dark:text-neutral-400 px-4">
            Based in Tegal, Indonesia. I specialize in building modern, high-performance web applications that beautifully bridge the gap between complex engineering and elegant design.
          </p>

          <div className="animate-fade-in delay-300 mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a
            href="#projects"
            className="w-40 h-10 inline-flex items-center justify-center rounded-xl bg-foreground text-background text-sm font-medium transition-all hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-40 h-10 inline-flex items-center justify-center rounded-xl border border-border bg-background text-foreground text-sm font-medium transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </div>
        </motion.div>
      </LampContainer>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
