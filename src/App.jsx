import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// New pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <div className="antialiased text-gray-900">
        <Navbar />

        <main className="pt-20">
          <Routes>
            {/* Main One-Page Site */}
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Hero /></section>
                  <section id="whychooseus"><WhyChooseUs /></section>
                  <section id="services"><Services /></section>
                  <section id="trustedby"><TrustedBy /></section>
                  <section id="workwithus"><WorkWithUs /></section>
                  <section id="about"><About /></section>
                  <section id="staffcarousel"><StaffCarousel /></section>
                  <section id="contact"><Contact /></section>
                  <section id="footer"><Footer /></section>
                </>
              }
            />

            {/* Extra Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
