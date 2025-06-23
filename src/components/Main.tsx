import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function Main() {
  return (
    <main className="max-w-7xl mx-auto block font-Inter">
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default Main;
