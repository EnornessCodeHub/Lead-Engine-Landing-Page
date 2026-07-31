import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const FAQS = [
  {
    q: "What is the AI Lead Conversion Platform?",
    a: "It's an AI-powered platform that captures leads from all your channels, engages them instantly, and nurtures them until they convert into paying customers.",
  },
  {
    q: "Will it work for my type of business?",
    a: "Yes — our platform adapts to gyms, dental clinics, spas, restaurants, home services, and many other industries.",
  },
  {
    q: "Which channels does it support?",
    a: "WhatsApp, Meta Ads, Instagram, Messenger, Website Forms, Google Ads, and Zapier, with more integrations added regularly.",
  },
  {
    q: "How does the AI Agent work?",
    a: "It replies to leads in real time, answers common questions, books appointments, and hands off qualified leads to your team.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are fully set up and live within 24 hours, with no credit card required to get started.",
  },
  {
    q: "Is my data safe and secure?",
    a: "Yes — your data is encrypted in transit and at rest, and we never share your customer data with third parties.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section">
      <div className="container">
        <div className="faq__intro">
          <span className="eyebrow">Questions Business Owners Ask</span>
          <h2 className="faq__heading">Everything You Need to Know</h2>
        </div>

        <div className="faq__grid">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className={`faq__answer-wrap ${isOpen ? "is-open" : ""}`}>
                  <p className="faq__answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
