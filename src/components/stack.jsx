import img1 from '../images/html.svg'
import img2 from '../images/css.svg'
import img3 from '../images/javascript.svg'
import img4 from '../images/tailwindcss.svg'
import img5 from '../images/react.svg'
import img6 from '../images/py.jpeg'
import 'aos/dist/aos.css';

export const Stack = () => {


    return(
<div className="bg-gray-100 h-auto p-4 md:p-5 lg:p-3" id='stack' >
  <div className="container mx-auto">
    <div className="flex items-center mb-4 md:ml-8">
      <h2 className="text-1xl font-semibold mr-4">TECH STACK</h2>
      <div className="flex-1"></div>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12">
  {/* Column 1 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img1} 
      alt="html" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">Html</p>
  </div>
  
  {/* Column 2 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img2}
      alt="css" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">Css</p>
  </div>
  
  {/* Column 3 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img3}
      alt="js" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">Javascript</p>
  </div>
  
  {/* Column 4 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img4} 
      alt="tailwind" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">Tailwindcss</p>
  </div>
  
  {/* Column 5 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img5}
      alt="react" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">ReactJs</p>
  </div>
  
  {/* Column 6 */}
  <div className="flex flex-col items-center p-4">
    <img 
      src={img6}
      alt="py" 
      className="h-20 w-20 object-cover mb-2"
    />
    <p className="text-gray-700 font-semibold">Python</p>
  </div>
</div>

  </div>
</div>
    )
  }