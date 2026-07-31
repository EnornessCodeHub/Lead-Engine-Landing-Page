import whatsapp from "../assets/icons/integration-whatsapp.svg";
import metaads from "../assets/icons/integration-metaads.svg";
import instagram from "../assets/icons/integration-instagram.svg";
import messenger from "../assets/icons/integration-messenger.svg";
import website from "../assets/icons/integration-website.svg";
import googleads from "../assets/icons/integration-googleads.svg";
import zapier from "../assets/icons/integration-zapier.svg";
import "./Integrations.css";

const INTEGRATIONS = [
  { icon: whatsapp, name: "WhatsApp" },
  { icon: metaads, name: "Meta Ads" },
  { icon: instagram, name: "Instagram" },
  { icon: messenger, name: "Messenger" },
  { icon: website, name: "Website Forms" },
  { icon: googleads, name: "Google Ads" },
  { icon: zapier, name: "Zapier" },
];

function Integrations() {
  return (
    <section className="integrations section" id="integrations">
      <div className="container">
        <h2 className="integrations__heading">Seamless Integrations</h2>
        <div className="integrations__grid">
          {INTEGRATIONS.map((item) => (
            <div key={item.name} className="integrations__chip hover-lift">
              <img src={item.icon} alt="" />
              {item.name}
            </div>
          ))}
        </div>
        <p className="integrations__more">...and more</p>
      </div>
    </section>
  );
}

export default Integrations;
