// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Sparkles, Scissors, CalendarDays, Camera } from "lucide-react";
import { Button } from "daisyui";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-black to-amber-400 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Animated header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        👑 Zan Black Wedding & Matric Dance Styling
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-center mb-8 text-gray-100"
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
        <div className="card bg-base-100 shadow-xl text-gray-800">
          <figure className="px-10 pt-10">
            <Sparkles size={50} className="text-blue-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Luxury Styling</h2>
            <p>Experience the royal touch with Zan Black’s elegant style collection.</p>
            <div className="card-actions">
              <Button color="primary" className="bg-blue-500 text-white">
                Explore
              </Button>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="card bg-base-100 shadow-xl text-gray-800">
          <figure className="px-10 pt-10">
            <Scissors size={50} className="text-amber-400" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Matric Dance Packages</h2>
            <p>Look stunning for your matric dance with our professional touch.</p>
            <div className="card-actions">
              <Button color="secondary" className="bg-amber-400 text-black">
                View Packages
              </Button>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="card bg-base-100 shadow-xl text-gray-800">
          <figure className="px-10 pt-10">
            <Camera size={50} className="text-blue-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Portfolio</h2>
            <p>Browse through our glamorous wedding and event portfolio gallery.</p>
            <div className="card-actions">
              <Button color="accent" className="bg-blue-500 text-white">
                View Gallery
              </Button>
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
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-amber-400 border-none text-black font-semibold hover:scale-105 transition-transform"
        >
          <CalendarDays className="mr-2" /> Book Your Styling Now
        </Button>
      </motion.div>
    </div>
  );
}
