"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const demoJobs = [
  {
    id: 1,
    title: "Event Coordinator",
    company: "EventEase",
    location: "Delhi",
    type: "Part-Time",
  },
  {
    id: 2,
    title: "Stage Manager",
    company: "EventEase",
    location: "Mumbai",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Logistics Assistant",
    company: "EventEase",
    location: "Bangalore",
    type: "Internship",
  },
  {
    id: 4,
    title: "Social Media Promoter",
    company: "EventEase",
    location: "Remote",
    type: "Freelance",
  },
  {
    id: 5,
    title: "Lighting Technician",
    company: "EventEase",
    location: "Pune",
    type: "Contract",
  },
];

export default function AllJobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = demoJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 animate-bounce text-pink-300 drop-shadow-md">
          🎉 Explore Cute EventEase Jobs
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-pink-300">
          <Search className="text-pink-300" />
          <input
            type="text"
            placeholder="Search jobs here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent focus:outline-none w-full text-pink-100 placeholder-pink-200"
          />
        </div>

        {/* Jobs List */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/10 border border-pink-300/50 p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.015] backdrop-blur-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold text-pink-200">
                    {job.title}
                  </h2>
                  <span className="text-xs bg-pink-300/20 text-pink-100 px-3 py-1 rounded-full border border-pink-300">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-200">
                  <strong>Company:</strong> {job.company}
                </p>
                <p className="text-sm text-gray-200">
                  <strong>Location:</strong> {job.location}
                </p>
                <Link to={"/aboutjob"}>
                  {" "}
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold transition-shadow shadow-md hover:shadow-lg">
                    ✨ Apply Now
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-pink-200 mt-10">
              No matching jobs found 😢
            </p>
          )}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition-all">
            🌟 Explore More Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
