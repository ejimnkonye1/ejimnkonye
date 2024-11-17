/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import img from '../assets/background.png';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import res from '../assets/Resume-Onyedika.pdf';

export const Hero =()=> {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="relative hero text-white overflow-hidden bg-gradient-to-br from-[#457AD4] to-[#254375] h-[29rem] w-full"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="2000"
    >
      <div className="hero-inner flex flex-col items-center justify-center text-center p-8 pt-[100px] text-white">
        <p
          className="sub-heading text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Hey, I'm Ejimnkonye-Onyedika. I am a
        </p>
        <div className="hero-heading">
          <h1
            className="lg:text-6xl md:text-4xl text-2xl tracking-[0px] font-bold"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            FRONTEND WEB DEVELOPER
          </h1>
        </div>
        <p
          className="hero-intro md:mt-4 text-md max-w-md leading-5 font-sans"
          data-aos="fade-up"
          data-aos-delay="600" 
          data-aos-duration="3600"
        >
          Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Let's collaborate and create something remarkable together!
        </p>
        <div className="hero-ctas md:flex-col md:items-center max-w-fit mx-auto relative z-40 mt-5 space-x-4">
          <a href="#projects" className="text-inherit no-underline">
            <button
              className="projects px-4 py-2 font-semibold bg-[#457AD4] border border-black rounded py-1 px-4 text-white shadow-[3px_3px_0_black] text-[1.1rem] mr-4 md:my-2"
              data-aos="fade-up"
              data-aos-delay="700" 
              data-aos-duration="1000"
            >
              My Projects
            </button>
          </a>
          <a download href={res} className="text-inherit no-underline">
            <button
              className="px-4 py-2 rounded-lg font-semibold bg-transparent text-white border border-[#5494ff] py-1 px-4 text-[1.1rem] shadow-none md:my-2"
              data-aos="fade-up"
              data-aos-delay="800" 
              data-aos-duration="1000"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
      <img
        src={img}
        alt="Background pattern"
        className="max-w-full relative bottom-2.5 opacity-90"
        data-aos="fade-up"
        data-aos-delay="1200" 
        data-aos-duration="1000" 
      />
    </section>
  );
}

