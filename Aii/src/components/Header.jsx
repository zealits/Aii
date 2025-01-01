import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [inAbout, setInAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInAbout(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) observer.observe(aboutSection);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (aboutSection) observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        atTop && !isOpen && !inAbout
          ? "bg-transparent"
          : "bg-black nav-blur"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-bold text-white tracking-wide group flex items-center justify-between"
          >
            <img width="60px" src={Logo} alt="Logo" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white group-hover:from-white group-hover:to-blue-200 transition duration-300 px-4">
              Venture
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-blue-100 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              About
            </a>
            <a
              href="#services"
              className="text-blue-100 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="text-blue-100 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-white bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/50 rounded-full hover:scale-105 transform transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white/10 rounded-2xl backdrop-blur-lg mb-4"
          >
            <a
              href="#about"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#solutions"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
