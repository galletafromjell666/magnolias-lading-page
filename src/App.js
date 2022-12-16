import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ReviewContainer from "./components/ReviewContainer";
import ServicesSection from "./components/ServicesSection";


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <ReviewContainer/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
