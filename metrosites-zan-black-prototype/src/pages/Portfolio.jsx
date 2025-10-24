import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import { Sparkles, Scissors, Camera } from "lucide-react";

const portfolioData = [
  {
    title: "Wedding Glam",
    description: "Elegant bridal styling for your dream wedding.",
    icon: Sparkles,
  },
  {
    title: "Matric Dance Look",
    description: "Stunning looks for your special matric dance night.",
    icon: Scissors,
  },
  {
    title: "Event Styling",
    description: "Professional styling for all events and parties.",
    icon: Camera,
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center px-6 py-16">
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-600"
      >
        🎨 Our Portfolio
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl leading-relaxed"
      >
        Browse through our gallery of past weddings, matric dances, and events styled by <span className="font-semibold text-pink-500">Zan Black</span>. Each look tells a story of elegance and sophistication.
      </motion.p>

      {/* Portfolio Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            IconComponent={item.icon}
          />
        ))}
      </motion.div>
    </div>
  );
}
