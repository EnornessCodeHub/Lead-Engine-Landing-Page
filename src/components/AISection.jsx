import { Clock, ArrowRight, Check } from "lucide-react";
import { scrollToBooking } from "../utils/scrollToBooking";
import instagram from "../assets/icons/integration-instagram.svg";
import facebook from "../assets/icons/integration-facebook.svg";
import whatsapp from "../assets/icons/integration-whatsapp.svg";
import x from "../assets/icons/integration-x.svg";
import threads from "../assets/icons/integration-threads.svg";
import "./AISection.css";

const ORBIT_RADIUS_PERCENT = 48.5;
const SATELLITES = [
  { icon: instagram, baseAngle: 0 },
  { icon: facebook, baseAngle: 72 },
  { icon: whatsapp, baseAngle: 144 },
  { icon: x, baseAngle: 216 },
  { icon: threads, baseAngle: 288 },
];

function orbitPoint(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + ORBIT_RADIUS_PERCENT * Math.sin(rad),
    y: 50 - ORBIT_RADIUS_PERCENT * Math.cos(rad),
  };
}

const STEPS = [
  "Captures leads from all channels instantly.",
  "Starts real-time conversations and answers questions.",
  "Books appointments and collects important details.",
  "Qualifies leads and understands customer intent.",
  "Nurtures leads with follow-ups and reminders.",
  "Hands over warm leads to your team for closing.",
];

function AISection() {
  return (
    <section className="ai-section" id="how-it-works">
      <div className="container ai-section__inner">
        <div className="ai-section__illustration">
          <div className="ai-orbit">
            <svg className="ai-orbit__lines" viewBox="0 0 100 100" aria-hidden="true">
              {SATELLITES.map((sat, i) => {
                const { x, y } = orbitPoint(sat.baseAngle);
                return <line key={i} x1="50" y1="50" x2={x} y2={y} />;
              })}
            </svg>
            {SATELLITES.map((sat, i) => {
              const { x, y } = orbitPoint(sat.baseAngle);
              return (
                <div
                  key={i}
                  className="ai-orbit__satellite-pos"
                  style={{ top: `${y}%`, left: `${x}%` }}
                >
                  <img src={sat.icon} alt="" className="ai-orbit__satellite" />
                </div>
              );
            })}
            <div className="ai-orbit__core">
              <img src="/ai-section__illustration.png" alt="AI Robot" className="ai-orbit__robot" />
            </div>
          </div>
        </div>

        <div className="ai-section__content">
          <span className="eyebrow eyebrow--light">Meet Your AI Sales Assistant</span>
          <h2 className="ai-section__heading">Works 24/7. Converts 24/7.</h2>
          <ol className="ai-section__steps">
            {STEPS.map((step) => (
              <li key={step}>
                <span className="ai-section__step-check">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="ai-section__card">
          <div className="ai-section__card-icon">
            <Clock size={100} />
          </div>
          <h3>
            Works 24/7
            <br />
            365 Days
          </h3>
          <p>Never sleeps. <br/>Never misses. <br/>Always converts. <br/></p>
          <button type="button" className="btn btn--primary" onClick={scrollToBooking}>
            Book A Demo
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AISection;
