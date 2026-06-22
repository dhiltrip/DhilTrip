"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, X, MapPin, Users, Leaf, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const packages = [
  {
    id: 4,
    title: "Gunung Kidul Beach Camp",
    duration: "2D/1N",
    price: "Rp 475.000",
    unit: "/person",
    badge: "New Adventure",
    metaDetail: "Stargazing & Yoga",
    tags: ["Adventure", "Camping", "Healing"],
    image: "gkd1.png",
    images: ["gkd1.png"],
    tagline: "Sleep under the stars and wake up to the sound of breaking waves.",
    description: "Experience an extraordinary night inside premium tents on the cliffside of Gunung Kidul's white sand beach. This open trip camping experience is uniquely curated to balance outdoor adventure with mindful journaling, stargazing, a warm bonfire, and a coastal barbecue feast.",
    includes: [
      "Premium tent & comfortable camping gears",
      "Barbecue dinner & local culinary set",
      "Stargazing equipment & bonfire session",
      "Morning beach mindfulness yoga",
      "Travel insurance & standard safety equipment",
      "Round-trip transportation from Yogyakarta meeting point",
      "Experienced tour leader & local guide assistance"
    ],
    highlights: ["Private cliffside beach camping spot", "Stargazing & warm acoustic night", "Epic ocean sunrise views"],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey & Coastal Camp Experience",
        activities: [
          "13:00 — Pick-up at Yogyakarta meeting point & departure to Gunung Kidul",
          "15:30 — Arrival at the beach, tent setup & free time (sunset hunting & photography)",
          "19:00 — Group dinner featuring a fresh coastal Barbecue menu",
          "20:30 — Bonfire lighting, deep talk sharing session, and stargazing by the ocean"
        ],
      },
      {
        day: "Day 2",
        title: "Sunrise Mindfulness & Return",
        activities: [
          "05:30 — Wake up to witness the breathtaking Golden Sunrise from the cliffside",
          "06:30 — Morning tea/coffee break followed by a light beach meditation yoga session",
          "08:00 — Group breakfast together",
          "09:30 — Eco-challenge: beach clean-up action with the Dhil Trip team",
          "11:00 — Tent teardown, packing, and journey back to Yogyakarta city center"
        ],
      },
    ],
    whatsapp: "https://wa.link/eeqem4",
    maxGroup: "12 people",
    minAge: "15+",
    difficulty: "Medium",
  },
  {
    id: 1,
    title: "Karimunjawa Healing Retreat",
    duration: "3D/2N",
    price: "Rp 1.300.000",
    unit: "/person",
    badge: "Top Verified",
    metaDetail: "47+ Happy Travelers",
    tags: ["Healing", "Beach", "Nature"],
    image: "/kar8.JPG",
    images: ["/kar8.JPG", "/Karimunjawa_3.JPG", "/Ngapal.JPG", "/Santuy.JPG"],
    tagline: "Reconnect with the ocean, yourself, and your healing journey.",
    description: "An immersive 3-day healing retreat in the pristine waters of Karimunjawa. Far from the noise of daily life, this trip creates a safe space for personal reflection, emotional recovery, and genuine connection with nature and community.",
    includes: [
      "Guided beach healing & meditation sessions",
      "Daily reflective journaling & deep talk circles",
      "SDGs-aligned eco-challenge with signature telo bags",
      "Snorkeling tour at pristine coral reef conservation zones",
      "Authentic local island culinary experience & fresh seafood",
      "Cozy accommodation at a premium eco-friendly guesthouse",
      "Round-trip boat & land transportation from Yogyakarta meeting point",
      "Personal development kit & participation certificate"
    ],
    highlights: ["Island hopping to 3 hidden coastal paradises", "Sunset reflection & emotional sharing circles", "Collaborative local fisherman & micro-business immersion"],
    itinerary: [
      {
        day: "Day 1",
        title: "Departure & Arrival at Paradise",
        activities: [
          "06:00 — Depart from Yogyakarta via comfortable land transport to Kartini Port, Jepara",
          "09:00 — Boarding the express ferry over the beautiful Java Sea to Karimunjawa Island",
          "14:00 — Arrival at the island, smooth check-in at the eco-guesthouse, and brief rest",
          "16:00 — Welcome circle, personal intention-setting, and introductory journaling session",
          "19:00 — Group welcoming dinner featuring authentic local island seafood culinary"
        ],
      },
    ],
    whatsapp: "https://wa.link/99f93s",
    maxGroup: "15 people",
    minAge: "17+",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Jejak Imlek Semarang",
    duration: "1 Day",
    price: "Rp 285.000",
    unit: "/person",
    badge: "Trending Choice",
    metaDetail: "Cultural Exploration",
    tags: ["Culture", "Heritage", "Education"],
    image: "/Imlek.jpg",
    images: ["/Imlek.jpg"],
    tagline: "Immerse yourself in the rich cultural blend and vibrant lunar heritage.",
    description: "A fascinating one-day historical journey through Semarang's most iconic heritage landmarks. Explore the majestic Sam Poo Kong temple, dive deep into the cultural stories of Chinatown (Kampoeng Pecinan), and discover how diverse traditions beautifully blend together in the heart of Central Java.",
    includes: [
      "All-access entrance tickets to heritage sites & temples",
      "Exclusive lunar-themed educational kit & telo bags",
      "Authentic Semarang culinary lunch & traditional snacks",
      "Interactive cultural workshop & local operator mentoring",
      "Comfortable air-conditioned transport during the tour",
      "Professional local historian & tour guide service"
    ],
    highlights: ["Exclusive historical walk through Semarang Chinatown", "Majestic Sam Poo Kong temple private tour", "Local cultural fusion masterclass"],
    itinerary: [
      {
        day: "Morning",
        title: "Temple Exploration & Historic Walk",
        activities: [
          "07:30 — Morning gathering at Dhil Trip base & briefing session",
          "09:00 — Exploring Sam Poo Kong temple, learning about Admiral Zheng He's legacy",
          "11:00 — Guided heritage walk through the historic streets of Chinatown (Pecinan)"
        ],
      }
    ],
    whatsapp: "https://wa.link/uq1bpz",
    maxGroup: "25 people",
    minAge: "All ages",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Sowan Jogja",
    duration: "2D/1N",
    price: "Rp 195.000",
    unit: "/person",
    badge: "Most Popular",
    metaDetail: "18+ Reviews",
    tags: ["Culture", "Healing", "Community"],
    image: "/Keraton.jpg",
    images: ["/Keraton.jpg", "swn1.JPG", "swn2.JPG", "swn5.jpg"],
    tagline: "Discover the soul of Yogyakarta through culture, connection, and deep reflection.",
    description: "A meaningful two-day cultural immersion in the heart of Yogyakarta. Wander through royal palaces, historical sacred mosques, and ancient heritage streets while engaging in guided self-reflection, mindfulness journaling, and intimate heart-to-heart communal circles.",
    includes: [
      "Guided historical tour of Kraton Yogyakarta & Taman Sari water castle",
      "Immersive evening visit to the historic Grand Mosque of Yogyakarta",
      "Two facilitated deep talk circle integration sessions",
      "Curated journaling notebook with expert-designed psychological prompts"
    ],
    highlights: ["Private royal palace heritage exploration with expert guide", "Spiritual midnight walk & historical mosque experience", "Hands-on cultural immersion workshop with local artisans"],
    itinerary: [
      {
        day: "Day 1",
        title: "Royal Heritage & Intimate Circles",
        activities: [
          "08:00 — Morning gathering at Dhil Trip base & programmatic alignment briefing",
          "09:00 — Guided cultural trek through Kraton Yogyakarta and the ancient water castle"
        ],
      }
    ],
    whatsapp: "https://wa.link/9r2bnf",
    maxGroup: "20 people",
    minAge: "16+",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Explore Bromo",
    duration: "3D/2N",
    price: "Rp 720.000",
    unit: "/person",
    badge: "Next Departure",
    metaDetail: "Vintage 4x4 Jeep",
    tags: ["Landscape", "Mountain", "Wanderlust"],
    image: "brm1.jpg",
    images: ["brm1.jpg", "brm2.jfif", "brm4.jpg", "brm5.png"],
    tagline: "Witness the otherworldly golden sunrise above the majestic sea of sand.",
    description: "An epic 3-day journey to one of the most magical volcanic landscapes on Earth. Climb the active crater rim of Mount Bromo, gaze at the unforgettable sunrise from the highest viewpoint, and traverse the whispers of expansive black sand using classic 4x4 vintage Jeeps.",
    includes: [
      "Private 4x4 vintage Jeep tour across the entire Bromo National Park",
      "All-access official entrance tickets to Bromo Tengger Semeru",
      "Cozy mountain-view premium accommodation/homestay near the mountain"
    ],
    highlights: ["Golden sunrise view from the premium Penanjakan 1 deck", "Hiking to the smoking edge of Bromo's active crater rim"],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to the Highland Transit",
        activities: [
          "08:00 — Departure from Yogyakarta via comfortable air-conditioned highway transport"
        ],
      }
    ],
    whatsapp: "https://wa.link/ckuigv",
    maxGroup: "6 people/jeep",
    minAge: "10+",
    difficulty: "Medium",
  }
];

