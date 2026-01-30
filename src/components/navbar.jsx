import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="relative group">
          <span className="text-2xl font-bold tracking-tight font-clash">
            <span className="gradient-text">Billie</span>
          </span>
          <span className="absolute -right-3 top-0 size-2 rounded-full bg-accent-purple animate-pulse"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeSection === link.href.slice(1)
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <span className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"></span>
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
          <a
            href="https://github.com/ejimnkonye1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg border border-accent-purple/50 hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <MdOutlineCancel className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 z-[9999] right-0 h-full w-72 bg-dark-800/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-out border-l border-white/5 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col pt-20 px-6">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">
            Navigation
          </p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-3 px-4 text-base font-medium rounded-lg mb-1 transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-white bg-white/5 border-l-2 border-accent-purple"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 pt-6 border-t border-white/5">
            <a
              href="https://github.com/ejimnkonye1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-3 py-3 px-4 text-white rounded-lg border border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-200"
            >
              <FaGithub className="text-xl" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
