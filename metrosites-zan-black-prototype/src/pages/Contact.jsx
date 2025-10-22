// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center px-6 py-12">
      
      {/* Animated header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-500"
      >
        📩 Contact Zan Black Styling
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl"
      >
        Have questions or want to book your dream styling? Reach out via email, phone, or visit us in person. We're here to make your wedding or matric dance unforgettable!
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {/* Email Card */}
        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <Mail size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-600">info@zanblack.com</p>
          <button className="btn btn-pink mt-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">
            Send Email
          </button>
        </div>

        {/* Phone Card */}
        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <Phone size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-600">+27 123 456 7890</p>
          <button className="btn btn-pink mt-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">
            Call Now
          </button>
        </div>

        {/* Location Card */}
        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <MapPin size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
          <p className="text-gray-600">123 Glam Street, Johannesburg</p>
          <button className="btn btn-pink mt-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">
            Get Directions
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-500">Send us a message</h2>
        <form className="bg-white shadow-lg p-8 rounded-lg flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
