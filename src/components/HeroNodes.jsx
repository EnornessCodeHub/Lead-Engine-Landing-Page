import googleads from "../assets/icons/integration-googleads.svg";
import instagram from "../assets/icons/integration-instagram.svg";
import facebook from "../assets/icons/integration-metaads.svg";
import whatsapp from "../assets/icons/integration-whatsapp.svg";
import website from "../assets/icons/integration-website.svg";
import messenger from "../assets/icons/integration-messenger.svg";
import "./HeroNodes.css";

const CONVERGE = { x: 260, y: 200 };
const BADGE_END_X = 160;

const NODES = [
  { icon: googleads, label: "Google Ad", color: "#F7BB17", y: 30 },
  { icon: instagram, label: "Instagram", color: "#F97316", y: 96 },
  { icon: facebook, label: "Facebook", color: "#3B82F6", y: 162 },
  { icon: whatsapp, label: "WhatsApp", color: "#22C55E", y: 238 },
  { icon: website, label: "Website", color: "#A855F7", y: 304 },
  { icon: messenger, label: "Messenger", color: "#FA48A5", y: 370 },
];

function curvePath(y) {
  return `M${BADGE_END_X},${y} C${BADGE_END_X + 45},${y} ${BADGE_END_X + 20},${CONVERGE.y} ${CONVERGE.x},${CONVERGE.y}`;
}

function HeroNodes() {
  return (
    <div className="hero-nodes">
      <svg
        className="hero-nodes__svg"
        viewBox="0 0 220 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {NODES.map((n) => (
          <path
            key={n.label}
            d={curvePath(n.y)}
            stroke="#818CF8"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            fill="none"
            opacity="0.55"
          />
        ))}
        <circle cx={CONVERGE.x} cy={CONVERGE.y} r="4" fill="#2D3189" />
        {NODES.map((n, i) => (
          <circle
            key={n.label}
            r="3.4"
            fill={n.color}
            className="hero-nodes__dot"
            style={{
              offsetPath: `path('${curvePath(n.y)}')`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </svg>

      <div className="hero-nodes__badges">
        {NODES.map((n) => (
          <div
            key={n.label}
            className="hero-nodes__badge"
            style={{ top: `${(n.y / 400) * 100}%` }}
          >
            <img src={n.icon} alt="" />
            <span>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroNodes;
