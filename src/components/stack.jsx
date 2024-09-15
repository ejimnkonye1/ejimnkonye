import img1 from '../images/html.svg'
import img2 from '../images/css.svg'
import img3 from '../images/javascript.svg'
import img4 from '../images/tailwindcss.svg'
import img5 from '../images/react.svg'
import img6 from '../images/py.jpeg'
export const Stack = () => {
    return(
      <div className="bg-gray-100 h-auto p-8 " style={{paddingLeft:''}}>
  <div className="container mx-auto ">
    <h2 className="text-2xl font-semibold mb-8" style={{fontFamily:' clashGrotesk'}}>TECH STACK</h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
  {/* Column 1 */}
  <div className="">
    <img 
      src={img1} 
      alt="html" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700 ml-5 font-semibold">Html</p>
  </div>
  
  {/* Column 2 */}
  <div className="">
    <img 
      src={img2}
      alt="css" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700 ml-5 font-semibold">Css</p>
  </div>
  
  {/* Column 3 */}
  <div className="">
    <img 
      src={img3}
      alt="js" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700  ml-2 font-semibold">Javascript</p>
  </div>
  
  {/* Column 4 */}
  <div className="">
    <img 
      src={img4} 
      alt="tailwind" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700  ml-3 font-semibold">Tailwindcss</p>
  </div>
  
  {/* Column 5 */}
  <div className="">
    <img 
      src={img5}
      alt="react" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700  ml-5 font-semibold">ReactJs</p>
  </div>
  
  {/* Column 6 */}
  <div className="">
    <img 
      src={img6}
      alt="py" 
      className="w-20 h-auto object-cover mb-2"
    />
    <p className="text-gray-700  ml-5 font-semibold">Python</p>
  </div>
</div>

  </div>
</div>

    )
  }