"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import styles from "./team.module.css";

const teamMembers = [
  {
    name: "Musawir Hussain",
    role: "Founder & CEO",
    department: "Leadership",
    number: "01",
    image: "/images/team/musawir-hussain.webp",
    position: "center 22%",
  },
  {
    name: "Sarfaraz Ali",
    role: "Co-Founder & Technical Lead",
    department: "Leadership",
    number: "02",
    image: "/images/team/sarfaraz-ali.webp",
    position: "center 18%",
  },
  {
    name: "Nasir Sultan",
    role: "HR & Business",
    department: "Operations",
    number: "03",
    image: "/images/team/nasir-sultan.webp",
    position: "center 25%",
  },
  {
    name: "Salim Ali",
    role: "Team Lead & Full-Stack Developer",
    department: "Engineering",
    number: "04",
    image: "/images/team/salim-ali.webp",
    position: "center 18%",
  },
];

const values = [
  {
    number: "01",
    title: "Think clearly.",
    text: "We understand the problem before rushing into the solution.",
  },
  {
    number: "02",
    title: "Build with purpose.",
    text: "Every design and technical decision should have a reason.",
  },
  {
    number: "03",
    title: "Own the outcome.",
    text: "We care about what happens after the work leaves our screen.",
  },
  {
    number: "04",
    title: "Grow together.",
    text: "We learn, share and support each other as one team.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlowOne} />
          <div className={styles.heroGlowTwo} />

          <div className={`sw-container ${styles.heroContainer}`}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className={styles.eyebrow}>
                <span />
                OUR PEOPLE
              </div>

              <h1>
                Meet the people
                <br />
                building <span>SoftwayHub.</span>
              </h1>

              <p>
                A small, focused team with complementary skills and a shared
                responsibility — to create digital solutions that make a real
                difference.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>◎</div>
                  <div>
                    <strong>04</strong>
                    <span>Team Members</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statIcon}>◇</div>
                  <div>
                    <strong>3+</strong>
                    <span>Core Departments</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statIcon}>♡</div>
                  <div>
                    <strong>100%</strong>
                    <span>Committed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroArt}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              <div className={styles.worldDots} />

              <div className={styles.heroQuote}>
                <span>Great People</span>
                <span>Build Great Things.</span>
                <i />
              </div>

              <div className={styles.heroKeywords}>
                <span />
                <p>PEOPLE</p>
                <p>IDEAS</p>
                <p>TECHNOLOGY</p>
                <p>IMPACT</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TEAM */}
        <section id="our-team" className={styles.teamSection}>
          <div className="sw-container">
            <div className={styles.teamHeader}>
              <div className={styles.teamLabel}>
                <span />
                TEAM MEMBERS
              </div>

              <p>Different skills. One shared direction.</p>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  className={styles.teamCard}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >
                  <div className={styles.cardMeta}>
                    <span>{member.number}</span>
                    <span>{member.department}</span>
                  </div>

                  <div className={styles.imageWrap}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      className={styles.memberImage}
                      style={{ objectPosition: member.position }}
                    />

                    <div className={styles.imageOverlay} />
                    <div className={styles.cornerTL} />
                    <div className={styles.cornerBR} />
                  </div>

                  <div className={styles.cardBottom}>
                    <div>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>

                    <div className={styles.cardArrow}>↗</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className="sw-container">
            <div className={styles.valuesGrid}>
              {values.map((item) => (
                <article key={item.number} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{item.number}</div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="sw-container">
            <div className={styles.ctaBox}>
              <div className={styles.ctaLeft}>
                <div className={styles.ctaLabel}>
                  <span />
                  CAREERS
                </div>

                <h2>
                  Good people build
                  <br />
                  <span>great things.</span>
                </h2>
              </div>

              <div className={styles.ctaMiddle}>
                <p>
                  We&apos;re always looking for curious minds who want to work
                  on meaningful projects and grow with us.
                </p>

                <Link href="/careers" className={styles.ctaButton}>
                  Explore Careers
                  <span>→</span>
                </Link>
              </div>

              <div className={styles.ctaVisual}>
                <div className={styles.logoShape} />
                <div className={styles.joinText}>
                  <p>JOIN</p>
                  <p>OUR TEAM</p>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
