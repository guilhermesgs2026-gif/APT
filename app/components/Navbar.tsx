"use client";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 6vw",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(0,0,0,0.35)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.35rem",
          color: "var(--color-text-primary)",
          letterSpacing: "0.02em",
        }}
      >
        APT
      </span>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
        }}
        className="navbar-links"
      >
        <a
          href="#diferenciais"
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-body)",
            letterSpacing: "0.02em",
          }}
        >
          Produto
        </a>
        <a
          href="#specs"
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-body)",
            letterSpacing: "0.02em",
          }}
        >
          Especificações
        </a>
        <a href="#cta" className="pill-button pill-button-outline" style={{ padding: "0.6rem 1.4rem" }}>
          Solicitar demonstração
        </a>
      </nav>
    </header>
  );
}
