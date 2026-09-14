"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services", dropdown: true },
  { label: "Work", href: "/#work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceGroups = [
  {
    title: "Build",
    number: "01",
    items: [
      {
        title: "Web Development",
        description: "Modern websites built for speed and growth.",
        href: "/#services",
        code: "WD",
      },
      {
        title: "Custom Software",
        description: "Purpose-built digital systems for businesses.",
        href: "/#services",
        code: "CS",
      },
      {
        title: "Frontend Engineering",
        description: "Responsive and scalable user experiences.",
        href: "/#services",
        code: "FE",
      },
      {
        title: "WordPress & CMS",
        description: "Flexible websites with easier content control.",
        href: "/#services",
        code: "WP",
      },
      {
        title: "eCommerce Development",
        description: "Conversion-focused online stores and platforms.",
        href: "/#services",
        code: "EC",
      },
    ],
  },
  {
    title: "Solutions",
    number: "02",
    items: [
      {
        title: "AI & Chatbot Solutions",
        description: "Smart customer engagement and AI assistance.",
        href: "/#services",
        code: "AI",
      },
      {
        title: "API Integration",
        description: "Connect platforms, services and business tools.",
        href: "/#services",
        code: "API",
      },
      {
        title: "Business Automation",
        description: "Reduce repetitive work with smarter workflows.",
        href: "/#services",
        code: "BA",
      },
      {
        title: "SEO & Digital Visibility",
        description: "Improve search presence and online discovery.",
        href: "/#services",
        code: "SEO",
      },
    ],
  },
  {
    title: "Process",
    number: "03",
    items: [
      {
        title: "Discovery",
        description: "Understand the problem, goals and requirements.",
        href: "/#process",
        code: "01",
      },
      {
        title: "Planning",
        description: "Define scope, structure and technical direction.",
        href: "/#process",
        code: "02",
      },
      {
        title: "Design & Build",
        description: "Create and engineer the digital solution.",
        href: "/#process",
        code: "03",
      },
      {
        title: "Test & Launch",
        description: "Validate, optimize and deploy with confidence.",
        href: "/#process",
        code: "04",
      },
    ],
  },
];

const searchItems = [
  {
    title: "Home",
    category: "Page",
    description: "SoftwayHub digital engineering homepage.",
    href: "/",
    keywords: "home softwayhub company",
  },
  {
    title: "About SoftwayHub",
    category: "Page",
    description: "Learn about our team, direction and company.",
    href: "/about",
    keywords: "about company softwayhub team",
  },
  {
    title: "Web Development",
    category: "Service",
    description: "Modern, responsive and high-performance websites.",
    href: "/#services",
    keywords: "web development website frontend nextjs wordpress",
  },
  {
    title: "Custom Software",
    category: "Service",
    description: "Software solutions built around business needs.",
    href: "/#services",
    keywords: "custom software development systems application",
  },
  {
    title: "Frontend Engineering",
    category: "Service",
    description: "Responsive and scalable frontend experiences.",
    href: "/#services",
    keywords: "frontend react nextjs ui development",
  },
  {
    title: "WordPress & CMS",
    category: "Service",
    description: "Flexible CMS and WordPress development.",
    href: "/#services",
    keywords: "wordpress cms website development",
  },
  {
    title: "eCommerce Development",
    category: "Service",
    description: "Conversion-focused online stores.",
    href: "/#services",
    keywords: "ecommerce shop store woocommerce",
  },
  {
    title: "AI & Chatbot Solutions",
    category: "Service",
    description: "AI-powered chatbot and customer support solutions.",
    href: "/#services",
    keywords: "ai chatbot artificial intelligence automation assistant",
  },
  {
    title: "API Integration",
    category: "Service",
    description: "Connect software platforms and external services.",
    href: "/#services",
    keywords: "api integration rest systems connect",
  },
  {
    title: "Business Automation",
    category: "Service",
    description: "Smarter workflows for repetitive business tasks.",
    href: "/#services",
    keywords: "automation workflow business process",
  },
  {
    title: "SEO & Digital Visibility",
    category: "Service",
    description: "Improve search visibility and digital discovery.",
    href: "/#services",
    keywords: "seo google ranking visibility search",
  },
  {
    title: "Selected Work",
    category: "Work",
    description: "Explore selected SoftwayHub projects.",
    href: "/#work",
    keywords: "projects portfolio work case studies",
  },
  {
    title: "Our Process",
    category: "Process",
    description: "Discover how SoftwayHub takes ideas to launch.",
    href: "/#process",
    keywords: "process discovery planning design build test launch",
  },
  {
    title: "Careers",
    category: "Company",
    description: "Explore opportunities at SoftwayHub.",
    href: "/careers",
    keywords: "career jobs internship hiring work",
  },
  {
    title: "Contact",
    category: "Company",
    description: "Talk to our team about your next project.",
    href: "/contact",
    keywords: "contact project quote email team",
  },
];


