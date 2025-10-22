import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // ✅ import the Home page

export default function App() { // ✅ rename this from Home → App
  return (
    <div className="min-h-screen bg-base-200 text-gray-100">
      <Header />
      <main className="px-8 py-16 text-center">
        <Home /> {/* ✅ render the Home page component here */}
      </main>
      <Footer />
    </div>
  );
}
