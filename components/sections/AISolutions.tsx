"use client";

import { motion } from "framer-motion";

const capabilities = [
  "AI Chatbots",
  "Website Assistants",
  "Support Automation",
  "Workflow Automation",
];

export default function AISolutions() {
  return (
    <section className="sw-ai sw-section" id="ai-solutions">
      <div className="sw-ai-grid" aria-hidden="true" />
      <div className="sw-ai-glow" aria-hidden="true" />

      <div className="sw-container sw-ai-container">
        <motion.div
          className="sw-ai-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="sw-ai-label sw-mono">
            06 / AI &amp; AUTOMATION
          </span>

          <h2 className="sw-ai-title sw-display">
            Intelligence built into
            <span> the way business works.</span>
          </h2>

          <p className="sw-ai-description">
            We build AI-powered experiences that help businesses automate
            conversations, support customers and simplify everyday digital
            workflows.
          </p>

          <div className="sw-ai-capabilities">
            {capabilities.map((item, index) => (
              <div className="sw-ai-capability" key={item}>
                <span className="sw-mono">
                  0{index + 1}
                </span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <a href="#contact" className="sw-ai-link">
            Explore AI Solutions
            <span>↗</span>
          </a>
        </motion.div>

        <motion.div
          className="sw-ai-engine"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="sw-ai-engine-grid" aria-hidden="true" />

          <div className="sw-ai-engine-top">
            <div>
              <span className="sw-ai-live-dot" />
              <span className="sw-mono">AI ENGINE / ACTIVE</span>
            </div>

            <span className="sw-mono">SW / 06</span>
          </div>

          <div className="sw-ai-conversation">
            <motion.div
              className="sw-ai-message sw-ai-message-user"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <span className="sw-mono">CUSTOMER</span>
              <p>Can you help me find the right solution?</p>
            </motion.div>

            <motion.div
              className="sw-ai-processing"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
            >
              <span />
              <span />
              <span />

              <small className="sw-mono">
                PROCESSING CONTEXT
              </small>
            </motion.div>

            <motion.div
              className="sw-ai-message sw-ai-message-system"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.45 }}
            >
              <div className="sw-ai-message-heading">
                <span className="sw-ai-mini-core">AI</span>
                <span className="sw-mono">SOFTWAY ASSIST</span>
              </div>

              <p>
                Absolutely. Tell me what you want to build and I&apos;ll
                guide you toward the right next step.
              </p>
            </motion.div>
          </div>

          <div className="sw-ai-network">
            <div className="sw-ai-network-line" />

            <div className="sw-ai-network-node">
              <span />
              <small className="sw-mono">WEB</small>
            </div>

            <div className="sw-ai-network-node">
              <span />
              <small className="sw-mono">AI</small>
            </div>

            <div className="sw-ai-network-node">
              <span />
              <small className="sw-mono">API</small>
            </div>

            <div className="sw-ai-network-node">
              <span />
              <small className="sw-mono">DATA</small>
            </div>
          </div>

          <div className="sw-ai-engine-bottom">
            <span className="sw-mono">CONNECTED SYSTEM</span>
            <span className="sw-mono">READY / 100%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}