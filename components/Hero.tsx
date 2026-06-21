"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Star, Wind, MapPin, Users } from "lucide-react";

const marqueeItems = [
  "Healing Journeys", "Eco Challenge", "Karimunjawa", "Deep Talk",
  "Journaling", "Yogyakarta", "Sustainability", "Cultural Immersion",
  "Waste Bank Tour", "Self Recovery", "Nature Retreats", "Community",
];

const photos = [
  { src: "Karimun_5.JPG", alt: "Karimunjawa beach" },
  { src: "Bromo.JPG", alt: "Lush green forest" },
  { src: "Tamansari.JPG", alt: "Yogyakarta temple" },
  { src: "Keraton.JPG", alt: "Serene lake" },
];

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,-30px) scale(1.08); }
          66% { transform: translate(-20px,20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-35px,25px) scale(1.06); }
          66% { transform: translate(25px,-15px) scale(0.97); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,30px) scale(1.1); }
        }
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(18px); }
        }
        @keyframes waveFloatRev {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a1e] via-[#12372A] to-[#1a4835]" />

      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#ADBC9F]/14 blur-[90px]"
        style={{ animation: "blob1 14s ease-in-out infinite" }} />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#436850]/20 blur-[80px]"
        style={{ animation: "blob2 18s ease-in-out infinite", animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#436850]/15 blur-[100px]"
        style={{ animation: "blob3 11s ease-in-out infinite", animationDelay: "-3s" }} />

      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map((y, i) => (
          <path key={i}
            d={`M-200,${y} C150,${y - 50} 400,${y + 50} 700,${y} S1100,${y - 50} 1400,${y} S1800,${y + 50} 2100,${y}`}
            fill="none" stroke="#ADBC9F" strokeWidth="1"
            style={{ animation: `${i % 2 === 0 ? "waveFloat" : "waveFloatRev"} ${9 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * -1.2}s` }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #ADBC9F 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 22% 50%, transparent 20%, #0d2a1e 85%)" }} />
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen overflow-hidden flex flex-col"
    >
      <Background />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.022] pointer-events-none z-[2]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Main content — constrained to same max-width as nav */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* LEFT — text column */}
        <motion.div
          style={{ y: yLeft }}
          className="flex-1 lg:flex-none lg:w-[48%] flex flex-col justify-center pr-0 lg:pr-10 xl:pr-16 pt-24 pb-4 lg:pt-0 lg:pb-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 self-start mb-5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <Leaf className="w-3 h-3 text-[#ADBC9F]" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#ADBC9F]">
              Sustainable Healing Tourism
            </span>
          </motion.div>

          {[
            { word: "Heal.", color: "#FBFADA", delay: 0.1 },
            { word: "Explore.", color: "#ADBC9F", delay: 0.22 },
            { word: "Grow.", color: "#436850", delay: 0.34 },
          ].map(({ word, color, delay }) => (
            <div key={word} className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
                className="font-extrabold leading-[0.9] tracking-tight"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color,
                  fontSize: "clamp(3.8rem, 8.5vw, 7.5rem)",
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-sm sm:text-base text-white/55 max-w-sm leading-relaxed mt-5 mb-7"
          >
            Where every journey becomes a space for self-recovery, environmental
            awareness, and genuine human connection — based in Yogyakarta, Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="flex flex-row gap-4 mt-8"
          >
            <button
              onClick={() => handleScrollTo("#packages")}
              className="group flex items-center gap-3 px-6 py-3.5 bg-[#FBFADA] text-[#12372A] font-bold rounded-2xl text-sm hover:bg-white transition-all duration-300 shadow-2xl shadow-black/30"
            >
              Book a Trip
              <span className="w-5 h-5 rounded-full bg-[#12372A] text-[#FBFADA] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
            <button
              onClick={() => handleScrollTo("#why-us")}
              className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/80 font-semibold rounded-2xl text-sm hover:border-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Our Story
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap items-center gap-5 mt-8"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#ADBC9F] fill-[#ADBC9F]" />
                ))}
              </div>
              <span className="text-xs text-white/45 ml-1">5.0 avg rating</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1.5 text-xs text-white/45">
              <Wind className="w-3 h-3 text-[#ADBC9F]" />
              <span>200+ travelers healed</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1.5 text-xs text-white/45">
              <Users className="w-3 h-3 text-[#ADBC9F]" />
              <span>SDGs Aligned</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — photo mosaic, fills remaining 52% */}
        <motion.div
          style={{ y: yRight }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex lg:w-[52%] items-center justify-center pt-24 pb-6 xl:pt-28 xl:pb-8"
        >
          <div className="relative w-full" style={{ height: "calc(100vh - 260px)" }}>
            {/* Grid fills the entire right column */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
              {/* Main large image — top-left 2×2 */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
                className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-2xl shadow-black/40">
                <img src={photos[0].src} alt={photos[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ADBC9F] animate-pulse" />
                  <span className="text-xs text-white font-medium">Karimunjawa</span>
                </div>
              </motion.div>

              {/* Top-right small image */}
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <img src={photos[1].src} alt={photos[1].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>

              {/* Mid-right small image */}
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <img src={photos[2].src} alt={photos[2].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>

              {/* Bottom full-width image */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
                className="col-span-3 row-span-1 rounded-2xl overflow-hidden relative group shadow-xl shadow-black/30">
                <img src={photos[3].src} alt={photos[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#12372A]/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ADBC9F]" />
                  <span className="text-xs text-white/80 font-medium">Yogyakarta, Indonesia</span>
                </div>
              </motion.div>
            </div>

            {/* Floating card — 50+ Trips, top-right of main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute top-4 right-4 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#FBFADA] rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 flex items-center gap-3 min-w-[148px]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#12372A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#ADBC9F]" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#12372A] leading-none" style={{ fontFamily: "'Sora', sans-serif" }}>50+</p>
                  <p className="text-[10px] font-medium text-[#436850] mt-0.5">Trips Completed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card — Eco-Certified, bottom-left area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="absolute bottom-16 left-4 z-20"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="flex items-center gap-3 bg-[#1a4a35] border border-[#ADBC9F]/30 rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 min-w-[158px]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ADBC9F]/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-[#ADBC9F]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#FBFADA]">Eco-Certified</p>
                  <p className="text-[10px] text-white/50 mt-0.5">SDGs Aligned ✦ 2025</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badge — 3K+ travelers, mid-right of grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="flex flex-col items-center gap-1.5 bg-[#0c251d]/85 border border-[#ADBC9F]/25 backdrop-blur-md rounded-2xl px-3 py-3.5 shadow-xl"
              >
                <Users className="w-4 h-4 text-[#ADBC9F]" />
                <p className="text-base font-extrabold text-[#FBFADA] leading-none" style={{ fontFamily: "'Sora', sans-serif" }}>3K+</p>
                <p className="text-[9px] text-white/50 text-center leading-tight max-w-[46px]">Happy Travelers</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-white/10 bg-[#0c251d]/90 overflow-hidden py-2.5 flex-shrink-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 text-[10px] font-semibold tracking-widest uppercase text-white/35">
              <span className="w-1 h-1 rounded-full bg-[#ADBC9F] inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
