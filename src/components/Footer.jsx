import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
export const  Footer = () => {
    return(
      <footer className="bg-black h-full p-4" style={{fontFamily:' clashGrotesk'}}>
    
    <div className="container mx-auto p-4">
    <h5 className="uppercase text-lg mb-2 text-white font-semibold  ml-10" style={{fontSize:'1.5rem',}}>CONTACT ME</h5>
    <ul className="space-y-4 p-8">
  <li className="flex items-center space-x-4">
    <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center">
    
      <TbMailFilled className="text-white w-6 h-6" />
    </div>
    <div className="flex items-center space-x-2">
      <span className="underline cursor-pointer text-white text-2xl font-clashGrotesk  font-semibold">
        Send me an email
      </span>
      <MdArrowOutward className="text-white text-2xl" />
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor:'#222222', }}>
      <FaGithub className="text-white w-6 h-6" />
    </div>
    <div className="flex items-center space-x-2">
      <span className="underline cursor-pointer text-white text-2xl font-clashGrotesk font-semibold " >
        Checkout my github
      </span>
      <MdArrowOutward className="text-white text-2xl" />
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
      <FaLinkedin className="text-white w-6 h-6" />
    </div>
    <div className="flex items-center space-x-2">
      <span className="underline cursor-pointer text-white text-2xl font-clashGrotesk font-semibold">
        Message me on linkedin
      </span>
      <MdArrowOutward className="text-white text-2xl" />
    </div>
  </li>
</ul>

  
     
      <p className="text-gray-600 text-center">© Designed and built by Ejimnkonye Onyedika.</p>
    </div>
  </footer>
  
    )
  }

  