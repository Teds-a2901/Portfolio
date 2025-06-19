import { NavLink } from "react-router-dom";

const NavigationHover =
  "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:text-black hover:bor";
interface NavbarButtonProps {
  to: string;
  children: React.ReactNode;
}

function NavbarButton({ to, children }: NavbarButtonProps) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        [
          NavigationHover,
          isActive ? "after:w-full text-black font-semibold" : "text-gray-500 ",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarButton;
