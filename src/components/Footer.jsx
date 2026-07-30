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
    links: ["Features", "How It Works", "Integrations", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Help Center", "Guides"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

const SOCIALS = [
  { icon: facebook, label: "Facebook" },
  { icon: instagram, label: "Instagram" },
  { icon: linkedin, label: "LinkedIn" },
  { icon: youtube, label: "YouTube" },
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
              <a href="#" key={s.label} aria-label={s.label} className="footer__social">
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
                <li key={link}>
                  <a href="#">{link}</a>
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