function MobileNavIcon({ label }: { label: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (label) {
    case "Home":
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10.5V20h13v-9.5" />
          <path d="M9.5 20v-5.5h5V20" />
        </svg>
      );

    case "About":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20c.6-4 3-6 6.5-6s5.9 2 6.5 6" />
        </svg>
      );

    case "Services":
      return (
        <svg {...common}>
          <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
          <path d="m4 12 8 4.5 8-4.5" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </svg>
      );

    case "Work":
      return (
        <svg {...common}>
          <rect x="3" y="6.5" width="18" height="13" rx="2" />
          <path d="M9 6.5V4.7h6v1.8" />
          <path d="M3 11h18" />
        </svg>
      );

    case "Careers":
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8" r="3" />
          <circle cx="16.5" cy="9" r="2.3" />
          <path d="M3.5 20c.4-4.2 2.4-6.2 5-6.2s4.7 2 5.1 6.2" />
          <path d="M14.2 14.8c3.5-.4 5.6 1.4 6.3 4.5" />
        </svg>
      );

    case "Contact":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || searchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        setMenuOpen(false);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setServicesOpen(false);
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return searchItems.slice(0, 8);
    }

    return searchItems.filter((item) => {
      const searchableText = `
        ${item.title}
        ${item.category}
        ${item.description}
        ${item.keywords}
      `.toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

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
            {navItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className={`sw-nav-dropdown-wrap ${
                      servicesOpen ? "is-open" : ""
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="sw-navbar-link sw-navbar-link-dropdown"
                    >
                      <span className="sw-navbar-link-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{item.label}</span>

                      <motion.span
                        className="sw-navbar-dropdown-arrow"
                        animate={{
                          rotate: servicesOpen ? 180 : 0,
                        }}
                      >
                        ↓
                      </motion.span>
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="sw-services-dropdown"
                          initial={{
                            opacity: 0,
                            y: 14,
                            scale: 0.985,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.985,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div className="sw-services-dropdown-energy">
                            <span />
                          </div>

                          <div className="sw-services-dropdown-grid" />

                          <span className="sw-services-dropdown-glow sw-services-dropdown-glow-one" />
                          <span className="sw-services-dropdown-glow sw-services-dropdown-glow-two" />

                          <div className="sw-services-dropdown-header">
                            <div>
                              <span className="sw-services-dropdown-eyebrow sw-mono">
                                SOFTWAYHUB / CAPABILITIES
                              </span>

                              <h3>
                                Engineering ideas into{" "}
                                <span>real solutions.</span>
                              </h3>
                            </div>

                            <div className="sw-services-dropdown-status sw-mono">
                              <span className="sw-services-status-dot" />
                              SYSTEMS ONLINE
                            </div>
                          </div>

                          <div className="sw-services-dropdown-columns sw-services-dropdown-columns-three">
                            {serviceGroups.map((group) => (
                              <div
                                key={group.title}
                                className="sw-services-dropdown-group"
                              >
                                <div className="sw-services-group-title">
                                  <span className="sw-mono">
                                    {group.number}
                                  </span>
                                  <span>{group.title}</span>
                                </div>

                                <div className="sw-services-dropdown-list">
                                  {group.items.map((service) => (
                                    <Link
                                      key={service.title}
                                      href={service.href}
                                      className="sw-services-dropdown-item"
                                      onClick={() => setServicesOpen(false)}
                                    >
                                      <span className="sw-services-item-code sw-mono">
                                        {service.code}
                                      </span>

                                      <span className="sw-services-item-content">
                                        <strong>{service.title}</strong>
                                        <small>{service.description}</small>
                                      </span>

                                      <span className="sw-services-item-arrow">
                                        ↗
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="sw-services-dropdown-footer">
                            <div className="sw-services-dropdown-footer-copy">
                              <span className="sw-mono">
                                HAVE SOMETHING IN MIND?
                              </span>

                              <p>
                                Let&apos;s turn your idea into a reliable
                                digital product.
                              </p>
                            </div>

                            <Link
                              href="/contact"
                              className="sw-services-dropdown-cta"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span>Start a Project</span>
                              <span>↗</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
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
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="sw-navbar-actions">
            <button
              type="button"
              className="sw-navbar-search-btn"
              onClick={() => {
                setSearchOpen(true);
                setServicesOpen(false);
              }}
              aria-label="Search SoftwayHub"
            >
              <span className="sw-navbar-search-icon">⌕</span>
              <span className="sw-navbar-search-text">Search</span>
              <span className="sw-navbar-search-key sw-mono">Ctrl K</span>
            </button>

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

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="sw-search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) {
                closeSearch();
              }
            }}
          >
            <motion.div
              className="sw-search-command"
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 18,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="sw-search-grid" />

              <div className="sw-search-top">
                <div>
                  <span className="sw-search-eyebrow sw-mono">
                    SOFTWAYHUB / GLOBAL SEARCH
                  </span>

                  <h2>
                    Find anything.
                    <span> Fast.</span>
                  </h2>
                </div>

                <button
                  type="button"
                  className="sw-search-close"
                  onClick={closeSearch}
                  aria-label="Close search"
                >
                  ×
                </button>
              </div>

              <div className="sw-search-input-wrap">
                <span className="sw-search-input-icon">⌕</span>

                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search services, work, careers, process..."
                />

                <span className="sw-search-esc sw-mono">ESC</span>
              </div>

              <div className="sw-search-meta">
                <span className="sw-mono">
                  {searchQuery
                    ? `${filteredSearchItems.length} RESULTS`
                    : "QUICK ACCESS"}
                </span>

                <span className="sw-mono">
                  NAVIGATE / DISCOVER / CONNECT
                </span>
              </div>

              <div className="sw-search-results">
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item, index) => (
                    <motion.div
                      key={`${item.title}-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.025,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="sw-search-result"
                        onClick={closeSearch}
                      >
                        <div className="sw-search-result-number sw-mono">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="sw-search-result-content">
                          <div className="sw-search-result-title-row">
                            <strong>{item.title}</strong>

                            <span className="sw-mono">
                              {item.category}
                            </span>
                          </div>

                          <p>{item.description}</p>
                        </div>

                        <span className="sw-search-result-arrow">↗</span>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="sw-search-empty">
                    <span className="sw-mono">NO MATCH FOUND</span>

                    <h3>Couldn&apos;t find that.</h3>

                    <p>
                      Try searching for Web Development, AI, Careers,
                      Process or Contact.
                    </p>
                  </div>
                )}
              </div>

              <div className="sw-search-footer">
                <span className="sw-mono">
                  SOFTWAYHUB / IDEAS TO REAL SOLUTIONS
                </span>

                <Link href="/contact" onClick={closeSearch}>
                  Need something specific?
                  <strong> Talk to us ↗</strong>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU — SPLIT DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sw-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) {
                closeMobileMenu();
              }
            }}
          >
            <div className="sw-mobile-menu-backdrop" />

            <motion.aside
              className="sw-mobile-menu-panel"
              initial={{ x: "104%" }}
              animate={{ x: 0 }}
              exit={{ x: "104%" }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-label="Mobile navigation"
            >
              <div className="sw-mobile-menu-grid" />
              <span className="sw-mobile-drawer-glow sw-mobile-drawer-glow-one" />
              <span className="sw-mobile-drawer-glow sw-mobile-drawer-glow-two" />

              <div className="sw-mobile-drawer-head">
                <Link
                  href="/"
                  className="sw-mobile-drawer-brand"
                  onClick={closeMobileMenu}
                  aria-label="SoftwayHub home"
                >
                  <Image
                    src="/logos/softwayhub-logo.webp"
                    alt="SoftwayHub"
                    width={160}
                    height={54}
                    className="sw-mobile-drawer-logo"
                  />
                </Link>

                <button
                  type="button"
                  className="sw-mobile-drawer-close"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation"
                >
                  <span />
                  <span />
                </button>
              </div>

              <div className="sw-mobile-menu-content">
                <button
                  type="button"
                  className="sw-mobile-search-trigger"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => setSearchOpen(true), 220);
                  }}
                >
                  <span className="sw-mobile-search-icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="m16 16 4 4" />
                    </svg>
                  </span>
                  <span>Search SoftwayHub...</span>
                  <span className="sw-mono">SEARCH</span>
                </button>

                <div className="sw-mobile-menu-links">
                  {navItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : !item.href.includes("#") && pathname === item.href;

                    if (item.dropdown) {
                      return (
                        <motion.div
                          key={item.label}
                          className={`sw-mobile-services ${
                            mobileServicesOpen ? "is-open" : ""
                          }`}
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.08 + index * 0.045,
                            duration: 0.35,
                          }}
                        >
                          <button
                            type="button"
                            className="sw-mobile-services-trigger"
                            onClick={() =>
                              setMobileServicesOpen((prev) => !prev)
                            }
                          >
                            <span className="sw-mobile-nav-icon">
                              <MobileNavIcon label={item.label} />
                            </span>

                            <span className="sw-mobile-services-trigger-left">
                              <strong>{item.label}</strong>
                            </span>

                            <motion.span
                              className="sw-mobile-nav-arrow"
                              animate={{
                                rotate: mobileServicesOpen ? 90 : 0,
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              →
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileServicesOpen && (
                              <motion.div
                                className="sw-mobile-services-dropdown"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.32,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                              >
                                <div className="sw-mobile-services-inner">
                                  {serviceGroups.map((group) => (
                                    <div
                                      key={group.title}
                                      className="sw-mobile-services-group"
                                    >
                                      <div className="sw-mobile-services-group-title sw-mono">
                                        <span>{group.number}</span>
                                        {group.title}
                                      </div>

                                      {group.items.map((service) => (
                                        <Link
                                          key={service.title}
                                          href={service.href}
                                          className="sw-mobile-service-item"
                                          onClick={closeMobileMenu}
                                        >
                                          <span className="sw-mobile-service-code sw-mono">
                                            {service.code}
                                          </span>
                                          <span>{service.title}</span>
                                          <span>↗</span>
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + index * 0.045,
                          duration: 0.35,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={isActive ? "is-active" : ""}
                          onClick={closeMobileMenu}
                        >
                          <span className="sw-mobile-nav-icon">
                            <MobileNavIcon label={item.label} />
                          </span>

                          <strong>{item.label}</strong>

                          <span className="sw-mobile-nav-arrow">→</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="sw-mobile-menu-separator" />

                <div className="sw-mobile-theme-row">
                  <div className="sw-mobile-utility-copy">
                    <span className="sw-mobile-utility-icon">◐</span>
                    <div>
                      <strong>Dark Mode</strong>
                      <small>Appearance</small>
                    </div>
                  </div>

                  <ThemeToggle />
                </div>

                <a
                  href="mailto:info@softwayhub.com"
                  className="sw-mobile-contact-row"
                >
                  <span className="sw-mobile-contact-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4.5 7 7.5 6 7.5-6" />
                    </svg>
                  </span>
                  <span>info@softwayhub.com</span>
                  <span>→</span>
                </a>

                <Link
                  href="/contact"
                  className="sw-mobile-menu-cta"
                  onClick={closeMobileMenu}
                >
                  <span>Start a Project</span>
                  <span>↗</span>
                </Link>

                <div className="sw-mobile-menu-footer sw-mono">
                  <span>SOFTWAYHUB / DIGITAL ENGINEERING</span>
                  <span>ISLAMABAD / PK</span>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
