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
        <img src={img} style={{width:'100%', height:'300px'}} className='' />
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
          <a href="#home" className="text-sm text-gray-200 hover:text-white transition duration-300 ease-in-out mx-4">
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

function Test() {
    return(
        <section className="hero">
  <header className="inactive-scrolling">
    <a href="/" className="logo">
      <img src="" alt="website logo "/>
    </a>
    <nav className="">
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
      <button className="menu-icons">
        <img src="/assets/hamburger-icon.fec3c66a.svg" alt="open mobile menu"/>
      </button>
    </nav>
  </header>
  <div className="hero-inner">
    <p className="sub-heading">Hey, i'm Ejimnkonye-Onyedika. I am a</p>
    <div className="hero-heading">
      <h1>FRONTEND WEB DEVELOPER &amp;</h1>
      <h1>UI DESIGNER</h1>
    </div>
    <p className="hero-intro">Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!</p>
    <div className="hero-ctas">
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

function About() {
  return(
    <div className="bg-gray-100 min-h-screen p-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Column 1: Image */}
      <div className="flex justify-center">
        <img 
          src="https://via.placeholder.com/400" 
          alt="About Me" 
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Column 2: About Me */}
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum velit eget erat porttitor, sed tempor justo finibus. Fusce sit amet libero eu magna volutpat viverra. 
        </p>
        <p className="text-gray-700 mb-4">
          Vivamus fringilla nisl ac elit pharetra, a sodales justo gravida. Duis sit amet urna in elit tincidunt malesuada. Mauris ultricies ligula non risus fermentum, ut dignissim lectus varius.
        </p>
        <p className="text-gray-700">
          Nam lacinia, libero vitae consequat venenatis, nulla purus sollicitudin augue, at aliquet neque lorem ac ante. In hac habitasse platea dictumst. In euismod ex nec ullamcorper laoreet.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
  function Projects (){
    return(
      <div className="bg-white-100 min-h-screen p-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Column 1: Project Image */}
      <div className="flex justify-center">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Project Image" 
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      
      {/* Column 2: Project Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Name</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. This project is a web-based application that allows users to manage their tasks efficiently. It features an intuitive UI and supports real-time collaboration.
        </p>
        <h3 className="font-semibold mb-2">Tech Stack:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
        </ul>
        
        <div className="flex space-x-4 mt-6">
          <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Live Project
          </a>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
            View Source Code
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

    )
  }

  export {HeroSection, Navbar, Test, About, Projects, };