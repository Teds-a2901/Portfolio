import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToSection;
