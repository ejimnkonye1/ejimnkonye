/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react';
import img1 from '../images/image (1).png';
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { AboutScene } from './Scene3D';

export const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-dark-900 overflow-hidden" id="about" ref={sectionRef}>
      <div className="section-divider" />

      {/* 3D Background */}
      <AboutScene />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent-purple mb-3">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className={`flex-shrink-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Gradient border frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-blue rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative">
                <img
                  src={img1}
                  alt="Ejimnkonye Onyedika"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl relative z-10"
                />
                {/* 3D floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 z-20 animate-float">
                  <p className="text-sm font-semibold gradient-text">5+ Years</p>
                  <p className="text-xs text-zinc-400">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className={`flex-1 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Hi there! I'm <span className="font-semibold text-white">Ejimnkonye Onyedika</span>,
              a web developer from Nigeria with <span className="font-semibold gradient-text">5 years of experience</span>.
              I have always been fascinated by technology, but my journey truly began when I committed to learning web development.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              I specialize in building intuitive user experiences, solving complex problems, and crafting responsive designs.
              When I'm not coding, you'll find me playing football manager games, watching movies, or diving into a new video game.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Nigeria' },
                { icon: <FaBriefcase />, label: 'Status', value: 'Available' },
                { icon: <FaEnvelope />, label: 'Email', value: 'Contact Me' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center hover:border-accent-purple/30 transition-all duration-300">
                  <span className="text-accent-purple text-lg mb-2 block">{item.icon}</span>
                  <p className="text-xs text-zinc-500 mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-zinc-300">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:ejimnkonyeonyedika@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaEnvelope />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
