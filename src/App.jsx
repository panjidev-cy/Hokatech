import Navigation from "./layouts/Naviagtion";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Quotes from "./layouts/Quotes";
import Skill from "./layouts/Skill";
import Footer from "./layouts/Footer";
function App() {
  return (
    <>
      <Navigation />
      <main className="px-20 md:px-10 mt-8">
        <Hero />
        <About />
        <Quotes />
      </main>
      <Skill />
      <Footer />
    </>
  );
}

export default App;
