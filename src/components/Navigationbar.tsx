import NavbarButton from "./NavbarButton";

function Navigationbar() {
  return (
    <nav>
      <ul className="flex space-x-8 font-semibold text-gray-400">
        <li>
          <NavbarButton to="/home">Home</NavbarButton>
        </li>
        <li>
          <NavbarButton to="/about">about</NavbarButton>
        </li>
        <li>
          <NavbarButton to="/skill">Skill</NavbarButton>
        </li>
        <li>
          <NavbarButton to="/project">Projects</NavbarButton>
        </li>
        <li>
          <NavbarButton to="/contact">Contact</NavbarButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navigationbar;
