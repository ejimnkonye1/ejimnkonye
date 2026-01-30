/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowUpRight, HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub, FaAngleRight, FaAngleLeft, FaCode } from "react-icons/fa6";
import { projects, categories } from "./projectarray";
import { ProjectsScene } from "./Scene3D";

const ProjectCard = ({ project, isVisible, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const handleNext = () => {
    if (hasImages) setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };
  const handlePrev = () => {
    if (hasImages) setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className={`group relative glass rounded-xl overflow-hidden transition-all duration-500 hover:border-white/15 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      <div className="relative aspect-video bg-dark-700 overflow-hidden">
        {hasImages ? (
          <>
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Image navigation */}
            {project.images.length > 1 && (
              <>
                <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      currentIndex === 0
                        ? "bg-black/30 text-zinc-600 cursor-not-allowed"
                        : "bg-accent-purple/80 hover:bg-accent-purple text-white"
                    } backdrop-blur-sm`}
                  >
                    <FaAngleLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === project.images.length - 1}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      currentIndex === project.images.length - 1
                        ? "bg-black/30 text-zinc-600 cursor-not-allowed"
                        : "bg-accent-purple/80 hover:bg-accent-purple text-white"
                    } backdrop-blur-sm`}
                  >
                    <FaAngleRight className="w-3 h-3" />
                  </button>
                </div>
                {/* Image counter */}
                <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 z-10">
                  <span className="text-[10px] font-mono text-zinc-300">
                    {currentIndex + 1}/{project.images.length}
                  </span>
                </div>
              </>
            )}
          </>
        ) : (
          /* Placeholder for projects without images */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800">
            <FaCode className="text-3xl text-zinc-700 mb-2" />
            <p className="text-xs text-zinc-600">Screenshots coming soon</p>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-zinc-300 border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Collab badge */}
        {project.collab && (
          <div className="absolute top-3 left-[110px] z-10">
            <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-cyan/20 backdrop-blur-sm text-accent-cyan border border-accent-cyan/20">
              Collab
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-5">
        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
          {project.title}
        </h4>

        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[11px] font-medium text-zinc-400 rounded-md bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <FaGithub />
            Code
          </a>
          {project.liveSite && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-accent-purple transition-colors duration-200"
            >
              <HiMiniArrowTopRightOnSquare />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-24 bg-dark-900 overflow-hidden" id="projects" ref={sectionRef}>
      <div className="section-divider" />

      {/* 3D Background */}
      <ProjectsScene />

      <div className="relative max-w-6xl mx-auto px-6 pt-16">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent-purple mb-3">My work</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
            Explore my diverse portfolio where innovation meets problem-solving. Each project highlights
            challenges overcome and skills refined.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => {
            const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent-purple/20 text-white border border-accent-purple/40"
                    : "text-zinc-500 hover:text-zinc-300 glass hover:border-white/15"
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-accent-purple' : 'text-zinc-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/ejimnkonye1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-accent-purple hover:text-white transition-all duration-300 hover:bg-accent-purple/5"
          >
            <FaGithub className="text-lg" />
            View More on GitHub
            <HiOutlineArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
