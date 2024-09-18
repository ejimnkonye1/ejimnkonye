/* eslint-disable react/no-unescaped-entities */
import img from '../assets/background.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from 'react';
function HeroSection() {
  return (
    <div className="h-screen  bg-blue-700">
        <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My App</h1>
          <p className="text-lg">This is a sample hero section built with Tailwind CSS.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
        <img src={img} style={{width:'100%', height:'300px'}} className='' />
      </div>
    </div>
  );
}


function Navbar() {
    return (
      <nav className="flex justify-between items-center py-4 bg-gray-800">
        <div className="flex items-center">
          <a href="#" className="text-lg font-bold text-white">
            Logo
          </a>
        </div>
        <div className="flex items-center">
          <a href="#home" className="text-sm text-gray-200 hover:text-white transition duration-300 ease-in-out mx-4">
            Home
          </a>
          <a href="#" className="text-sm text-gray-200 hover:text-white transition duration-300 ease-in-out mx-4">
            About
          </a>
          <a href="#" className="text-sm text-gray-200 hover:text-white transition duration-300 ease-in-out mx-4">
            Contact
          </a>
        </div>
      </nav>
    );
  }

function Test() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };
    return(
      <section className="relative hero text-white overflow-hidden  " style={{height:'29rem'}}>
      <header className="flex justify-between items-center p-4 bg-transparent">
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
      </header>
      <div className="hero-inner flex flex-col items-center justify-center text-center p-8 text-white">
        <p className="sub-heading text-lg">Hey, I'm Ejimnkonye-Onyedika. I am a</p>
        <div className="hero-heading">
          <h1 className="text-4xl font-bold">FRONTEND WEB DEVELOPER</h1>
          
        </div>
        <p className="hero-intro mt-4 text-lg max-w-lg">
          Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Let's collaborate and create something remarkable together!
        </p>
        <div className="hero-ctas mt-6 space-x-4">
          <a href="#projects">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">My Projects</button>
          </a>
          <a download href="/assets/resume.6054d56e.pdf">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">Resume</button>
          </a>
        </div>
      </div>
      <img src={img} alt="Background pattern" className="pattern absolute bottom-0 top-0 left-0  h-auto object-cover opacity-20" style={{maxWidth:'100%', width:'100%'}} />
    </section>
    
    )
  }

  export {HeroSection, Navbar, Test, };