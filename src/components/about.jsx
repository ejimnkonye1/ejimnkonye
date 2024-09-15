
export const  About = () => {
    return(
      <div className=" min-h-screen p-8">
    <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex justify-center">
          <img 
            src="https://via.placeholder.com/400" 
            alt="About Me" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
  
        {/* Column 2: About Me */}
        <div>
       
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum velit eget erat porttitor, sed tempor justo finibus. Fusce sit amet libero eu magna volutpat viverra. 
          </p>
          <p className="text-gray-700 mb-4">
            Vivamus fringilla nisl ac elit pharetra, a sodales justo gravida. Duis sit amet urna in elit tincidunt malesuada. Mauris ultricies ligula non risus fermentum, ut dignissim lectus varius.
          </p>
          <p className="text-gray-700">
            Nam lacinia, libero vitae consequat venenatis, nulla purus sollicitudin augue, at aliquet neque lorem ac ante. In hac habitasse platea dictumst. In euismod ex nec ullamcorper laoreet.
          </p>
          <div className="mt-2">
            <button className="rounded-full bg-blue-600 px-4 py-2 text-white font-semibold ">
                send me a message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    )
  }