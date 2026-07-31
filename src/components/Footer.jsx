import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";
import { scrollToBooking } from "../utils/scrollToBooking";
import facebook from "../assets/icons/social-facebook.svg";
import instagram from "../assets/icons/social-instagram.svg";
import linkedin from "../assets/icons/social-linkedin.svg";
import youtube from "../assets/icons/social-youtube.svg";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Integrations", href: "#integrations" },
      // { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://enorness.com/blog", external: true },
      { label: "Case Studies", href: "https://enorness.com/case-studies", external: true },
      // { label: "Help Center", href: "#" },
      // { label: "Guides", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "https://enorness.com/about", external: true },
      { label: "Contact Us", href: "https://enorness.com/contact", external: true },
      { label: "Privacy Policy", href: "https://enorness.com/privacy-policy", external: true },
      { label: "Terms of Service", href: "https://enorness.com/terms-of-service", external: true },
    ],
  },
];

const SOCIALS = [
  { icon: facebook, label: "Facebook", href: "#" },
  { icon: instagram, label: "Instagram", href: "#" },
  { icon: linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/enorness" },
  { icon: youtube, label: "YouTube", href: "#" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Lead Engine" className="footer__logo" />
          <p>
            Helping businesses capture, engage, nurture, and convert more leads with
            AI-powered automation.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a
                href={s.href}
                key={s.label}
                aria-label={s.label}
                className="footer__social"
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <img src={s.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="footer__column">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__cta-card hover-lift">
          <p className="footer__cta-title">Ready to grow your business?</p>
          <p className="footer__cta-subtext">Let's show you how AI can help.</p>
          <button
            type="button"
            className="btn btn--primary footer__cta-btn"
            onClick={scrollToBooking}
          >
            Book a Free Demo
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2025 Lead Engine. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
