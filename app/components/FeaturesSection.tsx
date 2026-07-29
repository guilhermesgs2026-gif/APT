"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Automação de ponta a ponta",
    copy: "Elimina tarefas manuais repetitivas do fluxo administrativo.",
  },
  {
    title: "Integração nativa",
    copy: "Conecta-se aos sistemas que sua empresa já usa, sem retrabalho.",
  },
  {
    title: "Implantação rápida",
    copy: "Operando em produção em dias, não meses.",
  },
  {
    title: "Redução mensurável de horas",
    copy: "Recupera tempo de equipe para atividades estratégicas.",
  },
  {
    title: "Escalável por padrão",
    copy: "Cresce junto com o volume de processos da empresa.",
  },
  {
    title: "Visibilidade em tempo real",
    copy: "Acompanhamento de cada etapa do processo automatizado.",
  },
];

function FeatureIcon() {
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid var(--color-border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(79,209,197,0.06)",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.4"
      >
        <rect x="4" y="4" width="20" height="20" rx="2" />
        <path d="M9 14h10M14 9v10" />
      </svg>
    </div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "10rem 6vw",
        background: "rgba(0,0,0,0.92)",
      }}
    >
      <motion.span
        className="label"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
      >
        Diferenciais
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 400,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: "var(--color-text-primary)",
          marginTop: "0.75rem",
          marginBottom: "4rem",
          maxWidth: "640px",
        }}
      >
        Tudo que a APT tira das suas costas.
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.1,
              ease: [0.25, 0, 0, 1],
            }}
            className="feature-card"
            style={{
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <FeatureIcon />
            <h3
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "1.1rem",
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "var(--color-text-body)",
                lineHeight: 1.6,
              }}
            >
              {f.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
