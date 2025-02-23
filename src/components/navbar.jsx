import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState,  } from 'react';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
     setMenuOpen(prevState => !prevState);
      console.log('Menu is open:', menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <header className={`flex justify-between items-center fixed top-0 p-4 z-40  w-full ${scrolled? 'bg-gray-700 ':''}`}>
        <a href="/" className={`font-black text-[1.5rem] font-[500] font-clash  pl-8 tracking-tight ${scrolled?'text-[#457AD4]':'text-white'}`}>
            Billie
            <span className="relative inline-flex size-3 ml-1">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
  </span>
        </a>
        <nav className="flex items-center z-10">
            <button 
                className="block lg:hidden bg-transparent border-none cursor-pointer z-30" 
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <MdOutlineCancel className="text-white text-2xl" />
                ) : (
                    <RxHamburgerMenu className="text-white text-2xl" />
                )}
            </button>
    
            <ul 
                className={`flex-col lg:flex-row items-center m-2 p-2 transition-all duration-300 
                    ${menuOpen ? 'flex absolute top-0 left-0 w-full bg-[#457AD4] p-4 flex-col items-center z-20' : 'hidden lg:flex'} 
                    lg:static lg:bg-transparent`}
                    
            >
                         <li className={`${menuOpen ? 'mb-2' : ''}`}>
  <a
    href="#home"
    className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 h relative group"
  >
    Home
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
  </a>
</li>
         <li className={`${menuOpen ? 'mb-2' : ''}`}>
  <a
    href="#stack"
    className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 h relative group"
  >
    Tech Stack
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
  </a>
</li>
<li className={`${menuOpen ? 'mb-2' : ''}`}>
  <a
    href="#projects"
    className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200  relative group"
  >
    Projects
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
  </a>
</li>
<li className={`${menuOpen ? 'mb-3' : ''}`}>
  <a
    href="#about"
    className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200  relative group"
  >
    About Me
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
  </a>
</li>
                <li className={`${menuOpen ? 'mb-3' : ''}`}>
  <a
    href="#contact"
    className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200  relative group"
  >
    Contact Me
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
  </a>
</li>
                <li className={`${menuOpen? 'mb-3':''}`}>
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
    )
}