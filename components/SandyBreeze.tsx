"use client";

import React, { useEffect, useRef } from "react";

interface SandyBreezeProps {
  className?: string;
  particleCount?: number;
  intensity?: "gentle" | "medium";
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  wobble: number;
  wobbleSpeed: number;
  color: string;
  fromSide: "left" | "right";
}

export function SandyBreeze({
  className = "absolute inset-0 pointer-events-none overflow-hidden z-0",
  particleCount = 42,
  intensity = "gentle",
}: SandyBreezeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm desert sand & beach dune palette
    const sandColors = [
      "rgba(185, 139, 62, ", // Gold
      "rgba(212, 175, 55, ", // Warm gold
      "rgba(229, 192, 123, ", // Sunlight sand
      "rgba(246, 223, 156, ", // Pale dune shimmer
      "rgba(163, 121, 54, ", // Dark amber sand grain
    ];

    const speedMultiplier = intensity === "medium" ? 1.4 : 1.0;

    const createParticle = (initialSide?: "left" | "right"): Particle => {
      const fromSide = initialSide || (Math.random() < 0.55 ? "left" : "right");
      const radius = Math.random() * 2.2 + 0.8;
      const baseAlpha = Math.random() * 0.35 + 0.12;
      const color = sandColors[Math.floor(Math.random() * sandColors.length)];

      // Initial placement: concentrated near the edges
      let x: number;
      if (fromSide === "left") {
        x = Math.random() * (width * 0.35) - 20;
      } else {
        x = width - Math.random() * (width * 0.35) + 20;
      }

      const y = Math.random() * height;

      // Wind blows primarily horizontally with gentle slant
      const vx =
        fromSide === "left"
          ? (Math.random() * 1.8 + 0.8) * speedMultiplier
          : -(Math.random() * 1.8 + 0.8) * speedMultiplier;
      const vy = (Math.random() * 0.6 - 0.2) * speedMultiplier;

      return {
        x,
        y,
        radius,
        vx,
        vy,
        alpha: 0,
        baseAlpha,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        color,
        fromSide,
      };
    };

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const p = createParticle();
      p.alpha = p.baseAlpha;
      return p;
    });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render subtle warm edge ambient breeze gradients
      const leftGlow = ctx.createLinearGradient(0, height * 0.5, width * 0.25, height * 0.5);
      leftGlow.addColorStop(0, "rgba(185, 139, 62, 0.05)");
      leftGlow.addColorStop(1, "rgba(185, 139, 62, 0)");
      ctx.fillStyle = leftGlow;
      ctx.fillRect(0, 0, width * 0.25, height);

      const rightGlow = ctx.createLinearGradient(width, height * 0.5, width * 0.75, height * 0.5);
      rightGlow.addColorStop(0, "rgba(185, 139, 62, 0.05)");
      rightGlow.addColorStop(1, "rgba(185, 139, 62, 0)");
      ctx.fillStyle = rightGlow;
      ctx.fillRect(width * 0.75, 0, width * 0.25, height);

      // Render sand particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.wobble += p.wobbleSpeed * dt;
        p.x += (p.vx + Math.sin(p.wobble) * 0.4) * dt;
        p.y += (p.vy + Math.cos(p.wobble) * 0.3) * dt;

        // Fade in when entering, fade out near center or opposite edge
        const distFromEdge = p.fromSide === "left" ? p.x : width - p.x;
        const fadeZone = width * 0.55;
        if (distFromEdge < 50) {
          p.alpha = Math.min(p.baseAlpha, (distFromEdge / 50) * p.baseAlpha);
        } else if (distFromEdge > fadeZone) {
          p.alpha = Math.max(0, p.baseAlpha * (1 - (distFromEdge - fadeZone) / (width * 0.4)));
        } else {
          p.alpha = p.baseAlpha;
        }

        // Recycle particle if out of bounds or invisible
        if (
          p.x < -40 ||
          p.x > width + 40 ||
          p.y < -30 ||
          p.y > height + 30 ||
          p.alpha <= 0.01
        ) {
          particles[i] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Extra sparkling highlight on larger sand crystals
        if (p.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x - 0.4, p.y - 0.4, p.radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 245, ${p.alpha * 0.75})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [particleCount, intensity]);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
