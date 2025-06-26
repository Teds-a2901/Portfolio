import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToSectionProps {
  setActiveSection: (section: string) => void;
}

const ScrollToSection = ({ setActiveSection }: ScrollToSectionProps) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveSection(path);
  }, [location, setActiveSection]);

  return null;
};

export default ScrollToSection;
