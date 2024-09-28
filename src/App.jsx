import { About } from "./components/about";
import { Footer } from "./components/Footer";
import {   Hero } from "./components/hero";
import { Projects } from "./components/project";
import { Stack } from "./components/stack";
import { useState, useEffect } from "react";

const Loader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <div className="text-center">
    <div className="loader" role="status">
</div>
    </div>
  </div>
  
  
  );
  
  const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const delayLoader = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(delayLoader);
    }, []);
  
    return isLoading ? <Loader /> : children;
  };

function App() {
  
  return (
<div>
<Layout>


  <Hero />
 
  <Stack />
  <Projects />
   
  <About/>
  <Footer />
  </Layout>
</div>
  );
}

export default App;