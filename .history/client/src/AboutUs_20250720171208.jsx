import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0a1a2f] to-[#121c36] text-white flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-cyan-300 mb-10 text-center hover:scale-105 transition-transform duration-500 drop-shadow-lg">
        About Try Catchers
      </h1>

      <div className="max-w-4xl text-lg leading-relaxed text-gray-300 bg-[#0e243d]/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-cyan-500/20">
        <p className="mb-6">
          Try Catchers was founded with a bold vision — to revolutionize how
          event-based job seekers and hiring companies connect in real time.
          Built from the ground up by a dedicated trio —{" "}
          <strong className="text-cyan-300">Namo</strong>,{" "}
          <strong className="text-cyan-300">Nancy</strong>, and{" "}
          <strong className="text-cyan-300">Kanchan</strong> — the project began
          as a passion and quickly turned into a mission to simplify the hiring
          process in event management.
        </p>
        <p className="mb-6">
          We observed the challenges faced by event companies to hire the right
          talent instantly, and the struggles of skilled individuals to find
          on-demand work. With modern technology and a strong sense of empathy,
          we’ve built a platform that bridges this gap.
        </p>
        <p className="mb-6">
          The journey wasn’t easy, but it was fulfilling. Every feature on this
          platform — from urgent job alerts to personalized profiles — is
          handcrafted and driven by real-world needs. We continue to evolve,
          backed by a passionate team and a growing community.
        </p>
        <p className="mb-6">
          Thank you for being a part of our journey.{" "}
          <span className="text-cyan-300 font-semibold">
            We're just getting started.
          </span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-cyan-300">
          Partners:
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-white">
          {["Namo", "Nancy", "Kanchan"].map((name) => (
            <li
              key={name}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {name}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-cyan-300">
          Contact Us:
        </h2>
        <p className="mb-4 flex items-center">
          <FaEnvelope className="mr-3 text-cyan-300" />
          <a
            href="mailto:trycatchers.team@example.com"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            trycatchers.team@example.com
          </a>
        </p>

        <div className="flex gap-6 mt-6">
          <a
            href="https://facebook.com/trycatchers"
            target="_blank"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://instagram.com/trycatchers"
            target="_blank"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://linkedin.com/company/trycatchers"
            target="_blank"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
