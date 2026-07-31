import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";
import { scrollToBooking } from "../utils/scrollToBooking";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  // { label: "Pricing", href: "#" },
  // { label: "Resources", href: "https://enorness.com/blog", external: true },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <img src={logo} alt="Lead Engine" className="navbar__logo" />

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn--primary navbar__cta navbar__cta--mobile"
            onClick={() => {
              setMenuOpen(false);
              scrollToBooking();
            }}
          >
            Book A Demo
            <ArrowRight size={18} />
          </button>
        </nav>

        <button
          type="button"
          className="btn btn--primary navbar__cta navbar__cta--desktop"
          onClick={scrollToBooking}
        >
          Book A Demo
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          className="navbar__menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
