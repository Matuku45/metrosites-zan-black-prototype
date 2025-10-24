import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Camera } from "lucide-react";

export default function ServiceCard({ title, description, icon, color, btnText }) {
  const icons = {
    sparkles: <Sparkles size={48} className={`text-${color}-500 mx-auto mb-5`} />,
    scissors: <Scissors size={48} className={`text-${color}-500 mx-auto mb-5`} />,
    camera: <Camera size={48} className={`text-${color}-500 mx-auto mb-5`} />,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-pink-200 p-8 text-center transition-all duration-300 border border-pink-100"
    >
      {/* Icon */}
      {icons[icon]}

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
        {btnText || "Book Now"}
      </button>
    </motion.div>
  );
}
