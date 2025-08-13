import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import axios from "axios";
import { Context } from "../Context";

const UpdateProfile = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    skills: [],
    avatar: "",
    about: "",
    pdf: "",
    preview: "",
  });
  const { user, UserAuthentication } = useContext(Context);
  const naviagte = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" || name === "pdf") {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        [name]: file,
        preview: name === "avatar" ? URL.createObjectURL(file) : prev.preview,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("password", form.password);
    formData.append("skills", form.skills);
    formData.append("avatar", form.avatar);
    formData.append("pdf", form.pdf);
    formData.append("about", form.about);

    const response = await axios.put(
      `http://localhost:2000/user/updateProfile/${user._id}`,
      formData,
      {
        headers: {
          Authorization: UserAuthentication,
        },
      }
    );

    naviagte("/userLanding");
  };

  useEffect(() => {
    setForm({
      username: user.username,
      email: user.email,
      phone: user.phone,

      skills: user.skills.map((skill) => skill),

      about: user.about,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex justify-center items-center px-4 py-12">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8 rounded-2xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">
          🌌 Join Try Catchers
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Avatar */}

          <div className="relative border-2 border-[#6f4e37] rounded-full h-[7vw] w-[7vw] left-1/2 -translate-x-1/2">
            {form.preview ? (
              <img
                src={form.preview}
                alt="Preview"
                className="w-[7vw] h-[7vw] border-2 border-[#6f4e37] absolute left-1/2 -translate-x-1/2 rounded-full object-cover"
              />
            ) : (
              <FaCircleUser className="rounded-full h-[7vw] w-[7vw] absolute left-1/2 -translate-x-1/2 object-cover" />
            )}
            <label
              htmlFor="img"
              className="absolute bottom-[1vh] left-[0%] z-10 text-[#6f4e37]"
            >
              <FaCameraRetro />
            </label>
            <input
              type="file"
              id="img"
              name="avatar"
              required
              onChange={handleChange}
              className="hidden"
            />
          </div>
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
          {/* Phone number */}
          <div>
            <label className="text-sm text-white block mb-1">Phone no.</label>
            <input
              type="number"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="52867"
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
          {/* Pdf Upload */}
          <div className="flex items-center">
            <h1 className="text-white">Resume</h1>
            <label htmlFor="pdf" className="text-sm text-white block mb-1">
              <MdOutlineAttachFile />
            </label>
            <input
              id="pdf"
              type="file"
              name="pdf"
              onChange={handleChange}
              className="ml-3"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-bold rounded-md shadow-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
