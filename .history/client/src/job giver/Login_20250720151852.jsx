import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo login: " + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-md w-full border border-white/20 animate-fadeIn">
        <h2 className="text-3xl font-bold text-pink-400 text-center mb-6">
          🎈 Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@eventease.com"
              className="w-full p-3 rounded-md bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-pink-400 hover:bg-pink-300 transition-colors text-white font-bold rounded-md shadow-md"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-white">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-pink-300 hover:underline underline-offset-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
