import React from "react";
import { FaBuilding, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Admin({ totalCompanies = 24, totalUsers = 108 }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] to-[#121c36] text-white px-6 py-16 flex flex-col items-center">
      <motion.div
        className="w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-10 drop-shadow-lg">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Companies Card */}
          <motion.div
            className="bg-[#0e243d]/60 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FaBuilding size={48} className="text-cyan-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Companies Joined</h2>
            <p className="text-4xl font-bold text-cyan-300">{totalCompanies}</p>
          </motion.div>

          {/* Users Card */}
          <motion.div
            className="bg-[#0e243d]/60 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaUsers size={48} className="text-cyan-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Users Joined</h2>
            <p className="text-4xl font-bold text-cyan-300">{totalUsers}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
