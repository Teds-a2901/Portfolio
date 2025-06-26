import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import ScrollToSection from "../Layout/Layout";
function Applayout() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div>
      <ScrollToSection setActiveSection={setActiveSection} />
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Main />
    </div>
  );
}

export default Applayout;
