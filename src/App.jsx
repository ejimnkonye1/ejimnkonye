import { Footer } from "./components/Footer";
import { About, HeroSection, Projects, Stack, Test } from "./components/hero";

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