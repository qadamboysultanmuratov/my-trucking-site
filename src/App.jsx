import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import TrustedBy from "./components/TrustedBy";
import StaffCarousel from "./components/StaffCarousel";
import WorkWithUs from "./components/WorkWithUs";


export default function App() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />
      {/* add top padding so first content isn't hidden behind fixed navbar */}
      <main className="pt-20">
        <section id="home"><Hero /></section>
        
        <section id="whychooseus"><WhyChooseUs /></section>
        <section id="services"><Services /></section>
        <section id="trustedby"><TrustedBy /></section>
        <section id="workwithus"><WorkWithUs /></section>
        
        
        
        
        <section id="about"><About /></section>
        
        <section id="staffcarousel"><StaffCarousel /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
        
      </main>
    </div>
  );
}
