/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { HeroScene } from './Scene3D';
import res from '../assets/resume.pdf';

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900" />
  </div>
);

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const roles = ['Software Developer', 'Frontend Engineer', 'React Specialist', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
      id="home"
    >
      <GridBackground />

      {/* 3D Scene Background */}
      <HeroScene />

      {/* Main Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm text-zinc-400">Available for work</span>
        </div>

        {/* Greeting */}
        <p className="text-lg md:text-xl text-zinc-400 mb-4 font-light">
          Hey, I'm <span className="text-white font-medium">Ejimnkonye Onyedika</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">
            {text}
          </span>
          <span className="inline-block w-[3px] h-[0.9em] bg-accent-purple ml-1 animate-blink align-middle"></span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Passionate about building efficient and scalable software solutions.
          I specialize in creating seamless user experiences with modern web technologies.
          Let's collaborate and bring innovative ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="group btn-primary flex items-center gap-2">
            View My Work
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a download href={res} className="btn-outline flex items-center gap-2">
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: '5+', label: 'Years Exp.' },
            { number: '20+', label: 'Projects' },
            { number: '10+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</p>
              <p className="text-xs md:text-sm text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-zinc-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent-purple animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
