/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import img from '../assets/background.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos'


function Test() {
  useEffect(() => {
    Aos.init()
     },[])
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };
    return(
      <section className="relative hero text-white overflow-hidden  " style={{height:'29rem', width:'100%'}} data-aos="fade-up"  data-aos-delay="0"  data-aos-duration="2000">
        <nav className="" data-aos="zoom-in" data-aos-delay="2000" >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> EO</span>
    </a>
    <button
      data-collapse-toggle="navbar-solid-bg"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-solid-bg"
      aria-expanded="false"
      onClick={() => {
        const navbar = document.getElementById("navbar-solid-bg");
        navbar.classList.toggle("hidden");
      }}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Tech Stack</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover
          :bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700
           dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
           md:dark:hover:bg-transparent">About Me</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 
          rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 
          dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900
           rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
           md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
           dark:hover:text-white md:dark:hover:bg-transparent">My Github</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* <header className="flex justify-between items-center p-4 bg-transparent">
      <a href="/" className="text-white text-2xl font-bold">
  EO
</a>
<nav className="flex items-center justify-between p-4 bg-transparent">
      <button className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? <MdOutlineCancel className="text-white" /> : <RxHamburgerMenu className="text-white" />}
      </button>
      <ul className={`flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li>
          <a href="#stack" className="text-white hover:underline">Tech Stack</a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:underline">Projects</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:underline">About Me</a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:underline">Contact Me</a>
        </li>
        <li>
          <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">My Github</a>
        </li>
      </ul>
    </nav>
      </header> */}
      <div className="hero-inner flex flex-col items-center justify-center text-center p-8 text-white">
  <p className="sub-heading text-lg" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="3000">Hey, I'm Ejimnkonye-Onyedika. I am a</p>
  <div className="hero-heading">
    <h1 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="500"  data-aos-duration="1000">FRONTEND WEB DEVELOPER</h1>
  </div>
  <p className="hero-intro mt-4 text-lg max-w-lg" data-aos="fade-up" data-aos-delay="1000"  data-aos-duration="3600">
    Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Let's collaborate and create something remarkable together!
  </p>
  <div className="hero-ctas mt-6 space-x-4">
    <a href="#projects">
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg" data-aos="flip-right" data-aos-delay="1000">My Projects</button>
    </a>
    <a download href="/assets/resume.6054d56e.pdf">
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg" data-aos-delay="1000">Resume</button>
    </a>
  </div>
</div>
      <img src={img} alt="Background pattern" className="pattern absolute bottom-0 top-0 left-0  h-auto object-cover opacity-20" style={{maxWidth:'100%', width:'100%'}} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-delay="1000" />
    </section>
    
    )
  }

  export { Test, };