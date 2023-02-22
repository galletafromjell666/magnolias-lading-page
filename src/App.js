import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ReviewContainer from "./components/ReviewContainer";
import ServicesSection from "./components/ServicesSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";

function App() {
  useEffect(() => {
    AOS.init({ once: true, offset: 50 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Element id="hero">
        <HeroSection />
      </Element>
      <Element id="services">
        <ServicesSection />
      </Element>
      <ReviewContainer />
      <Element id="contactUs">
        <ContactUs />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
