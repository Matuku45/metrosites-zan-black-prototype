import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, CalendarDays, Camera } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Animated header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-rose-600"
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

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {/* Service Card 1 */}
        <div className="card bg-pink-50 shadow-lg text-gray-800 hover:scale-105 transition-transform border border-rose-200">
          <figure className="px-10 pt-10">
            <Sparkles size={50} className="text-rose-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-rose-600">Luxury Styling</h2>
            <p>Experience the royal touch with Zan Black’s elegant style collection.</p>
            <div className="card-actions">
              <button className="btn bg-rose-400 text-white border-none hover:bg-rose-500">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="card bg-pink-50 shadow-lg text-gray-800 hover:scale-105 transition-transform border border-amber-200">
          <figure className="px-10 pt-10">
            <Scissors size={50} className="text-amber-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-amber-600">Matric Dance Packages</h2>
            <p>Look stunning for your matric dance with our professional touch.</p>
            <div className="card-actions">
              <button className="btn bg-amber-400 text-white border-none hover:bg-amber-500">
                View Packages
              </button>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="card bg-pink-50 shadow-lg text-gray-800 hover:scale-105 transition-transform border border-pink-200">
          <figure className="px-10 pt-10">
            <Camera size={50} className="text-pink-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-pink-600">Portfolio</h2>
            <p>Browse through our glamorous wedding and event portfolio gallery.</p>
            <div className="card-actions">
              <button className="btn bg-pink-400 text-white border-none hover:bg-pink-500">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Booking Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <button className="btn btn-lg bg-gradient-to-r from-rose-400 to-amber-300 border-none text-white font-semibold hover:scale-105 transition-transform">
          <CalendarDays className="mr-2" /> Book Your Styling Now
        </button>
      </motion.div>
    </div>
  );
}
