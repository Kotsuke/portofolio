"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="footer-text">
        © 2026{" "}
        <span className="accent-text" style={{ fontWeight: 600 }}>
          Subandrio
        </span>
        . Built with Next.js & Framer Motion.
      </p>
    </motion.footer>
  );
}
