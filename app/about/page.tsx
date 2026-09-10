"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const principles = [
  {
    number: "01",
    title: "Purpose Before Technology",
    text: "We begin with the business problem, then choose the technology that makes the most sense.",
  },
  {
    number: "02",
    title: "Simple Over Complicated",
    text: "Good digital products should make work easier, not introduce unnecessary complexity.",
  },
  {
    number: "03",
    title: "Quality That Lasts",
    text: "We focus on maintainable engineering, performance and experiences built for long-term use.",
  },
];

const capabilities = [
  "Web Development",
  "Custom Software",
  "AI & Chatbots",
  "WordPress & CMS",
  "eCommerce",
  "API Integration",
  "Business Automation",
  "SEO & Digital Visibility",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="sw-about-page">
        {/* HERO */}
        <section className="sw-about-final-hero">
        <div className="sw-about-final-grid" aria-hidden="true" />
        <div className="sw-about-final-glow" aria-hidden="true" />

        <div className="sw-container sw-about-final-inner">
            {/* LEFT CONTENT */}
            <motion.div
            className="sw-about-final-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            >
            <div className="sw-about-final-top">
                <span className="sw-about-final-label sw-mono">
                ABOUT / SOFTWAYHUB
                </span>

                <span className="sw-about-final-line" />

                <span className="sw-about-final-mini sw-mono">
                PEOPLE / PRODUCT / PROGRESS
                </span>
            </div>

            <h1 className="sw-about-final-title sw-display">
                We build digital
                <span>systems that move</span>
                <span>business forward.</span>
            </h1>

            <p className="sw-about-final-description">
                SoftwayHub brings together software engineering, digital platforms,
                automation and modern web technologies to build products that solve
                real business problems.
            </p>

            <div className="sw-about-final-actions">
                <Link href="/contact" className="sw-about-final-primary">
                Start a Project
                <span>↗</span>
                </Link>

                <Link href="#who-we-are" className="sw-about-final-story">
                <span className="sw-about-final-story-icon">↓</span>

                <span>
                    <strong>Our Story</strong>
                    <small className="sw-mono">DISCOVER SOFTWAYHUB</small>
                </span>
                </Link>
            </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
            className="sw-about-final-visual"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden="true"
            >
            <div className="sw-about-final-orbit orbit-a" />
            <div className="sw-about-final-orbit orbit-b" />
            <div className="sw-about-final-orbit orbit-c" />

            <div className="sw-about-final-planet">
                <span className="sw-about-final-planet-glow" />
            </div>

            <div className="sw-about-final-axis">
                <span className="sw-about-final-node" />
            </div>

            <div className="sw-about-final-visual-copy sw-mono">
                <span>IDEAS</span>
                <span>TECHNOLOGY</span>
                <span>REAL IMPACT</span>
            </div>
            </motion.div>
        </div>

        {/* BOTTOM DATA */}
        <div className="sw-container sw-about-final-bottom">
            <div className="sw-about-final-metric">
            <span className="sw-mono">01</span>
            <i />
            <div>
                <small className="sw-mono">BUILD</small>
                <strong>Digital Products</strong>
            </div>
            </div>

            <div className="sw-about-final-metric">
            <span className="sw-mono">02</span>
            <i />
            <div>
                <small className="sw-mono">CONNECT</small>
                <strong>Modern Systems</strong>
            </div>
            </div>

            <div className="sw-about-final-metric">
            <span className="sw-mono">03</span>
            <i />
            <div>
                <small className="sw-mono">GROW</small>
                <strong>Business Value</strong>
            </div>
            </div>

            <div className="sw-about-final-location sw-mono">
            <span className="sw-about-final-location-dot" />
            ISLAMABAD / PK
            </div>

            <div className="sw-about-final-brand sw-mono">
            SOFTWAYHUB
            </div>
        </div>
        </section>
        {/* WHO WE ARE */}
        <section className="sw-about-story">
          <div className="sw-container">
            <div className="sw-about-story-layout">
              <motion.div
                className="sw-about-story-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <span className="sw-about-section-label sw-mono">
                  01 / WHO WE ARE
                </span>

                <h2 className="sw-display">
                  We build digital solutions
                  <span> with a reason behind them.</span>
                </h2>
              </motion.div>

              <motion.div
                className="sw-about-story-copy"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <p>
                  Our work sits between technology and business. We help turn
                  ideas, requirements and everyday challenges into digital
                  products that people can actually use.
                </p>

                <p>
                  From websites and software platforms to connected systems,
                  automation and AI-powered experiences, our focus remains the
                  same: build what matters and deliver it well.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="sw-about-principles">
          <div className="sw-container">
            <div className="sw-about-principles-header">
              <span className="sw-about-section-label sw-mono">
                02 / HOW WE THINK
              </span>

              <h2 className="sw-display">
                Practical thinking.
                <span> Responsible engineering.</span>
              </h2>
            </div>

            <div className="sw-about-principles-grid">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  className="sw-about-principle"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <span className="sw-about-principle-number sw-mono">
                    {principle.number}
                  </span>

                  <h3 className="sw-display">{principle.title}</h3>

                  <p>{principle.text}</p>

                  <span className="sw-about-principle-line" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES + TEAM */}
        <section className="sw-about-capability-section">
          <div className="sw-container sw-about-capability-layout">
            <motion.div
              className="sw-about-capability-copy"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <span className="sw-about-section-label sw-mono">
                03 / WHAT WE BUILD
              </span>

              <h2 className="sw-display">
                One team.
                <span> Connected capabilities.</span>
              </h2>

              <p>
                Different projects need different tools. Our capabilities
                connect strategy, engineering, digital platforms and
                intelligent systems into one delivery process.
              </p>

                <Link href="/#services" className="sw-about-text-link">
                Explore Services <span>↗</span>
                </Link>
            </motion.div>

            <motion.div
              className="sw-about-capability-list"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              {capabilities.map((capability, index) => (
                <div className="sw-about-capability-row" key={capability}>
                  <span className="sw-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{capability}</strong>

                  <i>↗</i>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TEAM PREVIEW */}
        <section className="sw-about-team">
          <div className="sw-container sw-about-team-inner">
            <div>
              <span className="sw-about-section-label sw-mono">
                04 / PEOPLE
              </span>

              <h2 className="sw-display">
                Built by people who
                <span> care about the work.</span>
              </h2>
            </div>

            <div className="sw-about-team-action">
              <p>
                Meet the people behind the engineering, ideas and delivery at
                SoftwayHub.
              </p>

              <Link href="/team" className="sw-about-button">
                Meet Our Team
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sw-about-cta">
          <div className="sw-container">
            <div className="sw-about-cta-box">
              <div>
                <span className="sw-mono">HAVE SOMETHING IN MIND?</span>

                <h2 className="sw-display">
                  Let&apos;s build something
                  <span> useful.</span>
                </h2>
              </div>

              <Link href="/contact" className="sw-about-cta-button">
                Start a Project
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}