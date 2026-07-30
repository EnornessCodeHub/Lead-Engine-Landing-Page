import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./ProcessSteps.css";

const STEPS = [
  {
    icon: "/all-in-one-social-icons.png",
    title: "Capture Leads",
    description: "Collect leads from all your channels in real-time.",
  },
  {
    icon: "/all-in-one-small-robot.png",
    title: "AI Responds Instantly",
    description: "Our AI Agent replies in seconds, answers questions, and engages leads 24/7.",
  },
  {
    icon: "/all-in-one-calendar.png",
    title: "Book Appointments",
    description: "AI schedules appointments seamlessly into your calendar.",
  },
  {
    icon: "/all-in-one-human-icon.png",
    title: "Nurture & Qualify",
    description: "AI nurtures leads, qualifies them, and keeps them warm to buy.",
  },
  {
    icon: "/all-in-one-platform.png",
    title: "Convert & Grow",
    description: "More booked appointments, more sales, more revenue for your business.",
  },
];

function ProcessSteps() {
  const revealRef = useScrollReveal();

  return (
    <section className="process section" id="features">
      <div className="container">
        <div className="process__intro">
          <span className="eyebrow">All-in-One Platform</span>
          <h2 className="process__heading">Everything You Need to Convert More Leads</h2>
          <p className="process__subtext">From lead capture to conversion – we handle it all.</p>
        </div>

        <div className="process__steps" ref={revealRef}>
          {STEPS.map((step, i) => (
            <div className="process__step-wrap" key={step.title}>
              <div
                className="process__card hover-lift reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={step.icon} alt="" className="process__icon" />
                <h3 className="process__title">
                  {i + 1}. {step.title}
                </h3>
                <p className="process__description">{step.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight size={20} className="process__arrow" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
