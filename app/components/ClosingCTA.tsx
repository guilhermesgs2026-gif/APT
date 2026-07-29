"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ClosingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "12rem 6vw",
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(79,209,197,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.span
        className="label"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        style={{ position: "relative" }}
      >
        Comece agora
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 400,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--color-text-primary)",
          marginTop: "0.75rem",
          marginBottom: "2.5rem",
          position: "relative",
          lineHeight: 1.2,
        }}
      >
        Menos tarefas manuais.
        <br />
        <em style={{ fontStyle: "italic" }}>Mais progresso todos os dias.</em>
      </motion.h2>

      <motion.a
        href="#"
        className="pill-button pill-button-outline"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0, 0, 1] }}
        style={{ position: "relative" }}
      >
        Solicitar demonstração →
      </motion.a>
    </section>
  );
}
