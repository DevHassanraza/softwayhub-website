"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Engineering First",
    description:
      "Clean, scalable development built with long-term quality, performance and reliability in mind.",
    label: "QUALITY / SCALE",
  },
  {
    number: "02",
    title: "Built Around Business",
    description:
      "Technology shaped around real business requirements — focused on solving problems without unnecessary complexity.",
    label: "BUSINESS / VALUE",
  },
  {
    number: "03",
    title: "Clear Delivery",
    description:
      "A transparent process from planning and development through testing, launch and continuous improvement.",
    label: "PROCESS / DELIVERY",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description:
      "Digital products designed to evolve with your business instead of becoming a limitation as you grow.",
    label: "GROWTH / FUTURE",
  },
];

export default function WhySoftwayHub() {
  return (
    <section className="sw-why sw-section" id="why-softwayhub">
      <div className="sw-why-grid" aria-hidden="true" />
      <div className="sw-why-glow" aria-hidden="true" />

      <div className="sw-container sw-why-container">
        {/* HEADER */}
        <motion.div
          className="sw-why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="sw-why-label sw-mono">
              04 / WHY SOFTWAYHUB
            </span>

            <h2 className="sw-why-title sw-display">
              Built differently.
              <span> Delivered responsibly.</span>
            </h2>
          </div>

          <p className="sw-why-intro">
            Good technology is more than clean code. It should solve the
            right problem, support the business and continue creating value
            after launch.
          </p>
        </motion.div>

        {/* MAIN SYSTEM */}
        <div className="sw-why-system">
          <div className="sw-why-system-line" aria-hidden="true">
            <span />
          </div>

          <div className="sw-why-list">
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.number}
                className="sw-why-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="sw-why-item-top">
                  <span className="sw-why-number sw-mono">
                    {reason.number}
                  </span>

                  <span className="sw-why-item-label sw-mono">
                    {reason.label}
                  </span>
                </div>

                <div className="sw-why-item-content">
                  <h3 className="sw-display">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>

                <div className="sw-why-item-footer">
                  <span className="sw-why-status-dot" />
                  <span className="sw-mono">SOFTWAYHUB STANDARD</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CENTER CONNECTION */}
          <div className="sw-why-core" aria-hidden="true">
            <span className="sw-why-core-ring ring-one" />
            <span className="sw-why-core-ring ring-two" />

            <div className="sw-why-core-center">
              <span>SW</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          className="sw-why-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="sw-mono">ENGINEER WITH PURPOSE</span>

          <div className="sw-why-bottom-line">
            <span />
          </div>

          <span className="sw-mono">BUILD → DELIVER → EVOLVE</span>
        </motion.div>
      </div>
    </section>
  );
}