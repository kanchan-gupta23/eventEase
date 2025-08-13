import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const demoJob = {
  id: 1,
  title: "Event Coordinator",
  company: "Dream Weddings Co.",
  location: "Delhi",
  type: "Full-Time",
  salary: "₹25,000/month",
  requirements: [
    "Minimum 1 year of experience in event planning.",
    "Excellent communication and organizational skills.",
    "Ability to manage vendors and clients professionally.",
    "Flexible to work weekends and holidays.",
  ],
  description:
    "As an Event Coordinator, you'll oversee and execute memorable wedding events. You will collaborate with clients, vendors, and a dynamic team to ensure smooth operations and unforgettable experiences.",
};

const AboutJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-100 px-4 py-10 animate-fade-in-down">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/40">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-4"
        >
          ← Back to Listings
        </button>

        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          {demoJob.title}
        </h1>
        <Link
          to={"/companyProfile"}
          className="text-md text-indigo-900 mb-1 font-medium"
        >
          {demoJob.company} • {demoJob.location}
        </Link>
        <span className="bg-blue-200 text-blue-800 px-3 py-1 text-xs font-semibold rounded-full">
          {demoJob.type}
        </span>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            💼 Job Description
          </h2>
          <p className="text-gray-800 leading-relaxed">{demoJob.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            ✅ Requirements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            {demoJob.requirements.map((req, i) => (
              <li key={i} className="text-sm">
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-blue-700 font-bold text-lg">
            💰 Salary: {demoJob.salary}
          </p>
          <Link
            to={"/userLanding"}
            onClick={() =>
              alert("🎉 You have successfully applied for this job!")
            }
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold transition-shadow shadow-md hover:shadow-lg"
          >
            Apply Now 🚀
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutJob;
