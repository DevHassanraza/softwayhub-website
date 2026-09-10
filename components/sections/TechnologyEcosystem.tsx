"use client";

import { motion } from "framer-motion";

const groups = [
  {
    number: "01",
    label: "FRONTEND",
    title: "Modern Interfaces",
    description:
      "Fast, responsive and maintainable experiences built for modern products.",
    technologies: [
      "Next.js",
      "React",
      "Angular",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    number: "02",
    label: "PLATFORMS",
    title: "Business Platforms",
    description:
      "Flexible platforms for content, commerce and growing digital operations.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Shopify",
      "CMS",
    ],
  },
  {
    number: "03",
    label: "SYSTEMS",
    title: "Connected Systems",
    description:
      "Integrations and intelligent systems that connect products with business workflows.",
    technologies: [
      "REST APIs",
      "AI Integrations",
      "Automation",
      "Analytics",
      "Deployment",
    ],
  },
];

export default function TechnologyEcosystem() {
  return (
    <section
      className="sw-tech sw-section"
      id="technology"
    >
      <div className="sw-tech-grid" aria-hidden="true" />

      <div className="sw-container sw-tech-container">
        <motion.div
          className="sw-tech-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div>
            <span className="sw-tech-label sw-mono">
              07 / TECHNOLOGY ECOSYSTEM
            </span>

            <h2 className="sw-tech-title sw-display">
              The right technology
              <span> for the right product.</span>
            </h2>
          </div>

          <p className="sw-tech-intro">
            We choose technology around the product, its users and the
            business behind it — not around trends.
          </p>
        </motion.div>

        <div className="sw-tech-system">
          <div
            className="sw-tech-system-line"
            aria-hidden="true"
          >
            <span />
          </div>

          {groups.map((group, index) => (
            <motion.article
              className="sw-tech-group"
              key={group.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="sw-tech-group-top">
                <span className="sw-tech-number sw-mono">
                  {group.number}
                </span>

                <span className="sw-tech-group-label sw-mono">
                  {group.label}
                </span>
              </div>

              <div className="sw-tech-group-copy">
                <h3 className="sw-display">
                  {group.title}
                </h3>

                <p>{group.description}</p>
              </div>

              <div className="sw-tech-items">
                {group.technologies.map((technology) => (
                  <span
                    className="sw-tech-item"
                    key={technology}
                  >
                    <i />
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="sw-tech-footer">
          <span className="sw-mono">
            SOFTWAYHUB / TECHNOLOGY
          </span>

          <div className="sw-tech-footer-line">
            <span />
          </div>

          <span className="sw-mono">
            SELECT → CONNECT → SCALE
          </span>
        </div>
      </div>
    </section>
  );
}