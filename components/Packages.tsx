"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, CheckCircle2, X, MapPin, Users, Leaf, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Karimunjawa Healing Retreat",
    duration: "3D/2N",
    price: "Rp 1.800.000",
    unit: "/person",
    rating: 4.9,
    reviews: 47,
    tags: ["Healing", "Beach", "Nature"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    tagline: "Reconnect with the ocean, yourself, and your healing journey.",
    description: "An immersive 3-day healing retreat in the pristine waters of Karimunjawa. Far from the noise of daily life, this trip creates a safe space for personal reflection, emotional recovery, and genuine connection with nature and community. Perfect for university students, young professionals, or anyone carrying heavy burdens who needs a reset.",
    includes: ["Beach healing sessions", "Daily journaling & deep talk circles", "Eco-challenge with telo bags", "Snorkeling at coral reefs", "Local culinary experience", "Accommodation (guesthouse)", "Transportation from Yogyakarta", "Participation certificate"],
    highlights: ["Island hopping to 3 locations", "Sunset journaling session", "Local fisherman collaboration", "SDGs eco-challenge"],
    itinerary: [
      {
        day: "Day 1",
        title: "Departure & Arrival",
        activities: [
          "06:00 — Depart from Yogyakarta by bus/train",
          "12:00 — Arrive Jepara port, board ferry to Karimunjawa",
          "15:30 — Check in to eco-friendly guesthouse",
          "18:00 — Welcome circle, intention-setting, journaling session",
          "19:30 — Dinner with local culinary experience",
        ],
      },
      {
        day: "Day 2",
        title: "Ocean Healing & Eco-Challenge",
        activities: [
          "06:00 — Sunrise meditation on the beach",
          "08:00 — Breakfast & preparation",
          "09:00 — Snorkeling at coral reef conservation area",
          "12:00 — Eco-challenge: beach waste collection with telo bags",
          "14:00 — Lunch at local MSME restaurant",
          "16:00 — Deep talk circle: emotional sharing session",
          "18:00 — Sunset reflection journaling",
          "20:00 — Community bonfire & storytelling",
        ],
      },
      {
        day: "Day 3",
        title: "Reflection & Return",
        activities: [
          "07:00 — Morning yoga & gratitude practice",
          "09:00 — Final journaling: letters to yourself",
          "10:30 — Certificate ceremony & group photo",
          "11:00 — Ferry back to Jepara",
          "17:00 — Return journey to Yogyakarta",
          "21:00 — Estimated arrival Yogyakarta",
        ],
      },
    ],
    whatsapp: "https://wa.me/6281234567890?text=Hi!%20I'm%20interested%20in%20the%20Karimunjawa%20Healing%20Retreat",
    maxGroup: "15 people",
    minAge: "17+",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Urban Waste Bank Tour",
    duration: "1 Day",
    price: "Rp 350.000",
    unit: "/person",
    rating: 4.8,
    reviews: 23,
    tags: ["Education", "Sustainability"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1510771463146-e5e3c9f1bfe0?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
    tagline: "Transform your perspective on waste, community, and environmental impact.",
    description: "A powerful one-day urban education experience that takes you behind the scenes of Yogyakarta's most innovative waste management system. Learn directly from waste bank operators, participate in eco-challenges, and discover how everyday waste creates economic opportunity for local communities. Ideal for students, teachers, corporate CSR programs, and eco-conscious travelers.",
    includes: ["Waste bank facility tour", "Eco-challenge with telo bags", "Local MSME visit & shopping", "Sustainability workshop", "Lunch at community kitchen", "Transportation within Yogyakarta", "Educational materials", "Participation certificate"],
    highlights: ["Behind-the-scenes waste bank tour", "Meet real waste bank heroes", "Learn waste-to-value economy", "Hands-on sorting experience"],
    itinerary: [
      {
        day: "Morning",
        title: "Waste Bank Exploration",
        activities: [
          "08:00 — Meet & greet at Dhil Trip base",
          "08:30 — Introduction & briefing on waste economy",
          "09:00 — Arrive at Jepara Central Waste Bank",
          "09:30 — Guided facility tour with operators",
          "10:30 — Hands-on sorting & recycling workshop",
          "11:30 — Q&A with waste bank community leaders",
        ],
      },
      {
        day: "Afternoon",
        title: "MSME & Eco-Challenge",
        activities: [
          "12:00 — Lunch at local community kitchen (MSME)",
          "13:00 — Eco-challenge: urban waste collection with telo bags",
          "14:00 — Visit local artisan MSME using recycled materials",
          "15:00 — Sustainability reflection & group discussion",
          "16:00 — Certificate ceremony & closing",
          "16:30 — Return to starting point",
        ],
      },
    ],
    whatsapp: "https://wa.me/6281234567890?text=Hi!%20I'm%20interested%20in%20the%20Urban%20Waste%20Bank%20Tour",
    maxGroup: "25 people",
    minAge: "All ages",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Cultural Immersion Package",
    duration: "2D/1N",
    price: "Rp 950.000",
    unit: "/person",
    rating: 5.0,
    reviews: 18,
    tags: ["Culture", "Healing", "Community"],
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    ],
    tagline: "Discover the soul of Yogyakarta through culture, connection, and reflection.",
    description: "A two-day cultural deep dive into the heart of Yogyakarta — exploring royal palaces, sacred mosques, and the everyday lives of local artisans and communities. Woven throughout is the healing thread of journaling, deep talk, and mindful presence. This package blends cultural richness with inner exploration for a truly unforgettable experience.",
    includes: ["Kraton Yogyakarta guided tour", "Grand Mosque of Yogyakarta visit", "Deep talk circle sessions (2x)", "Daily journaling with prompts", "Local culinary tour (Malioboro area)", "Overnight accommodation", "Cultural workshop (batik/crafts)", "Participation certificate"],
    highlights: ["Royal palace private tour", "Spiritual mosque experience", "Malioboro culinary adventure", "Evening deep talk under the stars"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kraton & Cultural Discovery",
        activities: [
          "08:00 — Meet at Dhil Trip base, intention-setting circle",
          "09:00 — Guided tour of Kraton Yogyakarta (Royal Palace)",
          "11:00 — Visit traditional batik workshop — hands-on experience",
          "13:00 — Lunch: local Jogja cuisine experience",
          "14:30 — Explore Malioboro: local artisans & MSME shopping",
          "17:00 — First deep talk session: identity & belonging",
          "19:00 — Dinner at heritage restaurant",
          "21:00 — Evening journaling: letters to your past self",
        ],
      },
      {
        day: "Day 2",
        title: "Spiritual & Reflection",
        activities: [
          "06:30 — Morning walk & gratitude practice",
          "08:00 — Breakfast & preparation",
          "09:00 — Visit Grand Mosque of Yogyakarta",
          "10:30 — Community visit: local neighborhood & MSME collaboration",
          "12:00 — Lunch with host community family",
          "13:30 — Final deep talk: growth & intention going forward",
          "15:00 — Group journaling & reflection sharing",
          "16:00 — Certificate ceremony & group photo",
          "16:30 — Closing & departure",
        ],
      },
    ],
    whatsapp: "https://wa.me/6281234567890?text=Hi!%20I'm%20interested%20in%20the%20Cultural%20Immersion%20Package",
    maxGroup: "20 people",
    minAge: "16+",
    difficulty: "Easy",
  },
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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] bg-background rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Image gallery */}
          <div className="relative h-56 sm:h-72 flex-shrink-0 bg-[#12372A]">
            <img
              src={pkg.images[activeImg]}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Gallery nav */}
            <button
              onClick={() => setActiveImg((p) => (p - 1 + pkg.images.length) % pkg.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveImg((p) => (p + 1) % pkg.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {pkg.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-full transition-all duration-300 ${i === activeImg ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"}`}
                />
              ))}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              {pkg.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-8 left-5 right-16">
              <p className="text-white/70 text-sm mb-1">{pkg.tagline}</p>
              <h2 className="text-white text-2xl font-bold leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                {pkg.title}
              </h2>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">

            {/* Meta row */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Star, label: `${pkg.rating} (${pkg.reviews} reviews)`, fill: true },
                { icon: Clock, label: pkg.duration },
                { icon: Users, label: `Max ${pkg.maxGroup}` },
                { icon: MapPin, label: `Min age ${pkg.minAge}` },
              ].map(({ icon: Icon, label, fill }) => (
                <div key={label} className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full text-sm text-foreground/80">
                  <Icon className={`w-4 h-4 text-[#436850] ${fill ? "fill-amber-400 text-amber-400" : ""}`} />
                  <span>{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-[#12372A]/10 border border-[#ADBC9F]/40 px-3 py-1.5 rounded-full text-sm text-[#436850] font-semibold">
                <span className="text-2xl font-bold text-[#12372A]">{pkg.price}</span>
                <span className="text-muted-foreground font-normal">{pkg.unit}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-foreground mb-2 text-base">About This Package</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">Highlights</h3>
              <div className="grid grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 bg-[#12372A]/6 rounded-xl px-3 py-2.5">
                    <Leaf className="w-4 h-4 text-[#436850] flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#436850] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-bold text-foreground mb-4 text-base">Itinerary</h3>
              <div className="space-y-4">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-[#ADBC9F]/50">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#12372A] border-2 border-[#ADBC9F]" />
                    <div className="mb-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#436850]">{day.day}</span>
                      <h4 className="font-semibold text-foreground">{day.title}</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {day.activities.map((act, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#ADBC9F] mt-2 flex-shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex-shrink-0 p-5 sm:p-7 pt-4 border-t border-border/50 bg-background flex flex-col sm:flex-row gap-3">
            <a
              href={pkg.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#12372A] text-[#FBFADA] font-bold rounded-2xl hover:bg-[#1a4a35] transition-colors shadow-lg"
            >
              Book This Trip
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="sm:w-32 py-4 border border-border rounded-2xl text-foreground/70 font-semibold hover:bg-muted transition-colors"
            >
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

  const handleBook = (whatsapp: string) => {
    window.open(whatsapp, "_blank");
  };

  return (
    <section id="packages" className="py-24 bg-background relative overflow-hidden">

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft blob — top-right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#ADBC9F]/12 blur-[80px]" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#436850]/10 blur-[80px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #12372A 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Diagonal leaf shapes */}
        <svg className="absolute top-20 right-10 w-24 h-24 opacity-[0.06]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,90 Q50,10 90,50 Q50,90 10,90Z" fill="#12372A" />
        </svg>
        <svg className="absolute bottom-16 left-8 w-16 h-16 opacity-[0.05]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,90 Q50,10 90,50 Q50,90 10,90Z" fill="#436850" />
        </svg>
        {/* Horizontal line accent */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ADBC9F]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12372A]/8 border border-[#ADBC9F]/30 mb-4"
            >
              <Leaf className="w-3.5 h-3.5 text-[#436850]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#436850]">Curated Experiences</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              Our Signature Packages
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Carefully curated experiences that balance exploration with personal growth and positive community impact.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card rounded-[2rem] overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl hover:border-[#ADBC9F]/40 transition-all duration-300 flex flex-col group"
            >
              {/* Card image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {pkg.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex items-center gap-1 text-white bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-lg">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-sm">{pkg.rating} <span className="text-white/75 font-normal">({pkg.reviews})</span></span>
                  </div>
                  <div className="flex items-center gap-1 text-white bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium text-sm">{pkg.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-[#12372A] transition-colors">
                  {pkg.title}
                </h3>
                <div className="mb-5">
                  <span className="text-2xl font-bold text-[#12372A]">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.unit}</span>
                </div>

                <div className="space-y-2.5 mb-7 flex-grow">
                  {pkg.includes.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#436850] shrink-0 mt-0.5" />
                      <span className="text-foreground/75 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                  {pkg.includes.length > 4 && (
                    <p className="text-xs text-[#436850] font-medium pl-6">+{pkg.includes.length - 4} more included</p>
                  )}
                </div>

                {/* Two buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="flex-1 py-3 rounded-xl border-2 border-[#12372A]/20 text-[#12372A] font-semibold text-sm hover:border-[#12372A]/50 hover:bg-[#12372A]/5 transition-all duration-200"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleBook(pkg.whatsapp)}
                    className="flex-1 py-3 rounded-xl bg-[#12372A] text-[#FBFADA] font-semibold text-sm hover:bg-[#1a4a35] transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </section>
  );
}
