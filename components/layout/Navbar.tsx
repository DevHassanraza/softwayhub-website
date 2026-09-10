"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sw-navbar ${scrolled ? "sw-navbar-scrolled" : ""}`}
      >
        <div className="sw-navbar-inner">
          {/* LOGO */}
          <Link href="/" className="sw-navbar-brand">
            <div className="sw-navbar-logo-wrap">
              <Image
                src="/logos/softwayhub-logo.webp"
                alt="SoftwayHub"
                width={180}
                height={60}
                priority
                className="sw-navbar-logo"
              />

              <span className="sw-navbar-logo-glow" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="sw-navbar-links" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="sw-navbar-link"
              >
                <span className="sw-navbar-link-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="sw-navbar-actions">
            <ThemeToggle />

            <Link href="/contact" className="sw-navbar-cta">
              <span>Start a Project</span>
              <span className="sw-navbar-cta-arrow">↗</span>
            </Link>

            <button
              type="button"
              className={`sw-menu-btn ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="sw-navbar-energy-line">
          <span />
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sw-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="sw-mobile-menu-panel"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <div className="sw-mobile-menu-grid" />

              <div className="sw-mobile-menu-content">
                <div className="sw-mobile-menu-label sw-mono">
                  NAVIGATION / SOFTWAYHUB
                </div>

                <div className="sw-mobile-menu-links">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.055,
                        duration: 0.45,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* MOBILE THEME TOGGLE */}
                <div className="sw-mobile-theme-row">
                  <span className="sw-mono">APPEARANCE</span>
                  <ThemeToggle />
                </div>

                <Link
                  href="/contact"
                  className="sw-mobile-menu-cta"
                  onClick={() => setMenuOpen(false)}
                >
                  START A PROJECT
                  <span>↗</span>
                </Link>

                <div className="sw-mobile-menu-footer sw-mono">
                  <span>SOFTWARE / DIGITAL / ENGINEERING</span>
                  <span>ISLAMABAD / PK</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}