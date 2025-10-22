import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-gray-100">
      <Header />
      <main className="px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-sky-400 mb-4">
          Welcome to Zan Black 💍
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience premium wedding and matric dance styling that turns your dream look into a reality.
        </p>
      </main>
      <Footer />
    </div>
  );
}
