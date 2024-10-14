/* eslint-disable no-unused-vars */
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import img from '../images/test.jpg'
import img1 from '../images/n.png'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export const Projects =() =>{
    const style = {
        descriptionH1: {
            fontSize: '1.8rem',
            fontFamily: 'clashGrotesk',
            fontWeight: 500,
            
        },
        live: {
            backgroundColor: '#457AD4', 
            border: '1px solid black',
            borderRadius: '0.3rem',
            padding: '0.4rem 1em',
            color: '#fff',
            boxShadow: '3px 3px #000',
            fontSize: '1.1rem',
            display: 'inline-flex',
            alignItems: 'center',
            margin: '0 1rem 0rem 0',
        },
        source: {
            backgroundColor: '#353535', 
            border: '1px solid black',
            borderRadius: '0.3rem', 
            padding: '0.1rem 1em', 
            color: '#fff', 
            boxShadow: '3px 3px #000', 
            fontSize: '1.0rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            margin: '0 2rem 0 0', 
        },
        descriptionp: {
          fontSize: '1.2rem',
          fontFamily: 'gotham',
          letterSpacing: '-0.3px',
          lineHeight: '1.3',
          
        
        },
        imgcont: {
          height: '100%',
          objectFit: 'cover',
          width: '100%', // Note: CSS does not support !important in JS style objects
          borderRadius: '0.4rem',
          boxShadow: '5px 5px 0 #000, -2px -2px 0 #000', 
          position:'relative'
          
        },
        arrowContainer: {
          position: 'absolute',
          bottom: '-15px', // Adjust the position from the bottom
          right: '40px', // Adjust the position from the right
          display: 'flex',
          gap: '0.5rem', // Space between arrows
        },
        arrowButton: {
          width: '38px', // Adjust the size of the button
          height: '38px',
          borderRadius: '50%', // Circular shape
         fontSize:'1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        arrowIcon: {
          width: '18px', // Size of the arrow icon
          height: '18px',
          fill: '#FFFFFF', // White color for the icon
          fontSize:'1rem'
          
        },
        viewMoreButton: {
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.1rem',
          letterSpacing: '-0.5px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'black',
          borderImage: 'initial',
          padding: '0.6rem 0.5rem',
          margin: 'auto',
          transition: '0.2s ease-in',
          cursor: 'pointer', // Optional: Add a pointer cursor for better UX
        },
    }
    
    return(
      <div className="bg-white-100 min-h-screen " id="projects">
        
  <div className="container mx-auto p-4 md:p-8 lg:p-12">
  <div className="flex items-center mb-4 ">
      <h3 className="text-lg font-black font-serif mr-4">PROJECTS</h3>
      <div className="flex-1"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4 font-serif italic font-black" style={style.descriptionH1}>CareConnect</h2>
    <p className="text-gray-700 mb-4" style={style.descriptionp}>
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
      <a style={style.live} href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a style={style.source} href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2 ">
    <div style={style.imgcont}>
      <img src={img} alt="Project Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      <div style={style.arrowContainer}>
        <button style={style.arrowButton} className="bg-blue-700"><SlArrowLeft style={style.arrowIcon} /></button>
        <button style={style.arrowButton} className="bg-blue-700"><SlArrowRight style={style.arrowIcon} /></button>
      </div>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 p-[18px] md:p-[2px]">
  <div className="order-2 md:order-1">
    <h2 className="mb-4 font-serif italic font-black" style={style.descriptionH1}>CareConnect</h2>
    <p className="text-gray-700 mb-4" style={style.descriptionp}>
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
      <a style={style.live} href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap">Live Site <HiMiniArrowTopRightOnSquare /></a>
      <a style={style.source} href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="text-white live-site text-nowrap">Source Code <FaGithub /></a>
    </div>
  </div>
  <div className="flex justify-center order-1 md:order-2 ">
    <div style={style.imgcont}>
      <img src={img} alt="Project Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      <div style={style.arrowContainer}>
        <button style={style.arrowButton} className="bg-blue-700"><SlArrowLeft style={style.arrowIcon} /></button>
        <button style={style.arrowButton} className="bg-blue-700"><SlArrowRight style={style.arrowIcon} /></button>
      </div>
    </div>
  </div>
</div>

    <div className="flex items-center justify-center h-full mt-4 py-6">
    <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer" >
    <button className="font-semibold" style={style.viewMoreButton}>View More on Github <HiOutlineArrowUpRight />
    </button>
    </a>

</div>

  </div>
</div>

    )
  }