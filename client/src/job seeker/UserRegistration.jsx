import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
    about: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registered 🎉\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex justify-center items-center px-4 py-12">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8 rounded-2xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">
          🌌 Join Try Catchers
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm text-white block mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="starry_night"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="galaxy@example.com"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="text-sm text-white block mb-1">Skills</label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="e.g. React, Tailwind, Node.js"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* About Yourself */}
          <div>
            <label className="text-sm text-white block mb-1">
              About Yourself
            </label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              placeholder="Tell us a little about you 🌠"
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-white block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit */}
          <Link
            to={"/userLanding"}
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-bold rounded-md shadow-md"
          >
            Register
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-300 hover:underline underline-offset-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegistration;
