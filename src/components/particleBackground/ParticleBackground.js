import React, { useEffect, useRef } from "react";
import styles from "./ParticleBackground.module.css";

export default function ParticleBackground({
  color = "#0E6BA8",
  density = 0.00006,
  maxDistance = 120,
  speed = 0.2,
  opacity = 0.35,
} = {}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(20, Math.min(70, Math.floor(width * height * density)));
      particlesRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 1 + Math.random() * 1.2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const hexToRgb = (hex) => {
      const clean = hex.replace("#", "");
      const bigint = parseInt(
        clean.length === 3
          ? clean.split("").map((c) => c + c).join("")
          : clean,
        16
      );
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };
    const rgb = hexToRgb(color);

    // Both line and node alpha scale with opacity prop so the whole thing can be dimmed
    const lineBase = 0.15 * opacity;
    const nodeBase = 0.55 * opacity;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = lineBase * (1 - dist / maxDistance);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nodeBase})`;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, maxDistance, speed, opacity]);

  return (
    <div className={styles["particle-wrapper"]} aria-hidden="true">
      <canvas ref={canvasRef} className={styles["particle-canvas"]} />
    </div>
  );
}
