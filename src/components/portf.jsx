import { useState, useEffect } from 'react';

import { Footer } from './Footer';
import CTA from './cta';
import Blog from './blog';
import Experience from './experience';
import { Projects } from './project';
import Skills from './skills';
import Resume from './resume';
import Github from './github';
import { Hero } from './hero';
import { Navbar } from './navbar';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <div className="dark">
      <div className="min-h-screen bg-black text-white">
        <main className="min-h-screen bg-black">
          {/* Navigation */}
          {/* <Navbar toggleTheme={toggleTheme} theme={theme} /> */}

          <div className="max-w-2xl mx-auto px-6">
            {/* Hero Section */}
        <Hero />
            {/* Work Experience */}
     <Experience />

            {/* Projects */}
      <Projects />

            {/* GitHub Activity - Simplified */}
          <Github />
            {/* Blog */}
       <Blog/>

            {/* Skills */}
          <Skills />
            {/* Resume Download */}
         <Resume/>

            {/* CTA Section */}
            <CTA />
           
          </div>

          {/* Footer */}
      <Footer/>
        </main>
      </div>
    </div>
  );
}