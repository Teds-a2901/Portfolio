import NavbarButton from "./NavbarButton";

function Navigationbar({ activeSection }: { activeSection: string }) {
  return (
    <nav>
      <ul className="flex space-x-8 font-semibold text-gray-400">
        <li>
          <NavbarButton to="/home" activeSection={activeSection}>
            Home
          </NavbarButton>
        </li>
        <li>
          <NavbarButton to="/about" activeSection={activeSection}>
            about
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
        {/* <li>
          <NavbarButton to="/contact" activeSection={activeSection}>
            Contact
          </NavbarButton>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigationbar;
