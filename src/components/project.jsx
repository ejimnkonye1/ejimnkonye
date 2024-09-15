import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
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
            padding: '0.9rem 1em',
            color: '#fff',
            boxShadow: '3px 3px #000',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            margin: '0 2rem 1rem 0',
        },
        source: {
            backgroundColor: '#353535', 
            border: '1px solid black',
            borderRadius: '0.3rem', 
            padding: '0.9rem 1em', 
            color: '#fff', 
            boxShadow: '3px 3px #000', 
            fontSize: '0.8rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            margin: '0 2rem 0 0', 
        },
        
    };
    
    return(
      <div className="bg-white-100 min-h-screen p-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <div>
        <h2 className="mb-4" style={style.descriptionH1}>Project Name</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. This project is a web-based application that allows users to manage their tasks efficiently. It features an intuitive UI and supports real-time collaboration.
        </p>
        
        <ul className="flex space-x-4 p-2 ">
  <li className="bg-gray-300 px-4 py-2 rounded-md text-gray-700">React</li>
  <li className="bg-gray-300 px-4 py-2 rounded-md text-gray-700">Node.js</li>
  <li className="bg-gray-300 px-4 py-2 rounded-md text-gray-700">MongoDB</li>
  <li className="bg-gray-300 px-4 py-2 rounded-md text-gray-700">Tailwind CSS</li>
</ul>

        
        <div className="flex space-x-4 mt-6">
          <a style={style.live} href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className=" text-white ">
            Live Site <HiMiniArrowTopRightOnSquare />

          </a>
          <a style={style.source} href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className=" text-white ">
            Source Code <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Project Image" 
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
    <div className="flex items-center justify-center h-full mt-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">View More on GitHub</button>
</div>

  </div>
</div>

    )
  }