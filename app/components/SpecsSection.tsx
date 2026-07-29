"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Integrações suportadas", value: "API REST, Webhooks, SSO (SAML/OAuth2)" },
  { label: "Tempo médio de implantação", value: "5–10 dias úteis" },
  { label: "Disponibilidade (SLA)", value: "99,9% uptime" },
  { label: "Segurança", value: "Criptografia AES-256, conformidade LGPD" },
  { label: "Capacidade de processamento", value: "+10.000 execuções/dia por instância" },
  { label: "Suporte", value: "Time dedicado, horário comercial estendido" },
  { label: "Infraestrutura", value: "Cloud-native, arquitetura multi-tenant" },
  { label: "Auditoria", value: "Logs completos e trilha de auditoria por processo" },
];

export default function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="specs"
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
        Especificações Técnicas
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
          marginBottom: "3.5rem",
          maxWidth: "640px",
        }}
      >
        Construída para operar em escala.
      </motion.h2>

      <div style={{ maxWidth: "760px" }}>
        {specs.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.1 + i * 0.1,
              ease: [0.25, 0, 0, 1],
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "0.95rem",
                color: "var(--color-accent)",
              }}
            >
              {s.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "var(--color-text-body)",
                textAlign: "right",
              }}
            >
              {s.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
