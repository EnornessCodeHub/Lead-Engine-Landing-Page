import { useState } from "react";
import { Sparkles, Check, Clock, X, ArrowRight } from "lucide-react";
import { scrollToBooking } from "../utils/scrollToBooking";
import HeroNodes from "./HeroNodes";
import "./Hero.css";

const FEATURES = [
  "Instant AI responses",
  "24/7 AI sales agent",
  "Appointment booking",
  "Lead qualification",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const params = new URLSearchParams({
        full_name: name.trim(),
        email: email.trim(),
      });

      window.open(
        `https://api.leadconnectorhq.com/widget/booking/qoVJruBSMX6pmpc0jY1r?${params.toString()}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Sparkles size={14} />
            AI-POWERED &bull; HUMAN-LIKE &bull; RESULT-DRIVEN
          </span>

          <h1 className="hero__heading">
            AI Lead Conversion
            <br />
            <span className="hero__heading--accent">Platform</span>
          </h1>

          <p className="hero__tagline">Capture. Engage. Nurture. Convert.</p>

          <p className="hero__subtext">
          Connects directly to WhatsApp Business API, Meta Ads and your website forms. No manual setup, no missed leads
          </p>

          <ul className="hero__features">
            {FEATURES.map((feature) => (
              <li key={feature} className="hero__feature">
                <span className="hero__feature-icon">
                  <Check size={11} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={scrollToBooking}>
              Book Your Free Demo
              <ArrowRight size={18} />
            </button>
            <a href="#how-it-works" className="btn btn--outline hero__secondary-btn">
              See How It Works
            </a>
          </div> */}
        </div>

        <div className="hero__aside">
          <div className="hero__visual-desktop">
            <HeroNodes />
            <img
              src="/hero-dashboard-only.png"
              alt="Lead Engine AI sales dashboard"
              className="hero__dashboard-img"
            />
          </div>

          <img
            src="/hero-section-landing.png"
            alt="Lead Engine AI sales dashboard"
            className="hero__visual hero__visual--mobile"
          />


        </div>
        <div className="hero__booking-block">
          <div className="hero__booking-card" id="book-demo">
            <p className="hero__booking-intro">
              See your available times — enter your details to view the calendar
            </p>
            <form className="hero__booking-form" onSubmit={handleSubmit} noValidate>
              <div className="hero__input-group">
                <input
                  type="text"
                  placeholder="Your name"
                  className={`hero__input ${errors.name ? "hero__input--error" : ""}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="hero__input-error">{errors.name}</span>}
              </div>
              <div className="hero__input-group">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className={`hero__input ${errors.email ? "hero__input--error" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="hero__input-error">{errors.email}</span>}
              </div>
              <button type="submit" className="btn btn--primary hero__booking-submit">
                Book A Demo
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
          <div className="hero__trust">
            <span>
              <Check size={16} className="hero__trust-icon--accent" /> No credit card required
            </span>
            <span>
              <Clock size={16} className="hero__trust-icon--accent" /> Setup in 24 hours
            </span>
            <span>
              <X size={16} className="hero__trust-icon--dark" /> Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
