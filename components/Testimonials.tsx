"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina S.",
    role: "UGM Student",
    text: "This trip changed how I see travel. The journaling sessions helped me process so much. I feel lighter and more connected to the environment.",
    rating: 5
  },
  {
    name: "Budi H.",
    role: "Company Employee",
    text: "The Karimunjawa package was incredible. The team at Dhil Trip genuinely cares about your wellbeing, not just ticking tourist boxes.",
    rating: 5
  },
  {
    name: "Sari N.",
    role: "Teacher",
    text: "Taking my students on the Waste Bank tour opened their eyes. Educational, fun, and meaningful. We'll definitely come back.",
    rating: 5
  },
  {
    name: "Dimas A.",
    role: "Environmental Activist",
    text: "Finally a tour that walks the talk on sustainability. The eco-challenge with telo bags was such a creative idea. Highly recommended!",
    rating: 5
  },
  {
    name: "Maya K.",
    role: "Psychology Student",
    text: "The deep talk circles were unexpectedly powerful. I came for a trip and left with new friends and a new perspective on life.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            What Our Travelers Say
          </motion.h2>
        </div>
        
        <div 
          className="relative w-full mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}              
              className="w-full flex flex-col items-center text-center bg-white p-8 sm:p-10 rounded-[2rem] shadow-xl border border-border/50 min-h-[380px] sm:min-h-[320px]"
            >
              {/* FIX: Reduced margin-bottom to shrink the massive gap at the top */}
              <Quote className="w-10 h-10 text-accent mb-3 opacity-30" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Added flex items-center so shorter quotes stay vertically centered */}
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 flex-grow flex items-center justify-center">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="mt-auto">
                <p className="font-bold font-display text-lg text-primary">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The dots remain exactly the same, but now they won't overlap! */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000); // Resume after 10s of manual click
              }}
              className={`transition-all duration-300 rounded-full h-2 ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
