import React from "react";
import { Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const instantJobs = [
  { id: 1, title: "Urgent: Stage Setup Coordinator", company: "Eventrix" },
  { id: 2, title: "Quick Hire: Sound Engineer", company: "Boom Events" },
];

export default function InstantJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-800 p-6 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-cyan-300 drop-shadow animate-bounce">
            ⚡ Instant Job Openings
          </h1>
          <p className="text-sm text-indigo-200 mt-2">
            Grab these quick opportunities before they’re gone!
          </p>
        </div>

        <div className="space-y-6">
          {instantJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-cyan-400 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-cyan-200 group-hover:underline">
                  {job.title}
                </h2>
                <span className="text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  Urgent
                </span>
              </div>
              <p className="text-indigo-100">
                <span className="font-medium text-white">Company:</span>{" "}
                {job.company}
              </p>

              <Link to={"/aboutJob"}>
                <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-xl shadow-md transition duration-200">
                  🚀 Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-indigo-200 text-sm">
            Stay tuned — more exciting roles are coming soon! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}
