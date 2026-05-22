import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = ({toggleTheme, theme}) => {

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
              <nav className="w-full max-w-2xl border border-white/10 rounded-full bg-black/70 backdrop-blur-md shadow-lg">
                <div className="px-6 h-12 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a className="text-sm font-medium text-white" href="/">Home</a>
                    <a className="text-sm font-medium text-white/50 hover:text-white transition-colors" href="/projects">Projects</a>
                    <a className="text-sm font-medium text-white/50 hover:text-white transition-colors" href="/blog">Blog</a>
                  </div>
                  <button onClick={toggleTheme} className="relative w-10 h-10 rounded-full flex items-center justify-center bg-transparent" aria-label="Toggle theme">
                    {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5 text-gray-400" />}
                  </button>
                </div>
              </nav>
            </div>
  );
};
