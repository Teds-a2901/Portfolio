import { useState, useEffect } from "react";
import NavbarButton from "./NavbarButton";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import SideBarButton from "./SidebarButton";
interface NavigationbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navigationbar({
  activeSection,
  setActiveSection,
}: NavigationbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // ✅ Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="relative">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="sm:hidden text-black p-2 focus:outline-none font-semibold z-50 relative"
      >
        {isMobileMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
      </button>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex space-x-8 font-semibold text-gray-400">
        <li>
          <NavbarButton to="/home" activeSection={activeSection}>
            Home
          </NavbarButton>
        </li>
        <li>
          <NavbarButton to="/about" activeSection={activeSection}>
            About
          </NavbarButton>
        </li>
        <li>
          <NavbarButton to="/skill" activeSection={activeSection}>
            Skill
          </NavbarButton>
        </li>
        <li>
          <NavbarButton to="/project" activeSection={activeSection}>
            Projects
          </NavbarButton>
        </li>
      </ul>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-amber-100 shadow-lg z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <ul className="flex flex-col p-6 space-y-6 font-semibold text-gray-700 dark:text-gray-200">
          <li>
            <SideBarButton
              to="/home"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </SideBarButton>
          </li>
          <li>
            <NavbarButton
              to="/about"
              activeSection={activeSection}
              onClick={handleNavClick}
            >
              About
            </NavbarButton>
          </li>
          <li>
            <NavbarButton
              to="/skill"
              activeSection={activeSection}
              onClick={handleNavClick}
            >
              Skill
            </NavbarButton>
          </li>
          <li>
            <NavbarButton
              to="/project"
              activeSection={activeSection}
              onClick={handleNavClick}
            >
              Projects
            </NavbarButton>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white/60 backdrop-blur-md z-30 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navigationbar;
