"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    tag: "FAST / MODERN / RESPONSIVE",
    description:
      "High-performance websites built around clear user experience, strong brand presentation and reliable delivery.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Custom Software",
    tag: "BUSINESS / SYSTEMS / SCALE",
    description:
      "Digital products and internal systems designed around real workflows, business goals and future growth.",
    technologies: ["Web Apps", "Dashboards", "APIs", "Automation"],
  },
  {
    number: "03",
    title: "Frontend Engineering",
    tag: "INTERFACE / PERFORMANCE / UX",
    description:
      "Clean, responsive and maintainable frontend experiences engineered for speed, usability and consistency.",
    technologies: ["React", "Angular", "JavaScript", "TypeScript"],
  },
  {
    number: "04",
    title: "WordPress & CMS",
    tag: "FLEXIBLE / MANAGEABLE / RELIABLE",
    description:
      "Professional WordPress solutions for businesses that need flexibility, easy content management and dependable performance.",
    technologies: ["WordPress", "WooCommerce", "Custom UI", "SEO"],
  },
  {
    number: "05",
    title: "eCommerce",
    tag: "SELL / CONVERT / GROW",
    description:
      "Conversion-focused online stores designed to make products easier to discover, trust and purchase.",
    technologies: [
      "WooCommerce",
      "Product UX",
      "Payments",
      "Performance",
    ],
  },
  {
    number: "06",
    title: "API Integration",
    tag: "CONNECT / SYNC / EXTEND",
    description:
      "Connect websites and digital products with external platforms, services and business systems through reliable integrations.",
    technologies: [
      "REST API",
      "Fetch",
      "Webhooks",
      "Third-Party Tools",
    ],
  },
  {
    number: "07",
    title: "Business Automation",
    tag: "SIMPLIFY / AUTOMATE / OPERATE",
    description:
      "Reduce repetitive work by connecting digital workflows and building practical automation around everyday business processes.",
    technologies: [
      "Workflow",
      "Automation",
      "Forms",
      "Integrations",
    ],
  },
  {
    number: "08",
    title: "SEO & Digital Visibility",
    tag: "DISCOVER / INDEX / GROW",
    description:
      "Technical and on-page foundations that help websites become easier to discover, understand and index across search platforms.",
    technologies: [
      "SEO",
      "Analytics",
      "Search Console",
      "Schema",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const activeService = services[activeIndex];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 30%"],
  });

  const panelOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [0, 0.2, 0.75, 1]
  );

  const panelY = useTransform(
    scrollYProgress,
    [0, 1],
    [70, 0]
  );

  const panelScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.94, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="sw-services sw-section"
    >
      <div className="sw-services-bg-grid" />

      <div className="sw-container">
        <div className="sw-services-header">
          <div>
            <span className="sw-services-label sw-mono">
              02 / WHAT WE BUILD
            </span>

            <h2 className="sw-services-title sw-display">
              Digital products.
              <br />
              <span>
                Engineered around real business needs.
              </span>
            </h2>
          </div>

          <p className="sw-services-intro">
            We combine design, engineering and practical delivery to build
            digital systems that help businesses operate, communicate and grow.
          </p>
        </div>

        <div className="sw-services-layout">
          {/* LEFT SERVICE LIST */}
          <div className="sw-services-list">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.number}
                  type="button"
                  className={`sw-service-row ${
                    isActive ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="sw-service-number sw-mono">
                    {service.number}
                  </span>

                  <span className="sw-service-row-main">
                    <strong className="sw-display">
                      {service.title}
                    </strong>

                    <small className="sw-mono">
                      {service.tag}
                    </small>
                  </span>

                  <span className="sw-service-arrow">
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="sw-services-sticky">
            {/* Animation is INSIDE sticky wrapper */}
            <motion.div
              style={{
                opacity: panelOpacity,
                y: panelY,
                scale: panelScale,
              }}
            >
              <div className="sw-services-detail">
                <div className="sw-services-detail-top sw-mono">
                  <span>CAPABILITY / ACTIVE</span>

                  <span className="sw-services-live">
                    <i />
                    ONLINE
                  </span>
                </div>

                <div className="sw-services-detail-stage">
                  <div className="sw-services-detail-grid" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.number}
                      className="sw-services-detail-content"
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -12,
                      }}
                      transition={{
                        duration: 0.28,
                      }}
                    >
                      <span className="sw-services-detail-number sw-mono">
                        {activeService.number}
                      </span>

                      <h3 className="sw-display">
                        {activeService.title}
                      </h3>

                      <p>
                        {activeService.description}
                      </p>

                      <div className="sw-services-tech">
                        {activeService.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="sw-mono"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="sw-services-orbit">
                    <span />
                  </div>

                  <div className="sw-services-core">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="sw-services-detail-bottom sw-mono">
                  <span>
                    SOFTWAYHUB / ENGINEERING
                  </span>

                  <span>
                    BUILD → CONNECT → DELIVER
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}