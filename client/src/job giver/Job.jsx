import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const demoEventJobs = [
  {
    id: 1,
    title: "Event Coordinator",
    company: "Weddings by Aura",
    location: "Delhi",
    pay: "₹15,000/event",
    description: "Looking for an experienced coordinator for wedding events.",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 2,
    title: "Stage Lighting Technician",
    company: "GlowTech",
    location: "Mumbai",
    pay: "₹12,000/day",
    description: "Setup and manage lighting for concerts and shows.",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046891.png",
  },
  {
    id: 3,
    title: "Catering Supervisor",
    company: "Elite Caterers",
    location: "Bangalore",
    pay: "₹18,000/event",
    description: "Supervise food service for large-scale events and weddings.",
    logo: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
  },
];

const Job = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#d1c4e9] py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#1a237e] mb-12">
        🎉 Your Job Board
      </h1>
      <button
        onClick={() => navigate("/landing")}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back to Home
      </button>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {demoEventJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-3xl p-6 relative group transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                className="bg-white p-2 rounded-full shadow"
                title="Delete"
              >
                <MdDelete size={18} />
              </button>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-white p-2 rounded-full shadow"
                title="Edit"
              >
                <MdEditSquare size={18} />
              </Link>
            </div>

            <div className="flex justify-center mb-5">
              <img
                src={job.logo}
                alt={job.company}
                className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>

            <h2 className="text-xl font-bold text-[#311b92] text-center">
              {job.title}
            </h2>
            <p className="text-sm text-[#4527a0] text-center">{job.company}</p>
            <p className="text-sm text-[#4527a0] text-center">{job.location}</p>

            <p className="mt-4 text-sm text-[#5e35b1] text-center">
              {job.description}
            </p>

            <div className="mt-5 text-center">
              <span className="inline-block bg-[#4527a0] text-white px-4 py-1 rounded-full text-sm">
                {job.pay}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Job;
