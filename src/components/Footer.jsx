


import { IoMdArrowDropright } from "react-icons/io";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { ContactForm } from "./form";

export const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-10 p-4 " id="contact">
      <div className="container p-10 mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
        <h2 className="text-3xl font-bold italic flex items-center">
  Billie
  <span className="relative inline-flex size-3 ml-1">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
  </span>
</h2>


          <p className="mt-2 text-gray-300">Reach out for collaborations or just to say hi!</p>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:flex md:flex flex-col">
          <h3 className="text-xl font-semibold relative">Quick Links
          <span className="absolute left-0 bottom-0 w-20 top-7 h-[2px] bg-blue-500"></span>
          </h3>
          <ul className="mt-3 space-y-4 text-gray-300">
      <li>
        <a href="#home" className="flex items-center hover:text-blue-500">
          <IoMdArrowDropright className="mr-2" />
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="flex items-center hover:text-blue-500">
          <IoMdArrowDropright className="mr-2" />
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="flex items-center hover:text-blue-500">
          <IoMdArrowDropright className="mr-2" />
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="flex items-center hover:text-blue-500">
          <IoMdArrowDropright className="mr-2" />
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="flex items-center hover:text-blue-500">
          <IoMdArrowDropright className="mr-2" />
          Contact
        </a>
      </li>
    </ul>
        </div>

        {/* Right Section - Contact Form (Takes more space) */}
        <div className="md:col-span-2 lg:col-span-2">
        <h3 className="text-xl font-semibold relative">
  Send a Message
  <span className="absolute left-0 bottom-0 w-20 top-7 h-[2px] bg-blue-500"></span>
</h3>
         <ContactForm/>
        </div>
        
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-6 text-gray-300">
        <a href="https://www.linkedin.com/in/ejimnkonye-onyedika" target="_blank"  className="text-2xl hover:text-white"><FaLinkedin /></a>
        <a href="https://x.com/Ejimnkonye" target="_blank"  className="text-2xl hover:text-white"><FaTwitter /></a>
        <a href="https://www.instagram.com/billie_jrn/" target="_blank"  className="text-2xl hover:text-white"><FaInstagram /></a>
        <a href="https://github.com/ejimnkonye1" target="_blank"  className="text-2xl hover:text-white"><FaGithub /></a>
        <a href="mailto:ejimnkonyeonyedika@gmail.com" target="_blank"  className="text-2xl hover:text-white"><FaEnvelope /></a>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; 2025 Ejimnkonye. All rights reserved.
      </div>
    </footer>
  );
};





