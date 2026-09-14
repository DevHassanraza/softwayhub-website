"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("softwayhub-intro-seen");

    if (alreadySeen) {
      return;
    }

    setShowLoader(true);
    document.body.style.overflow = "hidden";

    let value = 0;

    const progressTimer = window.setInterval(() => {
      value += Math.floor(Math.random() * 12) + 5;

      if (value >= 100) {
        value = 100;
        window.clearInterval(progressTimer);
      }

      setProgress(value);
    }, 110);

    const closeTimer = window.setTimeout(() => {
      setProgress(100);

      window.setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("softwayhub-intro-seen", "true");
        document.body.style.overflow = "";
      }, 350);
    }, 1700);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(closeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="sw-intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="sw-intro-grid" />

          <div className="sw-intro-content">
            <motion.div
              className="sw-intro-top sw-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span>SOFTWAYHUB</span>
              <span>SYSTEM / ONLINE</span>
            </motion.div>

            <div className="sw-intro-center">
              <motion.div
                className="sw-intro-mark"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span>S</span>

                <motion.div
                  className="sw-intro-orbit"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span />
                </motion.div>
              </motion.div>

              <div className="sw-intro-word">
                <motion.span
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.55,
                  }}
                >
                  SOFTWAY
                </motion.span>

                <motion.strong
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.55,
                  }}
                >
                  HUB
                </motion.strong>
              </div>

              <motion.p
                className="sw-intro-tag sw-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                BUILD / CONNECT / GROW
              </motion.p>
            </div>

            <div className="sw-intro-bottom">
              <div className="sw-intro-progress-head sw-mono">
                <span>INITIALIZING DIGITAL SYSTEM</span>
                <span>{progress.toString().padStart(3, "0")}%</span>
              </div>

              <div className="sw-intro-progress">
                <motion.div
                  style={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}