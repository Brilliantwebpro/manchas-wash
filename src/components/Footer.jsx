import { NavLink } from "react-router-dom";
import { brand } from "../data/siteData.js";
import siteLogo from "../assets/Detailing images/site logo/manchas wash logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <img src={siteLogo} alt={`${brand.name} logo`} className="logo-img" />
            <span>{brand.name}</span>
          </div>
          <p className="section-lead" style={{ marginTop: 12 }}>
            Local car wash and detailing services with fair pricing, flexible
            scheduling, and dependable results.
          </p>
        </div>
        <div>
          <h4 className="badge">Quick Links</h4>
          <ul className="list" style={{ marginTop: 12 }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Service Menu</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Book Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/locations">Service Areas</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="badge">Contact</h4>
          <ul className="list" style={{ marginTop: 12 }}>
            <li>{brand.address}</li>
            <li>{brand.hours}</li>
            <li>{brand.phone}</li>
            <li>{brand.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="badge">Service Areas</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            {brand.serviceArea.map((area) => (
              <span key={area} className="tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
