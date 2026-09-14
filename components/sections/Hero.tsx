"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const nodes = [
  { label: "WEB", className: "node-web" },
  { label: "AI", className: "node-ai" },
  { label: "API", className: "node-api" },
  { label: "CLOUD", className: "node-cloud" },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });

  const coreX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const coreY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      className="sw-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="sw-hero-grid" />
      <div className="sw-hero-noise" />
      <div className="sw-hero-glow sw-hero-glow-one" />
      <div className="sw-hero-glow sw-hero-glow-two" />

      <div className="sw-container sw-hero-container">
        {/* LEFT */}
        <div className="sw-hero-copy">
          <motion.div
            className="sw-hero-eyebrow sw-mono"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="sw-hero-status-dot" />
            SOFTWARE / DIGITAL / ENGINEERING
          </motion.div>

          <motion.h1
            className="sw-hero-title sw-display"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            We engineer
            <br />
            digital products
            <br />
            <span>built to move</span>
            <br />
            business forward.
          </motion.h1>

          <motion.p
            className="sw-hero-description"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            From high-performance websites to modern software and connected
            digital systems, SoftwayHub turns ambitious ideas into reliable
            products built for the real world.
          </motion.p>

          <motion.div
            className="sw-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
          >
            <Link href="/contact" className="sw-hero-primary">
              <span>Start a Project</span>
              <span>↗</span>
            </Link>

            <Link href="/#work" className="sw-hero-secondary">
              <span>Explore Our Work</span>
              <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            className="sw-hero-meta sw-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            <div>
              <span>01 / BUILD</span>
              <strong>Digital Products</strong>
            </div>

            <div>
              <span>02 / CONNECT</span>
              <strong>Modern Systems</strong>
            </div>

            <div>
              <span>03 / SHIP</span>
              <strong>Real Solutions</strong>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="sw-hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            x: coreX,
            y: coreY,
          }}
        >
          <div className="sw-core-hud sw-core-hud-top sw-mono">
            <span>SW / SYSTEM</span>
            <span className="is-live">
              <i />
              ONLINE
            </span>
          </div>

          <div className="sw-core-stage">
            <div className="sw-core-ring ring-one" />
            <div className="sw-core-ring ring-two" />
            <div className="sw-core-ring ring-three" />

            <div className="sw-core-orbit orbit-one">
              <span />
            </div>

            <div className="sw-core-orbit orbit-two">
              <span />
            </div>

            <div className="sw-core-crosshair horizontal" />
            <div className="sw-core-crosshair vertical" />

            {nodes.map((node) => (
              <div
                key={node.label}
                className={`sw-core-node ${node.className} sw-mono`}
              >
                <i />
                {node.label}
              </div>
            ))}

            <div className="sw-core-center">
              <div className="sw-core-center-glow" />

                <motion.div
                className="sw-digital-core"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                }}
                >
                <svg
                    viewBox="0 0 160 160"
                    className="sw-digital-core-svg"
                    aria-hidden="true"
                >
                    <defs>
                    <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#39d8ff" />
                        <stop offset="100%" stopColor="#185cff" />
                    </linearGradient>

                    <filter id="coreGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    </defs>

                    {/* Outer technology frame */}
                    <motion.polygon
                    points="80,10 132,40 150,92 118,142 62,150 14,112 18,52"
                    fill="none"
                    stroke="url(#coreGradient)"
                    strokeWidth="1.2"
                    strokeDasharray="5 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8 }}
                    />

                    {/* Inner diamond */}
                    <motion.polygon
                    points="80,32 128,80 80,128 32,80"
                    fill="rgba(24,92,255,0.08)"
                    stroke="url(#coreGradient)"
                    strokeWidth="1.5"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ transformOrigin: "80px 80px" }}
                    />

                    {/* Connecting system lines */}
                    <path
                    d="M80 10 V32 M150 92 L128 80 M118 142 L80 128 M14 112 L32 80 M18 52 L32 80"
                    fill="none"
                    stroke="#39d8ff"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    />

                    {/* Data nodes */}
                    <circle cx="80" cy="10" r="3" fill="#39d8ff" filter="url(#coreGlow)" />
                    <circle cx="150" cy="92" r="3" fill="#39d8ff" filter="url(#coreGlow)" />
                    <circle cx="118" cy="142" r="3" fill="#185cff" filter="url(#coreGlow)" />
                    <circle cx="14" cy="112" r="3" fill="#39d8ff" filter="url(#coreGlow)" />
                    <circle cx="18" cy="52" r="3" fill="#185cff" filter="url(#coreGlow)" />
                </svg>

                {/* Stationary center */}
                <motion.div
                    className="sw-digital-core-center"
                    animate={{
                    rotate: [0, -360],
                    scale: [1, 1.06, 1],
                    }}
                    transition={{
                    rotate: {
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    scale: {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                >
                    <span className="sw-core-symbol">
                    <i />
                    <i />
                    <i />
                    </span>
                </motion.div>
                </motion.div>

              <div className="sw-core-caption sw-mono">
                ENGINEERING CORE
              </div>
            </div>

            <div className="sw-core-data data-one sw-mono">
              <span>BUILD</span>
              <strong>01</strong>
            </div>

            <div className="sw-core-data data-two sw-mono">
              <span>DEPLOY</span>
              <strong>02</strong>
            </div>
          </div>

          <div className="sw-core-hud sw-core-hud-bottom sw-mono">
            <span>PRODUCT SYSTEM / ACTIVE</span>
            <span>BUILD → CONNECT → SCALE</span>
          </div>
        </motion.div>
      </div>

      <div className="sw-hero-bottom">
        <div className="sw-container sw-hero-bottom-inner sw-mono">
          <span>SCROLL TO DISCOVER</span>

          <div className="sw-hero-scroll-line">
            <motion.span
              animate={{ x: ["-100%", "500%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <span>SOFTWAYHUB / 2026</span>
        </div>
      </div>
    </section>
  );
}