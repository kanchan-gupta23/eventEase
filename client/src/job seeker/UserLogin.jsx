import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted: " + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 flex justify-center items-center px-4">
      <div className="bg-white/40 border border-white/30 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-rose-600 text-center mb-6 animate-pulse">
          🧑‍🎓 User Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm text-rose-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-white/60 text-rose-800 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-rose-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-white/60 text-rose-800 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-rose-400 hover:bg-rose-500 transition-colors text-white font-bold rounded-full shadow-md hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-rose-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-rose-500 font-semibold hover:underline underline-offset-2"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
