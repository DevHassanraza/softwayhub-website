"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Healthcare Platforms",
    category: "HEALTHCARE / DIGITAL EXPERIENCE",
    description:
      "Digital healthcare experiences designed around clarity, accessibility and better journeys for patients, professionals and organizations.",
    tags: [
      "Healthcare Websites",
      "Responsive UX",
      "Digital Systems",
    ],
    className: "project-ent",
  },
  {
    number: "02",
    title: "Business & Corporate Websites",
    category: "BUSINESS / BRAND / GROWTH",
    description:
      "Professional digital platforms that help businesses communicate their value, generate opportunities and build a stronger online presence.",
    tags: [
      "Corporate Websites",
      "Lead Generation",
      "Brand Experience",
    ],
    className: "project-quality",
  },
  {
    number: "03",
    title: "eCommerce Experiences",
    category: "ECOMMERCE / SALES / EXPERIENCE",
    description:
      "Modern online shopping experiences built around product discovery, usability, performance and a smoother path to purchase.",
    tags: [
      "WooCommerce",
      "Product UX",
      "Online Stores",
    ],
    className: "project-habib",
  },
  {
    number: "04",
    title: "Custom Software & Automation",
    category: "SOFTWARE / SYSTEMS / AUTOMATION",
    description:
      "Practical digital systems that connect workflows, simplify repetitive processes and support the way modern businesses operate.",
    tags: [
      "Web Applications",
      "API Integration",
      "Automation",
    ],
    className: "project-software",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="sw-work sw-section">
      <div className="sw-work-grid" />

      <div className="sw-container">
        {/* HEADER */}
        <div className="sw-work-header">
          <div>
            <span className="sw-work-label sw-mono">
              03 / SELECTED WORK
            </span>

            <h2 className="sw-work-title sw-display">
              Digital solutions
              <span> built across industries.</span>
            </h2>
          </div>

          <p className="sw-work-intro">
            From business websites to connected digital systems, we build
            experiences shaped around real requirements, reliable engineering
            and measurable business value.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="sw-work-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className="sw-project"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* VISUAL */}
              <div
                className={`sw-project-visual ${project.className}`}
              >
                <div className="sw-project-browser">
                  <div className="sw-project-browser-top">
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>

                    <span className="sw-mono">
                      SOFTWAYHUB / SOLUTION
                    </span>
                  </div>

                  <div className="sw-project-screen">
                    <div className="sw-project-screen-grid" />

                    <div className="sw-project-screen-number sw-mono">
                      {project.number}
                    </div>

                    <div className="sw-project-screen-content">
                      <span className="sw-mono">
                        DIGITAL SOLUTION
                      </span>

                      <strong className="sw-display">
                        {project.title}
                      </strong>

                      <div className="sw-project-screen-line" />

                      <small className="sw-mono">
                        STRATEGY / ENGINEERING / DELIVERY
                      </small>
                    </div>

                    <div className="sw-project-orbit orbit-a" />
                    <div className="sw-project-orbit orbit-b" />

                    <div className="sw-project-node">
                      <span />
                    </div>
                  </div>
                </div>

                <div className="sw-project-corner sw-mono">
                  SOLUTION / {project.number}
                </div>
              </div>

              {/* CONTENT */}
              <div className="sw-project-info">
                <div className="sw-project-info-top">
                  <span className="sw-project-number sw-mono">
                    {project.number}
                  </span>

                  <span className="sw-project-category sw-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="sw-display">
                  {project.title}
                </h3>

                <p>{project.description}</p>

                <div className="sw-project-bottom">
                  <div className="sw-project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="sw-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="sw-project-link sw-mono"
                    aria-label={`Explore ${project.title}`}
                  >
                    <span>EXPLORE SOLUTION</span>
                    <strong>↗</strong>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}