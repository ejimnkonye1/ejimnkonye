/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/no-unescaped-entities */

import img1 from '../images/image (1).png';

export const About = () => {


  return (
    <section className="relative py-16 border-t-2 border-black pt-20 overflow-hidden" id="about">
      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 pt-[30px]">
        <div className="text-center mb-12 animate-fadeIn">
          <h3 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]" >About Me</h3>
          <p className="text-gray-600 text-lg mt-2">Passionate Developer & Problem Solver</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1 flex justify-center animate-fadeUp">
            <img 
              src={img1} 
              alt="Ejimnkonye Onyedika - Web Developer" 
              className="rounded-lg w-full max-w-sm object-cover shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1  bg-opacity-60 backdrop-blur-md p-6 rounded-lg  animate-fadeIn">
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi there! I'm <span className="font-semibold text-[#457AD4]">Ejimnkonye Onyedika</span>, a web developer from Nigeria with 
              <span className="font-semibold"> 5 years of experience</span>. 
              I have always been fascinated by technology, but my journey truly began when I committed to learning web development.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              I specialize in building intuitive user experiences, solving complex problems, and crafting responsive designs. When I’m not coding, you’ll find me 
              playing football manager games, watching movies, or diving into a new video game.
            </p>

            {/* Contact Button */}
            <div className="mt-6">
              <a 
                href="mailto:ejimnkonyeonyedika@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#457AD4] text-white font-semibold py-3 px-6 rounded-lg shadow-md 
                hover:bg-[#365FA3] hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
};
