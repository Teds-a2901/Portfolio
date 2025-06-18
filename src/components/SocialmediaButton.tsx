import { Link } from "react-router-dom";

const SocialMedialButtonDesign =
  "p-3 rounded-full text-muted-foreground hover:bg-amber-100 transition-colors";

interface SocialMedialButtonDesignProps {
  to: string;
  children: React.ReactNode;
}

function SocialmediaButton({ to, children }: SocialMedialButtonDesignProps) {
  return (
    <Link to={to} className={SocialMedialButtonDesign} target="_blank">
      {children}
    </Link>
  );
}

export default SocialmediaButton;
