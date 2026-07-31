import { ShieldCheck, Users2, TrendingUp, ArrowRight } from "lucide-react";
import { scrollToBooking } from "../utils/scrollToBooking";
import "./CTABanner.css";

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "Free Demo", subtitle: "No Obligation" },
  { icon: Users2, title: "Custom Walkthrough", subtitle: "For Your Business" },
  { icon: TrendingUp, title: "See Real Results", subtitle: "In Action" },
];

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <h2>
            Stop Losing Leads.
            <br />
            Start Converting Them.
          </h2>
          <p>
            Book a demo today and see how our AI Lead Conversion Platform can grow
            your business.
          </p>
        </div>

        <div className="cta-banner__trust">
          {TRUST_ITEMS.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="cta-banner__trust-item">
              <span className="cta-banner__badge">
                <Icon size={28} strokeWidth={1.75} />
              </span>
              <div>
                <p className="cta-banner__trust-title">{title}</p>
                <p className="cta-banner__trust-subtitle">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner__action">
          <button type="button" className="btn btn--primary" onClick={scrollToBooking}>
            Book A Demo
            <ArrowRight size={18} />
          </button>
          <p className="cta-banner__note">No Credit Card Required</p>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
