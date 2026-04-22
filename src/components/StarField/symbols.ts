export type DrawFn = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => void;

export const SYMBOLS: DrawFn[] = [
  // Soleil : cercle + point central
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.arc(x, y, s * 0.42, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, s * 0.08, 0, Math.PI * 2);
    ctx.fill();
  },
  // Lune croissant — arcs partageant les mêmes pointes (haut/bas)
  (ctx, x, y, s) => {
    const r = s * 0.42;
    const offset = r * 0.55;
    const r2 = Math.sqrt(offset * offset + r * r);
    const tipAngle = Math.atan2(r, -offset);
    ctx.beginPath();
    ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2);
    ctx.arc(x + offset, y, r2, tipAngle, -tipAngle, true);
    ctx.closePath();
    ctx.stroke();
  },
  // Triangle (Feu)
  (ctx, x, y, s) => {
    const h = s * 0.78;
    ctx.beginPath();
    ctx.moveTo(x, y - h * 0.58);
    ctx.lineTo(x + h * 0.5, y + h * 0.4);
    ctx.lineTo(x - h * 0.5, y + h * 0.4);
    ctx.closePath();
    ctx.stroke();
  },
  // Triangle inversé (Eau)
  (ctx, x, y, s) => {
    const h = s * 0.78;
    ctx.beginPath();
    ctx.moveTo(x, y + h * 0.58);
    ctx.lineTo(x + h * 0.5, y - h * 0.4);
    ctx.lineTo(x - h * 0.5, y - h * 0.4);
    ctx.closePath();
    ctx.stroke();
  },
  // Croix simple
  (ctx, x, y, s) => {
    const r = s * 0.4;
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x, y + r);
    ctx.moveTo(x - r, y);
    ctx.lineTo(x + r, y);
    ctx.stroke();
  },
  // Vénus : cercle + croix en dessous
  (ctx, x, y, s) => {
    const r = s * 0.28;
    ctx.beginPath();
    ctx.arc(x, y - r * 0.6, r, 0, Math.PI * 2);
    ctx.stroke();
    const base = y - r * 0.6 + r;
    ctx.beginPath();
    ctx.moveTo(x, base);
    ctx.lineTo(x, base + r);
    ctx.moveTo(x - r * 0.55, base + r * 0.5);
    ctx.lineTo(x + r * 0.55, base + r * 0.5);
    ctx.stroke();
  },
  // Terre : cercle avec croix inscrite (⊕)
  (ctx, x, y, s) => {
    const r = s * 0.4;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - r, y);
    ctx.lineTo(x + r, y);
    ctx.moveTo(x, y - r);
    ctx.lineTo(x, y + r);
    ctx.stroke();
  },
  // Hexagone
  (ctx, x, y, s) => {
    const r = s * 0.42;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const px = x + r * Math.cos(a);
      const py = y + r * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  },
  // Étoile à 4 branches (✦)
  (ctx, x, y, s) => {
    const r = s * 0.42;
    const ir = r * 0.3;
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI / 4) * i - Math.PI / 2;
      const dist = i % 2 === 0 ? r : ir;
      const px = x + dist * Math.cos(a);
      const py = y + dist * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  },
  // Saturne : cercle + ellipse anneau
  (ctx, x, y, s) => {
    const r = s * 0.28;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x, y + r * 0.05, r * 1.5, r * 0.38, -0.15, 0, Math.PI * 2);
    ctx.stroke();
  },
  // Mars : cercle + flèche diagonale
  (ctx, x, y, s) => {
    const r = s * 0.28;
    const cx = x - r * 0.15;
    const cy = y + r * 0.15;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    const ex = cx + r * Math.cos(-Math.PI / 4);
    const ey = cy + r * Math.sin(-Math.PI / 4);
    const tx = ex + r * 0.55;
    const ty = ey - r * 0.55;
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(tx, ty);
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx - r * 0.35, ty);
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx, ty + r * 0.35);
    ctx.stroke();
  },
  // Mercure : cercle + croix en dessous + croissant au sommet
  (ctx, x, y, s) => {
    const r = s * 0.22;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y + r);
    ctx.lineTo(x, y + r + r * 0.9);
    ctx.moveTo(x - r * 0.5, y + r + r * 0.45);
    ctx.lineTo(x + r * 0.5, y + r + r * 0.45);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y - r * 0.95, r * 0.42, Math.PI, 0);
    ctx.stroke();
  },
];
