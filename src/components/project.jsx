/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import { projects } from "./projectarray";
import { ProjectCard } from "./projectcard";

export const Projects = () => {
  const [currentIndices, setCurrentIndices] = useState({
    care: 0,
    quiz: 0,
    chat: 0,
    food: 0,
  });

  const handleNextImage = (projectId) => {
    setCurrentIndices((prevIndices) => ({
      ...prevIndices,
      [projectId]: (prevIndices[projectId] + 1) % projects.find(p => p.id === projectId).images.length,
    }));
  };

  const handlePreviousImage = (projectId) => {
    setCurrentIndices((prevIndices) => ({
      ...prevIndices,
      [projectId]: (prevIndices[projectId] - 1 + projects.find(p => p.id === projectId).images.length) % projects.find(p => p.id === projectId).images.length,
    }));
  };

  return (
    <div className="bg-white-100 min-h-screen" id="projects">
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]" >My Tech Journey</h1>
<p className="text-center text-lg mb-6 max-w-3xl mx-auto">
  Explore my diverse portfolio, where innovation meets problem-solving. Each project highlights  
  challenges overcome and skills refined. Dive in and discover the technologies that fuel my passion!
</p>
      

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            currentIndex={currentIndices[project.id]}
            onNext={() => handleNextImage(project.id)}
            onPrevious={() => handlePreviousImage(project.id)}
          />
        ))}

        <div className="flex items-center justify-center h-full mt-4 py-6">
          <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer">
            <button className="font-semibold bg-transparent flex items-center text-[1.1rem] tracking-[-0.5px] border-2 border-black p-[0.6rem] mx-auto transition duration-200 ease-in cursor-pointer">
              View More on Github <HiOutlineArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};