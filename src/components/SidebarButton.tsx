import { Link, useNavigate } from "react-router-dom";

const NavigationHover =
  "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:text-black";

interface SideBarButtonProps {
  to: string;
  children: React.ReactNode;
  activeSection: string;
  onClick?: () => void; // For closing mobile menu
  setActiveSection?: (section: string) => void; // For updating state instantly
}

function SideBarButton({
  to,
  children,
  activeSection,
  onClick,
  setActiveSection,
}: SideBarButtonProps) {
  const navigate = useNavigate();
  const sectionName = to.replace("/", "") || "home";
  const isActive = activeSection === sectionName;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // ✅ Update URL
    navigate(to, { replace: true });

    // ✅ Scroll to section
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // ✅ Update active section state
    setActiveSection?.(sectionName);

    // ✅ Close sidebar (mobile only)
    onClick?.();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={[
        NavigationHover,
        isActive ? "after:w-full text-black font-semibold" : "text-gray-500",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default SideBarButton;
