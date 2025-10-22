// src/components/PortfolioCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function PortfolioCard({ title, image, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card bg-white shadow-xl rounded-lg overflow-hidden transition-transform"
    >
      <figure className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-2 right-2 bg-pink-400 text-white p-1 rounded-full">
          <ImageIcon size={20} />
        </div>
      </figure>
      <div className="card-body p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-pink-500">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}
