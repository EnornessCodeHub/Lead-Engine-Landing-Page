import { useState } from "react";
import { Sparkles, Check, Clock, X, ArrowRight } from "lucide-react";
import "./Hero.css";

const FEATURES = ["Instant AI responses", "24/7 AI sales agent", "Appointment booking", "Lead qualification"];

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
        <span className="hero__badge">
          <Sparkles size={14} />
          AI-POWERED &bull; HUMAN-LIKE &bull; RESULT-DRIVEN
        </span>

        <h1 className="hero__heading">
          AI Lead Conversion
          <br />
          <span className="hero__heading--accent">Platform</span>
        </h1>

        <p className="hero__subtext">
          Every lead from WhatsApp, Meta ads and your website lands in one place.
          Our AI replies instantly, books the appointment and keeps following up.
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
            <button type="submit" className="btn btn--white">
              View available times
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* <div className="hero__booking-card" id="book-demo">
            <p className="hero__booking-intro">
              See your available times — enter your details to view the calendar
            </p>
            <iframe src="https://api.leadconnectorhq.com/widget/booking/qoVJruBSMX6pmpc0jY1r" allow="payment" style={{width: "100%",border: "none",height: "500px"}} scrolling="no" id="qoVJruBSMX6pmpc0jY1r_1785411371074">
            </iframe>
            <br/><script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
 
        </div> */}

        {/* <a href="#" className="hero__email-link">
          Not ready to book? Get the details by email instead
        </a> */}

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
    </section>
  );
}

export default Hero;
