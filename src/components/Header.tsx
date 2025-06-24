import Navigationbar from "./Navigationbar";
import Logo from "./Logo";
import { useEffect, useState } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this to trigger earlier/later
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className=" fixed top-0 left-0 w-full bg-amber-100 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Logo />
        <Navigationbar activeSection={activeSection} />
      </div>
    </header>
  );
}

export default Header;
