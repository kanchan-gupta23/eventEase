import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const jobSeekers = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Mumbai",
    skills: ["Event Planner", "Vendor Manager", "Logistics"],
  },
  {
    id: 2,
    name: "Kriti Singh",
    location: "Delhi",
    skills: ["MC", "Stage Coordinator", "Social Media"],
  },
  {
    id: 3,
    name: "Rohan Das",
    location: "Bangalore",
    skills: ["Stage Designer", "Catering Manager", "Volunteer Head"],
  },
];

function JobGiverLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-[#132d4a] to-[#0f1f3c] text-white font-sans px-4 py-10 relative overflow-hidden">
      <Navbar />

      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-20 animate-ping" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            EventEase — Find the Right People for the Right Vibe ✨
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Whether it’s a wedding, corporate event, or concert, we help you
            find the best freelancers & professionals to make it unforgettable.
          </p>
          <Link to={"/createJob"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-8 bg-cyan-400 hover:bg-cyan-300 text-[#0a1a2f] px-6 py-3 rounded-full shadow-lg transition font-semibold"
            >
              💼 Post a Job
            </motion.button>
          </Link>
        </motion.div>

        {/* Profiles Section */}
        <Link to={"/userProfile"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10 underline underline-offset-4 decoration-blue-400">
              ✨ Meet Your Dream Team ✨
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              {jobSeekers.map((user) => (
                <motion.div
                  key={user.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0e243d]/60 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl transition-all hover:shadow-cyan-400/30"
                >
                  <h3 className="text-xl font-bold text-cyan-300 mb-1">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{user.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-cyan-300/20 text-xs text-white px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default JobGiverLanding;
