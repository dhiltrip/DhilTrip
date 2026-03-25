"use client";

import { motion } from "framer-motion";
import { HeartPulse, Recycle, Users } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Healing Journeys",
      description: "Journaling sessions, deep talk, and mindful travel tailored for mental wellness and inner peace.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Environmental Impact",
      description: "Eco-challenges, waste bank education, and hands-on sustainable practices woven into every trip.",
      icon: <Recycle className="w-8 h-8" />,
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      title: "Cultural Connection",
      description: "MSME collaboration, passionate local guides, and authentic immersion into Yogyakarta's rich heritage.",
      icon: <Users className="w-8 h-8" />,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Why Travel with <span className="text-primary">Dhil Trip?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We believe travel should leave you refreshed and the destination respected. 
            Experience our unique trifecta of healing, sustainability, and culture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-background/50 backdrop-blur-lg border border-border/50 p-8 rounded-[2rem] shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
