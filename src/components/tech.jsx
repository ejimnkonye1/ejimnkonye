import { useEffect, useRef, useState } from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaFire, FaLeaf, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRemix } from "react-icons/si";
import { TechScene } from "./Scene3D";

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#83CD29" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Firebase", icon: <FaFire />, color: "#FFCA28" },
  { name: "MongoDB", icon: <FaLeaf />, color: "#47A248" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Remix", icon: <SiRemix />, color: "#ffffff" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
];

const TechCard = ({ tech, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative glass rounded-xl p-6 flex flex-col items-center justify-center gap-3
        hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden h-full"
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
          style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
        />

        <span
          className="text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 relative z-10"
          style={{ color: isHovered ? tech.color : "#71717a" }}
        >
          {tech.icon}
        </span>
        <p className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 relative z-10">
          {tech.name}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"
          style={{ background: tech.color }}
        />
      </div>
    </div>
  );
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="relative py-24 bg-dark-900 overflow-hidden" ref={sectionRef}>
      <div className="section-divider" />

      {/* 3D Background */}
      <TechScene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent-cyan mb-3">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Tech Stack</h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
            These technologies form the foundation of my expertise, gained through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
