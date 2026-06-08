"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce application with product management, cart system, and payment integration.",
    tags: ["PHP", "Laravel", "MySQL"],
    emoji: "🛒",
    github: "https://github.com/Kotsuke/e-commerce",
    demo: "#",
  },
  {
    title: "Smart Infrastructure App",
    desc: "Application to report damage on public infrastructure like sosial media that would help to be processed faster by government agencies.",
    tags: ["Python", "Flask", "MySQL", "tensorflow", "LSTM Model", "OpenCV","Flutter","Next.js"],
    emoji: "📋",
    github: "https://github.com/Kotsuke/Smart-Infrastructure",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This very website! Built with Next.js and Framer Motion, featuring smooth scroll animations.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    emoji: "🎨",
    github: "https://github.com/Kotsuke/portofolio",
    demo: "#",
  },
];

/* ── SVG Icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="ambient-glow ambient-glow--tr" />
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span className="section-label" custom={0} variants={fadeUp}>
            My Work
          </motion.span>
          <motion.h2 className="section-title" custom={1} variants={fadeUp}>
            Featured Projects
          </motion.h2>
          <motion.p className="section-subtitle" custom={2} variants={fadeUp}>
            A selection of projects that showcase my skills and passion for web
            development.
          </motion.p>

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={cardReveal}
                whileHover={{ scale: 1.015 }}
              >
                <div className="project-thumbnail">
                  <div className="project-emoji">{project.emoji}</div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
