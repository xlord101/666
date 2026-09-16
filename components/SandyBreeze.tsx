"use client";

import React, { useEffect, useRef } from "react";

export interface SandyBreezeProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
  intensity?: "gentle" | "medium" | "vibrant";
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  alpha: number;
  baseAlpha: number;
  wobble: number;
  wobbleSpeed: number;
  color: string;
  type: "dust" | "grain" | "crystal";
  twinklePhase: number;
  twinkleSpeed: number;
}

export function SandyBreeze({
  className = "fixed inset-0 pointer-events-none overflow-hidden z-20",
  particleCount = 360,
  interactive = true,
  intensity = "vibrant",
  speed = 1.0,
}: SandyBreezeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let displayWidth = canvas.offsetWidth || window.innerWidth;
    let displayHeight = canvas.offsetHeight || window.innerHeight;

    const setupCanvasSize = () => {
      if (!canvas) return;
      displayWidth = canvas.offsetWidth || window.innerWidth;
      displayHeight = canvas.offsetHeight || window.innerHeight;
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvasSize();
    window.addEventListener("resize", setupCanvasSize);

    // Rich, high-contrast desert sand, warm ochre, amber, and golden dune grains
    const sandPalette = [
      "rgba(185, 139, 62, ",  // Kolhapur Royal Gold
      "rgba(163, 114, 45, ",  // Warm Desert Ochre
      "rgba(139, 94, 38, ",   // Sunbaked Dune Bronze
      "rgba(118, 77, 28, ",   // Deep Earthy Sand Grain
      "rgba(196, 122, 52, ",  // Warm Terracotta Sand
      "rgba(212, 160, 23, ",  // Golden Sand Grain
      "rgba(152, 90, 30, ",   // Spiced Amber Speck
      "rgba(175, 128, 55, ",  // Dune Horizon Gold
    ];

    const intensityMultiplier =
      intensity === "vibrant" ? 1.35 : intensity === "medium" ? 1.15 : 1.0;
    const speedMult = speed * intensityMultiplier;

    // Responsive particle count (plenty of grains across screen)
    const effectiveCount =
      displayWidth < 640
        ? Math.max(160, Math.floor(particleCount * 0.55))
        : particleCount;

    // Create a fine sand particle
    const createParticle = (spawnType?: "anywhere" | "edge"): Particle => {
      const rand = Math.random();
      const type: Particle["type"] =
        rand < 0.55 ? "dust" : rand < 0.88 ? "grain" : "crystal";

      let radius: number;
      let baseAlpha: number;

      // Fine, distinct, and visible sand granules
      if (type === "dust") {
        radius = Math.random() * 0.45 + 0.85; // 0.85px - 1.3px (crisp micro-grain)
        baseAlpha = Math.random() * 0.35 + 0.35; // 0.35 - 0.70
      } else if (type === "grain") {
        radius = Math.random() * 0.6 + 1.25;  // 1.25px - 1.85px (classic sand grain)
        baseAlpha = Math.random() * 0.35 + 0.45; // 0.45 - 0.80
      } else {
        // Shimmering desert crystal glint
        radius = Math.random() * 0.5 + 1.8;   // 1.8px - 2.3px (golden crystal speck)
        baseAlpha = Math.random() * 0.35 + 0.50; // 0.50 - 0.85
      }

      // Spawn position
      let x: number;
      let y: number;
      const blowDirection = Math.random() < 0.75 ? 1 : -1;

      if (spawnType === "anywhere") {
        x = Math.random() * displayWidth;
        y = Math.random() * displayHeight;
      } else {
        // Spawn from windward edge
        if (blowDirection > 0) {
          x = -15 - Math.random() * 30;
        } else {
          x = displayWidth + 15 + Math.random() * 30;
        }
        y = Math.random() * displayHeight;
      }

      // Breeze velocity
      const baseVx =
        blowDirection * (Math.random() * 1.4 + 0.5) * speedMult;
      const baseVy = (Math.random() * 0.45 - 0.2) * speedMult;

      const color = sandPalette[Math.floor(Math.random() * sandPalette.length)];

      return {
        x,
        y,
        radius,
        baseRadius: radius,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        alpha: baseAlpha,
        baseAlpha,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.035 + 0.012,
        color,
        type,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.07 + 0.02,
      };
    };

    // Initial pool distributed across view
    const particles: Particle[] = Array.from({ length: effectiveCount }, () =>
      createParticle("anywhere")
    );

    // Mouse / Touch tracking for natural airflow wake
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      vx: 0,
      vy: 0,
      active: false,
      lastMoveTime: 0,
    };

    const updatePointerPos = (clientX: number, clientY: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;

      if (
        localX >= -60 &&
        localX <= displayWidth + 60 &&
        localY >= -60 &&
        localY <= displayHeight + 60
      ) {
        if (mouse.prevX === -9999) {
          mouse.prevX = localX;
          mouse.prevY = localY;
        } else {
          mouse.prevX = mouse.x;
          mouse.prevY = mouse.y;
        }

        mouse.x = localX;
        mouse.y = localY;
        mouse.vx = mouse.x - mouse.prevX;
        mouse.vy = mouse.y - mouse.prevY;
        mouse.active = true;
        mouse.lastMoveTime = performance.now();
      } else {
        mouse.active = false;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      updatePointerPos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.prevX = -9999;
      mouse.prevY = -9999;
    };

    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    let lastTime = performance.now();
    let globalBreezeCycle = 0;

    // Render loop
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Desert breeze surge cycle (every ~7 seconds a warm gust sweeps gently)
      globalBreezeCycle += 0.007 * dt;
      const breezeGust = Math.sin(globalBreezeCycle) * 0.35;

      // Cursor velocity decay if idle
      if (mouse.active && performance.now() - mouse.lastMoveTime > 250) {
        mouse.vx *= 0.88;
        mouse.vy *= 0.88;
      }

      // Update and render fine sand particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Wobble & Natural Desert Breeze Wind
        p.wobble += p.wobbleSpeed * dt;
        p.twinklePhase += p.twinkleSpeed * dt;

        // Base velocity with gust modulation
        const currentVx = p.baseVx + (p.baseVx > 0 ? breezeGust : -breezeGust);
        p.vx += (currentVx - p.vx) * 0.035 * dt;
        p.vy += (p.baseVy - p.vy) * 0.035 * dt;

        // Interactive Aerodynamic Cursor Airflow Wake
        if (mouse.active && interactive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 110;

          if (dist < pushRadius && dist > 1) {
            const force = (1 - dist / pushRadius);
            const pushAngle = Math.atan2(dy, dx);
            const pushStrength = force * 2.8;
            p.vx += Math.cos(pushAngle) * pushStrength * dt;
            p.vy += Math.sin(pushAngle) * pushStrength * dt;

            // Gentle swirling wake from cursor movement
            const curl = (mouse.vx * dy - mouse.vy * dx) * 0.0018 * force;
            p.vx += -Math.sin(pushAngle) * curl * dt;
            p.vy += Math.cos(pushAngle) * curl * dt;

            // Subtle luminance on proximity
            p.alpha = Math.min(0.75, p.baseAlpha * 1.5);
          }
        }

        // Position integration
        p.x += (p.vx + Math.sin(p.wobble) * 0.35) * dt;
        p.y += (p.vy + Math.cos(p.wobble) * 0.25) * dt;

        // Ease alpha back toward baseAlpha
        p.alpha += (p.baseAlpha - p.alpha) * 0.04 * dt;

        // Recycle particle if blown off screen
        const margin = 40;
        if (
          p.x < -margin ||
          p.x > displayWidth + margin ||
          p.y < -margin ||
          p.y > displayHeight + margin
        ) {
          particles[i] = createParticle("edge");
          continue;
        }

        // Subtle shimmer pulse for crystal grains
        const twinklePulse = (Math.sin(p.twinklePhase) + 1) * 0.5;
        const currentAlpha =
          p.type === "crystal"
            ? p.alpha * (0.8 + twinklePulse * 0.4)
            : p.alpha;

        // DRAW FINE MICRO-GRAIN
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(1, currentAlpha)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", setupCanvasSize);
      if (interactive) {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("pointerleave", handlePointerLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, intensity, speed, interactive]);

  return (
    <div className={className} aria-hidden="true">
      {/* Tactile organic desert sand grain micro-texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sandGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sandGrain)'/%3E%3C/svg%3E")`,
        }}
      />
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
    </div>
  );
}
