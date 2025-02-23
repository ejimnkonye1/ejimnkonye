
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGithub,  FaJs, FaFire,  FaLeaf, FaPython } from "react-icons/fa";
import {  SiTailwindcss, SiTypescript, SiNextdotjs, SiRemix } from "react-icons/si";
const techStack = [
    { name: "Node.js", icon: <FaNodeJs color="#83CD29" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "MongoDB", icon: <FaLeaf color="#47A248" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "Firebase", icon: <FaFire color="#FFCA28" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "Remix", icon: <SiRemix color="#000000" /> },
  ];

const TechStack = () => {
  return (
    <section id='stack' className="">
    <div className="bg-gray-900 min-h-screen p-10 pt-20 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]" >Tech Stack</h1>
      <p className="text-center text-lg mb-6 max-w-3xl mx-auto">
        These technologies form the foundation of my expertise, gained through hands-on projects and continuous learning. I actively explore new developments to keep my skills sharp and relevant.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg transition-all hover:bg-gray-700 hover:scale-105 group"
                    >
                        <span className="text-4xl mb-2">{tech.icon}</span>
                        <p className="text-lg font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-full after:h-[2px] after:bg-blue-400 after:scale-x-0 
                        after:transition-transform after:duration-300 after:ease-in-out 
                        group-hover:after:scale-x-100 group-hover:pb-1">
                            {tech.name}
                        </p>
                    </div>
                ))}
      </div>
    </div>
    </section>

  );
};

export default TechStack;
