"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand the business, goals, users and the real problem the product needs to solve.",
    meta: "GOALS / REQUIREMENTS",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We define the right approach, project structure and priorities before development begins.",
    meta: "PLAN / DIRECTION",
  },
  {
    number: "03",
    title: "Design",
    text: "We shape clear, intuitive digital experiences around the product and its users.",
    meta: "UX / INTERFACE",
  },
  {
    number: "04",
    title: "Engineer",
    text: "We turn the approved direction into a reliable, responsive and scalable digital product.",
    meta: "BUILD / INTEGRATE",
  },
  {
    number: "05",
    title: "Test",
    text: "We validate functionality, responsiveness, performance and key user journeys before release.",
    meta: "QA / PERFORMANCE",
  },
  {
    number: "06",
    title: "Launch",
    text: "We prepare the production environment and move the product into the real world with care.",
    meta: "DEPLOY / RELEASE",
  },
  {
    number: "07",
    title: "Improve",
    text: "After launch, we continue refining the product as requirements, users and opportunities evolve.",
    meta: "SUPPORT / EVOLVE",
  },
];

export default function Process() {
  return (
    <section className="sw-process sw-section" id="process">
      <div className="sw-process-grid" aria-hidden="true" />
      <div className="sw-process-glow" aria-hidden="true" />

      <div className="sw-container sw-process-container">
        <motion.div
          className="sw-process-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="sw-process-label sw-mono">
              05 / PROCESS
            </span>

            <h2 className="sw-process-title sw-display">
              From idea to launch.
              <span> Without the chaos.</span>
            </h2>
          </div>

          <p className="sw-process-intro">
            A clear delivery process keeps projects focused, communication
            simple and every stage moving toward a reliable launch.
          </p>
        </motion.div>

        <div className="sw-process-system">
          <div className="sw-process-rail" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>

          <div className="sw-process-list">
            {steps.map((step, index) => (
              <motion.article
                className="sw-process-step"
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="sw-process-node">
                  <span />
                </div>

                <div className="sw-process-step-top">
                  <span className="sw-process-number sw-mono">
                    {step.number}
                  </span>

                  <span className="sw-process-meta sw-mono">
                    {step.meta}
                  </span>
                </div>

                <h3 className="sw-display">{step.title}</h3>

                <p>{step.text}</p>

                <div className="sw-process-step-bottom">
                  <span className="sw-process-status" />
                  <span className="sw-mono">
                    DELIVERY SYSTEM
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="sw-process-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="sw-mono">SOFTWAYHUB / DELIVERY</span>

          <div className="sw-process-footer-line">
            <span />
          </div>

          <span className="sw-mono">
            DISCOVER → BUILD → LAUNCH → EVOLVE
          </span>
        </motion.div>
      </div>
    </section>
  );
}