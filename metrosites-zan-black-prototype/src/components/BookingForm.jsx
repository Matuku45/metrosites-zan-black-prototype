// src/components/BookingForm.jsx
import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Calendar, Clock } from "lucide-react";

export default function BookingForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-xl rounded-xl p-8 flex flex-col gap-6 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">
        Book Your Styling Session
      </h2>

      {/* Name */}
      <div className="flex items-center gap-2">
        <User className="text-pink-400" />
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring focus:ring-pink-200"
        />
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail className="text-pink-400" />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring focus:ring-pink-200"
        />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <Calendar className="text-pink-400" />
        <input
          type="date"
          className="input input-bordered w-full text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring focus:ring-pink-200"
        />
      </div>

      {/* Time */}
      <div className="flex items-center gap-2">
        <Clock className="text-pink-400" />
        <input
          type="time"
          className="input input-bordered w-full text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring focus:ring-pink-200"
        />
      </div>

      {/* Service Selection */}
      <select className="select select-bordered w-full text-gray-800 focus:border-pink-400 focus:ring focus:ring-pink-200">
        <option disabled selected>
          Select Service
        </option>
        <option>Wedding Styling</option>
        <option>Matric Dance Styling</option>
        <option>Photo Shoot Styling</option>
      </select>

      {/* Message */}
      <textarea
        placeholder="Additional Notes"
        className="textarea textarea-bordered w-full text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring focus:ring-pink-200"
        rows={4}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform"
      >
        Submit Booking
      </button>
    </motion.form>
  );
}
