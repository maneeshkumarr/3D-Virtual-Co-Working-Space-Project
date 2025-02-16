"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Animated Heading */}
      <motion.h1 
        className="text-5xl font-extrabold text-center sm:text-6xl md:text-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Elevate Your Web Experience
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="mt-4 text-lg sm:text-xl text-gray-300 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Next.js + Tailwind + Framer Motion = Stunning UI 🔥
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg rounded-full font-semibold shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get Started 🚀
      </motion.a>

      {/* Animated Card */}
      <motion.div
        className="mt-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg max-w-sm text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold">💡 Modern Web UI</h2>
        <p className="text-gray-300 mt-2">Designed with Next.js & Tailwind.</p>
      </motion.div>
    </main>
  );
}
