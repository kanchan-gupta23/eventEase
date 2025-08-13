import React from "react";
import { Link } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const jobData = [
  {
    id: 1,
    title: "Event Coordinator",
    company: "Dream Weddings Co.",
    location: "Delhi",
    type: "Full-Time",
    salary: "₹25,000/month",
    description: "Manage events and coordinate with vendors and clients.",
  },
  {
    id: 2,
    title: "Stage Designer",
    company: "Royal Events",
    location: "Mumbai",
    type: "Part-Time",
    salary: "₹15,000/month",
    description: "Design beautiful stage setups for weddings and parties.",
  },
  {
    id: 3,
    title: "Anchor/Host",
    company: "Elite Management",
    location: "Bangalore",
    type: "Freelance",
    salary: "₹8,000/event",
    description: "Engage audiences and keep events energetic and smooth.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white p-6">
      <UserNavbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-300 drop-shadow-md animate-pulse">
          🎉 Welcome to EventEase Jobs 🎉
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-slate-600 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-cyan-400"
            >
              <h2 className="text-xl font-bold text-cyan-200 mb-1">
                {job.title}
              </h2>
              <p className="text-sm text-gray-300 font-medium">
                {job.company} - {job.location}
              </p>
              <p className="text-xs mt-1 text-blue-300 font-semibold bg-blue-900 px-2 py-1 w-fit rounded-full">
                {job.type}
              </p>

              <p className="text-sm mt-2 text-gray-200">{job.description}</p>

              <div className="mt-4 flex justify-between items-center">
                <p className="text-emerald-300 font-semibold">{job.salary}</p>
                <Link
                  to={"/aboutJob"}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-10 text-center">
          <Link
            to={"/allJobs"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-full shadow-lg transition-all hover:scale-105"
          >
            🌟 Explore More Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
