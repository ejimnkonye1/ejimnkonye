"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const workExperience = [
    {
      title: "Estyne International",
      role: "Software Developer",
      period: "04/2023 - Present",
      description:
        "Designed and developed responsive web applications using React.js, Node.js, Tailwind CSS, Bootstrap, Redux, and Firebase. Built a fully functional online store that reduced cart abandonment by 15%. Created a responsive landing page for a game application, resulting in a 25% increase in user engagement and sign-ups. Engineered and deployed a Hello API for geolocation and real-time weather forecasts, reducing latency by 30%. Utilized Docker for containerization and deployed projects to Vercel, contributing to 15% improvement in team efficiency. Experienced in agile methodologies, collaborating with UI/UX designers to ensure pixel-perfect designs and optimized performance.",
      technologies: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
        "Firebase",
        "Docker",
        "Vercel",
      ],
    },
    {
      title: "HNG Tech",
      role: "Frontend & Backend Developer",
      period: "07/2024 - 09/2024",
      description:
        "Worked on full-stack development projects, building responsive web applications with modern frontend and backend technologies. Collaborated with teams to implement scalable solutions and integrate APIs for improved functionality.",
      technologies: [
        "React.js",
        "Node.js",
        "API Integration",
        "Git",
        "CI/CD",
      ],
    },
    {
      title: "Genesys TechHub",
      role: "Frontend Developer",
      period: "09/2023 - 12/2023",
      description:
        "Developed and implemented responsive frontend components, collaborated with UI/UX designers to create pixel-perfect e-commerce platforms, improving user experience and site performance by 20%.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "UI/UX Collaboration",
        "Responsive Design",
      ],
    },
    {
      title: "Freelance & Personal Projects",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Built multiple full-stack applications including e-commerce platforms, booking systems, real estate platforms, and internal dashboards. Proficient in Python backend development with Flask and Django, PostgreSQL and MongoDB databases. Experienced in cloud deployment on Vercel, Heroku, Render, and AWS Lambda. Adept at using Git, GitHub, and GitLab for version control with CI/CD pipelines.",
      technologies: [
        "Python",
        "Flask",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Express",
        "AWS Lambda",
        "Heroku",
        "Render",
        "Git/GitHub",
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