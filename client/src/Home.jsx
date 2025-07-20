"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] to-[#121c36] text-white px-6 py-16 flex flex-col items-center">
      <motion.div
        className="w-full max-w-4xl backdrop-blur-md bg-[#0e243d]/60 border border-white/20 rounded-3xl px-10 py-14 text-center shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-500"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-300 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to <span className="text-white">Try Catchers</span>
        </motion.h1>
        <Link to={"/admin"}>
          <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-xl shadow-md transition duration-200">
            Admin Page{" "}
          </button>
        </Link>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Where magical events meet extraordinary talent. Host or hustle — the
          stage is yours!
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/companyRegistration"
            className="bg-cyan-300 hover:bg-cyan-400 text-[#0a1a2f] font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg hover:scale-105"
          >
            🎯 Hire Talent
          </Link>
          <Link
            to="/userRegistration"
            className="bg-transparent hover:bg-cyan-300/10 text-cyan-300 border border-cyan-300 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg hover:scale-105"
          >
            💼 Find Work
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center space-x-3 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <FaStar className="text-yellow-400" />
          <span>Trusted by 10,000+ event organizers & professionals</span>
        </motion.div>
      </motion.div>

      <div className="w-full mt-20">
        <AboutUs />
      </div>
    </div>
  );
}
