import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ScrollToSection from "../Layout/Layout";

function Main() {
  return (
    <main className="max-w-7xl mx-auto">
      <ScrollToSection />
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default Main;
