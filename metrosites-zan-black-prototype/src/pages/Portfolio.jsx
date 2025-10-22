// src/pages/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";

// Example portfolio data
const portfolioData = [
  {
    title: "Wedding Glam",
    image: "/images/portfolio/wedding1.jpg",
    description: "Elegant bridal styling for your dream wedding.",
  },
  {
    title: "Matric Dance Look",
    image: "/images/portfolio/matric1.jpg",
    description: "Stunning looks for your special matric dance night.",
  },
  {
    title: "Event Styling",
    image: "/images/portfolio/event1.jpg",
    description: "Professional styling for all events and parties.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 px-6 py-12">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-8 text-pink-500"
      >
        🎨 Portfolio
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
      >
        Browse through our gallery of past weddings, matric dances, and events styled by Zan Black.
      </motion.p>

      {/* Portfolio Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </motion.div>
    </div>
  );
}
