/* eslint-disable no-unused-vars */
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import img from '../images/test.jpg'
import img1 from '../images/q.png'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export const Projects =() =>{
   
    
    return(
      <div className="bg-white-100 min-h-screen " id="projects">
        
  <div className="container mx-auto p-4 md:p-8 lg:p-12">
  <div className="flex items-center mb-4 ">
      <h3 className="text-lg font-black font-serif mr-4">PROJECTS</h3>
      <div className="flex-1"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4  italic font-black text-[1.8rem] font-[500] font-clash" >CareConnect</h2>
    <p className="text-gray-700 mb-4 text-[1.2rem] font-gotham tracking[-0.3px] leading-[1.3]" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This project is a web-based application that allows users to manage their tasks efficiently. It features an intuitive UI and supports real-time collaboration.
    </p>
    <ul className="flex md:p-2 p-1 space-x-1 md:space-x-2">
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Reactjs
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Node.js
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    MongoDB
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Tailwind
  </li>
</ul>



    <div className="flex space-x-4 mt-6">
      <a  href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center mr-[1rem]">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a  href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[2rem]">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2">
    <div className="h-full w-full rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-hidden">
        <img src={img} alt="Project Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <div className="absolute bottom-[-20px] right-[40px] flex gap-[0.5rem] z-20"> {/* Increased z-index */}
            <button className="bg-blue-700 w-[38px] h-[38px] rounded-full text-[1rem] flex items-center justify-center z-20">
                <SlArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <button className="bg-blue-700 w-[38px] h-[38px] rounded-full text-[1rem] flex items-center justify-center z-20">
                <SlArrowRight className="w-[18px] h-[18px] text-white" />
            </button>
        </div>
    </div>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4  italic font-black text-[1.8rem] font-[500] font-clash" >CareConnect</h2>
    <p className="text-gray-700 mb-4 text-[1.2rem] font-gotham tracking[-0.3px] leading-[1.3]" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This project is a web-based application that allows users to manage their tasks efficiently. It features an intuitive UI and supports real-time collaboration.
    </p>
    <ul className="flex md:p-2 p-1 space-x-1 md:space-x-2">
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Reactjs
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Node.js
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    MongoDB
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Tailwind
  </li>
</ul>



    <div className="flex space-x-4 mt-6">
      <a  href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center mr-[1rem]">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a  href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[2rem]">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2">
    <div className="h-full w-full rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-hidden">
        <img src={img1} alt="Project Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <div className="absolute bottom-0 right-4 flex gap-2 z-20"> 
            <button className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
                <SlArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
                <SlArrowRight className="w-5 h-5 text-white" />
            </button>
        </div>
    </div>
</div>
</div>

    <div className="flex items-center justify-center h-full mt-4 py-6">
    <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer" >
    <button className="font-semibold bg-transparent flex items-center text-[1.1rem] tracking-[-0.5px] border-2 border-black p-[0.6rem] mx-auto transition duration-200 ease-in cursor-pointer" >View More on Github <HiOutlineArrowUpRight />
    </button>
    </a>

</div>

  </div>
</div>

    )
  }