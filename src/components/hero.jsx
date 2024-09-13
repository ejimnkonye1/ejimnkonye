import img from '../assets/background.png'
function HeroSection() {
  return (
    <div className="h-screen bg-blue-700">
        <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My App</h1>
          <p className="text-lg">This is a sample hero section built with Tailwind CSS.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
        <img src={img} className='' />
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
          <a href="#" className="text-sm text-gray-200 hover:text-white transition duration-300 ease-in-out mx-4">
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
  function test () = {
    return(
        <section class="hero">
  <header class="inactive-scrolling">
    <a href="/" class="logo">
      <img src="" alt="website logo "/>
    </a>
    <nav class="">
      <button>
        <img src="/assets/x-icon.082ad8a5.svg" alt="close mobile menu" />
      </button>
      <ul>
        <li>
          <a href="#stack">Tech Stack</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/ejimnkonye1" target="_blank">My Github</a>
        </li>
      </ul>
      <button class="menu-icons">
        <img src="/assets/hamburger-icon.fec3c66a.svg" alt="open mobile menu"/>
      </button>
    </nav>
  </header>
  <div class="hero-inner">
    <p class="sub-heading">Hey, i'm Ejimnkonye-Onyedika. I am a</p>
    <div class="hero-heading">
      <h1>FRONTEND WEB DEVELOPER &amp;</h1>
      <h1>UI DESIGNER</h1>
    </div>
    <p class="hero-intro">Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!</p>
    <div class="hero-ctas">
      <a href="#projects">
        <button>My Projects</button>
      </a>
      <a download="" href="/assets/resume.6054d56e.pdf">
        <button>Resume</button>
      </a>
    </div>
  </div>
  <img src="/assets/background-pattern.5461c0e6.png" class="pattern" />
</section>
    )

  }

  
  export {HeroSection, Navbar};