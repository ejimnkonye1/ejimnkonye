/* eslint-disable react/prop-types */
import { About } from "./components/about";
import { Footer } from "./components/Footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/project";
import { useState, useEffect } from "react";
import TechStack from "./components/tech";

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-dark-900">
    <div className="loader-3d"></div>
    <p className="mt-8 text-sm font-medium tracking-[4px] uppercase gradient-text">
      Loading
    </p>
  </div>
);

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delayLoader = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(delayLoader);
  }, []);

  return isLoading ? <Loader /> : <div className="animate-fade-in">{children}</div>;
};

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Layout>
        <Navbar  />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
