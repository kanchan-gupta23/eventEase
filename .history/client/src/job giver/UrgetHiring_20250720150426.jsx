import React, { useState, useEffect } from "react";

const allSkills = [
  "Event Planning",
  "Budgeting",
  "Vendor Management",
  "Logistics Coordination",
  "Risk Management",
  "Time Management",
  "Negotiation",
  "Crisis Management",
  "Permit & Compliance Handling",
  "Public Speaking",
  "Client Communication",
  "Team Leadership",
  "Networking",
  "Conflict Resolution",
  "Event Promotion",
  "Social Media Management",
  "Email Campaigning",
  "Basic Graphic Design",
  "Event Registration Platforms",
  "Project Management Tools",
  "Photography/Videography",
  "Emcee/Hosting",
  "Crowd Management",
  "Stage Designing",
  "Sponsorship Acquisition",
  "Hospitality Coordination",
];

const demoUsers = [
  {
    id: 1,
    name: "Aarav Kapoor",
    skills: ["Event Planning", "Budgeting", "Vendor Management"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    skills: [
      "Public Speaking",
      "Client Communication",
      "Social Media Management",
    ],
  },
  {
    id: 3,
    name: "Kabir Mehta",
    skills: ["Photography/Videography", "Stage Designing", "Crowd Management"],
  },
  {
    id: 4,
    name: "Anjali Desai",
    skills: [
      "Event Registration Platforms",
      "Email Campaigning",
      "Risk Management",
    ],
  },
  {
    id: 5,
    name: "Rohan Patel",
    skills: ["Logistics Coordination", "Time Management", "Networking"],
  },
];

const UrgentHiring = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [otherSkill, setOtherSkill] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  useEffect(() => {
    // Set demo users as online
    setOnlineUsers(demoUsers);
  }, []);

  const handleSkillChange = (e) => {
    const value = e.target.value;
    if (value === "Others") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
      setSelectedSkills((prev) =>
        prev.includes(value) ? prev : [...prev, value]
      );
    }
  };

  const handleOtherSkillSubmit = () => {
    const trimmed = otherSkill.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setOtherSkill("");
      setShowOtherInput(false);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const filteredUsers = onlineUsers.filter((user) =>
    user.skills.some((skill) => selectedSkills.includes(skill))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-4">
      <div className="max-w-3xl mx-auto p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-500">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400 tracking-wide">
          Urgent Hiring for Events 🚀
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-purple-300">
            Select Skills:
          </label>
          <select
            onChange={handleSkillChange}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none"
            defaultValue=""
          >
            <option disabled value="">
              -- Select Skill --
            </option>
            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
            <option value="Others">Others</option>
          </select>

          {showOtherInput && (
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={otherSkill}
                onChange={(e) => setOtherSkill(e.target.value)}
                placeholder="Enter other skill"
                className="flex-1 p-2 rounded bg-gray-900 border border-gray-700 text-white"
              />
              <button
                onClick={handleOtherSkillSubmit}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
              >
                Add
              </button>
            </div>
          )}

          {selectedSkills.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2 text-purple-200">
                Selected Skills:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1 bg-purple-800 text-white rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 text-red-300 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">
            Matching Online Users:
          </h3>
          {filteredUsers.length > 0 ? (
            <ul className="space-y-3">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="bg-white/10 p-4 rounded-lg border border-white/20"
                >
                  <p className="font-bold text-white">{user.name}</p>
                  <p className="text-sm text-gray-300">
                    Skills:{" "}
                    <span className="italic">{user.skills.join(", ")}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 italic">
              No matching online users found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrgentHiring;
