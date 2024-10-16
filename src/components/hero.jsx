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
      <section className="relative hero text-white overflow-hidden  " style={{height:'29rem', width:'100%'}} data-aos="fade-up"  data-aos-delay="0"  data-aos-duration="2000">
     
 
     <header className="navbar">
      <a href="/" className="logo text-transparent">EO</a>
      <nav className="nav">
        <button className="toggle-menu" onClick={toggleMenu}>
          {menuOpen ? <MdOutlineCancel className="text-white menu-icon" style={{zIndex:'20'}}  /> :

<RxHamburgerMenu className="text-white menu-icon" />
        }
        
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><a href="#stack" className="nav-link font-semibold text-nowrap">Tech Stack</a></li>
          <li><a href="#projects" className="nav-link font-semibold text-nowrap">Projects</a></li>
          <li><a href="#about" className="nav-link font-semibold text-nowrap">About Me</a></li>
          <li><a href="#contact" className="nav-link font-semibold text-nowrap">Contact Me</a></li>
          <li>
            <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer" className="nav-link github font-semibold text-nowrap">
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
  <div className="hero-ctas mt-6 space-x-4">
    <a href="#projects">
      <button className=" text-blue-600 projects px-4 py-2 rounded-lg font-semibold" data-aos="" data-aos-delay="1000">My Projects</button>
    </a>
    <a download href={res}>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold" data-aos-delay="1000">Resume</button>
    </a>
  </div>
</div>
      <img src={img} alt="Background pattern" className="pattern absolute bottom-0 top-0 left-0  h-auto object-cover opacity-20" style={{maxWidth:'100%', width:'100%'}} data-aos=""
      data-aos-delay="1000" />
    </section>
    
    )
  }

  export { Hero };