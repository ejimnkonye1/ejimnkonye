/* eslint-disable react/no-unescaped-entities */

import img1 from '../images/image (1).png'
export const  About = () => {
  
    return(
      <section className="" style={style.top} id='about'>
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
       
          <p className="text-gray-700 mb-4" style={style.about}>
          Hi there! I'm Ejimnkonye Onyedika, a web developer from Nigeria with 2 years of experience. Although I've been involved in web development for a while,
          my passion truly blossomed when I decided to take it seriously.
          Coding, and playing football manager  fill my days with excitement
          </p>
          <p className="text-gray-700 mb-4">
      
          </p>
          <p className="text-gray-700" style={style.about}>
          Beyond web development, I enjoy watching movies, playing video games, and listening to music
          </p>
          <div className="mt-2">
            <button className="message bg-blue-600 font-semibold text-white " style={style.aboutBtn}>
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
  const style = {
    top:{
    
        borderTop: '2px solid black',
        margin: '1rem 0',
        padding: '1rem 0',
   
  },
  about: {
    fontSize: '1.2rem',  // Fixed typo from font-siz to fontSize
    fontFamily: 'gotham',
    letterSpacing: '-0.5px',
    lineHeight: '1.4',

    margin: '0 0 2rem',
  },
  aboutBtn: {
    backgroundColor: '#457AD4', 
    border: '1px solid black',
    borderRadius: '0.3rem',
    padding: '0.4rem 1em',
    color: '#fff',
    boxShadow: '3px 3px #000',
    fontSize: '1.1rem',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '0 1rem 0rem 0',
  },
}