/* eslint-disable react/no-unescaped-entities */

import img1 from '../images/image (1).png'
export const  About = () => {
  
    return(
      <section className="border-t-2 border-black my-4 py-4"  id='about'>
   <div className=" min-h-screen ">
   <div className="container mx-auto p-4 md:p-8 lg:p-12">
    <h3 className="text-lg font-black font-serif font-bold mb-4">ABOUT ME</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-[18px] md:p-[2px]">
        
        <div className="flex justify-center">
          <img 
            src={img1}
            alt="About Me" 
            className="rounded-lg  w-full h-auto object-cover"
          />
        </div>
  
        <div>
       
          <p className="text-gray-700 mb-4 text-base font-gotham tracking-tight leading-6 ">
          Hi there! I'm Ejimnkonye Onyedika, a web developer from Nigeria with 2 years of experience. Although I've been involved in web development for a while,
          my passion truly blossomed when I decided to take it seriously.
          Coding, and playing football manager  fill my days with excitement
          </p>
          <p className="text-gray-700 mb-4">
      
          </p>
          <p className="text-gray-700 text-base font-gotham tracking-tight leading-6 mb-8" >
          Beyond web development, I enjoy watching movies, playing video games, and listening to music
          </p>
          <div className="mt-2">
            <button className="message  font-semibold text-white bg-[#457AD4] border border-black rounded-md py-3 px-4 text-white shadow-md text-base inline-flex items-center mr-4" >
                     <a  href="mailto:ejimnkonyeonyedika@gmail.com" target="_blank">
                     Send me a message
                     </a>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
   
  
    )
  }
