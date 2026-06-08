"use client";

import { motion } from "framer-motion";
import { Variants} from "framer-motion"

const wordAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" as const },
  },
});

export default function HeroSection() {
  const headingWords = ["Building", "digital", "experiences", "that", "matter."];

  return (
    <section id="hero" className="hero">
      {/* Ambient decorations */}
      <div className="hero-ambient hero-ambient--1" />
      <div className="hero-ambient hero-ambient--2" />

      <div className="hero-inner" style={{ position: "relative", zIndex: 1 }}>
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Hello, I&apos;m Subandrio
        </motion.p>

        <motion.h1
          className="hero-heading"
          variants={wordAnimation}
          initial="hidden"
          animate="visible"
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordChild}
              style={{ display: "inline-block", marginRight: "0.35em" }}
              className={i === 2 || i === 4 ? "accent-text" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
        >
          A full-stack web developer based in Tegal, Indonesia. I specialize in
          transforming complex ideas into functional, fast, and scalable digital
          solutions using modern technologies.
        </motion.p>

        <motion.div
          className="hero-cta"
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
