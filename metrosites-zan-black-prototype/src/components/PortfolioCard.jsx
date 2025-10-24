import React from "react";
import { motion } from "framer-motion";

export default function PortfolioCard({ title, description, IconComponent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-pink-200 p-8 text-center flex flex-col items-center transition-all duration-300 border border-pink-100"
    >
      {/* Icon */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-full shadow-inner mb-5">
        <IconComponent size={50} className="text-pink-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Button */}
      <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
        View More
      </button>
    </motion.div>
  );
}
