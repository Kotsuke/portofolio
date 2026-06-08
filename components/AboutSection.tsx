"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Passion" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="ambient-glow ambient-glow--tr" />
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span className="section-label" custom={0} variants={fadeUp}>
            About Me
          </motion.span>
          <motion.h2 className="section-title" custom={1} variants={fadeUp}>
            Passionate about crafting
            <br />
            <span className="accent-text">exceptional web experiences</span>
          </motion.h2>

          <motion.div className="about-content" custom={2} variants={fadeUp}>
            <div>
              <p className="about-text">
                I&apos;m a <strong>full-stack web developer</strong> with a deep
                passion for building intuitive and performant digital products.
                With experience spanning front-end frameworks like{" "}
                <strong>React</strong> and <strong>Next.js</strong>, to back-end
                technologies like <strong>Laravel</strong>,{" "}
                <strong>Flask</strong>, and <strong>Node.js</strong>, I bring
                ideas to life from concept to deployment.
              </p>
              <br />
              <p className="about-text">
                I believe great software is not just about code — it&apos;s
                about solving real problems with clean architecture, thoughtful
                design, and relentless attention to detail. When I&apos;m not
                coding, you&apos;ll find me exploring new technologies or
                contributing to the developer community.
              </p>
            </div>

            <motion.div
              className="about-stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
