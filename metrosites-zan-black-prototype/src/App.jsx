// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ BrowserRouter should wrap App in main.jsx, not here
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-base-200 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow px-8 py-16 text-center">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />

            {/* About Route */}
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />

            {/* Contact Route */}
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />

            {/* You can add more pages here */}
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
