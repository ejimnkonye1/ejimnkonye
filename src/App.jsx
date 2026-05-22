/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

import Portfolio from "./components/test";

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
         <Portfolio/>
     
      </Layout>
    // </div>
  );
}

export default App;
