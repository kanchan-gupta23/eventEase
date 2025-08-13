import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaHeart } from "react-icons/fa";

const UserNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md px-6 py-3 rounded-b-xl shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-pink-400 hover:text-pink-300 transition duration-300 animate-bounce"
        >
          🎉 EventEase
        </Link>

        {/* Links */}
        <div className="flex gap-5 items-center text-sm md:text-base">
          {[
            { label: "Home", path: "/userLanding" },
            { label: "Registration", path: "/userRegistration" },
            { label: "InstantJobs", path: "/InstantJobs" },
            { label: "All Jobs", path: "/allJobs" },

            { label: "Profile", path: "/userProfile" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative group transition duration-300"
            >
              <span className="text-white group-hover:text-pink-300 duration-300">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* User / Login Button */}
          <Link
            to="/userLogin"
            className="px-4 py-1.5 rounded-full bg-pink-400 hover:bg-pink-300 text-white font-semibold transition duration-300 shadow-md"
          >
            Login
          </Link>

          {/* Cute Icon */}
          <FaHeart className="text-pink-300 text-xl animate-pulse" />
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
