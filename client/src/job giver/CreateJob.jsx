import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateJob() {
  const [value, setValue] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    salary: "",
    description: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data Submitted:", value);
    // send data to backend here
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#dbeafe] via-[#f5d0fe] to-[#fef9c3] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30 rounded-3xl w-full max-w-2xl p-8 space-y-6 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Post a Job
        </h2>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={value.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Event Decorator"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Job Type
          </label>
          <select
            name="jobType"
            value={value.jobType}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          >
            <option value="">Select Type</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={value.location}
            onChange={handleChange}
            placeholder="e.g. Delhi, India"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Salary (₹ per event/hour)
          </label>
          <input
            type="number"
            name="salary"
            value={value.salary}
            onChange={handleChange}
            placeholder="e.g. 5000"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Job Description
          </label>
          <textarea
            name="description"
            value={value.description}
            onChange={handleChange}
            placeholder="Briefly describe the job..."
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Requirements
          </label>
          <textarea
            name="requirements"
            value={value.requirements}
            onChange={handleChange}
            placeholder="e.g. Minimum 2 years experience in events"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
            rows="3"
            required
          ></textarea>
        </div>

        <Link
          to={"/jobs"}
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
        >
          Post Job
        </Link>
      </form>
    </div>
  );
}

export default CreateJob;
