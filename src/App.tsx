import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import DesignServices from "./components/DesignServices";
import AiSection from "./components/AiSection";
import VpsSection from "./components/VpsSection";
import WhyUs from "./components/WhyUs";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-void text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <DesignServices />
        <AiSection />
        <VpsSection />
        <WhyUs />
        <Steps />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
