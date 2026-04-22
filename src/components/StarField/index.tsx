import { useEffect, useRef } from "react";
import { SYMBOLS } from "./symbols";
import s from "./StarField.module.scss";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  speed: number;
}

interface Glyph {
  x: number;
  y: number;
  drawIndex: number;
  size: number;
  a: number;
  aMax: number;
  aSpeed: number;
  vx: number;
  vy: number;
  gold: boolean;
}


function makeGlyph(width: number, height: number, index: number): Glyph {
  return {
    x: Math.random() * (width - 120) + 60,
    y: Math.random() * (height - 120) + 60,
    drawIndex: index,
    size: Math.random() * 30 + 20,
    a: Math.random() * 0.2,
    aMax: Math.random() * 0.2 + 0.2,
    aSpeed: Math.random() * 0.00025 + 0.0001,
    vx: (Math.random() - 0.5) * 0.07,
    vy: (Math.random() - 0.5) * 0.055,
    gold: Math.random() < 0.35,
  };
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }));

    const glyphs: Glyph[] = SYMBOLS.map((_, index) => makeGlyph(canvas.width, canvas.height, index));

    let rafId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      // Étoiles
      stars.forEach((s) => {
        s.a += s.speed;
        if (s.a > 1 || s.a < 0) s.speed = -s.speed;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,201,240,${Math.abs(s.a) * 0.8 + 0.1})`;
        ctx.fill();
      });

      // Glyphes
      glyphs.forEach((g) => {
        g.a += g.aSpeed;
        if (g.a >= g.aMax || g.a <= 0) g.aSpeed = -g.aSpeed;

        g.x += g.vx;
        g.y += g.vy;
        if (g.x < -80) g.x = canvas!.width + 40;
        if (g.x > canvas!.width + 80) g.x = -40;
        if (g.y < -80) g.y = canvas!.height + 40;
        if (g.y > canvas!.height + 80) g.y = -40;

        const color = g.gold
          ? `rgba(201,168,76,${g.a})`
          : `rgba(212,201,240,${g.a})`;

        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1.4;
        SYMBOLS[g.drawIndex](ctx, g.x, g.y, g.size);
        ctx.restore();
      });

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={s.canvas} />;
}
