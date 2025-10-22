// src/pages/Booking.jsx
import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";
import { Sparkles } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center px-6 py-12">
      
      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-500 flex items-center gap-2"
      >
        <Sparkles size={50} /> Book Your Styling Session
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl"
      >
        Fill out the form below to reserve your wedding or matric dance styling session. Our team will contact you to confirm your booking.
      </motion.p>

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
}
