/* eslint-disable react/prop-types */
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export const ProjectCard = ({ project, currentIndex, onNext, onPrevious }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mt-[100px] mb-8 p-[18px] md:p-[2px]">
      <div className="order-2 md:order-1">
      <h2 className="mb-4 italic font-bold text-[1.3rem] font-clash text-[#457AD4]">
  {project.title}
</h2>
<p className="text-gray-800 mb-4 font-gotham leading-[1.4]">
  {project.description}
</p>
<ul className="flex flex-wrap gap-2 md:p-2 p-1">
  {project.technologies.map((tech, index) => (
    <li 
      key={index} 
      className="bg-gray-300 font-gotham text-sm text-gray-800 border border-gray-500 rounded-lg px-2 py-1 opacity-90 hover:opacity-100 transition-opacity"
    >
      {tech}
    </li>
  ))}
</ul>

        <div className="flex space-x-4 mt-6">
          <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center">
            Live Site <HiMiniArrowTopRightOnSquare />
          </a>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[1rem]">
            Source Code <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex justify-center order-1 md:order-2">
        <div className="lg:h-[350px] lg:w-[900px] bg-gray-800 p-4 rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-visible">
          <img
            src={project.images[currentIndex]}
            alt="Project Image"
            className="rounded-lg shadow-md w-full h-auto object-cover z-10"
          />
          <div className="absolute bottom-[-20px] right-4 flex gap-2 z-20">
            <button
              className={`${currentIndex === 0 ? "bg-[#6BA4E4] opacity-80 text-white" : ''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30 pointer`}
              disabled={currentIndex === 0}
              onClick={onPrevious}
            >
              <FaAngleLeft className="w-6 h-6 text-white font-semibold" />
            </button>
            <button
              className={`${currentIndex === project.images.length - 1 ? 'bg-[#6BA4E4] opacity-80 text-white' : ''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30 pointer`}
              disabled={currentIndex === project.images.length - 1}
              onClick={onNext}
            >
              <FaAngleRight className="w-6 h-6 text-white font-semibold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};