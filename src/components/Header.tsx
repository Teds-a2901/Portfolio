import Navigationbar from "./Navigationbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full bg-amber-100 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Logo />
        <Navigationbar />
      </div>
    </header>
  );
}

export default Header;
