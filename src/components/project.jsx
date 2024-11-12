/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import img1 from '../images/test.jpg'
import quiz1 from '../images/quiz1.png'
import quiz2 from '../images/quiz2.png'
import quiz3 from '../images/quiz3.png'
import quiz4 from '../images/quiz4.png'
import care1 from '../images/care1.png'
import care2 from '../images/care2.png'
import care3 from '../images/care3.png'
import care4 from '../images/care4.png'
import care5 from '../images/care5.png'
import care6 from '../images/care6.png'
import chat1 from '../images/chat1.png'
import chat2 from '../images/chat2.png'
import chat3 from '../images/chat3.png'
import chat4 from '../images/chat4.png'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
export const Projects =() =>{
  const images = [quiz1, quiz2,quiz3,quiz4];
  const careImages = [care1,care2, care3,care4,care5,care6]
  const chatImages = [chat1,chat2,chat3,chat4]
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentCareIndex, setCurrentCareIndex] = useState(0);
  const [currentChatIndex, setCurrentChatIndex] = useState(0)
  const handleNextQuizImage = () => {
      setCurrentQuizIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousQuizImage = () => {
      setCurrentQuizIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextCareImage = () => {
      setCurrentCareIndex((prevIndex) => (prevIndex + 1) % careImages.length);
  };

  const handlePreviousCareImage = () => {
      setCurrentCareIndex((prevIndex) => (prevIndex - 1 + careImages.length) % careImages.length);
  };
  const handleNextChatImage = () => {
    setCurrentChatIndex((prevIndex) => (prevIndex + 1) % chatImages.length);
};

const handlePreviousChatImage = () => {
    setCurrentChatIndex((prevIndex) => (prevIndex - 1 + chatImages.length) % careImages.length);
};
  
    return(
      <div className="bg-white-100 min-h-screen " id="projects">
        
  <div className="container mx-auto p-4 md:p-8 lg:p-12">
  <div className="flex items-center mb-4 ">
      <h3 className="text-lg  font-serif font-bold mr-4 ">PROJECTS</h3>
      <div className="flex-1"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4  italic font-black text-[1.3rem] font-[500] font-clash text-[#457AD4]" >Care Connect</h2>
    <p className="text-gray-700 mb-4  font-gotham tracking[-0.3px] leading-[1.3]" >
    CareConnect is a web-based creche management system that connects parents, staff, and administrators. It provides real-time updates on children's activities, attendance, and events, allowing parents to stay informed and securely pay fees. Staff and admin can easily manage operations and send announcements, fostering a well-connected, supportive environment.
    </p>
    <ul className="flex md:p-2 p-1 space-x-1 md:space-x-2">
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Reactjs
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Firebase
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Redux
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
  Recharts
  </li>
</ul>



    <div className="flex space-x-4 mt-6">
      <a  href="https://care-connect-wine.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center ">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a  href="https://github.com/ejimnkonye1/care-Connect" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[1rem]">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2">
  <div className="md:h-[350px] md:w-[900px] bg-gray-800 p-4 rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-visible">
    <img 
        src={careImages[currentCareIndex]} 
        alt="Project Image" 
        className="rounded-lg shadow-md w-full h-auto object-cover z-10" 
    />
    
    <div className="absolute bottom-[-20px] right-4 flex gap-2 z-20"> 
        <button 
            className={`${currentCareIndex === 0 ? " bg-[#6BA4E4] opacity-80 text-white":''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30  pointer` }
            disabled={currentCareIndex === 0}
            onClick={handlePreviousCareImage}
        >
            <FaAngleLeft className="w-6 h-6 text-white font-semibold" />
        </button>
        <button 
            className={`${currentCareIndex === careImages.length - 1 ? 'bg-[#6BA4E4] opacity-80 text-white':''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30 pointer`}
            disabled={currentCareIndex === careImages.length - 1}
            onClick={handleNextCareImage}
        >
            <FaAngleRight className="w-6 h-6 text-white font-semibold " />
        </button>
    </div>
</div>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mt-[100px] mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4  italic font-black text-[1.3rem] font-[500] font-clash text-[#457AD4]" >Math Circus</h2>
    <p className="text-gray-700 mb-4  font-gotham tracking[-0.3px] leading-[1.3]" >
    Math Circus! 🎪 This is an engaging math quiz application designed for kids to practice their arithmetic skills in a fun and interactive way
    </p>
    <ul className="flex md:p-2 p-1 space-x-1 md:space-x-2">
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Reactjs
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
  Redux
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Tailwind
  </li>
</ul>



    <div className="flex space-x-4 mt-6">
      <a  href="https://math-circus.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center ">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a  href="https://github.com/ejimnkonye1/MathCircus" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[1rem]">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2">
  <div className="md:h-[350px] md:w-[900px] bg-gray-800 p-4 rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-visible">
    <img 
        src={images[currentQuizIndex]} 
        alt="Project Image" 
        className="rounded-lg shadow-md w-full h-auto object-cover z-10" 
    />
    
    <div className="absolute bottom-[-20px] right-4 flex gap-2 z-20"> 
        <button 
            className={`${currentQuizIndex === 0 ? " bg-[#6BA4E4] opacity-80 text-white":''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30  pointer` }
            disabled={currentQuizIndex === 0}
            onClick={handlePreviousQuizImage}
        >
            <FaAngleLeft className="w-6 h-6 text-white font-semibold" />
        </button>
        <button 
            className={`${currentQuizIndex === images.length - 1 ? 'bg-[#6BA4E4] opacity-80 text-white':''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30 pointer`}
            disabled={currentQuizIndex === images.length - 1}
            onClick={handleNextQuizImage}
        >
            <FaAngleRight className="w-6 h-6 text-white font-semibold " />
        </button>
    </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mt-[100px] mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4  italic font-black text-[1.3rem] font-[500] font-clash text-[#457AD4]" > Chat App</h2>
    <p className="text-gray-700 mb-4  font-gotham tracking[-0.3px] leading-[1.3]" >
    Chat App is a real-time messaging platform with a dark mode, designed for smooth and easy communication. With instant message delivery and a simple, intuitive interface, it’s perfect for individual and group chats, helping users stay connected effortlessly
    </p>
    <ul className="flex md:p-2 p-1 space-x-1 md:space-x-2">
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Reactjs
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
  Redux
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Tailwind
  </li>
  <li className="bg-gray-300 font-[gotham] text-[0.95rem] opacity-80 text-gray-700 border border-gray-500 rounded-lg p-1">
    Firebase
  </li>
</ul>



    <div className="flex space-x-4 mt-6">
      <a  href="https://math-circus.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#457AD4] border border-black rounded-[0.3rem] p-[0.4rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.1rem] inline-flex items-center ">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a  href="https://github.com/ejimnkonye1/MathCircus" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap bg-[#353535] border border-black rounded-[0.3rem] p-[0.1rem] px-[1em] text-white shadow-[3px_3px_#000] text-[1.0rem] inline-flex items-center mr-[1rem]">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2">
  <div className="md:h-[350px] md:w-[900px] bg-gray-800 p-4 rounded-[0.4rem] shadow-[5px_5px_0_#000,_-2px_-2px_0_#000] relative overflow-visible">
    <img 
        src={chatImages[currentChatIndex]} 
        alt="Project Image" 
        className="rounded-lg shadow-md w-full h-auto object-cover z-10" 
    />
    
    <div className="absolute bottom-[-20px] right-4 flex gap-2 z-20"> 
        <button 
            className={`${currentChatIndex === 0 ? " bg-[#6BA4E4] opacity-80 text-white":''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30  pointer` }
            disabled={currentChatIndex === 0}
            onClick={handlePreviousChatImage}
        >
            <FaAngleLeft className="w-6 h-6 text-white font-semibold" />
        </button>
        <button 
            className={`${currentChatIndex === chatImages.length - 1 ? 'bg-[#6BA4E4] opacity-80 text-white':''}bg-[#457AD4] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30 pointer`}
            disabled={currentChatIndex === chatImages.length - 1}
            onClick={handleNextChatImage}
        >
            <FaAngleRight className="w-6 h-6 text-white font-semibold " />
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