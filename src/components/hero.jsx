/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import img from '../assets/background.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos'
import res from '../assets/Resume-Onyedika.pdf'


function Hero() {
  useEffect(() => {
    Aos.init()
     },[])
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
      setMenuOpen(prevState => !prevState);
       console.log('Menu is open:', menuOpen);
     };
    return(
      <section className="relative hero text-white overflow-hidden bg-gradient-to-br from-[#457AD4] to-[#254375]  " style={{height:'29rem', width:'100%'}} data-aos="fade-up"  data-aos-delay="0"  data-aos-duration="2000">
     
 
     <header className="flex justify-between items-center p-4 bg-transparent z-10">
            <a href="/" className="text-2xl font-extrabold text-[#254375] pl-8 tracking-tight">
                EO
            </a>
            <nav className="flex items-center z-10">
               
                <button 
                    className="block md:hidden bg-transparent border-none cursor-pointer" 
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <MdOutlineCancel className="text-white text-2xl" />
                    ) : (
                        <RxHamburgerMenu className="text-white text-2xl" />
                    )}
                </button>
            
                <ul 
                    className={`flex-col md:flex-row items-center list-none m-2 p-2 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden md:flex'} absolute md:static top-full left-0 w-full bg-gray-800 md:bg-transparent`}
                >
                    <li>
                        <a href="#stack" className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300">Tech Stack</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300">About Me</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300">Contact Me</a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/ejimnkonye1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white text-base font-semibold px-8 py-2 border-2 border-[#5494FF] transition-colors duration-200 hover:bg-[#5494FF] hover:text-white"
                        >
                            My Github
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
   
      <div className="hero-inner flex flex-col items-center justify-center text-center p-8 text-white">
  <p className="sub-heading text-lg" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000">Hey, I'm Ejimnkonye-Onyedika. I am a</p>
  <div className="hero-heading">
    <h1 className="lg:text-6xl md:text-4xl text-2xl tracking-[0px] font-bold" data-aos="fade-up" data-aos-delay="500"  data-aos-duration="1000">FRONTEND WEB DEVELOPER</h1>
  </div>
  <p className="hero-intro md:mt-4  text-md max-w-md leading-5 font-sans" data-aos="fade-up" data-aos-delay="1000"  data-aos-duration="3600">
    Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Let's collaborate and create something remarkable together!
  </p>
  <div className="hero-ctas  md:flex-col md:items-center max-w-fit mx-auto relative z-40 mt-5  space-x-4">
    <a href="#projects" className='text-inherit no-underline'>
      <button className="  projects px-4 py-2  font-semibold bg-[#457AD4] border border-black rounded py-1 px-4 text-white shadow-[3px_3px_0_black] text-[1.1rem] mr-4  md:my-2" data-aos="" data-aos-delay="1000">My Projects</button>
    </a>
    <a download href={res} className='text-inherit no-underline'>
      <button className="  px-4 py-2 rounded-lg font-semibold bg-transparent text-white border border-[#5494ff] py-1 px-4 text-[1.1rem] shadow-none  md:my-2" data-aos-delay="1000">Resume</button>
    </a>
  </div>
</div>
      <img src={img} alt="Background pattern" className="max-w-full relative bottom-2.5 opacity-90"  data-aos=""
      data-aos-delay="1000" />
    </section>
    
    )
  }

  export { Hero };