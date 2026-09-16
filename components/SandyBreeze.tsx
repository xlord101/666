"use client";

import React, { useEffect, useRef } from "react";

export interface SandyBreezeProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
  intensity?: "gentle" | "medium" | "vibrant";
  speed?: number;
  fullWidthDrift?: boolean;
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
  type: "dust" | "grain" | "crystal" | "spark";
  life?: number;
  maxLife?: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  strength: number;
}

export function SandyBreeze({
  className = "absolute inset-0 pointer-events-none overflow-hidden z-0",
  particleCount = 85,
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

    // Warm desert sand, sunlit dune, and gold quartz crystals
    const sandPalette = [
      "rgba(185, 139, 62, ",  // Kolhapur Royal Gold
      "rgba(212, 175, 55, ",  // Warm sunlit gold
      "rgba(229, 192, 123, ", // Desert sand shimmer
      "rgba(246, 223, 156, ", // Pale dune light
      "rgba(202, 160, 82, ",  // Amber grain
      "rgba(255, 238, 187, ", // Golden highlight quartz
    ];

    const intensityMultiplier =
      intensity === "vibrant" ? 1.45 : intensity === "medium" ? 1.2 : 1.0;
    const speedMult = speed * intensityMultiplier;

    // Responsive particle count (slight reduction on tiny screens)
    const effectiveCount =
      displayWidth < 640
        ? Math.max(35, Math.floor(particleCount * 0.65))
        : particleCount;

    // Create a new sand particle
    const createParticle = (
      spawnType?: "anywhere" | "edge",
      customType?: "spark",
      px?: number,
      py?: number
    ): Particle => {
      const rand = Math.random();
      const type: Particle["type"] =
        customType || (rand < 0.42 ? "dust" : rand < 0.80 ? "grain" : "crystal");

      let radius: number;
      let baseAlpha: number;
      if (type === "dust") {
        radius = Math.random() * 1.3 + 0.6;
        baseAlpha = Math.random() * 0.35 + 0.15;
      } else if (type === "grain") {
        radius = Math.random() * 2.0 + 1.2;
        baseAlpha = Math.random() * 0.45 + 0.25;
      } else if (type === "crystal") {
        radius = Math.random() * 2.6 + 1.8;
        baseAlpha = Math.random() * 0.65 + 0.35;
      } else {
        // Interactive spark
        radius = Math.random() * 2.4 + 1.4;
        baseAlpha = 0.9;
      }

      // Spawn position
      let x: number;
      let y: number;
      const blowDirection = Math.random() < 0.72 ? 1 : -1; // 72% left-to-right, 28% right-to-left

      if (px !== undefined && py !== undefined) {
        x = px + (Math.random() * 20 - 10);
        y = py + (Math.random() * 20 - 10);
      } else if (spawnType === "anywhere") {
        x = Math.random() * displayWidth;
        y = Math.random() * displayHeight;
      } else {
        // Spawn from windward edge
        if (blowDirection > 0) {
          x = -20 - Math.random() * 40;
        } else {
          x = displayWidth + 20 + Math.random() * 40;
        }
        y = Math.random() * displayHeight;
      }

      // Breeze velocity
      const baseVx =
        blowDirection * (Math.random() * 1.6 + 0.7) * speedMult;
      const baseVy = (Math.random() * 0.6 - 0.25) * speedMult;

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
        wobbleSpeed: Math.random() * 0.04 + 0.015,
        color,
        type,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.08 + 0.03,
        life: customType === "spark" ? 50 : undefined,
        maxLife: customType === "spark" ? 50 : undefined,
      };
    };

    // Initial pool distributed across view
    const particles: Particle[] = Array.from({ length: effectiveCount }, () =>
      createParticle("anywhere")
    );

    // Interactive shockwaves from taps/clicks
    const shockwaves: Shockwave[] = [];

    // Mouse / Touch tracking
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
        localX >= -80 &&
        localX <= displayWidth + 80 &&
        localY >= -80 &&
        localY <= displayHeight + 80
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

        // High velocity cursor motion kicks up golden sand sparks!
        const cursorSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
        if (interactive && cursorSpeed > 5 && particles.length < effectiveCount + 25) {
          if (Math.random() < 0.45) {
            particles.push(createParticle(undefined, "spark", mouse.x, mouse.y));
          }
        }
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

    const handlePointerDown = (e: PointerEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      if (
        localX >= 0 &&
        localX <= displayWidth &&
        localY >= 0 &&
        localY <= displayHeight
      ) {
        // Spawn shockwave ripple
        shockwaves.push({
          x: localX,
          y: localY,
          radius: 10,
          maxRadius: Math.min(displayWidth * 0.45, 240),
          alpha: 0.85,
          strength: 14,
        });

        // Spawn a burst of sparkling sand crystals
        for (let s = 0; s < 7; s++) {
          const spark = createParticle(undefined, "spark", localX, localY);
          const angle = Math.random() * Math.PI * 2;
          const burstSpeed = Math.random() * 4 + 2;
          spark.vx = Math.cos(angle) * burstSpeed;
          spark.vy = Math.sin(angle) * burstSpeed;
          particles.push(spark);
        }
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.prevX = -9999;
      mouse.prevY = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    // Intersection observer so it pauses when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let lastTime = performance.now();
    let globalBreezeCycle = 0;

    // Helper: draw 4-point golden twinkle star for crystals
    const drawTwinkleStar = (
      x: number,
      y: number,
      size: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(255, 248, 220, ${alpha})`;
      ctx.beginPath();
      // 4-pointed star
      const s = size * 1.6;
      const w = size * 0.35;
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(w, -w, s, 0);
      ctx.quadraticCurveTo(w, w, 0, s);
      ctx.quadraticCurveTo(-w, w, -s, 0);
      ctx.quadraticCurveTo(-w, -w, 0, -s);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Render loop
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Desert breeze surge cycle (every ~7 seconds a warm gust sweeps gently)
      globalBreezeCycle += 0.008 * dt;
      const breezeGust = Math.sin(globalBreezeCycle) * 0.45;

      // Cursor decay if idle
      if (mouse.active && performance.now() - mouse.lastMoveTime > 300) {
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
      }

      // Update and render shockwaves
      for (let w = shockwaves.length - 1; w >= 0; w--) {
        const sw = shockwaves[w];
        sw.radius += (sw.maxRadius - sw.radius) * 0.12 * dt + 1.5;
        sw.alpha *= 0.92;

        if (sw.alpha > 0.02) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212, 175, 55, ${sw.alpha * 0.45})`;
          ctx.lineWidth = Math.max(1, 3 * (1 - sw.radius / sw.maxRadius));
          ctx.stroke();

          // Subtle inner golden haze
          const hazeGrad = ctx.createRadialGradient(
            sw.x,
            sw.y,
            Math.max(0, sw.radius - 25),
            sw.x,
            sw.y,
            sw.radius
          );
          hazeGrad.addColorStop(0, "rgba(229, 192, 123, 0)");
          hazeGrad.addColorStop(1, `rgba(229, 192, 123, ${sw.alpha * 0.18})`);
          ctx.fillStyle = hazeGrad;
          ctx.fill();
          ctx.restore();
        }

        if (sw.alpha <= 0.02 || sw.radius >= sw.maxRadius - 2) {
          shockwaves.splice(w, 1);
        }
      }

      // Update and render sand particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Handle spark lifecycle
        if (p.life !== undefined && p.maxLife !== undefined) {
          p.life -= dt;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
          p.alpha = (p.life / p.maxLife) * p.baseAlpha;
        }

        // Wobble & Natural Desert Breeze Wind
        p.wobble += p.wobbleSpeed * dt;
        p.twinklePhase += p.twinkleSpeed * dt;

        // Base velocity with gust modulation
        const currentVx = p.baseVx + (p.baseVx > 0 ? breezeGust : -breezeGust);
        p.vx += (currentVx - p.vx) * 0.04 * dt;
        p.vy += (p.baseVy - p.vy) * 0.04 * dt;

        // 1. MOUSE / TOUCH INTERACTIVE AERODYNAMIC AIRFLOW
        if (mouse.active && interactive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 135;

          if (dist < pushRadius && dist > 1) {
            const force = (1 - dist / pushRadius);
            // Repulsion airflow
            const pushAngle = Math.atan2(dy, dx);
            const pushStrength = force * 4.2;
            p.vx += Math.cos(pushAngle) * pushStrength * dt;
            p.vy += Math.sin(pushAngle) * pushStrength * dt;

            // Swirling air wake from cursor velocity
            const curl = (mouse.vx * dy - mouse.vy * dx) * 0.003 * force;
            p.vx += -Math.sin(pushAngle) * curl * dt;
            p.vy += Math.cos(pushAngle) * curl * dt;

            // Extra luminance on interactive contact
            p.alpha = Math.min(1.0, p.baseAlpha * 1.6);
          }
        }

        // 2. SHOCKWAVE DISPLACEMENT
        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const waveDist = Math.abs(dist - sw.radius);

          if (waveDist < 35 && dist > 1) {
            const shockForce = (1 - waveDist / 35) * (sw.alpha * 6.5);
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * shockForce * dt;
            p.vy += Math.sin(angle) * shockForce * dt;
            p.alpha = Math.min(1.0, p.baseAlpha * 1.8);
          }
        }

        // Position integration
        p.x += (p.vx + Math.sin(p.wobble) * 0.45) * dt;
        p.y += (p.vy + Math.cos(p.wobble) * 0.35) * dt;

        // Reset alpha back toward baseAlpha if not near cursor/shockwave
        if (p.life === undefined) {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05 * dt;
        }

        // Recycle particle if blown off screen
        const margin = 60;
        if (
          p.x < -margin ||
          p.x > displayWidth + margin ||
          p.y < -margin ||
          p.y > displayHeight + margin
        ) {
          if (particles.length > effectiveCount) {
            // Trim excess sparks
            particles.splice(i, 1);
            continue;
          } else {
            particles[i] = createParticle("edge");
            continue;
          }
        }

        // Calculate rendered size with sparkle pulse
        const twinklePulse = (Math.sin(p.twinklePhase) + 1) * 0.5; // 0 to 1
        const renderRadius =
          p.type === "crystal"
            ? p.baseRadius * (0.85 + twinklePulse * 0.45)
            : p.radius;

        // DRAW PARTICLE
        ctx.beginPath();
        ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(1, p.alpha)})`;
        ctx.fill();

        // CRYSTAL & SPARK SPECIAL HIGHLIGHTS: Sun quartz twinkle
        if (p.type === "crystal" && twinklePulse > 0.65) {
          const starAlpha = (twinklePulse - 0.65) * 2.8 * p.alpha;
          drawTwinkleStar(p.x, p.y, renderRadius * 1.2, starAlpha);
        } else if (p.radius > 1.8) {
          // Specular sun reflection glint
          ctx.beginPath();
          ctx.arc(p.x - 0.5, p.y - 0.5, p.radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 245, ${p.alpha * 0.85})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", setupCanvasSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [particleCount, intensity, speed, interactive]);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
