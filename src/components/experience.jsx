"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const workExperience = [
    {
      title: "DevStream",
      role: "Founder & Full Stack Engineer",
      period: "2025 - Present",
      description:
        "Building a Chrome extension + SaaS platform that records synchronized desktop and mobile website sessions for developers. Leading architecture, frontend systems, backend APIs, recording engine development, and product design.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Supabase",
        "Tailwind CSS",
        "Chrome Extensions",
      ],
    },
    {
      title: "Creche Management System",
      role: "Full Stack Developer",
      period: "2024 - Present",
      description:
        "Developed a complete web-based creche management and communication system with dashboards for parents, staff, and admin. Built real-time messaging, attendance tracking, activity updates, meal tracking, and payment integration.",
      technologies: [
        "React",
        "Firebase",
        "Firestore",
        "Node.js",
        "Paystack",
        "Material UI",
      ],
    },
    {
      title: "30-Day Challenge Platform",
      role: "Frontend Engineer",
      period: "2024 - 2025",
      description:
        "Designed and developed an interactive challenge platform featuring GitHub-style heatmaps, leaderboards, progress tracking, ranking systems, and responsive user dashboards with dark mode support.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      title: "Freelance & Startup Projects",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Worked on multiple startup and freelance projects including booking systems, real estate platforms, internal dashboards, authentication systems, and scalable APIs. Focused on building modern UI/UX and backend infrastructures.",
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "Express",
        "Flask",
        "TypeScript",
        "Vue.js",
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <section className="py-12">
        <h2 className="text-xl font-semibold text-white mb-6">
          Work Experience
        </h2>

        <div className="space-y-4">
          {workExperience.map((job, idx) => (
            <div
              key={idx}
              className="border-b border-white/10 pb-4 last:border-0"
            >
              <button
                onClick={() => toggleDropdown(idx)}
                className="w-full text-left flex items-start justify-between gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-medium text-white">
                      {job.title}
                    </h3>

                    <span className="text-white/30">/</span>

                    <p className="text-sm text-white/50">{job.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-white/50 whitespace-nowrap">
                    {job.period}
                  </span>

                  <FaChevronDown
                    className={`text-white/50 transition-transform duration-300 w-4 h-4 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <div className="pl-0 space-y-3">
                  <p className="text-sm text-white/70">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}