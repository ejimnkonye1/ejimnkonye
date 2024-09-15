import { Footer } from "./components/Footer";
import { About, HeroSection, Projects,  Test } from "./components/hero";
import { Stack } from "./components/stack";

function App() {
  return (
<div>
  <HeroSection/>
  {/* <Test /> */}
  <Stack />
  <Projects />
  <About />
  <Footer />
</div>
  );
}

export default App;