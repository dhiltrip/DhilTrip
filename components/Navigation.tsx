"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-border/50 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick("#home")}
        >
          <div className={`p-2 rounded-xl transition-colors duration-300 ${scrolled ? "bg-primary/10 text-primary" : "bg-white/15 text-[#ADBC9F]"}`}>
            <Leaf className="w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-[#FBFADA]"}`}>
            Dhil Trip
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#packages")}
            className={`px-6 py-2.5 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-[#FBFADA] text-[#12372A] hover:bg-white"
            }`}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-background z-50 p-6 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-display font-bold text-lg">Dhil Trip</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleNavClick("#packages")}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
