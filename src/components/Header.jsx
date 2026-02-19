import { NavLink } from "react-router-dom";
import { brand } from "../data/siteData.js";
import siteLogo from "../assets/Detailing images/site logo/manchas wash logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="container nav">
        <NavLink to="/" className="logo">
          <img src={siteLogo} alt={`${brand.name} logo`} className="logo-img" />
          <span>{brand.name}</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost" href={`tel:${brand.phone}`}>
            Call {brand.phone}
          </a>
          <NavLink className="btn btn-primary" to="/booking">
            Book Now
          </NavLink>
        </div>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div className="mobile-menu-panel">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/booking">Book Now</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
