"use client";

import { motion } from "framer-motion";
import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "html5", "css3", "javascript", "typescript", "react", "nextdotjs",
  "python", "flask", "php", "laravel", "java", "nodedotjs",
  "git", "github", "figma", "postman", "visualstudiocode", "docker",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const skillGroups = [
  {
    label: "Frontend",
    color: "var(--accent-primary)",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Backend",
    color: "#34d399",
    skills: ["Python", "Flask", "PHP", "Laravel", "Java", "Node.js"],
  },
  {
    label: "Tools",
    color: "#f472b6",
    skills: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Docker"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <div className="ambient-glow ambient-glow--bl" />
      <div className="section-inner">
        <div className="skills-layout">
          {/* ── Left: heading + skill pills ── */}
          <motion.div
            className="skills-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span className="section-label" custom={0} variants={fadeUp}>
              Tech Stack
            </motion.span>
            <motion.h2 className="section-title" custom={1} variants={fadeUp}>
              What I build&nbsp;with
            </motion.h2>
            <motion.p
              className="section-subtitle"
              custom={2}
              variants={fadeUp}
              style={{ marginBottom: "2.5rem" }}
            >
              A rotating set of tools I reach for daily — from browser to
              server, design to deployment.
            </motion.p>

            <div className="skills-groups">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  className="skill-group"
                  custom={gi + 3}
                  variants={fadeUp}
                >
                  <div
                    className="skill-group-header"
                    style={{ "--group-color": group.color } as React.CSSProperties}
                  >
                    <span className="skill-group-dot" />
                    <span className="skill-group-label">{group.label}</span>
                  </div>

                  <div className="skill-pills">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        className="skill-pill"
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: gi * 0.08 + si * 0.05,
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: icon cloud ── */}
          <motion.div
            className="skills-cloud-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              className="skills-cloud-wrap"
              custom={0}
              variants={fadeUp}
            >
              <IconCloud images={images} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
