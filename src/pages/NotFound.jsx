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
            <a className="btn btn-primary" href="/">
              Go Home
            </a>
            <a className="btn btn-ghost" href="/booking">
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
