import React from "react";
import { motion } from "framer-motion";

export default function PortfolioCard({ title, description, IconComponent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card bg-white shadow-xl p-6 text-center flex flex-col items-center"
    >
      <IconComponent size={50} className="text-pink-400 mb-4 animate-bounce" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none mt-4 hover:scale-105 transition-transform">
        View More
      </button>
    </motion.div>
  );
}
