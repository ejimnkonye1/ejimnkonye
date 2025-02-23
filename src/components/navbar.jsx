import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the sidebar when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center fixed top-0 p-4 z-40 w-full ${
        scrolled ? "bg-gray-700" : ""
      }`}
    >
      <a
        href="/"
        className={`font-black text-[1.5rem] font-[500] font-clash pl-8 tracking-tight ${
          scrolled ? "text-[#457AD4]" : "text-white"
        }`}
      >
        Billie
        <span className="relative inline-flex size-3 ml-1">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
      </a>

      {/* Hamburger Menu Button */}
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

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-30 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-start p-4 mt-16">
          <li className="w-full mb-4">
            <a
              href="#home"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full hover:bg-gray-700 rounded transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li className="w-full mb-4">
            <a
              href="#stack"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full hover:bg-gray-700 rounded transition-colors duration-200"
            >
              Tech Stack
            </a>
          </li>
          <li className="w-full mb-4">
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full hover:bg-gray-700 rounded transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li className="w-full mb-4">
            <a
              href="#about"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full hover:bg-gray-700 rounded transition-colors duration-200"
            >
              About Me
            </a>
          </li>
          <li className="w-full mb-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full hover:bg-gray-700 rounded transition-colors duration-200"
            >
              Contact Me
            </a>
          </li>
          <li className="w-full mb-4">
            <a
              href="https://github.com/ejimnkonye1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-white text-base font-semibold px-4 py-2 block w-full border-2 border-[#5494FF] hover:bg-[#5494FF] rounded transition-colors duration-200"
            >
              My Github
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center">
          <li>
            <a
              href="#home"
              className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-base font-semibold px-8 py-2 transition-colors duration-200 hover:text-gray-300"
            >
              Contact Me
            </a>
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
  );
};