function PackageModal({ pkg, onClose }: { pkg: typeof packages[0]; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] bg-background rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="relative h-56 sm:h-72 flex-shrink-0 bg-[#12372A]">
            <img src={pkg.images[activeImg]} alt={pkg.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <button onClick={() => setActiveImg((p) => (p - 1 + pkg.images.length) % pkg.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setActiveImg((p) => (p + 1) % pkg.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {pkg.images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`rounded-full transition-all duration-300 ${i === activeImg ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"}`} />
              ))}
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              {pkg.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold rounded-full">{tag}</span>
              ))}
            </div>
            <div className="absolute bottom-8 left-5 right-16">
              <p className="text-white/70 text-sm mb-1">{pkg.tagline}</p>
              <h2 className="text-white text-2xl font-bold leading-tight">{pkg.title}</h2>
            </div>
          </div>

          <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Sparkles, label: pkg.badge },
                { icon: Clock, label: pkg.duration },
                { icon: Users, label: `Max ${pkg.maxGroup}` },
                { icon: MapPin, label: `Min age ${pkg.minAge}` },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full text-sm text-foreground/80">
                  <Icon className="w-4 h-4 text-[#436850]" />
                  <span>{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-[#12372A]/10 border border-[#ADBC9F]/40 px-3 py-1.5 rounded-full">
                <span className="text-2xl font-bold text-[#12372A]">{pkg.price}</span>
                <span className="text-muted-foreground text-sm font-normal">{pkg.unit}</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2 text-base">About This Package</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">Highlights</h3>
              <div className="grid grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 bg-[#12372A]/5 rounded-xl px-3 py-2.5">
                    <Leaf className="w-4 h-4 text-[#436850] flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#436850] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 p-5 sm:p-7 pt-4 border-t border-border/50 bg-background flex flex-col sm:flex-row gap-3">
            <a href={pkg.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#12372A] text-[#FBFADA] font-bold rounded-2xl hover:bg-[#1a4a35] transition-colors shadow-lg">
              Book This Trip
              <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={onClose} className="sm:w-32 py-4 border border-border rounded-2xl text-foreground/70 font-semibold hover:bg-muted transition-colors">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Packages() {
  const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Mulai dari indeks 1 (Karimunjawa)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  return (
    <section id="packages" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#ADBC9F]/12 blur-[80px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#436850]/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12372A]/8 border border-[#ADBC9F]/30 mb-4">
              <Leaf className="w-3.5 h-3.5 text-[#436850]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#436850]">Curated Experiences</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our Signature Packages
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-2xl">
              Carefully curated experiences that balance exploration with personal growth and positive community impact.
            </motion.p>
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center">
          
          {/* Navigasi Desktop */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 z-30 w-12 h-12 rounded-full border border-border items-center justify-center bg-card/90 backdrop-blur-md text-[#12372A] hover:bg-[#12372A] hover:text-white hover:border-[#12372A] shadow-lg transition-all group hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-2 z-30 w-12 h-12 rounded-full border border-border items-center justify-center bg-card/90 backdrop-blur-md text-[#12372A] hover:bg-[#12372A] hover:text-white hover:border-[#12372A] shadow-lg transition-all group hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* WRAPPER UTAMA */}
          <div className="w-full py-2 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-none">
            <motion.div 
              className="flex gap-6 md:gap-8 items-stretch px-2 md:px-0"
              animate={typeof window !== "undefined" && window.innerWidth > 768 ? { x: `calc(33.333% - 16px - (${currentIndex * 33.333}% + ${currentIndex * 32}px))` } : { x: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
            >
              {packages.map((pkg, idx) => {
                const isCenter = idx === currentIndex;
                
                return (
                  <motion.div 
                    key={pkg.id}
                    onClick={() => {
                      if (typeof window !== "undefined" && window.innerWidth > 768 && !isCenter) setCurrentIndex(idx);
                    }}
                    animate={typeof window !== "undefined" && window.innerWidth > 768 ? {
                      scale: isCenter ? 1 : 0.90,
                      opacity: isCenter ? 1 : 0.45,
                    } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`w-[82vw] sm:w-[45vw] md:w-[calc(33.333%-22px)] shrink-0 bg-card rounded-[2rem] overflow-hidden shadow-lg border flex flex-col group snap-center ${
                      isCenter 
                        ? "border-[#ADBC9F]/60 shadow-2xl md:z-20" 
                        : "border-border/40 md:z-10"
                    }`}
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {pkg.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="flex items-center gap-1.5 text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                          <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                          <span className="font-semibold text-xs tracking-wide uppercase text-amber-100">{pkg.badge}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-sm">{pkg.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-7 flex flex-col flex-grow bg-card">
                      <div className="text-xs font-semibold text-[#436850] tracking-wide mb-1 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#436850]" />
                        {pkg.metaDetail}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1 group-hover:text-[#12372A] transition-colors">{pkg.title}</h3>
                      <div className="mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-[#12372A]">{pkg.price}</span>
                        <span className="text-muted-foreground text-sm">{pkg.unit}</span>
                      </div>
                      <div className="space-y-2.5 mb-6 flex-grow">
                        {pkg.includes.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#436850] shrink-0 mt-0.5" />
                            <span className="text-foreground/75 text-xs sm:text-sm leading-snug">{item}</span>
                          </div>
                        ))}
                        {pkg.includes.length > 3 && (
                          <p className="text-xs text-[#436850] font-medium pl-6">+{pkg.includes.length - 3} more included</p>
                        )}
                      </div>
                      <div className="flex gap-2 sm:gap-3 mt-auto">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPkg(pkg);
                          }} 
                          className="flex-1 py-3 rounded-xl border-2 border-[#12372A]/20 text-[#12372A] font-semibold text-xs sm:text-sm hover:border-[#12372A]/50 hover:bg-[#12372A]/5 transition-all duration-200"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(pkg.whatsapp, "_blank");
                          }} 
                          className="flex-1 py-3 rounded-xl bg-[#12372A] text-[#FBFADA] font-semibold text-xs sm:text-sm hover:bg-[#1a4a35] transition-all duration-200 flex items-center justify-center gap-1.5"
                        >
                          Book Now
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* INDIKATOR MOBILE NAVIGASI PANAH (HANYA AKTIF DI LAYAR HP) */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-[#12372A]/15 bg-white flex items-center justify-center text-[#12372A] active:scale-90 transition-transform shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="text-[11px] font-bold text-[#12372A]/50 uppercase tracking-widest animate-pulse">
              Swipe or Tap
            </span>
            
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-[#12372A]/15 bg-white flex items-center justify-center text-[#12372A] active:scale-90 transition-transform shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </section>
  );
}