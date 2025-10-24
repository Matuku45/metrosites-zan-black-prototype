import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center px-6 py-16">
      
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-pink-600"
      >
        💖 Our Styling Packages
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-2xl leading-relaxed"
      >
        Explore our premium styling packages for weddings and matric dances.
        Each package is designed to make you shine and feel unforgettable!
      </motion.p>

      {/* Packages Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        <ServiceCard
          title="Luxury Wedding Styling"
          description="Experience the royal touch with our elegant wedding styling collection."
          icon="sparkles"
          color="pink"
          btnText="Explore"
        />

        <ServiceCard
          title="Matric Dance Packages"
          description="Look stunning for your matric dance with our professional touch."
          icon="scissors"
          color="purple"
          btnText="View Packages"
        />

        <ServiceCard
          title="Portfolio Consultation"
          description="Book a session to explore our portfolio and customize your look."
          icon="camera"
          color="pink"
          btnText="View Gallery"
        />
      </motion.div>
    </div>
  );
}
