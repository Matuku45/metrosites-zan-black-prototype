
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Camera } from "lucide-react"; // choose icons per service

export default function ServiceCard({ title, description, icon, color, btnText }) {
  // Icon mapping
  const icons = {
    sparkles: <Sparkles size={50} className={`text-${color}-500 mx-auto mb-4`} />,
    scissors: <Scissors size={50} className={`text-${color}-500 mx-auto mb-4`} />,
    camera: <Camera size={50} className={`text-${color}-500 mx-auto mb-4`} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform"
    >
      {icons[icon]}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">
        {btnText || "Book Now"}
      </button>
    </motion.div>
  );
}
