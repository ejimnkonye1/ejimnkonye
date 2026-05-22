import { FaCheckCircle, FaEnvelope, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import billie from '../images/billie.png';

export const Hero = () => {
  return (
    <div className="w-full">
      <section className="pt-10 pb-16">
        <div className="flex justify-center mb-10">
          <div className="relative mb-8 cursor-default">
            <div className="relative inline-block text-center w-full">
              <div className="text-9xl font-bold select-none leading-none text-white/40">BLŌSH</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-gray-800">
              {/* Image added here */}
              <img 
                src={billie} 
                alt="Billie JRN"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-1.5 mb-1">
              <h1 className="text-xl font-bold text-white">EJIMNKONYE ONYEDIKA</h1>
              <FaCheckCircle className="w-5 h-5 text-blue-500 fill-white" />
            </div>
            <p className="text-sm text-white/50 mb-4">23 · Billiejrn · Developer · Builder · Football</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/ejimnkonye1" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://x.com/Ejimnkonye" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="mailto:ejimnkonyeonyedika@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a href="https://medium.com/@ejimnkonyeonyedika" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <FaMedium className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-base text-white/70 leading-relaxed">
            Crafting products that matter. Driven by clean code, great design, and lifelong learning. Committed to engineering excellence that creates meaningful experiences
          </p>
        </div>
      </section>
    </div>
  );
};