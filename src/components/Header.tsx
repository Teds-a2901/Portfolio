import Navigationbar from "./Navigationbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" bg-amber-100 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <Logo />
        <Navigationbar />
      </div>
    </header>
  );
}

export default Header;
