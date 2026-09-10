"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const projectTypes = [
  "Website",
  "Web Application",
  "Custom Software",
  "WordPress",
  "eCommerce",
  "AI & Chatbot",
  "Automation",
  "API Integration",
  "SEO & Digital Growth",
  "Other",
];

const contactPoints = [
  {
    number: "01",
    label: "PROJECTS",
    title: "Tell us what you want to build.",
    text: "Share your idea, current challenge or project requirements. We will help define the right next step.",
  },
  {
    number: "02",
    label: "COLLABORATION",
    title: "Clear communication from day one.",
    text: "We prefer practical conversations, realistic expectations and a transparent delivery process.",
  },
  {
    number: "03",
    label: "LOCATION",
    title: "Islamabad, Pakistan.",
    text: "Working with businesses locally and remotely across modern digital projects.",
  },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("Website");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: selectedType,
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
      setSelectedType("Website");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="sw-contact-page">
        {/* =====================================
            HERO
        ====================================== */}
        <section className="sw-contact-hero">
          <div className="sw-contact-grid" aria-hidden="true" />
          <div className="sw-contact-glow" aria-hidden="true" />

          <div className="sw-container sw-contact-hero-inner">
            <motion.div
              className="sw-contact-hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="sw-contact-topline">
                <span className="sw-contact-label sw-mono">
                  CONTACT / SOFTWAYHUB
                </span>

                <span className="sw-contact-topline-line" />

                <span className="sw-contact-mini sw-mono">
                  IDEAS / PROJECTS / PARTNERSHIPS
                </span>
              </div>

              <h1 className="sw-contact-title sw-display">
                Have something
                <span> worth building?</span>
              </h1>

              <p className="sw-contact-description">
                Tell us what you are working on, where you are stuck or what
                you want to improve. We will help turn the conversation into a
                clear digital direction.
              </p>
            </motion.div>

            <motion.div
              className="sw-contact-status"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="sw-contact-status-head">
                <span className="sw-mono">PROJECT DESK</span>

                <span className="sw-contact-status-active sw-mono">
                  <i />
                  OPEN
                </span>
              </div>

              <div className="sw-contact-status-main">
                <span className="sw-mono">START WITH</span>

                <strong className="sw-display">
                  A simple conversation.
                </strong>

                <p>
                  No complicated brief required. Share the basics and we can
                  take it from there.
                </p>
              </div>

              <div className="sw-contact-status-foot sw-mono">
                <span>BUILD</span>
                <span>CONNECT</span>
                <span>DELIVER</span>
              </div>
            </motion.div>
          </div>

          <div className="sw-container sw-contact-hero-bottom">
            <div>
              <span className="sw-mono">01 / DISCUSS</span>
              <strong>Your Idea</strong>
            </div>

            <div>
              <span className="sw-mono">02 / DEFINE</span>
              <strong>The Direction</strong>
            </div>

            <div>
              <span className="sw-mono">03 / BUILD</span>
              <strong>The Solution</strong>
            </div>

            <span className="sw-contact-location sw-mono">
              ISLAMABAD / PK
            </span>
          </div>
        </section>

        {/* =====================================
            CONTACT MAIN
        ====================================== */}
        <section className="sw-contact-main-section">
          <div className="sw-container sw-contact-main-layout">
            {/* LEFT SIDE */}
            <motion.div
              className="sw-contact-information"
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              <span className="sw-contact-section-label sw-mono">
                01 / START A CONVERSATION
              </span>

              <h2 className="sw-display">
                Tell us what
                <span> you want to build.</span>
              </h2>

              <p className="sw-contact-information-intro">
                A few details are enough to start. We can understand the
                requirements together and determine the right way forward.
              </p>

              <div className="sw-contact-info-points">
                {contactPoints.map((point) => (
                  <div
                    className="sw-contact-info-point"
                    key={point.number}
                  >
                    <span className="sw-mono">{point.number}</span>

                    <div>
                      <small className="sw-mono">
                        {point.label}
                      </small>

                      <strong>{point.title}</strong>

                      <p>{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sw-contact-direct">
                <span className="sw-mono">
                  DIRECT CONTACT
                </span>

                <a href="mailto:info@softwayhub.com">
                  info@softwayhub.com
                  <span>↗</span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              className="sw-contact-form-wrap"
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
            >
              <div className="sw-contact-form-head">
                <div>
                  <span className="sw-mono">
                    PROJECT INQUIRY
                  </span>

                  <strong className="sw-display">
                    Let&apos;s talk.
                  </strong>
                </div>

                <span className="sw-contact-form-online sw-mono">
                  <i />
                  READY
                </span>
              </div>

              {submitted ? (
                <div className="sw-contact-success">
                  <span className="sw-contact-success-icon">
                    ✓
                  </span>

                  <span className="sw-mono">
                    MESSAGE / SENT
                  </span>

                  <h3 className="sw-display">
                    Your inquiry is on its way.
                  </h3>

                  <p>
                    Thank you for contacting SoftwayHub. Our team has received
                    your project inquiry and will review the details.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage("");
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="sw-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="sw-contact-form-grid">
                    <div className="sw-contact-field">
                      <label htmlFor="name">
                        Your Name <span>*</span>
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full name"
                        required
                        disabled={isSending}
                      />
                    </div>

                    <div className="sw-contact-field">
                      <label htmlFor="email">
                        Email Address <span>*</span>
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        disabled={isSending}
                      />
                    </div>
                  </div>

                  <div className="sw-contact-form-grid">
                    <div className="sw-contact-field">
                      <label htmlFor="phone">
                        Phone / WhatsApp
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+92 ..."
                        disabled={isSending}
                      />
                    </div>

                    <div className="sw-contact-field">
                      <label htmlFor="company">
                        Company
                      </label>

                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company name"
                        disabled={isSending}
                      />
                    </div>
                  </div>

                  <div className="sw-contact-project-type">
                    <label>
                      What are you looking to build?{" "}
                      <span>*</span>
                    </label>

                    <div className="sw-contact-project-options">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          disabled={isSending}
                          className={
                            selectedType === type
                              ? "is-selected"
                              : ""
                          }
                          onClick={() =>
                            setSelectedType(type)
                          }
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sw-contact-field">
                    <label htmlFor="budget">
                      Estimated Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      disabled={isSending}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>

                      <option value="Under $1,000">
                        Under $1,000
                      </option>

                      <option value="$1,000 – $3,000">
                        $1,000 – $3,000
                      </option>

                      <option value="$3,000 – $7,000">
                        $3,000 – $7,000
                      </option>

                      <option value="$7,000+">
                        $7,000+
                      </option>

                      <option value="Let's Discuss">
                        Let&apos;s Discuss
                      </option>
                    </select>
                  </div>

                  <div className="sw-contact-field">
                    <label htmlFor="message">
                      Project Details <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about the project, challenge or idea..."
                      required
                      disabled={isSending}
                    />
                  </div>

                  {errorMessage && (
                    <div className="sw-contact-error">
                      <span>!</span>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="sw-contact-form-footer">
                    <p>
                      By submitting this form, you agree that
                      SoftwayHub may contact you regarding your
                      inquiry.
                    </p>

                    <button
                      type="submit"
                      className="sw-contact-submit"
                      disabled={isSending}
                    >
                      {isSending
                        ? "Sending..."
                        : "Send Project Inquiry"}

                      <span>
                        {isSending ? "..." : "↗"}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* =====================================
            CLOSING
        ====================================== */}
        <section className="sw-contact-closing">
          <div className="sw-container sw-contact-closing-inner">
            <span className="sw-mono">
              SOFTWAYHUB / PROJECT DESK
            </span>

            <div className="sw-contact-closing-line">
              <span />
            </div>

            <span className="sw-mono">
              IDEAS → DIRECTION → DELIVERY
            </span>
          </div>
        </section>
      </main>
    </>
  );
}