import { useRef } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./NavBar.scss";

interface NavLink {
  Text: string;
  href: string;
}
interface Props {
  GoToNavLink: NavLink[];
}

function Navbar({ GoToNavLink }: Props) {
  const navRef = useRef<HTMLDivElement>(null);
  

  const showNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  
  return (
    <section className="NavBar">
      <header>
        <h3><FaReact /></h3>
        <nav ref={navRef}>
            {GoToNavLink.map((NavLink, index) =>(
                <a key={index} href={NavLink.href}>{NavLink.Text}</a>
            ))}
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
          {/* detta är icon för när det är små skärmar */}
        </button>
      </header>
    </section>
  );
}

export default Navbar;
