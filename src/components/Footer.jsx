// import { FaGithub } from "react-icons/fa6";
// import { MdArrowOutward } from "react-icons/md";
// import { TbMailFilled } from "react-icons/tb";
// import { FaLinkedin } from "react-icons/fa";
// export const  Footer = () => {
//     return(
//       <footer className="bg-black h-full"  id="contact">
//             <div className="container mx-auto p-4 md:p-8 lg:p-12">
//                 <h5 className="uppercase text-lg mb-2 text-white font-black font-serif text-2xl">CONTACT ME</h5>
//                 <ul className="space-y-4 p-2 md:p-2 lg:p-2 text-lg md:text-2xl sm:text-base">
//                     <li className="flex items-center space-x-4 text-sm lg:text-2xl text-base">
//                         <div className="cir-img lg:w-14 md:h-14 w-12 h-12  bg-green-700 rounded-full flex items-center justify-center">
//                             <TbMailFilled className="text-white w-6 h-6" />
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem]  lg:text-2xl">
//                                 <a href="mailto:ejimnkonyeonyedika@gmail.com" target="_blank" rel="noopener noreferrer">Send me an email</a>
//                             </span>
//                             <MdArrowOutward className="text-white text-2xl" />
//                         </div>
//                     </li>

//                     <li className="flex items-center space-x-4">
//                         <div className="cir-img lg:w-14 md:h-14 w-12 h-12 rounded-full flex items-center justify-center bg-[#222222]">
//                             <FaGithub className="text-white w-6 h-6" />
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem] lg:text-2xl">
//                                 <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer">Checkout my GitHub</a>
//                             </span>
//                             <MdArrowOutward className="text-white text-2xl" />
//                         </div>
//                     </li>
//                     <li className="flex items-center space-x-4">
//                         <div className="cir-img lg:w-14 md:h-14 w-12 h-12 rounded-full flex items-center justify-center bg-blue-700">
//                         <FaLinkedin className="text-white w-6 h-6" />
//                         </div>
//                         <div className="flex items-center ">
//                             <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem] lg:text-2xl">
//                                 <a href="https://www.linkedin.com/in/ejimnkonye-onyedika" target="_blank" rel="noopener noreferrer">Message me on LinkedIn</a>
//                             </span>
//                             <MdArrowOutward className="text-white text-2xl" />
//                         </div>
//                     </li>
//                 </ul>

//                 <p className="text-gray-600 text-center py-5">© Designed and built by Ejimnkonye Onyedika.</p>
//             </div>
//         </footer>
  
//     )
//   }

  


import { IoMdArrowDropright } from "react-icons/io";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

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
        <div className="hidden lg:flex flex-col">
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
          <form className="mt-3">
            <input type="text" placeholder="Your Name" className="w-full p-4 mb-3 rounded bg-gray-700 text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-4 mb-3 rounded bg-gray-700 text-white" />
            <textarea placeholder="Your Message" className="w-full p-4 mb-3 rounded bg-gray-700 text-white h-32"></textarea>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded flex justify-center items-center">
              Send Message <span className="ml-2">📩</span>
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-6 text-gray-300">
        <a href="#" className="text-2xl hover:text-white"><FaLinkedin /></a>
        <a href="#" className="text-2xl hover:text-white"><FaTwitter /></a>
        <a href="#" className="text-2xl hover:text-white"><FaInstagram /></a>
        <a href="#" className="text-2xl hover:text-white"><FaGithub /></a>
        <a href="#" className="text-2xl hover:text-white"><FaEnvelope /></a>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; 2025 Ejimnkonye. All rights reserved.
      </div>
    </footer>
  );
};





