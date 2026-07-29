"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 6vw 8vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
      >
        <span className="label">Automação de processos administrativos</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            color: "var(--color-text-primary)",
            marginTop: "0.75rem",
            lineHeight: 1.05,
          }}
        >
          Menos tarefas.
          <br />
          Mais progresso.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "var(--color-text-body)",
            maxWidth: "460px",
            marginTop: "1.25rem",
            lineHeight: 1.6,
          }}
        >
          A APT automatiza os processos administrativos da sua empresa e
          devolve horas de trabalho manual para o que realmente importa.
        </p>
        <a
          href="#cta"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.9rem 2rem",
            background: "var(--color-accent)",
            color: "#000000",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
            pointerEvents: "auto",
            transition: "background 0.2s ease",
          }}
        >
          Solicitar demonstração
        </a>
      </motion.div>
    </section>
  );
}
