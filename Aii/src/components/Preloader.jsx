import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import SolutionsSection from './SolutionsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './Preloader.css'; // Assuming you have a separate CSS file for styles
import Logo from "../assets/logo/logo.png"

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Keep preloader visible for at least 5 seconds
    const preloaderTimeout = setTimeout(() => {
      setIsLoaded(true);

      // Immediately after the logo animation ends, make the content visible
      const moveToTopLeftTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 2500); // 2.5 seconds for moveToTopLeft animation

      // Hide preloader completely after animation finishes
      setTimeout(() => {
        document.querySelector('.preloader').style.visibility = 'hidden';
      }, 2500); // Hide after the logo animation completes

      return () => clearTimeout(moveToTopLeftTimeout);
    }, 5000); // Keep preloader visible for at least 5 seconds

    return () => clearTimeout(preloaderTimeout);
  }, []);

  return (
    <div>
      {/* Preloader */}
      <div className={`preloader ${isLoaded ? 'loaded' : ''}`}>
        <img className="logo" src={Logo} alt="Website Logo" id="logo" />
      </div>

      {/* Main Content */}
      {/* <div className={`main-content ${isVisible ? 'visible' : ''}`}>
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <ContactSection />
        <Footer />
      </div> */}
    </div>
  );
};

export default Preloader;
