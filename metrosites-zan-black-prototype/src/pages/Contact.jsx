import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center px-6 py-16">
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-600"
      >
        📩 Contact Zan Black Styling
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl leading-relaxed"
      >
        Have questions or want to book your dream styling? Reach out via email, phone, or visit us in person.  
        We're here to make your <span className="text-pink-500 font-semibold">wedding</span> or 
        <span className="text-purple-500 font-semibold"> matric dance</span> unforgettable!
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {/* Email Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 text-center flex flex-col items-center transition-all hover:shadow-pink-200"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-full mb-4 shadow-inner">
            <Mail size={50} className="text-pink-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Email Us</h2>
          <p className="text-gray-600 mb-4">info@zanblack.com</p>
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all">
            Send Email
          </button>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 text-center flex flex-col items-center transition-all hover:shadow-pink-200"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-full mb-4 shadow-inner">
            <Phone size={50} className="text-pink-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h2>
          <p className="text-gray-600 mb-4">+27 123 456 7890</p>
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all">
            Call Now
          </button>
        </motion.div>

        {/* Location Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 text-center flex flex-col items-center transition-all hover:shadow-pink-200"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-full mb-4 shadow-inner">
            <MapPin size={50} className="text-pink-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Visit Us</h2>
          <p className="text-gray-600 mb-4">123 Glam Street, Johannesburg</p>
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all">
            Get Directions
          </button>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Send Us a Message</h2>
        <form className="bg-white border border-pink-100 shadow-xl rounded-2xl p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input w-full rounded-xl border border-gray-200 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input w-full rounded-xl border border-gray-200 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="textarea w-full rounded-xl border border-gray-200 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
