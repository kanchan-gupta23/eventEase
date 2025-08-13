import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../Context";
function CreateJob() {
  const Params = useParams();
  const [value, setValue] = useState({
    jobName: "",
    jobType: "",
    Skills: "",
    Location: "",
    deadline: "",
    Salary: "",
    description: "",
    requirements: "",
    numberOfOpening: "",
    company: "",
  });
  const { Authentication } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:2000/job/createJob/${company._id}`,
      value,
      {
        Headers: {
          Authorization: Authentication,
        },
      }
    );
    console.log("Job Data Submitted:", value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] flex items-center justify-center p-6 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 space-y-6 transition-all duration-500 animate-fadeIn"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Post a Job
        </h2>

        {/* Job Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={value.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Event Decorator"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Job Type
          </label>
          <select
            name="jobType"
            value={value.jobType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={value.location}
            onChange={handleChange}
            placeholder="e.g. Delhi, India"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Salary (₹ per event/hour)
          </label>
          <input
            type="number"
            name="salary"
            value={value.salary}
            onChange={handleChange}
            placeholder="e.g. 5000"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Job Description
          </label>
          <textarea
            name="description"
            value={value.description}
            onChange={handleChange}
            placeholder="Briefly describe the job..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Requirements */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Requirements
          </label>
          <textarea
            name="requirements"
            value={value.requirements}
            onChange={handleChange}
            placeholder="e.g. Minimum 2 years experience in events"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <Link
          to="/jobs"
          className="block text-center bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl text-lg font-semibold transition-all shadow-md"
        >
          Post Job
        </Link>
      </form>
    </div>
  );
}

export default CreateJob;
