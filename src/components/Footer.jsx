import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
export const  Footer = () => {
    return(
      <footer className="bg-black h-full"  id="contact">
            <div className="container mx-auto p-4 md:p-8 lg:p-12">
                <h5 className="uppercase text-lg mb-2 text-white font-black font-serif text-2xl">CONTACT ME</h5>
                <ul className="space-y-4 p-2 md:p-2 lg:p-2 text-lg md:text-2xl sm:text-base">
                    <li className="flex items-center space-x-4 text-sm lg:text-2xl text-base">
                        <div className="cir-img lg:w-14 md:h-14 w-12 h-12  bg-green-700 rounded-full flex items-center justify-center">
                            <TbMailFilled className="text-white w-6 h-6" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem]  lg:text-2xl">
                                <a href="mailto:ejimnkonyeonyedika@gmail.com" target="_blank" rel="noopener noreferrer">Send me an email</a>
                            </span>
                            <MdArrowOutward className="text-white text-2xl" />
                        </div>
                    </li>

                    <li className="flex items-center space-x-4">
                        <div className="cir-img lg:w-14 md:h-14 w-12 h-12 rounded-full flex items-center justify-center bg-[#222222]">
                            <FaGithub className="text-white w-6 h-6" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem] lg:text-2xl">
                                <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer">Checkout my GitHub</a>
                            </span>
                            <MdArrowOutward className="text-white text-2xl" />
                        </div>
                    </li>
                    <li className="flex items-center space-x-4">
                        <div className="cir-img lg:w-14 md:h-14 w-12 h-12 rounded-full flex items-center justify-center bg-blue-700">
                        <FaLinkedin className="text-white w-6 h-6" />
                        </div>
                        <div className="flex items-center ">
                            <span className="foot-link underline cursor-pointer text-white font-clash font-semibold text-[1rem] lg:text-2xl">
                                <a href="https://www.linkedin.com/in/ejimnkonye-onyedika" target="_blank" rel="noopener noreferrer">Message me on LinkedIn</a>
                            </span>
                            <MdArrowOutward className="text-white text-2xl" />
                        </div>
                    </li>
                </ul>

                <p className="text-gray-600 text-center py-5">© Designed and built by Ejimnkonye Onyedika.</p>
            </div>
        </footer>
  
    )
  }

  