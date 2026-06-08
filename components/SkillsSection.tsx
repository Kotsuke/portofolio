"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

interface SkillCategory {
  title: string;
  skills: { name: string; icon: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Flask", icon: "🧪" },
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "🔺" },
      { name: "Java", icon: "☕" },
      { name: "Node.js", icon: "💚" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "Figma", icon: "🖌️" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💻" },
      { name: "Docker", icon: "🐳" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <div className="ambient-glow ambient-glow--bl" />
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span className="section-label" custom={0} variants={fadeUp}>
            Tech Stack
          </motion.span>
          <motion.h2 className="section-title" custom={1} variants={fadeUp}>
            Technologies I work with
          </motion.h2>
          <motion.p className="section-subtitle" custom={2} variants={fadeUp}>
            Tools and frameworks I use daily to build modern, performant web
            applications.
          </motion.p>

          <div className="skills-categories">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <motion.h3
                  className="skills-category-title"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  className="skills-grid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      variants={cardReveal}
                      whileHover={{ scale: 1.04 }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
