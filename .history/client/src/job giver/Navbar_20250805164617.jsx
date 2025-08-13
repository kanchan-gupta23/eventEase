import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaStar } from "react-icons/fa";
import { Context } from "../Context";

const Navbar = () => {
  const { company } = useContext(Context);
  return (
    <nav className="sticky top-0 z-50 bg-[#0a1a2f]/80 backdrop-blur-md px-6 py-3 rounded-b-xl shadow-lg border-b border-cyan-500/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-cyan-300 hover:text-cyan-200 transition duration-300"
        >
          🌟 Try Catchers
        </Link>

        {/* Links */}
        <div className="flex gap-5 items-center text-sm md:text-base">
          {[
            { label: "Home", path: "/landing" },
            { label: "Registration", path: "/companyRegistration" },
            { label: "Urgent Hiring", path: "/urgentHiring" },
            { label: "Create Job", path: "/createJob" },
            { label: "Your Jobs", path: `/jobs/${company._id} ` },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative group transition duration-300"
            >
              <span className="text-white group-hover:text-cyan-300 duration-300">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* User / Login Button */}
          <Link
            to="/companyLogin"
            className="px-4 py-1.5 rounded-full bg-cyan-300 hover:bg-cyan-400 text-[#0a1a2f] font-semibold transition duration-300 shadow-md"
          >
            Login
          </Link>

          {/* Icon */}
          <FaStar className="text-yellow-400 text-xl animate-pulse" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
