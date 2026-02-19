import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
      />
      <section className="section">
        <div className="container">
          <div className="section-title">Page Not Found</div>
          <p className="section-lead">
            This page does not exist. Head back to the homepage or book a
            service.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            <Link className="btn btn-primary" to="/">
              Go Home
            </Link>
            <Link className="btn btn-ghost" to="/booking">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
