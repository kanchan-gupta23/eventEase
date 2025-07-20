import React from "react";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

function Profile() {
  const company = {
    name: "EventEase Pvt. Ltd.",
    email: "contact@eventease.com",
    phone: "+91 9876543210",
    industry: "Event Management & Planning",
    logo: "", // Leave empty to show default icon
    isVerified: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white/40 backdrop-blur-lg border border-pink-300 rounded-3xl shadow-xl p-10 w-full max-w-md text-gray-800 animate-fade-in-up">
        <div className="flex flex-col items-center">
          {company.logo ? (
            <img
              className="mb-4 h-[16vh] w-[16vh] rounded-full border-2 border-pink-400"
              src={company.logo}
              alt="Company Logo"
            />
          ) : (
            <FaBuilding className="text-pink-400 h-[16vh] w-[16vh] mb-4" />
          )}

          <h1 className="text-3xl font-bold text-pink-700">{company.name}</h1>
          <p className="text-purple-600 text-sm mt-1 italic">
            {company.isVerified ? "✔ Verified Event Organizer" : "Not Verified"}
          </p>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-purple-500" />
            <span>{company.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-purple-500" />
            <span>{company.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-purple-500" />
            <span>{company.industry}</span>
          </div>
        </div>

        <div className="mt-8 text-center text-purple-600 italic text-xs">
          Empowering Events. Enhancing Experiences. 🎉
        </div>
      </div>
    </div>
  );
}

export default Profile;
