import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ReviewContainer from "./components/ReviewContainer";
import ServicesSection from "./components/ServicesSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({once: true,
      offset: 120,});
    AOS.refresh();
  }, [])
  return (
    <div>
      <Navbar  />
      <HeroSection/>
      <ServicesSection/>
      <ReviewContainer/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
