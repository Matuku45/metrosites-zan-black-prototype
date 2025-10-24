import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Users, Scissors, Sparkles } from "lucide-react";


export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 flex flex-col items-center justify-center px-6 py-16 text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4">
          👑 About Zan Black Styling
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Where elegance meets creativity — Zan Black brings premium wedding and matric
          dance styling to life with passion, precision, and timeless beauty.
        </p>
      </motion.div>

      {/* Mission & Story Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-5xl text-center border border-pink-100"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-rose-500 mb-4">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Founded with a vision to empower confidence and beauty, <b>Zan Black</b> was
          born from a love for art, fashion, and individuality. We specialize in both
          <span className="text-rose-500 font-medium"> wedding </span> and
          <span className="text-rose-500 font-medium"> matric dance styling </span>,
          curating looks that are elegant, personalized, and unforgettable.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From soft glam to bold transformations, every brushstroke and design
          reflects a story of celebration, identity, and empowerment. Our commitment
          to excellence ensures that every client leaves feeling radiant — inside and out.
        </p>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl w-full"
      >
        <div className="card bg-white text-center shadow-md hover:shadow-lg transition rounded-xl border border-rose-100">
          <div className="card-body items-center">
            <Heart size={40} className="text-pink-500 mb-2" />
            <h3 className="card-title text-rose-600">Passion</h3>
            <p>We put love into every style — every client deserves to shine.</p>
          </div>
        </div>

        <div className="card bg-white text-center shadow-md hover:shadow-lg transition rounded-xl border border-pink-100">
          <div className="card-body items-center">
            <Star size={40} className="text-amber-400 mb-2" />
            <h3 className="card-title text-rose-600">Excellence</h3>
            <p>Professional styling with premium care and luxurious attention to detail.</p>
          </div>
        </div>

        <div className="card bg-white text-center shadow-md hover:shadow-lg transition rounded-xl border border-pink-100">
          <div className="card-body items-center">
            <Users size={40} className="text-purple-500 mb-2" />
            <h3 className="card-title text-rose-600">Empowerment</h3>
            <p>Helping every client feel bold, confident, and beautiful in their own skin.</p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-20 text-center max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-rose-600 mb-6">Meet Our Stylists</h2>
        <p className="text-gray-700 mb-12">
          Our creative team of stylists and designers brings vision, experience, and
          heart into every event. From <b>weddings</b> to <b>matric dances</b>, we make
          sure your moment is as extraordinary as you are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center border border-pink-100"
          >
            <Scissors size={45} className="text-rose-500 mb-3" />
            <h4 className="font-semibold text-rose-600">Zan Black</h4>
            <p className="text-gray-600 text-sm">Founder & Lead Stylist</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center border border-pink-100"
          >
            <Sparkles size={45} className="text-amber-400 mb-3" />
            <h4 className="font-semibold text-rose-600">Amo M.</h4>
            <p className="text-gray-600 text-sm">Creative Director</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center border border-pink-100"
          >
            <Heart size={45} className="text-pink-500 mb-3" />
            <h4 className="font-semibold text-rose-600">Lerato S.</h4>
            <p className="text-gray-600 text-sm">Makeup & Glam Specialist</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16"
      >
        <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none text-lg hover:scale-105 transition-transform">
          Book Your Dream Look ✨
        </button>
      </motion.div>
    </div>
  );
}
