"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAME_COUNT = 142;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [imagesReady, setImagesReady] = useState(false);

  // Draw a given frame index, cover-fit centered on the canvas
  const draw = (idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const drawW = iw * scale;
    const drawH = ih * scale;
    const offsetX = (cw - drawW) / 2;
    const offsetY = (ch - drawH) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    currentIdxRef.current = idx;
  };

  // Preload all frames
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        if (i === 0 && !cancelled) {
          draw(0);
        }
        if (loadedCount === FRAME_COUNT && !cancelled) {
          setImagesReady(true);
        }
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rAF loop reading scroll position via getBoundingClientRect — no scroll event listener
  useEffect(() => {
    const tick = () => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const scrollableHeight = container.offsetHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.max(0, Math.min(1, -rect.top / scrollableHeight))
            : 0;
        const target = Math.round(progress * (FRAME_COUNT - 1));
        if (target !== currentIdxRef.current) {
          draw(target);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesReady]);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (currentIdxRef.current >= 0) {
        const idx = currentIdxRef.current;
        currentIdxRef.current = -1; // force redraw
        draw(idx);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 6vw 8vh",
          }}
        >
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
        </div>
      </div>
    </div>
  );
}
