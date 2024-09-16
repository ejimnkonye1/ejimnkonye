import { About } from "./components/about";
import { Footer } from "./components/Footer";
import { HeroSection,   Test } from "./components/hero";
import { Projects } from "./components/project";
import { Stack } from "./components/stack";

function App() {
  return (
<div>
  <HeroSection/>
  {/* <Test /> */}
  <Stack />
  <Projects />
  
  <About/>
  <Footer />
</div>
  );
}

export default App;