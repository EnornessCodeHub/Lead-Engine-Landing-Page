import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProcessSteps from "./components/ProcessSteps";
import AISection from "./components/AISection";
import Integrations from "./components/Integrations";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProcessSteps />
      <AISection />
      <Integrations />
      <Industries />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
