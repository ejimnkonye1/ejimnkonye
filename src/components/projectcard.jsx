/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const ProjectCard = ({ project, index, currentIndex, onNext, onPrevious }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Text Content */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"} order-2`}>
        {/* Project number */}
        <span className="text-xs font-mono text-accent-purple tracking-widest mb-3 block">
          PROJECT {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-zinc-300 rounded-full glass hover:border-accent-purple/30 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <a
            href={project.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Live Site
            <HiMiniArrowTopRightOnSquare />
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <FaGithub />
            Source Code
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"} order-1`}>
        <div className="relative group">
          {/* Gradient border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-purple/20 via-transparent to-accent-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          <div className="relative glass rounded-xl p-3 overflow-hidden">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot`}
              className="rounded-lg w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Image navigation */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentIndex === 0
                    ? "bg-zinc-800/80 text-zinc-500 cursor-not-allowed"
                    : "bg-accent-purple/80 hover:bg-accent-purple text-white backdrop-blur-sm"
                }`}
                disabled={currentIndex === 0}
                onClick={onPrevious}
              >
                <FaAngleLeft className="w-4 h-4" />
              </button>
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentIndex === project.images.length - 1
                    ? "bg-zinc-800/80 text-zinc-500 cursor-not-allowed"
                    : "bg-accent-purple/80 hover:bg-accent-purple text-white backdrop-blur-sm"
                }`}
                disabled={currentIndex === project.images.length - 1}
                onClick={onNext}
              >
                <FaAngleRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image counter */}
            <div className="absolute top-6 right-6 glass rounded-full px-3 py-1">
              <span className="text-xs font-mono text-zinc-300">
                {currentIndex + 1}/{project.images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
