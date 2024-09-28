/* eslint-disable react/no-unescaped-entities */

import img1 from '../images/image (1).png'
export const  About = () => {
  
    return(
      <section className="" style={style.top}>
   <div className=" min-h-screen ">
   <div className="container mx-auto p-4 md:p-8 lg:p-12">
    <h3 className="text-2xl font-bold mb-4">About Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex justify-center">
          <img 
            src={img1}
            alt="About Me" 
            className="rounded-lg  w-full h-auto object-cover"
          />
        </div>
  
        {/* Column 2: About Me */}
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
            <button className=" bg-blue-600  text-white " style={style.aboutBtn}>
                send me a message
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
    backgroundColor: '#457AD4;',
    color: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(0, 0, 0) 4px 3px',
    fontSize: '1.1rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    padding: '0.3rem 1em',
    borderRadius: '0.3rem',
  },
}