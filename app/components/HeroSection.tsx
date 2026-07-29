"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "-40%", label: "horas manuais" },
  { value: "5–10 dias", label: "para implantar" },
  { value: "99,9%", label: "de disponibilidade" },
];

export default function HeroSection() {
  return (
    <section
      id="produto"
      style={{
        position: "relative",
        zIndex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 6vw 7vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 45%, transparent 100%)",
          zIndex: -1,
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: "42vw",
          height: "42vw",
          left: "-8vw",
          bottom: "10vh",
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
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            color: "var(--color-text-primary)",
            marginTop: "0.75rem",
            lineHeight: 1.02,
            letterSpacing: "-0.01em",
          }}
        >
          Menos tarefas.
          <br />
          <span style={{ color: "var(--color-accent)" }}>Mais progresso.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "1.1rem",
            color: "var(--color-text-body)",
            maxWidth: "480px",
            marginTop: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          A APT automatiza os processos administrativos da sua empresa e
          devolve horas de trabalho manual para o que realmente importa.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "2.25rem", flexWrap: "wrap" }}>
          <a
            href="#cta"
            className="pill-button pill-button-solid"
            style={{ pointerEvents: "auto" }}
          >
            Solicitar demonstração →
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2.75rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            maxWidth: "560px",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.6rem",
                  color: "var(--color-text-primary)",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.05em",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
