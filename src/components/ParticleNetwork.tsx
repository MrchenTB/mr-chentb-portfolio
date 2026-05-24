import { useEffect, useRef } from 'react';
import styles from './ParticleNetwork.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ox: number;
  oy: number;
  r: number;
  /** Depth in [0.4, 1]. Higher = closer to viewer. */
  depth: number;
  /** Pre-tinted "r, g, b" string for the dot fill (interpolated by depth). */
  dotColor: string;
}

interface Props {
  /** Particles per pixel². Default ~ 1 particle per 10000 px². */
  density?: number;
  /** Max distance for particle-to-particle links (px). */
  linkDistance?: number;
  /** Mouse influence radius (px). */
  influence?: number;
  /** Mid-gold "r, g, b" — used for line color. */
  color?: string;
  /** Champagne / soft-gold "r, g, b" — used for low-depth (far) particles. */
  colorLight?: string;
  /** Deep-gold "r, g, b" — used for high-depth (near) particles. */
  colorDeep?: string;
  /** Overall opacity multiplier. */
  intensity?: number;
  /** Parallax strength: depth-driven mouse response. 0 disables, 1 default. */
  parallax?: number;
  /** Mouse halo strength. 0 disables the glow. */
  glow?: number;
  className?: string;
}

const isMobileWidth = () => window.innerWidth < 768;
const isLowPerf = () =>
  typeof navigator !== 'undefined' &&
  typeof navigator.hardwareConcurrency === 'number' &&
  navigator.hardwareConcurrency > 0 &&
  navigator.hardwareConcurrency <= 4;

export default function ParticleNetwork({
  density = 1 / 10000,
  linkDistance = 200,
  influence = 235,
  color = '196, 153, 42',
  colorLight = '230, 205, 139',
  colorDeep = '138, 106, 24',
  intensity = 1.6,
  parallax = 1,
  glow = 1,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let rafId: number | null = null;

    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = reduceMq.matches;

    // Parse gold tones once; tint per-particle string composed at creation.
    const parseRgb = (s: string): [number, number, number] => {
      const p = s.split(',').map((v) => parseFloat(v.trim()));
      return [p[0] || 0, p[1] || 0, p[2] || 0];
    };
    const [clR, clG, clB] = parseRgb(colorLight);
    const [cdR, cdG, cdB] = parseRgb(colorDeep);
    const tintAt = (d: number) => {
      const t = (d - 0.4) / 0.6; // 0 (far) .. 1 (near)
      const r = (clR + (cdR - clR) * t) | 0;
      const g = (clG + (cdG - clG) * t) | 0;
      const b = (clB + (cdB - clB) * t) | 0;
      return `${r}, ${g}, ${b}`;
    };

    const createParticles = () => {
      const area = width * height;
      let factor = density;
      if (isMobileWidth()) factor *= 0.45;
      else if (isLowPerf()) factor *= 0.65;
      const target = Math.max(18, Math.min(140, Math.round(area * factor)));
      // Jittered grid: one particle per cell, randomly offset within the cell.
      // Produces an even visual distribution (no clusters/voids) while still
      // looking organic. Cell shape follows the canvas aspect ratio so the
      // sides of a wide hero get the same coverage as the middle.
      const aspect = width / Math.max(height, 1);
      const rows = Math.max(1, Math.round(Math.sqrt(target / aspect)));
      const cols = Math.max(1, Math.round(target / rows));
      const cellW = width / cols;
      const cellH = height / rows;
      particles = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c + Math.random()) * cellW;
          const y = (r + Math.random()) * cellH;
          const depth = 0.4 + Math.random() * 0.6;
          particles.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: 0.4 + depth * 1.1 + Math.random() * 0.15,
            depth,
            dotColor: tintAt(depth),
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= -influence &&
        mouse.x <= width + influence &&
        mouse.y >= -influence &&
        mouse.y <= height + influence;
    };
    const onMouseLeaveDoc = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouse.x = t.clientX - rect.left;
      mouse.y = t.clientY - rect.top;
      mouse.active = true;
    };
    const onTouchEnd = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      const inf = influence;
      const inf2 = inf * inf;
      const ld2 = linkDistance * linkDistance;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          // restoring force toward origin (keeps particles distributed)
          p.vx += (p.ox - p.x) * 0.0009;
          p.vy += (p.oy - p.y) * 0.0009;
          // mouse repulsion
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < inf2 && d2 > 0.0001) {
              const d = Math.sqrt(d2);
              // Parallax: front-layer particles (high depth) push more.
              const force =
                (1 - d / inf) * 0.65 * (0.7 + p.depth * 0.5) * parallax;
              p.vx += (dx / d) * force;
              p.vy += (dy / d) * force;
            }
          }
          // damping
          p.vx *= 0.94;
          p.vy *= 0.94;
        }
      }

      // particle-to-particle links
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < ld2) {
            const avgDepth = (a.depth + b.depth) * 0.5;
            const alpha =
              (1 - d2 / ld2) * 0.5 * (0.65 + avgDepth * 0.5) * intensity;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse-to-particle links
      if (mouse.active) {
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < inf2) {
            const alpha =
              (1 - d2 / inf2) * 0.8 * (0.7 + p.depth * 0.4) * intensity;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // mouse halo — very restrained, only near cursor, scaled by depth
      if (mouse.active && glow > 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < inf2) {
            const a = (1 - d2 / inf2) * 0.18 * p.depth * glow * intensity;
            ctx.fillStyle = `rgba(${color}, ${a})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // dots — tinted by depth (champagne → deep gold), alpha scaled by depth
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const a = (0.45 + p.depth * 0.5) * intensity;
        ctx.fillStyle = `rgba(${p.dotColor}, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    };

    const start = () => {
      if (rafId === null) rafId = requestAnimationFrame(step);
    };
    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };
    const onReduceChange = (e: MediaQueryListEvent) => {
      reduced = e.matches;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    document.addEventListener('visibilitychange', onVis);
    reduceMq.addEventListener('change', onReduceChange);

    start();

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('visibilitychange', onVis);
      reduceMq.removeEventListener('change', onReduceChange);
    };
  }, [
    density,
    linkDistance,
    influence,
    color,
    colorLight,
    colorDeep,
    intensity,
    parallax,
    glow,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}
