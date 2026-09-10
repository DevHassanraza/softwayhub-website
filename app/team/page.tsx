"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const teamMembers = [
  {
    name: "Musawir Hussain",
    role: "Founder & CEO",
    initials: "MH",
    number: "01",
    type: "LEADERSHIP",
  },
  {
    name: "Sarfaraz Ali",
    role: "Co-Founder & Technical Lead",
    initials: "SA",
    number: "02",
    type: "LEADERSHIP",
  },
  {
    name: "Nasir Sultan",
    role: "HR & Business",
    initials: "NS",
    number: "03",
    type: "OPERATIONS",
  },
  {
    name: "Salim Ali",
    role: "Team Lead & Full-Stack Developer",
    initials: "SA",
    number: "04",
    type: "ENGINEERING",
  },
  {
    name: "Hassan Raza",
    role: "Software Engineer",
    initials: "HR",
    number: "05",
    type: "ENGINEERING",
  },
  {
    name: "Tahir Choudary",
    role: "AI Optimization",
    initials: "TC",
    number: "06",
    type: "AI / ENGINEERING",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main className="sw-team-page">
        {/* HERO */}
        <section className="sw-team-hero">
          <div className="sw-team-grid" />

          <div className="sw-container sw-team-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sw-team-eyebrow sw-mono">
                <span>TEAM / SOFTWAYHUB</span>
                <span>PEOPLE / ENGINEERING / GROWTH</span>
              </div>

              <h1>
                The people
                <br />
                behind the <span>work.</span>
              </h1>

              <p>
                A focused team bringing together leadership, engineering,
                business and emerging technology to build digital products
                that create real value.
              </p>
            </motion.div>

            <motion.div
              className="sw-team-hero-system"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <div className="sw-team-system-head sw-mono">
                <span>TEAM SYSTEM</span>
                <span className="sw-team-online">
                  <i />
                  ACTIVE
                </span>
              </div>

              <div className="sw-team-system-core">
                <div className="sw-team-core-ring ring-one" />
                <div className="sw-team-core-ring ring-two" />

                <div className="sw-team-core-center">
                  <strong>06</strong>
                  <span className="sw-mono">PEOPLE</span>
                </div>

                <span className="sw-team-node node-one" />
                <span className="sw-team-node node-two" />
                <span className="sw-team-node node-three" />
              </div>

              <div className="sw-team-system-bottom sw-mono">
                <span>LEADERSHIP</span>
                <span>ENGINEERING</span>
                <span>BUSINESS</span>
                <span>AI</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TEAM */}
        <section className="sw-team-members">
          <div className="sw-container">
            <div className="sw-team-section-head">
              <div>
                <span className="sw-team-label sw-mono">
                  01 / OUR TEAM
                </span>

                <h2>
                  Different expertise.
                  <br />
                  One direction.
                </h2>
              </div>

              <p>
                From business strategy to software engineering, our team works
                together to turn ideas into reliable digital solutions.
              </p>
            </div>

            <div className="sw-team-list">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  className="sw-team-member"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  <div className="sw-team-member-number sw-mono">
                    {member.number}
                  </div>

                  {/* IMAGE PLACEHOLDER */}
                  <div className="sw-team-photo">
                    <span>{member.initials}</span>

                    <div className="sw-team-photo-corner top-left" />
                    <div className="sw-team-photo-corner bottom-right" />
                  </div>

                  <div className="sw-team-member-info">
                    <span className="sw-team-member-type sw-mono">
                      {member.type}
                    </span>

                    <h3>{member.name}</h3>

                    <p>{member.role}</p>
                  </div>

                  <div className="sw-team-member-mark">↗</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sw-team-cta">
          <div className="sw-container">
            <div className="sw-team-cta-inner">
              <div>
                <span className="sw-mono">GROW WITH SOFTWAYHUB</span>

                <h2>Want to build with us?</h2>
              </div>

              <Link href="/careers" className="sw-team-cta-btn">
                Explore Careers
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}