"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
          ? "bg-[#12372A] backdrop-blur-lg border-[#ADBC9F]/20 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <img
          src="/Logo DhiTrip.png"
          alt="Dhil Trip"
          className={`h-10 w-auto transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        />

        {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <button
      key={link.name}
      onClick={() => handleNavClick(link.href)}
      className={`text-sm font-medium transition-colors duration-300 ${
        scrolled
          ? "text-[#FBFADA] hover:text-white" // <-- Diubah di sini: Jadi Krem Solid saat discroll, hover jadi putih (atau sesuaikan selera)
          : "text-white/75 hover:text-[#FBFADA]" // <-- Saat di atas putih, kalau di-hover berubah jadi krem
      }`}
    >
      {link.name}
    </button>
  ))}
  <button
    onClick={() => handleNavClick("#packages")}
    className="px-6 py-2.5 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-[#FBFADA] text-[#12372A] hover:bg-white"
  >
    Book Now
  </button>
</nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-[#FBFADA]" : "text-white"}`}
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
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-[#12372A] z-50 p-6 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <img src="/Logo DhilTrip.png" alt="Dhil Trip" className="h-8 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#FBFADA]/60 hover:text-[#FBFADA] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-medium text-[#FBFADA]/80 hover:text-[#FBFADA] py-2 border-b border-[#ADBC9F]/20 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleNavClick("#packages")}
                  className="w-full py-4 bg-[#FBFADA] text-[#12372A] font-semibold rounded-2xl hover:bg-white transition-colors shadow-lg"
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