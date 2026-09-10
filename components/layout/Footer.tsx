import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/softwayhub/" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="sw-footer">
      <div className="sw-container">
        <div className="sw-footer-main">
          {/* BRAND */}
          <Link href="/" className="sw-footer-brand">
            <Image
              src="/logos/softwayhub-logo.webp"
              alt="SoftwayHub"
              width={180}
              height={60}
              className="sw-footer-logo"
            />
          </Link>

          {/* SHORT LINE */}
          <p className="sw-footer-text">
            Engineering digital products for modern business.
          </p>

          {/* SOCIAL */}
          <div className="sw-footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="sw-footer-bottom">
          <span className="sw-mono">
            © {new Date().getFullYear()} SOFTWAYHUB
          </span>

          <div className="sw-footer-links">
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <span className="sw-footer-location sw-mono">
            ISLAMABAD / PK
          </span>
        </div>
      </div>
    </footer>
  );
}