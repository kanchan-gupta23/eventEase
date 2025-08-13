"use client";
import React from "react";

export default function UserProfile() {
  const user = {
    name: "Nancy Aggarwal",
    appliedJobs: ["Event Manager at XYZ Corp", "Logistics at Boom Events"],
    rating: 4.5,
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#cce7ff] via-[#e6ccff] to-[#d6f0ff] flex items-center justify-center p-4 transition-all duration-300">
      <div className="p-6 rounded-3xl bg-white/40 shadow-2xl max-w-md w-full border border-white/30 backdrop-blur-xl transition-all duration-300">
        <h3 className="text-2xl font-extrabold text-indigo-800 mb-4 text-center animate-bounce">
          👩‍💼 User Profile
        </h3>

        <div className="space-y-2 text-indigo-900 font-medium text-[15px]">
          <p>
            👤 Name: <span className="font-semibold">{user.name}</span>
          </p>
          <p>
            ⭐ Rating: <span className="font-semibold">{user.rating}</span>
          </p>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-indigo-700 underline">
            Jobs Applied:
          </h4>
          <ul className="list-disc list-inside mt-2 space-y-1 text-indigo-800 text-sm">
            {user.appliedJobs.map((job, i) => (
              <li key={i}>🎯 {job}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
            ✨ Send Review to Company
          </button>

          <button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
