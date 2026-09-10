"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const opportunities = [
  {
    id: "01",
    title: "WordPress Developer",
    type: "Internship / Entry Level",
    mode: "On-site",
    location: "Islamabad",
    shift: "Night Shift",
    description:
      "Work on modern WordPress websites, responsive interfaces, custom layouts, performance improvements and real client projects.",
    skills: ["WordPress", "HTML/CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: "02",
    title: "Sales & Data Operations",
    type: "Internship",
    mode: "On-site",
    location: "Islamabad",
    shift: "Night Shift",
    description:
      "Support business development through research, structured data collection, outreach preparation and sales operations.",
    skills: ["Research", "Data Entry", "Communication", "Lead Generation"],
  },
  {
    id: "03",
    title: "General Application",
    type: "Future Opportunities",
    mode: "Flexible",
    location: "Islamabad",
    shift: "Based on Role",
    description:
      "Do not see your role listed? Share your profile and tell us how your skills could contribute to the SoftwayHub team.",
    skills: ["Development", "Design", "AI", "Operations"],
  },
];

const values = [
  {
    number: "01",
    title: "Learn by Building",
    text: "Work on practical projects, solve real problems and improve through hands-on experience.",
  },
  {
    number: "02",
    title: "Own the Work",
    text: "We value people who communicate clearly, take responsibility and care about the quality of what they deliver.",
  },
  {
    number: "03",
    title: "Grow Together",
    text: "Good teams share knowledge, support each other and keep improving the way they work.",
  },
  {
    number: "04",
    title: "Keep It Practical",
    text: "We prefer useful solutions, clear thinking and measurable progress over unnecessary complexity.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Apply",
    text: "Send us your CV, portfolio or relevant work.",
  },
  {
    number: "02",
    title: "Review",
    text: "Our team reviews your skills and experience for the role.",
  },
  {
    number: "03",
    title: "Conversation",
    text: "A short discussion to understand your experience and working style.",
  },
  {
    number: "04",
    title: "Next Step",
    text: "Selected candidates receive role details and joining information.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="sw-careers-page">
        {/* =====================================
            HERO
        ====================================== */}
        <section className="sw-careers-hero">
          <div className="sw-careers-grid" aria-hidden="true" />
          <div className="sw-careers-glow" aria-hidden="true" />

          <div className="sw-container sw-careers-hero-inner">
            <motion.div
              className="sw-careers-hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="sw-careers-topline">
                <span className="sw-careers-label sw-mono">
                  CAREERS / SOFTWAYHUB
                </span>

                <span className="sw-careers-line" />

                <span className="sw-careers-mini sw-mono">
                  LEARN / BUILD / GROW
                </span>
              </div>

              <h1 className="sw-careers-title sw-display">
                Build your skills.
                <span> Build work that matters.</span>
              </h1>

              <p className="sw-careers-description">
                Join a growing technology team where learning happens through
                real projects, collaboration and taking responsibility for the
                work you create.
              </p>

              <div className="sw-careers-actions">
                <Link href="#open-roles" className="sw-careers-primary">
                  View Open Roles
                  <span>↓</span>
                </Link>

                <a
                  href="mailto:hr@softwayhub.com"
                  className="sw-careers-secondary"
                >
                  Send Your CV
                  <span>↗</span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              className="sw-careers-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-hidden="true"
            >
              <div className="sw-careers-orbit sw-careers-orbit-one" />
              <div className="sw-careers-orbit sw-careers-orbit-two" />

              <div className="sw-careers-visual-axis">
                <span />
              </div>

              <div className="sw-careers-visual-copy sw-mono">
                <span>PEOPLE</span>
                <span>SKILLS</span>
                <span>PROGRESS</span>
              </div>

              <div className="sw-careers-core">
                <span className="sw-careers-core-pulse" />

                <div>
                  <small className="sw-mono">TEAM / SYSTEM</small>
                  <strong>GROW</strong>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="sw-container sw-careers-hero-bottom">
            <div>
              <span className="sw-mono">01 / LEARN</span>
              <strong>Real Projects</strong>
            </div>

            <div>
              <span className="sw-mono">02 / BUILD</span>
              <strong>Practical Skills</strong>
            </div>

            <div>
              <span className="sw-mono">03 / GROW</span>
              <strong>With the Team</strong>
            </div>

            <span className="sw-careers-location sw-mono">
              ISLAMABAD / PK
            </span>
          </div>
        </section>

        {/* =====================================
            WHY JOIN
        ====================================== */}
        <section className="sw-careers-values">
          <div className="sw-container">
            <motion.div
              className="sw-careers-section-head"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <span className="sw-careers-section-label sw-mono">
                01 / WORKING AT SOFTWAYHUB
              </span>

              <div>
                <h2 className="sw-display">
                  A place to learn,
                  <span> contribute and grow.</span>
                </h2>

                <p>
                  We are building a team around curiosity, responsibility and
                  practical problem-solving.
                </p>
              </div>
            </motion.div>

            <div className="sw-careers-values-grid">
              {values.map((value, index) => (
                <motion.article
                  className="sw-careers-value"
                  key={value.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >
                  <span className="sw-mono">{value.number}</span>

                  <h3 className="sw-display">{value.title}</h3>

                  <p>{value.text}</p>

                  <i />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            OPEN ROLES
        ====================================== */}
        <section className="sw-careers-openings" id="open-roles">
          <div className="sw-container">
            <motion.div
              className="sw-careers-openings-head"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="sw-careers-section-label sw-mono">
                  02 / OPEN OPPORTUNITIES
                </span>

                <h2 className="sw-display">
                  Find where you
                  <span> can make an impact.</span>
                </h2>
              </div>

              <p>
                Our openings change as the team grows. Explore current
                opportunities or send a general application.
              </p>
            </motion.div>

            <div className="sw-careers-role-list">
              {opportunities.map((role, index) => (
                <motion.article
                  className="sw-careers-role"
                  key={role.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                >
                  <div className="sw-careers-role-number sw-mono">
                    {role.id}
                  </div>

                  <div className="sw-careers-role-main">
                    <div className="sw-careers-role-heading">
                      <div>
                        <span className="sw-careers-role-type sw-mono">
                          {role.type}
                        </span>

                        <h3 className="sw-display">{role.title}</h3>
                      </div>

                      <div className="sw-careers-role-meta">
                        <span>{role.mode}</span>
                        <span>{role.location}</span>
                        <span>{role.shift}</span>
                      </div>
                    </div>

                    <p className="sw-careers-role-description">
                      {role.description}
                    </p>

                    <div className="sw-careers-role-skills">
                      {role.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    className="sw-careers-role-apply"
                    href={`mailto:hr@softwayhub.com?subject=${encodeURIComponent(
                      `Application - ${role.title}`
                    )}`}
                    aria-label={`Apply for ${role.title}`}
                  >
                    ↗
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            HIRING PROCESS
        ====================================== */}
        <section className="sw-careers-process">
          <div className="sw-container">
            <motion.div
              className="sw-careers-process-head"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <span className="sw-careers-section-label sw-mono">
                03 / HIRING PROCESS
              </span>

              <h2 className="sw-display">
                Clear from application
                <span> to next step.</span>
              </h2>
            </motion.div>

            <div className="sw-careers-process-track">
              {hiringSteps.map((step, index) => (
                <motion.div
                  className="sw-careers-process-step"
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <div className="sw-careers-process-node">
                    <span />
                  </div>

                  <span className="sw-careers-process-number sw-mono">
                    {step.number}
                  </span>

                  <h3 className="sw-display">{step.title}</h3>

                  <p>{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            FINAL CTA
        ====================================== */}
        <section className="sw-careers-cta">
          <div className="sw-container">
            <motion.div
              className="sw-careers-cta-box"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="sw-mono">
                  YOUR NEXT STEP / SOFTWAYHUB
                </span>

                <h2 className="sw-display">
                  Think you could
                  <span> add something to the team?</span>
                </h2>

                <p>
                  Send us your CV, portfolio or examples of your work. We would
                  like to hear what you can bring to SoftwayHub.
                </p>
              </div>

              <a
                href="mailto:hr@softwayhub.com?subject=Career Application - SoftwayHub"
                className="sw-careers-cta-button"
              >
                Apply at SoftwayHub
                <span>↗</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}