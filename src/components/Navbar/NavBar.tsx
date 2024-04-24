import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importera Link från react-router-dom
import "./NavBar.scss";
import { GrWorkshop } from "react-icons/gr";

interface NavLink {
  Text: string;
  Path: string;
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
        <h3 className="logo"><GrWorkshop /></h3>
        <nav ref={navRef}>
          {GoToNavLink.map((navLink, index) => (
            <Link key={index} to={navLink.Path}> { /* Använd Link istället för a */ }
              {navLink.Text}
            </Link>
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
