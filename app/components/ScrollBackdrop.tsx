"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 142;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

export default function ScrollBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [, setImagesReady] = useState(false);

  const draw = (idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = window.innerWidth;
    const ch = window.innerHeight;

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
        if (i === 0 && !cancelled) draw(0);
        if (loadedCount === FRAME_COUNT && !cancelled) setImagesReady(true);
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rAF loop — progress mapped to the ENTIRE document scroll (top to bottom of the
  // whole landing page), so the animation finishes exactly at the end of the page.
  // No scroll event listener: reads window.scrollY inside the loop each frame.
  useEffect(() => {
    const tick = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, window.scrollY / scrollableHeight))
          : 0;
      const target = Math.round(progress * (FRAME_COUNT - 1));
      if (target !== currentIdxRef.current) {
        draw(target);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (currentIdxRef.current >= 0) {
        const idx = currentIdxRef.current;
        currentIdxRef.current = -1; // force redraw at new dimensions
        draw(idx);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
      }}
    />
  );
}
