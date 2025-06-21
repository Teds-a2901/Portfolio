import { NavLink } from "react-router-dom";

const NavigationHover =
  "inline-flex items-center justify-center rounded-md h-11 px-6 py-2inline-flex items-center justify-center rounded-md h-11 px-6 py-2 border border-input bg-background hover:bg-amber-100 transition-colors";
interface NavbarButtonProps {
  to: string;
  children: React.ReactNode;
}

function TimelineButton({ to, children }: NavbarButtonProps) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        [NavigationHover, isActive ? " bg-slate-900 text-white" : ""].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default TimelineButton;
