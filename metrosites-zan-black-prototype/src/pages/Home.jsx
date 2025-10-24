import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, CalendarDays, Camera } from "lucide-react";

// Import your local images
import dence from "../assets/dence.webp";
import guy from "../assets/guy.webp";
import OIP from "../assets/OIP.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Animated header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-black"
      >
        👑 Zan Black Wedding & Matric Dance Styling
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-center mb-8 text-rose-500"
      >
        Your ultimate destination for premium styling, glam, and unforgettable looks ✨
      </motion.p>

      {/* Image Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl"
      >
        {/* Image 1 */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-white flex justify-center items-center">
          <img
            src={dence}
            alt="Elegant lady wearing a beautiful dress"
            className="w-full h-96 object-contain rounded-3xl"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-white flex justify-center items-center">
          <img
            src={OIP}
            alt="Glamorous model in designer gown"
            className="w-full h-96 object-contain rounded-3xl"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-white flex justify-center items-center">
          <img
            src={guy}
            alt="Stylish gentleman in suit"
            className="w-full h-96 object-contain rounded-3xl"
          />
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {/* Service Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-rose-200"
        >
          <div className="flex justify-center mb-4">
            <Sparkles size={50} className="text-rose-500" />
          </div>
          <h2 className="text-2xl font-semibold text-rose-600 mb-2 text-center">
            Luxury Styling
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Experience the royal touch with Zan Black’s elegant style collection.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-rose-400 text-white border-none hover:bg-rose-500">
              Explore
            </button>
          </div>
        </motion.div>

        {/* Service Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-amber-200"
        >
          <div className="flex justify-center mb-4">
            <Scissors size={50} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-semibold text-amber-600 mb-2 text-center">
            Matric Dance Packages
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Look stunning for your matric dance with our professional touch.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-amber-400 text-white border-none hover:bg-amber-500">
              View Packages
            </button>
          </div>
        </motion.div>

        {/* Service Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-pink-200"
        >
          <div className="flex justify-center mb-4">
            <Camera size={50} className="text-pink-500" />
          </div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2 text-center">
            Portfolio
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Browse through our glamorous wedding and event portfolio gallery.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-pink-400 text-white border-none hover:bg-pink-500">
              View Gallery
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Booking Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <button className="btn btn-lg bg-gradient-to-r from-rose-400 to-amber-300 border-none text-white font-semibold hover:scale-105 transition-transform flex items-center gap-2">
          <CalendarDays /> Book Your Styling Now
        </button>
      </motion.div>
    </div>
  );
}
