import { useScrollReveal } from "../hooks/useScrollReveal";
import gym from "../assets/images/gym.jpg";
import dental from "../assets/images/dental.jpg";
import spa from "../assets/images/spa.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import roofing from "../assets/images/roofing.jpg";
import "./Industries.css";

const INDUSTRIES = [
  { image: gym, title: "Gyms & Fitness", description: "Turn inquiries into memberships and grow your gym." },
  { image: dental, title: "Dental Clinics", description: "Book more appointments and reduce no-shows." },
  { image: spa, title: "Skin & Beauty", description: "Convert consultations into treatments and loyal customers." },
  { image: restaurant, title: "Restaurants", description: "Handle reservations and inquiries automatically." },
  { image: roofing, title: "Home Services", description: "Get more quotes booked and jobs closed faster." },
];

function Industries() {
  const revealRef = useScrollReveal();

  return (
    <section className="industries section" id="industries">
      <div className="container">
        <div className="industries__intro">
          <span className="eyebrow eyebrow--green">Built For Every Industry</span>
          <h2 className="industries__heading">Perfect for Businesses Like Yours</h2>
          <p className="industries__subtext">Our platform adapts to your business needs.</p>
        </div>

        <div className="industries__grid" ref={revealRef}>
          {INDUSTRIES.map((item, i) => (
            <div
              key={item.title}
              className="industries__card hover-lift reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={item.image} alt={item.title} className="industries__image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
